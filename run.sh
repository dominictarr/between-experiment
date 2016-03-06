
node random -J $1 -N 1000 --bisecting > bisecting
node random -J $1 -N 1000 > between

./node_modules/.bin/dat-table bisecting between --join \
| line-graph --width 800 --height 400 --title "average characters per edit, with $1 chance of insert"

