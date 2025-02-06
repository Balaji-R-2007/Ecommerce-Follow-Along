const multer = require("multer");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define your upload folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); 
    // Define a unique filename
    const filename = file.originalname.split(".")[0]; 
    // image.png take only image
    cb(null, filename + "-" + uniqueSuffix + ".png"); 
    // Define image-1624234567-123456789.png
  },
});

const pstorage = multer.diskStorage({
  destination: './products',
  filename: function (req, file, cb) {
    console.log(req.body);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); 
    const filename = file.originalname.split(".")[0];
    cb(null, filename+"-"+uniqueSuffix+".png");
  }
});

// Initialize upload object
exports.upload = multer({ storage: storage });
exports.pupload = multer({ storage: pstorage });