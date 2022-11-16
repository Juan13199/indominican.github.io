const { defineConfig } = require('@vue/cli-service')
// const fs = require('fs')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/indominican.github.io/'
    : '/',

  /*    devServer: {
      https: {
        https:true,
        key:  fs.readFileSync('./certs/Lets_Encrypt_rd.eisi.cc.pem'),
        cert: fs.readFileSync('./certs/Lets_Encrypt_rd.eisi.cc.pem'),
        public: 'https://localhost:8080/'
      },
     
  } */ 
    
}
