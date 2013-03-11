var crypto = require('crypto');

var EasyCrypto = function(config) {
  this.algorithm = config.algorithm || 'aes-256-cbc';
};

EasyCrypto.prototype.encrypt = function(str, pwd) {

  var cipher = crypto.createCipher(this.algorithm, pwd),
    encrypted = cipher.update(str, 'utf8', 'hex');

  encrypted += cipher.final('hex');

  return encrypted;
};

EasyCrypto.prototype.decrypt = function(str, pwd) {

  var decipher = crypto.createDecipher(this.algorithm, pwd),
    decrypted = decipher.update(str, 'hex', 'utf8');

  decrypted += decipher.final('utf8');

  return decrypted;
};

exports.getInstance = function(config) {
  return new EasyCrypto(config || {});
};