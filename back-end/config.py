import os

SECRET_KEY = 'alura'
#fazendo a conexão com o banco de
SQLALCHEMY_DATABASE_URI = "postgresql://postgres:root@localhost:5432/crud"
"""SQLALCHEMY_DATABASE_URI = \
    '{SGBD}://{usuario}:{senha}@{servidor}/{database}'.format(
        SGBD = 'postgresql',
        usuario = 'root',
        senha = '',
        servidor = 'localhost',
        database = 'crud'
    )"""
#postgresql://user_managment_system_postgres_user:I6K0IsdFY3sEaagU7jNFk8OL8Ld2yA1q@dpg-cftvqa94reb6ks21gtmg-a.oregon-postgres.render.com/user_managment_system_postgres