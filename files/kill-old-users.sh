#!/bin/sh

export DISPLAY=":0.0"
PERSON=$(who | grep " :0" | cut -d" " -f 1)
XSCREENTIME=$(sudo -u $PERSON xscreensaver-command --time | grep locked | sed "s/^.*since //")
KILLSECONDS=2700		#Seconds before we kill the user.  2700 seconds = 45 minutes
if [ "$XSCREENTIME" ]; then
	NOW=$(date '+%s')
	XSCREENDATE=$(date -d "$XSCREENTIME" +%s)
	LOCKEDTIME=$((NOW - XSCREENDATE))
	if [ "$LOCKEDTIME" -ge "$KILLSECONDS" ]; then
		pkill -KILL -u $PERSON
	fi
fi
