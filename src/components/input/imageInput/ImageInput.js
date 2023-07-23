import { Button } from '@mui/material';
import './style.css'
import React, { useState } from 'react';


export default function () {
    const [image, setImage] = useState(null);
    const [imgName, setImgName] = useState("");

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        setImgName(file.name)
        console.log(file)

        reader.onload = (event) => {
            setImage(event.target.result);
        };

        // Đọc tệp hình ảnh dưới dạng URL dữ liệu (data URL)
        reader.readAsDataURL(file);
    };

    return (
        <div className='my-display-image-input'>
            <div className="drop-area" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} >
                {
                    <>
                        <img src={image} alt="Drag photo to here" />
                        {/* <div> {imgName} </div> */}
                        <input type="file" onChange={handleFileInput} className='hello' />
                        <div> {imgName} </div>
                    </>

                }
            </div>
            <Button variant="contained">Search</Button>
        </div>
    )
}