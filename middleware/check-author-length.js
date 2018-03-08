module.exports = function(request, response, next) {
    if (request.body.author.length > 100) return response.status(400).send({message : "author < 100"});
    next();
};
