#!/bin/sh

firefox http://localhost/abc.html & # one can use any url
sleep 7
WID=`xdotool search "Mozilla Firefox" | head -1`
xdotool windowactivate $WID
xdotool key F11
