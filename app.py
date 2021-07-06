from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import ScrapedRandomRollerCoaster

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/randomcoasterDB")

@app.route("/")
def home():
    random_coaster = mongo.db.random_coaster.find_one()
    random_data = ScrapedRandomRollerCoaster.scrape()
    mongo.db.random_coaster.update({}, random_data, upsert=True)
    return render_template("index.html", random_data=random_coaster)

if __name__ == "__main__":
    app.run(debug=True)