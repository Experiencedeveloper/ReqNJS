#!/usr/bin/env node

const { program } = require('commander');
const reqnjs = require('./index');

program
    .version('1.0.0')
    .description('ReqNJS: Command Line Interface for making HTTP requests');

program
    .command('get <url>')
    .description('Make a GET request')
    .action((url) => {
        reqnjs.get(url, (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program
    .command('post <url> <data>')
    .description('Make a POST request')
    .action((url, data) => {
        reqnjs.post(url, JSON.parse(data), (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program
    .command('put <url> <data>')
    .description('Make a PUT request')
    .action((url, data) => {
        reqnjs.put(url, JSON.parse(data), (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program
    .command('delete <url> <data>')
    .description('Make a DELETE request')
    .action((url, data) => {
        reqnjs.del(url, JSON.parse(data), (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program
    .command('patch <url> <data>')
    .description('Make a PATCH request')
    .action((url, data) => {
        reqnjs.patch(url, JSON.parse(data), (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program
    .command('head <url>')
    .description('Make a HEAD request')
    .action((url) => {
        reqnjs.head(url, (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program
    .command('connect <url>')
    .description('Make a CONNECT request')
    .action((url) => {
        reqnjs.connect(url, (error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response);
            }
        });
    });

program.parse(process.argv);
