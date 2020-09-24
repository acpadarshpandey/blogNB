const {Schema,model}=require("mongoose");


const blogSchema=new Schema({
    topic:{
        type:String,
    },
    description:{
        type:String,
    },
    posted_at:{
        type:Date,
    },
    posted_by:{
        type:String,
    }
})

module.exports = model('Blog', blogSchema);