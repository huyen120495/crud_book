module.exports = function(request, response, next) {
    if (!request.body.author) return response.status(400).send({message : "author must not null"});
    next();
};
