from flask import jsonify, make_response
from flask_restful import Resource
from flask_restful import reqparse
import app




class Authentication(Resource):
    def get(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('user_id', type=str )
           
            args = parser.parse_args()
            if app.AuthenticationModel.query.filter_by(user_id=args['user_id']).first() :
                return make_response("Error: User exists")        


        except Exception as e:
            return {'Message': 'Error: ' + str(e)}, 500

    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('user_id', type=str )
            parser.add_argument('user_first_name', type=str )
            parser.add_argument('user_last_name', type=str )
            parser.add_argument('user_password', type=str )
           
            args = parser.parse_args()

            new_user = app.AuthenticationModel(user_id=args['user_id'], user_first_name=args['user_first_name'], user_last_name=args['user_last_name'], 
                user_password=args['user_password'])

            app.db.session.add(new_user)
            app.db.session.commit()
            return make_response('Success: User created', 200)
        except Exception as e:
            return make_response("Error: " + str(e), 500)

    def delete(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('user_id', type=str )
            args = parser.parse_args()

            user = app.AuthenticationModel.query.filter_by(user_id=args['user_id']).first()

            if user is None:
                return make_response('Error: user not found', 404)

            app.db.session.delete(user)
            app.db.session.commit()
            return make_response('Success: User deleted', 200)
        except Exception as e: 
            return make_response("Error: " + str(e), 500)

class UserLogin(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('login_user', type=str )
            parser.add_argument('login_password', type=str )
           
            args = parser.parse_args()

            current_user = app.AuthenticationModel.query.filter_by(user_id=args['login_user']).first()

            if not current_user:
                return {"error":"User not in DB. Register as a new user"}

            if current_user.user_password == login_password:
                return make_response('Success: User logged in', 200)

        except Exception as e:
            return make_response("Error " + str(e) , 500)
