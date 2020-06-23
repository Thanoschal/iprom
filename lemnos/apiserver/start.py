from flask import Flask


app = Flask(__name__)

from endpoints import forecast_gr
from endpoints import forecast_eng
from endpoints import beaches


if __name__ == '__main__':
    app.run()
