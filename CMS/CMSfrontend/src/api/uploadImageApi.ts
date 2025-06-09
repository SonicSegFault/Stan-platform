import axios from "axios";

export const uploadapi = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export const uploadImage = async (
    file: File | null,
    token: string | null, 
    noticeSlot: string) => {
    
        try {
            if (!file) {
                console.error("No file selected");
                return;
            }

            const formData = new FormData();
            formData.append("file", file); // "file" matches backend

            console.log("Sending request to backend...");
            console.log(`uploading to /upload/image?noticeSlot=${noticeSlot}`)
            await uploadapi.post(`/upload/image?noticeSlot=${noticeSlot}`, formData, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""           
                }
            });

            console.log("Frontend Request Sent");
        } catch (err) {
         console.error("Request Failed", err);
        }
};
