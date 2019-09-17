const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/search", // Failed to load resource: the server responded with a status of 422 (Unprocessable Entity)
        proxy({
            target: "https://api.themoviedb.org/4",
            changeOrigin: true
        })
    );
    app.use(
        "/discover",
        proxy({
            target: "https://api.themoviedb.org/4",
            changeOrigin: true
        })
    );
};

