const findYoungerPerson = require('./exercise8.3');

const birthdays = [
    ['1984.03.19', '1983.05.22', '1984.03.19'],
    ['1994.12.29', '2002.03.01', '2002.03.01'],
    ['1963.02.18', '1989.10.25', '1989.10.25'],
    ['1994.12.29', '1989.10.25', '1994.12.29']
];

birthdays.forEach(([birth1, birth2, result]) => {
    it(`person, whom birthday is ${result} younger than another one`,() => {
        expect(findYoungerPerson(birth1, birth2)).toEqual(result);
    });
});
