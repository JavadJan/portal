const { Schema, models, model } = require("mongoose");


const userSchema = new Schema({
    username: { type: String },
    title: {
        type: String
    },
    desc: { type: String }
})

const User = models.User || model("User", userSchema)

export default User