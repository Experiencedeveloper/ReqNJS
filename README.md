# ReqNJS

ReqNJS is a simple and user-friendly command line interface (CLI) for making HTTP requests in Node.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [GET Request](#get-request)
  - [POST Request](#post-request)
  - [PUT Request](#put-request)
  - [DELETE Request](#delete-request)
  - [PATCH Request](#patch-request)
  - [HEAD Request](#head-request)
  - [CONNECT Request](#connect-request)
- [License](#license)

## Installation

[![install size](https://packagephobia.com/badge?p=reqnjs@1.0.1)](https://packagephobia.com/result?p=reqnjs@1.0.1)

To install the ReqNJS package, you need to have Node.js and npm installed on your system. You can install ReqNJS globally using npm:

```bash
npm install -g reqnjs
```

## Usage

After installing ReqNJS, you can use it to make various types of HTTP requests from the command line.

### GET Request

```bash
reqnjs get <url>
```

Example:

```bash
reqnjs get http://example.com
```

Example with UUID:

```bash
reqnjs get http://example.com/resource/123e4567-e89b-12d3-a456-426614174000
```

### POST Request

```bash
reqnjs post <url> <data>
```

Example:

```bash
reqnjs post http://example.com '{"key":"value"}'
```

Example with UUID:

```bash
reqnjs post http://example.com/resource/123e4567-e89b-12d3-a456-426614174000 '{"key":"value"}'
```

### PUT Request

```bash
reqnjs put <url> <data>
```

Example:

```bash
reqnjs put http://example.com '{"key":"updatedValue"}'
```

Example with UUID:

```bash
reqnjs put http://example.com/resource/123e4567-e89b-12d3-a456-426614174000 '{"key":"updatedValue"}'
```

### DELETE Request

```bash
reqnjs delete <url> <data>
```

Example:

```bash
reqnjs delete http://example.com '{"key":"valueToDelete"}'
```

Example with UUID:

```bash
reqnjs delete http://example.com/resource/123e4567-e89b-12d3-a456-426614174000 '{"key":"valueToDelete"}'
```

### PATCH Request

```bash
reqnjs patch <url> <data>
```

Example:

```bash
reqnjs patch http://example.com '{"key":"partialUpdateValue"}'
```

Example with UUID:

```bash
reqnjs patch http://example.com/resource/123e4567-e89b-12d3-a456-426614174000 '{"key":"partialUpdateValue"}'
```

### HEAD Request

```bash
reqnjs head <url>
```

Example:

```bash
reqnjs head http://example.com
```

Example with UUID:

```bash
reqnjs head http://example.com/resource/123e4567-e89b-12d3-a456-426614174000
```

### CONNECT Request

```bash
reqnjs connect <url>
```

Example:

```bash
reqnjs connect http://example.com
```

## License

This project is licensed under the MIT License.
