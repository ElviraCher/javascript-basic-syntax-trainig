function getDayOfWeek (input) {
    let date = new Date(`${input[6]}${input[7]}${input[8]}${input[9]}-${input[3]}${input[4]}-${input[0]}${input[1]}`);
    let dayOfWeek = date.getDay();
    switch (dayOfWeek) {
        case 0:
            return('Sunday');
        case 1:
            return('Monday');
        case 2:
            return('Tuesday');
        case 3:
            return('Wednesday');
        case 4:
            return('Thursday');
        case 5:
            return('Friday');
        case 6:
            return ('Saturday');
    }
}

module.exports = getDayOfWeek;
