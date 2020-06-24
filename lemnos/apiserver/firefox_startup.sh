#!/bin/sh

sleep 10

gunicorn --workers=5 -b 192.168.2.8:5000 start:app &

sleep 10

firefox http://192.168.2.8:5000/forecast_gr & # one can use any url

sleep 10

WID=`xdotool search "Mozilla Firefox" | head -1`
xdotool windowactivate $WID
xdotool key F11
