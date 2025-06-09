//useless for now

import axios from "axios";

const noticeapi = axios.create({
    baseURL: "http://localhost:8000/upload/image"
})

const noticePath = async (filename: string) => {
    try{
        if(filename){
            const response = await noticeapi.get(`/${filename}`);
            return response.data.imagepath;
        }
    }catch (err) {
        console.log("Couldn't get the image url", err);
    }
}

export default noticePath