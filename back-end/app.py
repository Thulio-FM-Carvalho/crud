from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
#db = SQLAlchemy(app)
cors = CORS(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True)
