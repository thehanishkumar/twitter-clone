const { Post } = require("../models/Post")

const like = async (req, res) => {
    const { postId } = req.body;
    const userId = req.id
    let updatedPost = await Post.findOneAndUpdate(
        { _id: postId, "likes": { $ne: userId } },
        { $push: { likes: userId } },
        { new: true }
    );
    if (updatedPost) {
        return res.send({ sucess: true, updatedPost });

    } else {
        return res.send({
            sucess: false,
            message: "post not found or somone already liked post"
        });
    }
}

const comment = async (req, res) => {
    const { postId, comment } = req.body;
    const user = req.id
    let commentobj = new Comment({ user, post: postId, desc: comment });
    commentobj.save();
    let updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        { $push: { comments: userId } },
        { new: true }
    );
    res.send(commentobj)
}
const unlike = async (req, res) => {
    const { postId } = req.body;
    const userId = req.id;
    // Update the post to remove the user's like
    let updatedPost = await Post.findOneAndUpdate(
        { _id: postId, likes: userId },
        { $pull: { likes: userId } },
        { new: true }
    );
    if (updatedPost) {
        return res.send({ success: true, updatedPost });
    } else {
        return res.send({ success: false, 
                          message: "Failed to unlike the post." 
                        });
    }
}
const deletepost = async(req, res) => { 
    const { postId } = req.body;
    let post = await Post.findByIdAndDelete(postId)
    res.send({ sucess: true, deletedpost: post });
 }
const createpost = (req, res) => {
    const { desc, image_url } = req.body;
    let user = req.id;
    const post = new Post({ user, desc, image_url })
    post.save();
    res.send(post);
}
const updatepost = (req, res) => {
    res.send("updatepost");
}
const searchpost = (req, res) => { res.send("searchpost"); }
const updatecomment = (req, res) => { res.send("updatecomment"); }
const deletecomment = async (req, res) => {  
    const { commentId } = req.body;
    let comment = await Comment.findByIdAndDelete(commentId)
    res.send({ sucess: true, deletedcomment: comment }); 

}
const showuserdata = (req, res) => { res.send("showuserdata"); }
const modifyuserdata = (req, res) => { res.send("modifyuserdata"); }
const savedpost = (req, res) => { res.send("savedpost"); }

module.exports = {
    like, comment, unlike, deletepost,
    createpost, updatepost, searchpost,
    updatecomment, deletecomment, showuserdata,
    modifyuserdata, savedpost
}