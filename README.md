# between-experiment

perform experiments to evaluate the performance of CRDT editing
librarys.

## experiment

simulate the editing of a text, perform N edits to an array.
normally, inserting another token immediately after the preceding
token, but jumping to another position with probabilty J.

[between](https://github.com/dominictarr/between)
and [bisecting-between](https://github.com/noffle/bisecting-between)
are compared.

## results

![J=0.5, N=1000](./graphs/J_5.png)
`between` performs better when there is a high probability of an insert

![J=0.1, N=1000](./graphs/J_1.png)

With 10% jumps, the better algorithm becomes bisecting.
Running this test multiple times sometimes produces a different result.

![J=0.05, N=1000](./graphs/J_05.png)

after the chance of jump gets lower, `bisecting-between` becomes clearly more efficient.

![J=0.01, N=1000](./graphs/J_01.png)

## comparing the inflection point

experiment to find the performance of between vs bisect as a function of J.
from J=0.5 to 0.01 perform 1000 random inserts. run each trial 20 times,
and calculate stdev.

![J=(0.01-0.5) for bisect and between](./graphs/compare.png)

This shows the mean performance for between cross bisect at about 
7.5% (used % here, due to limitations of graph generating library)

between is significantly more efficient to the right of that point,
but curves upwards dramatically when J get lower.


## future work

study the uncertainty in the inflection point by showing bounds in the graph
(value+-stdev) and see where that overlaps.

Maybe rerun the experiments with deterministic randoness so that
the algorithms can be compared across the same set of edits.

## License

MIT



