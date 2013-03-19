var crypto = require('crypto'),
  algorithm;

var EasyCrypto = function(config) {
  algorithm = config.algorithm || 'aes-256-cbc';
};

/**
 * Encrypts the provided string value using the
 * password param to derive an internal cipher.
 * Returns the encrypted value.
 *
 * @param str
 * @param pwd
 * @return {*}
 */
EasyCrypto.prototype.encrypt = function(str, pwd) {

  var cipher = crypto.createCipher(algorithm, pwd),
    encrypted = cipher.update(str, 'utf8', 'hex');

  encrypted += cipher.final('hex');

  return encrypted;
};

/**
 * Accepts a previously encrypted value and
 * attempts to decrypt that value with the
 * provided password.  If the given password
 * is different than the one used to encrypt
 * the original string, then a decryption
 * error will be thrown.
 *
 * @param str
 * @param pwd
 * @return {*}
 */
EasyCrypto.prototype.decrypt = function(str, pwd) {

  var decipher = crypto.createDecipher(algorithm, pwd),
    decrypted = decipher.update(str, 'hex', 'utf8');

  decrypted += decipher.final('utf8');

  return decrypted;
};

exports.getInstance = function(config) {
  return new EasyCrypto(config || {});
};