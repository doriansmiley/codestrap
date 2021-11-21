const publish = require('../index').publish;

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        //data,
        publish,
    };
}


