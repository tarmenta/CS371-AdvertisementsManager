from flask import jsonify, make_response
from flask_restful import Resource
from flask_restful import reqparse
import app


parser = reqparse.RequestParser()
parser.add_argument('username', help = 'Username cannot be blank', required = True)
parser.add_argument('password', help = 'Password cannot be blank', required = True)

class Authentication(Resource):
    def get(self):
        try:
            
            return make_response(jsonify(results), 200)
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

            if advertisement is None:
                return make_response('Error: advertisement not found', 404)

            app.db.session.delete(user)
            app.db.session.commit()
            return make_response('Success: User deleted', 200)
        except Exception as e: 
            return make_response("Error: " + str(e), 500)

class UserLogin(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            login_user = app.AuthenticationModel.query.filter_by(user_id=args['user_id']).first()

            if not login_user:
                return {"error":"User not in DB. Register as a new user"}

            if login_user.user_password == user_password:
                return {
                    
                }
