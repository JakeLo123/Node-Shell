module.exports = function () {
    process.stdin.on('data', (data) => {
        process.stdout.write(process.cwd());
    });
    process.stdout.write('\nprompt > ');
}

