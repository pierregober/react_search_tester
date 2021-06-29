import React from "react";

const Searchbar = ({input,updateInput}) => {

    return(
        <input 
            className="searchbar"
            value={input}
            placeholder={"Search for a album"}
            onChange={(e)=> updateInput(e.target.value)}
        />
    )
}
export default Searchbar;