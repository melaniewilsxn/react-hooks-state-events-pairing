import React, { useState } from "react";

function DownvoteButton({ downvotes }){
    const [numberDownvotes, setNumberDownvotes] = useState(downvotes)

    function handleDownvote(){
        setNumberDownvotes(numberDownvotes+1)
    }

    return(
        <button onClick={handleDownvote}>{numberDownvotes} 👎</button>
    )
}

export default DownvoteButton;