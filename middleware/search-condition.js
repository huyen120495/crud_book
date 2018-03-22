const AdvanceSearchCondition   = require('../app/search-services/advance-search-condition');
const KeywordSearchCondition   = require('../app/search-services/keyword-search-condition');

module.exports = (request, response, next) => {
    request.condition = makeCondition(request);
    next();
};

function makeCondition(request) {
    if(request.path === '/search-advance') {
        return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
    } else if (request.path === '/search-basic'){
        return new KeywordSearchCondition(request.query.keyword);
    } 
}
