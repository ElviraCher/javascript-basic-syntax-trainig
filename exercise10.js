function getResultFromMatchingStringWithRegexp(str) {
  const date = /[1-3]\d?[/-]\d{2}[/-]\d{2,4}/g;
  const phoneNumber = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  const emailAddress = /[\da-z]+@[\da-z]+\.[a-z]+/;
  let result = "Unexpected data";

  if (str.match(date)) {
    result = "It is date";
  } else if (str.match(phoneNumber)) {
    result = "It is phone number";
  } else if (str.match(emailAddress)) {
    result = "It is email address";
  }
  return result;
}

module.exports = getResultFromMatchingStringWithRegexp;
