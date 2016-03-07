
rm data/*

node random -J $1 -N 1000 --bisecting > data/bisecting
node random -J $1 -N 1000 > data/between
node random -J $1 -N 1000 --lex > data/lexiographic

cd data

../node_modules/.bin/dat-table * --join \
| line-graph --width 800 --height 400 --title "average characters per edit, with $1 chance of insert"

