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
         fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setAblumListInit(json);
                // setAlbumList(json);                                          //set to show all albums on page load
            });
    },[]);

    const updateInput = async (input) => {
        const filteredData = albumListInit.filter(data => {
            // return data.title.toLowerCase().includes(input.toLowerCase())     //search by title
            return data.albumId == input                   
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
            <div>
                <AlbumCard albumList={albumList} />
            </div>
        </div>
    )

} 
export default SearchPage;