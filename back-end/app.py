from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)
CORS(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True)
