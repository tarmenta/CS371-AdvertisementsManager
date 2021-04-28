from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS
import os

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://' + os.getenv("MYSQL_DATABASE_USER") + ':' + os.getenv(
    "MYSQL_DATABASE_PASSWORD") + '@' + os.getenv("MYSQL_DATABASE_HOST") + '/advertisement_manager'
db = SQLAlchemy(app)
db.Model.metadata.reflect(bind=db.engine,schema="advertisement_manager")

CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})

class AdvertisementsModel(db.Model):
    __table__ = db.Model.metadata.tables['advertisement_manager' + '.advertisements']

class UserRegistrationModel(db.Model):
    __table__ = db.Model.metadata.tables['advertisement_manager' + '.users']


from advertisements import Advertisements
import authentication

api.add_resource(Advertisements, '/advertisements')
api.add_resource(authentication.Authentication, '/authentication')
api.add_resource(authentication.UserLogin, '/user')


