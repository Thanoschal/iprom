#!/bin/sh

sleep 25

chromium-browser http://localhost & # one can use any url

sleep 12

WID=`xdotool search "Chromium" | head -1`
xdotool windowactivate $WID
xdotool key F11
