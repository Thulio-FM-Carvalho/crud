from flask import request, jsonify
from pydantic import ValidationError
from app import app
from service import Service
from flask_cors import cross_origin
from models import UserForm
import requests

service = Service()


@app.route('/add', methods=['POST'])
@cross_origin()
def add_user():
    data = request.get_json()
    print(data)
    try:
        form = UserForm(**data)
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


@app.route('/users', methods=['GET'])
@cross_origin()
def get_users():
    user_data = service.get_users_data()
    records = [z.to_json() for z in user_data]
    return records, 200


@app.route('/user/<int:id>', methods=['GET'])
@cross_origin()
def get_user(id):
    user = service.get_user_data(id)
    records = user.to_json()
    print(records)
    return records


@app.route('/update/<int:id>', methods=['PUT'])
@cross_origin()
def update_user(id):
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

    service.update_user_data(id, tipo_de_pessoa, nome_razao_social, identificacao, endereco, bairro, cidade, cep,
                             estado, telefone)

    return "", 200


@app.route('/user/<int:user_id>', methods=['DELETE'])
@cross_origin()
def delete_user(user_id):
    bool = service.del_user_data(user_id)

    if bool:
        return "", 204
    else:
        return "", 404


@app.route('/user', methods=['GET'])
@cross_origin()
def get_existing_user():
    identificacao = request.args.get('identificacao')
    result = service.check_existing_user(identificacao)
    print(result)

    return jsonify({'existePessoa': result})


