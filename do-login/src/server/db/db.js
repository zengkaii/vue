const mongoose = require('mogoose');
const config = require('config-lite');
mongoose.connect(config.mongodb, {
    useMongoClient:true
});
mongoose.Promise = global.promise;
var db = mongoose.connecttion;
db.once('open', function() {
    console.log('mongodb 启动成功')
})