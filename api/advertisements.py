from flask import jsonify, make_response
from flask_restful import Resource
from flask_restful import reqparse
import app


class Advertisements(Resource):
    def get(self):
        try:
            rows = app.AdvertisementsModel.query.all()
            results = []
            for r in rows:
                result = {}
                for c in app.AdvertisementsModel.__table__.columns:
                    result[c.name] = getattr(r, c.name)
                results.append(result)
            return make_response(jsonify(results), 200)
        except Exception as e:
            return {'Message': 'Error: ' + str(e)}, 500

    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('advertisement_id', type=int )
            parser.add_argument('advertisement_title', type=str )
            parser.add_argument('advertisement_details',
                                type=str )
            parser.add_argument('advertisement_date', type=str )
            parser.add_argument('price', type=float )
            parser.add_argument('user_id', type=str )
            parser.add_argument('moderator_id', type=str )
            parser.add_argument('category_id', type=str )
            parser.add_argument('status_id', type=str )
            args = parser.parse_args()

            new_advertisement = app.AdvertisementsModel(advertisement_id=args['advertisement_id'], advertisement_title=args['advertisement_title'], advertisement_details=args['advertisement_details'], 
                advertisement_date=args['advertisement_date'], price=args['price'], user_id=args['user_id'], moderator_id=args['moderator_id'], category_id=args['category_id'], status_id=args['status_id'])

            app.db.session.add(new_advertisement)
            app.db.session.commit()
            return make_response(jsonify({'Success: Advertisement created'}), 200)
        except Exception as e:
            return make_response("Error: " + str(e), 500)

    def delete(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('advertisement_id', type=int )
            args = parser.parse_args()

            advertisement = app.AdvertisementsModel.query.filter_by(advertisement_id=args['advertisement_id']).first()

            if advertisement is None:
                return make_response('Error: advertisement not found', 404)

            app.db.session.delete(advertisement)
            app.db.session.commit()
            return make_response('Success: Advertisement deleted', 200)
        except Exception as e: 
            return make_response("Error: " + str(e), 500)
