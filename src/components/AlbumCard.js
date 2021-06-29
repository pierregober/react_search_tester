import React from 'react';

const AlbumCard = ({albumList = []}) => {
    return(
        <>
            { 
                albumList.map((data, i) => {
                    //does it have data? 
                    if(data){
                        return (
                            <div class="card mx-auto" style={{width: 18 + "rem"}} key={data.id}>
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{data.title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">See Album</a>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })
            }
        </>
    )
}
export default AlbumCard;
