const pwd = require('./pwd.js');
const ls = require('./ls.js')

process.stdout.write('\nprompt > ');

process.stdin.on('data', data => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') pwd();
    if (cmd === 'ls') ls();
});
