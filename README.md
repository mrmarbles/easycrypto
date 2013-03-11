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
The MIT License

Copyright (c) 2011 Brian Carr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

