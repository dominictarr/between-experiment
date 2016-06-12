
run () {

  echo run $1

  rm data/*

  node random -J $1 -N 1000 --bisecting > data/bisecting
  node random -J $1 -N 1000 > data/between
  node random -J $1 -N 1000 --lex > data/lexiographic

  pushd data

  ../node_modules/.bin/dat-table * --join \
  | line-graph --width 800 --height 400 --title "average characters per edit, with $1 chance of insert"

  popd

}

run 0.5 > graphs/J_5.png
run 0.1 > graphs/J_1.png
run 0.05 > graphs/J_05.png
run 0.01 > graphs/J_01.png

echo compare
node compare.js | line-graph \
  --width 800 --height 400 --title "characters per edit as a function of J" \
> graphs/compare.png
