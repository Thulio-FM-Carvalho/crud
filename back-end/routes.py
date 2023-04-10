from flask import request, jsonify
from pydantic import ValidationError
from app import app
from service import Service
from flask_cors import cross_origin
from models import UserForm

service = Service()


# rota responsavel por receber os dados a partir da requisição POST em formato JSON e adiciona um novo usuário no banco de dados
@app.route('/add', methods=['POST'])
@cross_origin()
def add_user():
    # obtendo os dados recebidos
    data = request.get_json()

    try:
        # instanciando a classe UseForm passando os valores recebidos
        form = UserForm(**data)

        # chamando função responsável por criar um usuario no banco de dados passando os dados recebidos como parametro
        service.send_user_data(form)
    except ValidationError as e:
        return {
                   'title': 'Erro de validação',
                   'details': e.errors()
               }, 400
    except Exception as er:
        return {
                   'title': "Erro interno no servidor",
                   'content': "Por favor, tente novamente."
               }, 500
    return "", 201


# rota responsavel por buscar todos os usuários no banco de dados
@app.route('/users', methods=['GET'])
@cross_origin()
def get_users():
    # chamando função responsável por buscar todos os usuarios do banco de dados
    user_data = service.get_users_data()

    # se user_data == None for True, significa que os usuarios não foram encontrados no banco de dados
    # se user_data == False for False, significa que os usuarios foram encontrados no banco de dados e retorna os usuarios
    if user_data == None:
        return "Não foi possível encontrar os usuários solicitados", 404
    else:
        records = [z.to_json() for z in user_data]
        return records, 200


# rota responsável por receber um ID a partir da requisição GET e buscar o usuário
@app.route('/user/<int:id>', methods=['GET'])
@cross_origin()
def get_user(id):
    # chamando função responsável por buscar o usuário no banco de dados passandro o ID como parametro
    user = service.get_user_data(id)

    # se user == None for True, significa que o usuario não foi encontrado no banco de dados
    # se user == False for False, significa que o usuario foi encontrado no banco de dados e retorna o usuario
    if user == None:
        return "Não foi possível encontrar o usuário solicitado.", 404
    else:
        records = user.to_json()
        return records, 200


# rota responsavel por receber os novos dados a partir da requisição PUT em formato JSON e atualizar os dados do usuário
@app.route('/update/<int:id>', methods=['PUT'])
@cross_origin()
def update_user(id):
    # obtendo os dados recebidos
    data = request.get_json()
    tipo_de_pessoa = data['tipoDePessoa']
    nome_razao_social = data['nomeRazaoSocial']
    identificacao = data['identificacao']
    endereco = data['endereco']
    bairro = data['bairro']
    cidade = data['cidade']
    cep = data['cep']
    estado = data['estado']
    telefone = data['telefone']

    # chamando função responsável por atualizar os dados no banco de dados e passando os dados recebidos como parametro
    result = service.update_user_data(id, tipo_de_pessoa, nome_razao_social, identificacao, endereco, bairro, cidade,
                                      cep,
                                      estado, telefone)

    # se result = True, signiffica que a atualização no banco de dados foi bem sucedida
    # se result = False significa que a atualização no banco de dados não foi bem sucedida
    if result:
        return "", 204
    else:
        return {"title": "Não foi possível atualizar os dados do usuário."}, 404


# rota responsável por receber um ID a partir da requisição DELETE e remover o usuário
@app.route('/user/<int:user_id>', methods=['DELETE'])
@cross_origin()
def delete_user(user_id):
    # chamando função responsável por remover o usuário no banco de dados e passandro o ID como parametro
    result = service.del_user_data(user_id)

    # se result = True, signiffica que a remoção do usuário no banco de dados foi bem sucedida
    # se result = False significa que a remoção do usuário no banco de dados não foi bem sucedida
    if result:
        return "", 204
    else:
        return {"title": "Não foi possível remover o usuário com o ID fornecido. Verifique se o ID está correto e tente novamente."}, 404


# rota responsável por receber um parametro "identificacao" da requisição GET e checar se existe um usuario
@app.route('/user', methods=['GET'])
@cross_origin()
def get_existing_user():
    # pega o parametro de requisição
    identificacao = request.args.get('identificacao')

    # chamando função responsável por checar se existe o usuario no banco de dados passando a identificacao como parametro
    result = service.check_existing_user(identificacao)

    # retornando um objeto contendo o valor de result(True ou False)
    return jsonify({'existePessoa': result})
