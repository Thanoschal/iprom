#!/bin/sh

sleep 15

gunicorn --workers=5 --chdir /home/pi/Desktop/iprom/lemnos/apiserver -b localhost:5000 start:app

