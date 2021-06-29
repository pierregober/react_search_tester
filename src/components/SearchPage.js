import React, {useState, useEffect} from "react";
import Searchbar from './Searchbar';
import AlbumCard from "./AlbumCard";

//are there props being sent to the searchpage? it seems all internal
const SearchPage = () => {
    const [input, setInput] = useState('');
    const [albumListInit, setAblumListInit] = useState();   //we will need our original to show whenthe user delete their input
    const [albumList, setAlbumList] = useState();

    //TODO add functionality to choose a different user
    //for now just get the first user

    useEffect(()=> {
        console.log("hit0")
         fetch("https://jsonplaceholder.typicode.com/users/1/albums")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setAblumListInit(json);
                setAlbumList(json);
            });
    },[]);

    const updateInput = async (input) => {
        const filteredData = albumListInit.filter(data => {
            return data.title.toLowerCase().includes(input.toLowerCase())                   
            }) 
        setInput(input);
        setAlbumList(filteredData);
    }

    return (
        <div className="albumContainer">
            <Searchbar
                input={input}
                updateInput={updateInput}
            />
            <div className="albumCardContainer">
                <AlbumCard albumList={albumList} />
            </div>
        </div>
    )

} 
export default SearchPage;