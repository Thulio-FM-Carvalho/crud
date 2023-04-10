from app import db
from pydantic import BaseModel


class User(db.Model):
    __tablename__ = 'users'
    codigo = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tipo_de_pessoa = db.Column(db.String(50), nullable=False)
    nome_razao_social = db.Column(db.String(40), nullable=False)
    identificacao = db.Column(db.String(20), nullable=False)
    endereco = db.Column(db.String(20), nullable=False)
    bairro = db.Column(db.String(20), nullable=False)
    cidade = db.Column(db.String(20), nullable=False)
    cep = db.Column(db.String(20), nullable=False)
    estado = db.Column(db.String(20), nullable=False)
    telefone = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return '<tipo_de_pessoa %r>' % self.tipoDePessoa

    def to_json(self):
        return {
            "codigo": self.codigo,
            "tipo_de_pessoa": self.tipo_de_pessoa,
            "nome_razao_social": self.nome_razao_social,
            "identificacao": self.identificacao,
            "endereco": self.endereco,
            "bairro": self.bairro,
            "cidade": self.cidade,
            "cep": self.cep,
            "estado": self.estado,
            "telefone": self.telefone
        }


class UserForm(BaseModel):
    codigo: str = None
    tipo_de_pessoa: str
    nome_razao_social: str
    identificacao: str
    endereco: str
    bairro: str
    cidade: str
    cep: str
    estado: str
    telefone: str
