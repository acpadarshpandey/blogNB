const Blogmodel = require("../model/model");

module.exports = {

 getById: function(req, res, next) {
  console.log(req.body);
  Blogmodel.findById(req.params.blogId, function(err, blogInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "blog found!!!", data:{blogs: blogInfo}});
   }
  });
 },

getAll: function(req, res, next) {
  let blogsList = [];
Blogmodel.find({}, function(err, blogs){
   if (err){
    next(err);
   } else{
    for (let blog of blogs) {
     blogsList.push({id: blog._id, topic: blog.topic,description: blog.blogs,posted_by:blog.posted_by});
    }
    res.json({status:"success", message: "Blogs list found!!!", data:{blog: blogsList}});
       
   }
});
 },

 create: function(req, res, next) {
    Blogmodel.create({ topic: req.body.topic, description: req.body.description ,posted_by:req.body.posted_by}, function (err, result) {
        if (err) 
         next(err);
        else
         res.json({status: "success", message: "blog added successfully!!!", data: null});
        
      });
   },

updateById: function(req, res, next) {
  Blogmodel.findByIdAndUpdate(req.params.blogId,{topic:req.body.topic}, function(err, blogInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "blog updated successfully!!!", data:null});
   }
  });
 },

deleteById: function(req, res, next) {
  Blogmodel.findByIdAndRemove(req.params.blogId, function(err, blogInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "blog deleted successfully!!!", data:null});
   }
  });
 },

}