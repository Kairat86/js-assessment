exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

    count: function (start, end) {

        var counter = {
            startCounting: function () {
                var i = start;
                console.log(i);
                interval = setInterval(function () {
                    console.log(++i);
                    if (i == end) {
                        clearInterval(interval);
                    }
                }, 100);
            },

            cancel: function () {
                clearInterval(interval);
            }
        };

        counter.startCounting(start, end);
        return counter;
    }
};
