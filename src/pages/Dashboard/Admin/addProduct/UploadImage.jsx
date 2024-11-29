import { getBaseUrl } from "../../../../utils/baseURL";
import React, { useState } from 'react'

import axios from 'axios'

const UploadImage = ({ name, setImage }) => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");

    

    const uploadImage = async (event) => {
        const files = event.target.files;

        if (files.length === 1) {
            const base64 = await convertBase64(files[0]);
            uploadSingleImage(base64);
            return;
        }

        const base64s = [];
        for (let i = 0; i < files.length; i++) {
            const base = await convertBase64(files[i]);
            base64s.push(base);
        }
    }


    return (
        <div>
            <label htmlFor={name}>Upload Image</label>
            <input type="file"
                name={name}
                id={name}
                onChange={uploadImage}
                className='add-product-InputCSS' />
            {
                loading && (
                    <div className='mt-2 text-sm text-blue-600'>Product uploading...</div>
                )
            }
            {
                url && (
                    <div className='mt-2 text-sm text-green-600'>
                        <p>Image uploaded successfully!</p>
                        <img src={url} alt="uploaded-image" />
                    </div>
                )
            }
        </div>
    )
}


export default UploadImage