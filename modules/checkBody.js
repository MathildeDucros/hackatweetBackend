function checkBody(body, keys) {
  let isValid = true;

  for (const field of keys) {
<<<<<<< HEAD
    if (!body[field] || body[field] === "") {
=======
    if (!body[field] || body[field] === '') {
>>>>>>> cam-backend
      isValid = false;
    }
  }

  return isValid;
}

module.exports = { checkBody };
