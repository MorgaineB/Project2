from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import static.ScrapedRandomRollerCoaster

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/randomcoasterDB")

@app.route("/")
def home():
    coasterz = mongo.db.coasterz.find_one()
    return render_template("index.html", random_data=coasterz)

@app.route("/scrape")
def scrape():
    random_data = static.ScrapedRandomRollerCoaster.scrape()
    mongo.db.coasterz.update({}, random_data, upsert=True)
    
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)