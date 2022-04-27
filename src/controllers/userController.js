import userService from "../services/userService"

let handleLogin = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    // if(email === '' || email === null || email === 'undefined' || !email)
    if(!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter'
        })

    }
    let userData = await userService.handleUserLogin(email, password)
    console.log(userData)
    // check email exist
    // compare password
    // return userInfo
    // access_token: JWT web token

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData ? userData.user : {}
        
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; //ALL , ID
    if(!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter',
            users: []
        })

    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })


}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers
}