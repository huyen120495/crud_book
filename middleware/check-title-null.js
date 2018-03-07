module.exports = function(request, response, next) {
    if (!request.body.title) return response.status(400).send({message : "title must not null"});
    next();
}
