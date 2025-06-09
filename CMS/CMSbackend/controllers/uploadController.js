const multer = require("multer");
const asyncHandler = require("express-async-handler");

//models
const UploadedImage = require("../model/uploadedImageSchema");

//dec upload image
//POST /upload/image
//access Private

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const noticeSlot = req.query.noticeSlot; // Get slot from frontend
        if (!noticeSlot) return cb(new Error("No notice slot provided"), "");

        const fileExtension = file.mimetype.split("/")[1] || "jpg";
        cb(null, `${noticeSlot}.${fileExtension}`);
    }
});

const upload = multer({storage});

const postImage =  asyncHandler(async (req, res) => {
    if(!req.file) return res.status(401).json({message: "No file attached"});    
    console.log(`Received file: ${req.file.filename} in slot ${req.query.noticeSlot}`);
    try{    
        await UploadedImage.create(
            {filename: req.file.filename, path: `uploads/${req.file.filename}`}
        )
        res.json({
            message: "Image uploaded successfully",
            filename: req.file.filename,
            path: `uploads/${req.file.filename}`
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Failed to save image" });
    };
})

//desc get uploaded image
//GET upload/image/:filename
//access Public

//Useless for now
const getImage = asyncHandler(async (req, res) => {
    const { filename } = req.params;

    if(filename){
        const image = await UploadedImage.findOne({filename});
        if(image){
            return res.status(200).json({imagepath: `${req.protocol}://${req.get("host")}/${image.path}`});
        }else return res.status(404).json({message: "Image not found"});
    } else return res.status(400).json({message: "No filename"});
})

module.exports = { upload, postImage, getImage }