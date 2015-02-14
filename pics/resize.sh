#! /bin/bash

for img in `ls | grep -v thumb.png`; do 

BASE=$(basename $img .png);

convert $img -resize 10% $BASE\_thumb.png;  #underscore needs to be escaped with backslash

done
