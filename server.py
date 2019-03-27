from flask import Flask, jsonify, request, render_template


app = Flask(__name__, template_folder='templates', static_url_path='/static', static_folder='templates',)


@app.route('/', methods=['GET', ])
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST', ])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == 'test' and password == 'test':
        return jsonify({'detail': 'success'}), 200
    return jsonify({'detail': 'Wrong username or password'}), 400

