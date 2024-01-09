#!/bin/bash

ROOTDIR="/home/txuyuan/Dev/webProjects/isyf24"
DIGESTFILE="$ROOTDIR/public/documents.txt"

update () {
  echo "========== ISYF24 Website Update Script - $(date) =========="

  DAY=-1
  date "+%Y-%m-%d:%H"
  case $(date "+%Y-%m-%d:%H") in 
    "2024-01-07:12") # D0, arbitrary time convenient to me at the time 
      DAY=0
      ;;
    "2024-01-08:18") #D1 6PM
      DAY=1
      ;;
    "2024-01-10:06") # D3 6AM
      DAY=3
      ;;
    "2024-01-11:06") #D4 6AM
      DAY=4
      ;;
    "2024-01-12:06") #D5 6AM
      DAY=5
      ;;
    "2024-01-08:09")
      DAY=1
      ;;
    *)
      echo "Unrecognised Day"
      return
      ;;
  esac
  echo "Day $DAY"

  cd $ROOTDIR 
  git checkout main

  cat $ROOTDIR/documentUpdate/digests/"$DAY".txt | tee $DIGESTFILE
 
  git add .
  git commit -a -m "schedule(documents): updated - $(date)" 
  git push origin main
}

update | tee -a $ROOTDIR/documentUpdate/logs/$(date +%F).log
