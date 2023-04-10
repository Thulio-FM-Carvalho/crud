from app import db
from models import User


class Service:

    # função responsável por criar um usuario no banco de dados passando os dados recebidos como parametro
    def send_user_data(self, form_data):
        tipoDePessoa = form_data.tipoDePessoa
        nomeRazaoSocial = form_data.nomeRazaoSocial
        identificacao = form_data.identificacao
        endereco = form_data.endereco
        bairro = form_data.bairro
        cidade = form_data.cidade
        cep = form_data.cep
        estado = form_data.estado
        telefone = form_data.telefone

        # removendo mascara do telefone
        telefone_sem_mascara = telefone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")

        # executando a query de criação de um novo usuario passando os dados como parametro
        new_user = User(tipoDePessoa=tipoDePessoa, nomeRazaoSocial=nomeRazaoSocial, identificacao=identificacao,
                        endereco=endereco, bairro=bairro, cidade=cidade, cep=cep, estado=estado,
                        telefone=telefone_sem_mascara)

        # salvando as alterações
        db.session.add(new_user)
        db.session.commit()

    # função responsável por buscar todos os usuarios no banco de dados
    def get_users_data(self):
        user = User.query.all()
        # se user == None for True, significa que não foi encontrado nehum usuário com o ID passado
        # se user == None for False, significa que foi encontrado o usuário com o ID passado e faz o retorno
        if user == None:
            return user
        else:
            return user

    # função responsável por fazer a busca de um usuário no banco de dados através do ID
    def get_user_data(self, user_id):
        user = User.query.filter_by(codigo=user_id).first()

        # se user == None for True, significa que não foi encontrado nehum usuário com o ID passado
        # se user == None for False, significa que foi encontrado o usuário com o ID passado e faz o retorno
        if user == None:
            return user
        else:
            return user

    # função reponsável por atualizar os dados do usuário no banco de dados através do ID
    def update_user_data(self, id, tipo_de_pessoa, nome_razao_social, identificacao, endereco, bairro, cidade, cep,
                         estado, telefone):

        # removendo mascara do telefone
        telefone_sem_mascara = telefone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")

        # executando a query de atualização dos dados passando os novos valores
        user = User.query.filter_by(codigo=id).update(
            dict(tipoDePessoa=tipo_de_pessoa, nomeRazaoSocial=nome_razao_social, identificacao=identificacao,
                 endereco=endereco, bairro=bairro, cidade=cidade, cep=cep, estado=estado,
                 telefone=telefone_sem_mascara))

        # se user = 0 significa que o usuário não foi atualizado no banco de dados
        # se user = 1 significa que o usuário foi atualizado no banco de dados
        if user == 0:
            return False
        else:
            db.session.commit()
            return True

    # função responsável por remover um usuário do banco de dados através do ID
    def del_user_data(self, user_id):
        # executando a query de remoção de um usuário passando o ID
        result = User.query.filter_by(codigo=user_id).delete()

        # se user = 0 significa que o usuário não foi removido no banco de dados
        # se user = 1 significa que o usuário foi removido no banco de dados
        if result == 0:
            return False
        else:
            db.session.commit()
            return True

    # função responsável por verificar se existe um usuário no banco de dados através da identificacao(CPF/CNPJ)
    def check_existing_user(self, identificacao):
        # executando a query de consulta de um usuário passando a identificacao
        result = User.query.filter_by(identificacao=identificacao).first()

        # se result == None for False, significa que não foi encontrado nehum usuário com a identificacao passada e faz o retorno
        # se result == None for True, significa que foi encontrado o usuário com a identificacao passada e faz o retorno
        if result == None:
            return False
        else:
            return True