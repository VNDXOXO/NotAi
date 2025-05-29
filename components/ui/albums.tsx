import React from "react";

async function Album() {
    const response= await fetch('https://jsonplaceholder.typicode.com/photos');
    if(!response.ok){
        throw new Error('Failed to load soryy')
    }
    const albums=await response.json();
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {albums.slice(0,8).map((album:{albumId: number; id: number; thumbnailUrl:string; title:string})=>(
                <div key={album.albumId+(album.id)/10} className="bg-slate-500" >
                    <img src={album.thumbnailUrl} alt="" />
                    <p>{album.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Album;