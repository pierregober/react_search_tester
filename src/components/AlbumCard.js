import React from 'react';

const AlbumCard = ({albumList = []}) => {
    return(
        <div className="albumCardContainer">
            { 
                albumList.map((data, i) => {
                    //does it have data? 
                    if(data){
                        return (
                            <div className="card cardStyler mx-auto" style={{width: 18 + "rem"}} key={data.id}>
                                <img src={data.url}/>
                                <div className="card-body">
                                    <h5 className="card-title"> {data.title}</h5>
                                    <p className="card-text">Album Id: {data.albumId}</p>
                                    <a href={data.thumbnailUrl} className="btn btn-primary">See Album</a>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })
            }
        </div>
    )
}
export default AlbumCard;
