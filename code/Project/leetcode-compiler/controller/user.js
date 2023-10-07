async function handleUserRequest(req,res){
    res.end('<h1>*LIVE FOR USER/h1>');
}

module.exports = {
    handleUserRequest,
}