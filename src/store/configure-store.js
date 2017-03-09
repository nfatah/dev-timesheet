

if(process.env.NODE_ENV === 'production'){
  module.exports = require('./configure-store.prod');//Dynamic imports aren't supported in ES6, so use require
}else{
  module.exports = require('./configure-store.dev');
}