import datetime
import json
import csv
import hashlib
import mysql.connector

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

print ("Connection is successful!")
print ("Inserting the values...")
#read the tab delimited csv
#and insert into the database
with open('lemnos_data.csv') as csvfile:
    rows = csv.DictReader(csvfile, delimiter='\t')
    for r in rows:
        name_gr = r['name_gr']
        name_eng = r['name_eng']
        distance = r['distance']
        unit_gr = r['unit_gr']
        unit_eng = r['unit_eng']
        location_gr = r['location_gr']
        location_eng = r['location_eng']
        orientation = r['orientation']
        description_gr = r['description_gr']
        description_eng = r['description_eng']
        
        ins_query = "INSERT INTO beaches (name_gr, name_eng, distance, unit_gr, unit_eng, location_gr, location_eng, orientation, description_gr, description_eng) VALUES (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s)"
        values = (name_gr, name_eng, distance, unit_gr, unit_eng, location_gr, location_eng, orientation, description_gr, description_eng)
        cursor.execute(ins_query, values)
        


conn.commit()

print ("Values inserted successfuly!")

cursor.close()

conn.close()
