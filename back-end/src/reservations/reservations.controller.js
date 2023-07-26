/**
 * List handler for reservation resources
 */
async function list(req, res) {
  res.json({
    data: [],
  });
}

async function create(req, res, next) {
  //take in the reservation data
  //remember data aka store in database
  //send back sucess; true
}

module.exports = {
  list,
  create,
};
