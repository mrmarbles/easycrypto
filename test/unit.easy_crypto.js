var cryptoFactory = require('../lib/easy_crypto');

module.exports = {

  setUp: function(callback) {
    this.crypto = cryptoFactory.getInstance();
    callback();
  },

  "Test should encrypt and decrypt sensitive information": function(test) {

    var encrypted = this.crypto.encrypt('hello world', 'password');
    test.ok('hello world' !== encrypted);

    var decrypted = this.crypto.decrypt(encrypted, 'password');
    test.ok('hello world' === decrypted);

    test.done();

  },

  "Test should fail decryption with incorrect password": function(test) {

    var encrypted = this.crypto.encrypt('hello world', 'password');
    test.ok('hello world' !== encrypted);

    var failed = true;

    try {
      var decrypted = this.crypto.decrypt(encrypted, 'invalidpassword');
      test.ok('hello world' === decrypted);
    } catch (e) {
      failed = false;
    }

    if (failed === true) {
      test.fail('Decryption did not fail as expected.');
    }

    test.done();

  }

};