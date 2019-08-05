const pwd = require('./pwd.js')
const ls = require('./ls.js')

function writePrompt () {
    process.stdout.write('\nprompt > ');
}

writePrompt();
process.stdin.on('data', data => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') pwd();
    if (cmd === 'ls') ls();
})
