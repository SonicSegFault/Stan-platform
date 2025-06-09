import { useState } from "react";
import { Button } from "@mui/material";

//context
import { useAuth } from "../context/AuthContext";

//api
import { uploadImage } from "../api/uploadImageApi"; 

type NoticeSlotProps = {
  noticeSlot: string;
};

const UploadImage = ({ noticeSlot }: NoticeSlotProps) => {
  const { token } = useAuth();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log(`handleImageChange triggered for noticeSlot: ${noticeSlot}, File:`, file);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (image) {
      console.log(`Uploading image for ${noticeSlot}...`);
      uploadImage(image, token, noticeSlot);
    } else {
      console.log("No image selected.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col items-center justify-center h-full">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id={`upload-input-${noticeSlot}`} // Unique ID per notice
      />
      <label htmlFor={`upload-input-${noticeSlot}`}>
        <Button variant="contained" component="span"> Select Image </Button>
      </label>
      {preview && <img src={preview} alt="Preview" className="mt-4 max-w-full h-auto" />}
      <Button variant="contained" color="primary" className="mt-4" onClick={handleSubmit}>
        Submit Notice
      </Button>
    </div>
  );
};

export default UploadImage;
