exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

    count: function (start, end) {
        var counter = {

            stop: false,

            startCounting: function () {
                var i = start;
                console.log(i);
                var interval = setInterval(function () {
                    console.log(++i);
                    if (i == end | stop) {
                        clearInterval(interval);
                    }
                }, 100);
            },

            cancel: function () {
                stop = true;
            }
        };

        counter.startCounting(start, end);
        return counter;
    }
};
