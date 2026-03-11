
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ---------------- DATABASE MODEL ----------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# ---------------- ROUTES ----------------
@app.route("/")
def home():
    return jsonify({"message": "CK's Lunch Box Backend Running"})

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    user = User(email=data["email"], password=data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User created successfully"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(
        email=data["email"],
        password=data["password"]
    ).first()

    if user:
        return jsonify({"message": "Login successful"})
    return jsonify({"message": "Invalid credentials"}), 401


# ---------------- CREATE DB & RUN SERVER ----------------
if __name__ == "__main__":
    print("BACKEND STARTED")

    # ✅ Flask 3 compatible way
    with app.app_context():
        db.create_all()

    app.run(debug=True)
