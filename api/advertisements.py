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