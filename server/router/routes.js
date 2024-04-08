const express = require('express');
const router = express.Router();
const Glass = require("../schema/glassSchema")
const Furniture = require("../schema/furnitureSchema")
const Alu = require("../schema/aluminiumScehma")
const Iron = require("../schema/ironSchema")
const ImageModel = require("../schema/multer.model")
const upload = require('../multer.confg')
//glass route
router.post('/glass', async (req, res) => {
  try {
    const { productName, productDetail, productImage } = req.body;

    const glass = new Glass({
      productName,
      productDetail,
      productImage
    });

    await glass.save();

    res.status(201).json({ success: true, glass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

//aluminium route

router.post('/aluminium', async (req, res) => {
  try {
    const { productName, productDetail, productImage } = req.body;

    const alu = new Alu({
      productName,
      productDetail,
      productImage
    });

    await alu.save();

    res.status(201).json({ success: true, alu });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

//furniture route

router.post('/furniture', async (req, res) => {
  try {
    const { productName, productDetail, productImage } = req.body;

    const furniture = new Furniture({
      productName,
      productDetail,
      productImage
    });

    await furniture.save();

    res.status(201).json({ success: true, furniture });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

//iron route

router.post('/iron', async (req, res) => {
  try {
    const { productName, productDetail, productImage } = req.body;

    const iron = new Iron({
      productName,
      productDetail,
      productImage
    });

    await iron.save();

    res.status(201).json({ success: true, iron });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});
router.get('/glass', async (req, res) => {
  try {
    const glass = await Glass.find();
    // console.log(glass); // Log the data to the console
    res.json(glass); // Send the data as response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/aluminium', async (req, res) => {
  try {
    const alus = await Alu.find();
    // console.log(alus); // Log the data to the console
    res.json(alus); // Send the data as response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/furniture', async (req, res) => {
  try {
    const foundThreads = await Furniture.find();
    // console.log(foundThreads); // Log the data to the console
    res.json(foundThreads); // Send the data as response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/iron', async (req, res) => {
  try {
    const irons = await Iron.find();
    // console.log(irons); // Log the data to the console
    res.json(irons); // Send the data as response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({
//   storage: Storage
// }).single('testImage')

//using multer 

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      consloe.log(err);
    }
    else {
      const newImage = new ImageModel({
        name: req.body.name,
        image: {
          data: req.body.name,
          contentType: "image/png"
        }
      })
      newImage.save()
      .then(() => res.send("successfully upload image"))
      .catch((err) => console.log(err))
    }
  })

})


module.exports = router;