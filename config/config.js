const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    serverPort:process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: 'mongodb+srv://admin-abrar:12345six@cluster0.up2ip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
}

module.exports = config
