import React from 'react'

export default function Img(props) {
    console.log(props.imgSrc);
    return (
        <div>
            <img src={props.imgSrc}/>
        </div>
    )
}
