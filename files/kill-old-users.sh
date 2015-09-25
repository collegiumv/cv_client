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
		sudo -u  $PERSON awk -F " " '$1=="fiberlamp"{if($0 !~ /delay/){sub($2, $2" -delay 0")}if($0 !~ /count/){sub($4,$4" -count 500" )}{sub($6,int($6*.8))}}{print $0}' /home/$PERSON/.xscreensaver | sudo -u $PERSON tee /home/$PERSON/.xscreen
		sudo -u $PERSON mv /home/$PERSON/.xscreen /home/$PERSON/.xscreensaver
		pkill -KILL -u $PERSON
	fi
fi
