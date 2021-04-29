function findYoungerPerson(date1, date2) {
  const person1Birthday = new Date(date1);
  const person2Birthday = new Date(date2);

  if (person2Birthday.getTime() < person1Birthday.getTime()) {
    return date1;
  }
  return date2;
}

module.exports = findYoungerPerson;
