export const success = (req, res,message,status) => {
    let statusCode= status || 200
    let statusMessage= message || ''
    res.status(status).send({
        error:false,
        status:statusCode,
        body:statusMessage
    })
}
export const error = (req, res,message,status) => {
    let statusCode= status || 500
    let statusMessage= message || 'Internal Server Error'
    res.status(status).send({
        error:true,
        status:statusCode,
        body:statusMessage
    })
}