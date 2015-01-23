module.exports = function (mbytes, interval) {
    interval = interval || 500;
    setInterval(function () {
        if ((process.memoryUsage()['rss'] / 1024 / 1024) > mbytes) {
            process.exit(0);
        }
    }, interval);
};