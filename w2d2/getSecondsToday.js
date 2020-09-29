"use strict";


/**
 * @returns {number} how many seconds have passed since the beginning of the day.
 */
function getSecondsToday() {
    let date = new Date();
    return date.getSeconds() + date.getHours()*3600 + date.getMinutes()*60;
}

console.log(getSecondsToday());