import React from "react";

const ImageList = (props) =>{
    const images = props.images.map((image)=>
    {
        return <img src={image.webformatURL} alt="" />
    })
    return(
        <div>
            {images}
        </div>
    )
}

export default ImageList;