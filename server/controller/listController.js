const connection = require('../dataBase/dataConfig').db_connect()
connection.connect()

const list_data = (rs) => {
    connection.query("call getAllStory();", (err, rows, filed) => {
        if (err) {
            console.log("getUsersMethod err：" + err);
            rs({
                status: false
            });
        } else {
            rs({
                status: true,
                users: rows
            });
        }
    });
}

const user_story = async (id) => {
    const get_story = new Promise((resolve, reject) => {
        connection.query("call userStory(?);", [id], (err, result, filed) => {
            resolve(result)
        })
    }).then(res => {
        return JSON.parse(JSON.stringify(res))[0]
    })
    return get_story

}

const post_story =async (postData) => {
    const {
        id,
        titleText,
        contentText
    } = postData

    const posting = new Promise((resolve, reject) => {
        connection.query("call postNewStory(?,?,?,?);", [id, titleText, contentText, "s"], (err, result, field) => {
            resolve(result)
        })
    }).then(res => {
        return res
      
    })
    return posting
}



module.exports = {
    list_data,
    user_story,
    post_story
}