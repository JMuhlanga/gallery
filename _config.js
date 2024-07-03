var config = {}

config.mongoURI = {
    production: 'mongodb+srv://muhlangakupeka:testPass1@jmcluster.zw7dylm.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://muhlangakupeka:testPass1@jmcluster.zw7dylm.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://muhlangakupeka:testPass1@jmcluster.zw7dylm.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
