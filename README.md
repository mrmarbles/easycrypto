[![Build Status](https://travis-ci.org/mrmarbles/easycrypto.png)](https://travis-ci.org/mrmarbles/easycrypto)

easycrypto
==========

Bare-bones Nodejs crypto module abstraction providing a very simple and unsophisticated encryption API.

Installation
---------------
     npm install easycrypto

Use
---------------
    var easycrypto = require('easycrypto').getInstance();

    var encrypted = easycrypto.encrypt('hello world', 'some random password');

    var decrypt = easycrypto.decrypt(encrypted, 'some random password');

Algorithms
---------------
Defaults to `aes-256-cbc` however will support other OpenSSL algorithms your specific platform supports (per Nodes crypto documentation).

    var easycrypto = require('easycrypto').getInstance({
      algorithm: 'aes128'
    });

Testing
---------------
    npm test

License
-------
[MIT License](http://mrmarbles.mit-license.org/ "Mit License")

