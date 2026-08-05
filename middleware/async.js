module.exports = function (handler) {
     // try/catch for handling promise rejections.
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        }
        catch(ex) {
            next(ex);
        }
    };
};