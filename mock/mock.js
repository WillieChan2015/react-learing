const Mock = require('mockjs');

let Random = Mock.Random;

// Mock.mock('/api/user', {
//     'name': '@cname',
//     'intro': '@word(20)'
//     // 'name': 'Jack',
//     // 'intro': 'I am a student'
// });

module.exports = function() {
    let data = {};
    data.user = {
        'name': Random.cname(),
        'intro': Random.word(20),
    };

    return data;
};