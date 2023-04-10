import os

# USE ISSO
SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')

# OU ISSO, FICA DE SUA ESCOLHA
"""SQLALCHEMY_DATABASE_URI = \
    '{SGBD}://{usuario}:{senha}@{servidor}/{database}'.format(
        SGBD = 'postgresql',
        usuario = 'usuario do banco de dados',
        senha = 'senha da data base',
        servidor = 'localhost',
        database = 'nome da data base'
    )"""