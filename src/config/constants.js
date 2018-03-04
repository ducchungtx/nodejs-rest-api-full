const devConfig = {
    MONGO_URL: 'mongodb://admin:123@ds153948.mlab.com:53948/nodejs-rest-api-full',
    JWT_SECRET: 'thisisascret'
};
const testConfig = {
    MONGO_URL: 'mongodb://admin:123@ds153948.mlab.com:53948/nodejs-rest-api-full',
    JWT_SECRET: 'thisisascret'
};
const prodConfig = {
    MONGO_URL: 'mongodb://admin:123@ds153948.mlab.com:53948/nodejs-rest-api-full',
    JWT_SECRET: 'thisisascret'
};
const defaultConfig = {
    PORT: process.env.PORT || 3000
};

function evnConfig(evn) {
    switch(evn) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...evnConfig(process.env.NODE_DEV)
}