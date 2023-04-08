from flask import request
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
        service.send_data(form)
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
def get_user():
    user_data = service.get_data()
    records = [z.to_json() for z in user_data]
    return records, 200

    """return [
    {
      "key": "1",
      "id": 1,
      "tipoDePessoa": "Fisica",
      "nomeRazaoSocial": "Thulaaaaio Freires Maia",
      "identificacao": "1313",
      "endereco": "New York No. 1 Lake Park"
    },
    {
      "key": "2",
      "id": 2,
      "tipoDePessoa": "Juridica",
      "nomeRazaoSocial": "Jamel Pereira Chaves Eirelli",
      "identificacao": "091002280400152",
      "endereco": "Rua copacaíba, n 14"
    }
  ]"""


@app.route('/update', methods=['PUT'])
def update_user():
    pass


@app.route('/delete', methods=['DELETE'])
def delete_user():
    pass
