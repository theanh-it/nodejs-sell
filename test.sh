#!/usr/bin/expect
#echo "123123" | sudo -S -k service nginx reload

file="/home/nta/Desktop/theanh"
echo "Adding first line" > $file
echo "Adding first line replaced" > $file
echo "Appending second line " >> $file
echo "Appending third line" >> $file
cat $file