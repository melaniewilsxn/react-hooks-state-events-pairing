import React, { useState } from "react";

function UpvoteButton({ upvotes }){
    const [numberUpvotes, setNumberUpvotes] = useState(upvotes)

    function handleUpvote(){
        setNumberUpvotes(numberUpvotes+1)
    }

    return(
        <button onClick={handleUpvote}>{numberUpvotes} 👍</button>
    )
}

export default UpvoteButton;