from app import app, db
from models import User


class Service:

    def send_data(self, form_data):

        tipoDePessoa = form_data.tipoDePessoa
        nomeRazaoSocial = form_data.nomeRazaoSocial
        identificacao = form_data.identificacao
        endereco = form_data.endereco
        bairro = form_data.bairro
        cidade = form_data.cidade
        cep = form_data.cep
        estado = form_data.estado
        telefone = form_data.telefone
        print(tipoDePessoa)
        user = User.query.filter_by(identificacao=identificacao)


        new_user = User(tipoDePessoa=tipoDePessoa, nomeRazaoSocial=nomeRazaoSocial, identificacao=identificacao, endereco=endereco, bairro= bairro, cidade= cidade, cep= cep, estado= estado, telefone= telefone)
        db.session.add(new_user)
        db.session.commit()

    def get_data(self):
        user = User.query.all()
        return user

    def update_data(self):
        pass

    def del_data(self):
        pass
