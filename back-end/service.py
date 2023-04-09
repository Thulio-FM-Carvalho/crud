from app import app, db
from models import User


class Service:

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

        new_user = User(tipoDePessoa=tipoDePessoa, nomeRazaoSocial=nomeRazaoSocial, identificacao=identificacao,
                        endereco=endereco, bairro=bairro, cidade=cidade, cep=cep, estado=estado, telefone=telefone)

        db.session.add(new_user)
        db.session.commit()

    def get_users_data(self):
        user = User.query.all()
        return user

    def get_user_data(self, user_id):
        user = User.query.filter_by(codigo=user_id).first()
        #print(user)
        return user

    def update_user_data(self, id, tipo_de_pessoa, nome_razao_social, identificacao, endereco, bairro, cidade, cep, estado, telefone):
        user = User.query.filter_by(codigo=id).update(dict(tipoDePessoa=tipo_de_pessoa, nomeRazaoSocial=nome_razao_social, identificacao=identificacao, endereco=endereco, bairro=bairro, cidade=cidade, cep=cep, estado=estado, telefone=telefone))
        db.session.commit()

    def del_user_data(self, user_id):
        result = User.query.filter_by(codigo=user_id).delete()
        if result == 0:
            print("Não existe nenhum jogo com este ID no banco de dados.")
            return False
        else:
            db.session.commit()
            return True

    def check_existing_user(self, identificacao):
        result = User.query.filter_by(identificacao=identificacao).first()
        if result:
            return True
        else:
            return False


