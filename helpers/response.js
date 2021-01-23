response = (req, res, statusCode, message = "OK", payload = {}) => {
    res.status(statusCode).send({
        statusCode,
        message,
        payload
    })
}
module.exports = {
    response
}