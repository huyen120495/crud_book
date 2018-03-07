module.exports = function(request, response, next) {
    if (request.body.title.length > 40) {
	return response.status(400).send({message : "title < 40"});
    }
    next();
}
