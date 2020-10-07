/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    minutes += interval;
    if (minutes > 59){
        hours += Math.floor(minutes/60);
        minutes %= 60;
    }
    if (hours > 23) {
        hours %= 24;
    }
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');
};
