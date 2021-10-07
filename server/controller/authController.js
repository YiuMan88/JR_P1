const bcrypt = require("bcryptjs")
const connection = require('../dataBase/dataConfig').db_connect()
connection.connect()

const user_register = async (username, password) => {
    const saltRounds = 2;
    const salt = await bcrypt.genSalt(saltRounds)
    password = await bcrypt.hash(password, salt)
    const registerResult = new Promise((resolve, reject) => {
        connection.query("call register(?, ?);", [username, password], (err, result, filed) => {
            connection.query('SELECT LAST_INSERT_ID()', (err, res) => {
                const id = JSON.parse(JSON.stringify(res))[0]["LAST_INSERT_ID()"]
                resolve(id)
            })
        })
    }).then(res => {
        return res
    })
    return registerResult
}

const auth_login = async (username, password) => {
    const authResult = new Promise((resolve, reject) => {
        connection.query("call findUser(?);", [username], (err, result, filed) => {
            resolve(result)
        })
    }).then(async (res) => {
        const dbPassword = JSON.parse(JSON.stringify(res))[0][0].password
        const userID = JSON.parse(JSON.stringify(res))[0][0].id
        const isSuccess = await bcrypt.compare(password, dbPassword)
        return {
            isSuccess,
            userID
        }
    })
    return authResult
}


module.exports = {
    user_register,
    auth_login
}