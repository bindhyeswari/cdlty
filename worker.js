function calculateProbability() {
    var start = new Date();
    var repeats = 0;
    var repeat = false;

// generate array
    for (var j = 0, len = 500000; j < len; j++) {
        var arr = [];
        repeat = false;
        for (var i = 0; i < 20; i++) {
            var num =  Math.round( Math.random() * 100 );
            if (arr.indexOf(num) !== -1) {
                repeat = true;
                break;
            } else {
                arr.push(num);
            }
        }
        if (repeat) repeats++;
    }
    var end = new Date();
    return {
        probability: repeats / 500000,
        time: (end - start)
    };

// update repeats else unique
}



this.postMessage(calculateProbability());