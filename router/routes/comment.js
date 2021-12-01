const express = require("express");
const routerComment = express.Router();

const {
  createComment,
  getComment,
  updateComment,
  deleteComment,
  SoftDelComment,
} = require("./../controller/comment");
const authentication = require("./../middleware/authentication");
// const authorization = require("./../middleware/authorization");
routerComment.post("/createComment", authentication,createComment);
routerComment.get("/getComment/:id", authentication,getComment);
routerComment.post("/UpdateComment", authentication,updateComment);
routerComment.delete("/deleteComment/:id/:commentId",authentication, deleteComment);
routerComment.post("/SoftDelComment", authentication,SoftDelComment);
module.exports = routerComment;
