import React, { useState } from "react";
import Comment from "./Comment";

function CommentList({ video }){

    const [showComments, setShowComments] = useState(true)

    function handleShowComments(){
        setShowComments(!showComments)
    }

    const displayComments = video.comments.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    })

    return(
    <div>
        <button onClick={handleShowComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
        <h2>{video.comments.length} Comments</h2>
        {showComments ?
        <div className="comment-list">
            {displayComments}
        </div> : null}
    </div>
    )
}

export default CommentList;