from start import app
import json
import requests
import mysql.connector
from functions import *

#endpoints
#returns the weather forecast in json format greek
@app.route('/forecast_gr')
def forecast_gr():
    
    json_final = ""
    
    try:
        url = "http://api.openweathermap.org/data/2.5/forecast?lat=39.9142&lon=25.2266&units=metric&appid=6f7bc0ea27da33c6bb4decaa26bdaa71&lang=el"

        response = requests.request("GET", url)
        
        data = json.loads(response.text)
        
        
        for d in data['list']:
            d['wind']['speed'] = speedtobf(int(d['wind']['speed']))
            d['wind']['deg'] = degreestocompass_gr(int(d['wind']['deg']))
        
        json_final = json.dumps(data)
    
    except:
        json_final = "{ \"message\": \"Error\" }"
        
        return json_final , 503
          
    return json_final , 200

#returns the weather forecast in json format greek
@app.route('/forecast_eng')
def forecast_eng():

    json_final = ""
    
    try:
    
        url = "http://api.openweathermap.org/data/2.5/forecast?lat=39.9142&lon=25.2266&units=metric&appid=6f7bc0ea27da33c6bb4decaa26bdaa71"

        response = requests.request("GET", url)
        
        data = json.loads(response.text)
        
        for d in data['list']:
            d['wind']['speed'] = speedtobf(int(d['wind']['speed']))
            d['wind']['deg'] = degreestocompass_eng(int(d['wind']['deg']))
        
        json_final = json.dumps(data)
        
    except:
        json_final = "{ \"message\": \"Error\" }"
        
        return json_final , 503
        
    return json_final , 200

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
