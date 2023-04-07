from app import app


@app.route('/add', methods=['POST'])
def add_user():
    pass


@app.route('/users', methods=['GET'])
def get_user():
    return [
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
  ]


@app.route('/update', methods=['PUT'])
def update_user():
    pass


@app.route('/delete', methods=['DELETE'])
def delete_user():
    pass