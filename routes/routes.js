const express =require("express");
const router=express.Router();
const blogController=require("../controllers/blog");

router.get("/allblogs",blogController.getAll);
router.get("/allblogs:blogId",blogController.getById);
router.post("/post/blog",blogController.create);
router.put("/update/blog/:blogId",blogController.updateById);
router.delete("/delete/blog/:blogId",blogController.deleteById);

module.exports=router;