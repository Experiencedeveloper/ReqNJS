const http = require('http');
const https = require('https');
const urlModule = require('url');

const request = (method, url, data, callback) => {
    const parsedUrl = urlModule.parse(url);
    const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.path,
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    const req = protocol.request(options, (response) => {
        let responseData = '';

        response.on('data', (chunk) => {
            responseData += chunk;
        });

        response.on('end', () => {
            callback(null, responseData);
        });
    });

    req.on('error', (err) => {
        callback(err.message, null);
    });

    if (data) {
        req.write(JSON.stringify(data));
    }

    req.end();
};

const get = (url, callback) => request('GET', url, null, callback);
const post = (url, data, callback) => request('POST', url, data, callback);
const put = (url, data, callback) => request('PUT', url, data, callback);
const del = (url, data, callback) => request('DELETE', url, data, callback);
const patch = (url, data, callback) => request('PATCH', url, data, callback);
const head = (url, callback) => request('HEAD', url, null, callback);
const connect = (url, callback) => request('CONNECT', url, null, callback);

module.exports = { get, post, put, del, patch, head, connect };
