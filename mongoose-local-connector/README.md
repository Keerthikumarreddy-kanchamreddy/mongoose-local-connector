# mongoose-local-connector

A lightweight utility to quickly connect to a MongoDB database using Mongoose. Ideal for local development setups or small projects.

## Features

- Simplifies connecting to MongoDB with Mongoose.
- Supports custom configurations and environment variables.
- Provides a utility to check the connection status.

---

## Installation

Install the package via npm:

```bash
npm install mongoose-local-connector

```

## Usage

### Basic Example

Here's a minimal setup to connect to your local MongoDB instance:

```bash
const { connectToMongoDB, getConnectionStatus } = require('mongoose-local-connector');

connectUsingMongoose = async()=>{
try{
    await connectToMongoDB({
      dbName: 'myDatabase', // Name of the database
      host: '127.0.0.1',    // MongoDB host (default: 127.0.0.1)
      port: 27017           // MongoDB port (default: 27017)
    });
    console.log('Connection Status:', getConnectionStatus()); // 'connected'
}catch(err){
    console.log(err)
}}
```

### Using Environment Variables

You can configure your MongoDB connection using a .env file:

#### 1-Create a .env file in your project directory:

```bash
MONGO_HOST=127.0.0.1
MONGO_PORT=27017
MONGO_DB_NAME=myDatabase
```

#### 2-Call connectToMongoDB() without arguments:

```bash
const { connectToMongoDB, getConnectionStatus } = require('mongoose-local-connector');

connectUsingMongoose = async()=>{
try{
    await connectToMongoDB();
    console.log('Connection Status:', getConnectionStatus()); // 'connected'
}catch(err){
    console.log(err)
}}
```

### Connection Status

You can check the current status of the MongoDB connection using getConnectionStatus():

```bash
const { getConnectionStatus } = require('mongoose-local-connector');

const status = getConnectionStatus();
console.log('Current Connection Status:', status); // Possible values: 'disconnected', 'connected', 'connecting', 'disconnecting'
```

| Return Value      | Description                        |
| ----------------- | ---------------------------------- |
| `'disconnected'`  | No active connection to MongoDB.   |
| `'connected'`     | Successfully connected to MongoDB. |
| `'connecting'`    | Connection in progress.            |
| `'disconnecting'` | Disconnecting from MongoDB.        |

### API Reference

| Parameter        | Type     | Default       | Description                          |
| ---------------- | -------- | ------------- | ------------------------------------ |
| `config`         | `Object` | `{}`          | Configuration object for connection. |
| `config.host`    | `string` | `'127.0.0.1'` | MongoDB host.                        |
| `config.port`    | `number` | `27017`       | MongoDB port.                        |
| `config.dbName`  | `string` | `'test'`      | Name of the database.                |
| `config.options` | `Object` | `{}`          | Additional Mongoose options.         |

## Troubleshooting

Ensure MongoDB is running locally on the specified host and port.
If using a .env file, install the dotenv package and call require('dotenv').config() at the top of your entry script.

## License

This project is licensed under the MIT License.
[MIT](https://github.com/Keerthikumarreddy-kanchamreddy/mongoose-local-connector/blob/main/mongoose-local-connector/LICENSE)

## Contributing

Contributions are welcome! If you encounter a bug or have a feature request, please open an issue on GitHub.

## Support

If you have any questions or need help, feel free to reach out by creating an issue or discussion on the GitHub repository.
[mongoose-local-connector](https://github.com/Keerthikumarreddy-kanchamreddy/mongoose-local-connector/tree/main)