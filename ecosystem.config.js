module.exports = {
    apps: [
        {
            name: "coach-app",
            script: "server.js",
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
}
