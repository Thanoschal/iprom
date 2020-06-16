from flask import Flask
import json
import requests
import mysql.connector

app = Flask(__name__)

#conversion from degrees to compass direction
def degreestocompass(deg):
    if deg < 45:
        return "North"
    elif deg < 90:
        return "East"
    elif deg < 135:
        return "East"
    elif deg < 180:
        return "South"
    elif deg < 225:
        return "South"
    elif deg < 270:
        return "West"
    elif deg < 315:
        return "West"
    elif deg <= 360:
        return "North"
    else:
        return "Undefined"

#conversion from m/s to bf
def speedtobf(speed):
    if speed <= 0.3:
        return 0
    elif speed <= 1.5:
        return 1
    elif speed <= 3.3:
        return 2
    elif speed <= 6:
        return 3
    elif speed <= 8:
        return 4
    elif speed <= 11:
        return 5
    elif speed <= 14:
        return 6
    elif speed <= 17:
        return 7
    elif speed <= 21:
        return 8
    elif speed <= 25:
        return 9
    elif speed <= 29:
        return 10
    elif speed <= 33:
        return 11
    else:
        return 12


#endpoints
#returns the weather forecast in json format
@app.route('/forecast')
def forecast():

    url = "http://api.openweathermap.org/data/2.5/forecast?q=Athens&units=metric&appid=6f7bc0ea27da33c6bb4decaa26bdaa71&lang=el"

    response = requests.request("GET", url)
    
    data = json.loads(response.text)
    
    for d in data['list']:
        d['wind']['speed'] = speedtobf(int(d['wind']['speed']))
        d['wind']['deg'] = degreestocompass(int(d['wind']['deg']))
    
    json_final = json.dumps(data)
    
    return json_final

#returns the weather forecast in json format
@app.route('/beaches')
def beaches():
    #open the config file
    with open('./config.json') as json_data_file:
        data = json.load(json_data_file)

    #connect to sql
    conn = mysql.connector.connect(
        host=data['mysql']['host'],
        user=data['mysql']['user'],
        passwd=data['mysql']['passwd'],
        database=data['mysql']['db'],
        port=data['mysql']['port'],
        pool_size=int(data['mysql']['pool_size'])

    )


    cursor = conn.cursor(dictionary=True)

    sel_query = "SELECT * FROM beaches"

    cursor.execute(sel_query)
    
    res = cursor.fetchall()
    
    cursor.close()
    
    conn.close()
    
    res_json = json.dumps(res)
    
    return res_json

if __name__ == '__main__':
    app.run()
