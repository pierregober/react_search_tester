import React, {useState} from "react";

const Searchbar = ({input,updateInput}) => {
    const [keyword, setKeyword] = useState(input);

    function getMyAlbums() {
        updateInput(keyword);                            //for auto search
    }

    return(
        <div className="searchbarStyler">
            <input 
                className="searchbar"
                value={keyword}
                placeholder={"Search..."}
                // onChange={(e) => (e.target.value)}               //for auto search
                onChange={(e) => setKeyword(e.target.value)}    
            />
            <div className="btnStyler" onClick={getMyAlbums}>
                Get Album Photos By Id
            </div>
        </div>
    )
}
export default Searchbar;