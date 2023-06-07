import React, { useState } from "react";
import UpvoteButton from "./UpvoteButton"
import DownvoteButton from "./DownvoteButton";
import CommentList from "./CommentList";

function Header({ video }){

    return(
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <UpvoteButton upvotes={video.upvotes}/><DownvoteButton downvotes={video.downvotes}/>
            <CommentList video={video}/>
        </div>
    )
}

export default Header;