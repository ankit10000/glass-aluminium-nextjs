const express = require('express');
const router = express.Router();
const Glass = require("../schema/glassSchema")
const Furniture = require("../schema/furnitureSchema")
const Admin = require("../schema/adminSchema")
const Alu = require("../schema/aluminiumScehma")
const Iron = require("../schema/ironSchema")
const ImageModel = require("../schema/multer.model")
const upload = require('../multer.confg')
const bcrypt = require('bcryptjs')

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

//registration credential for my admin

router.post("/register", async (req, res) => {
  const { username, email, contactnumber, password, confirmPassword } =
    req.body;
  if (!username || !email || !contactnumber || !password || !confirmPassword) {
    return res.status(421).json({ error: "please fill the blank input" });
  }
  try {
    const userExistemail = await Admin.findOne({ email: email });
    const userExistusername = await Admin.findOne({ username: username });
    const userExistcontactnumber = await Admin.findOne({ contactnumber: contactnumber, });
    const admin = new Admin({
      username,
      email,
      contactnumber,
      password,
      confirmPassword,
    });

    if (userExistemail) {
      return res.status(422).json({ error: "Email Alerady Exist" });
    } else if (userExistusername) {
      return res.status(423).send({ error: "Username Alerady Exist" });
    } else if (userExistcontactnumber) {
      return res.status(424).json({ error: "Contact number Alerady Exist" });
    } else if (password != confirmPassword) {
      return res.status(425).json({ error: "Password is not match" });
    } else {
      await admin.save();
      res.status(201).json({ massege: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});


//login for my user admin panel 


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "please fill the blank input1" });
    }

    const userlogin = await Admin.findOne({ username: username });

    if (userlogin) {
      const userIsmatch = await bcrypt.compare(password, userlogin.password);

      if (!userIsmatch) {
        res.status(400).json({ error: "Invalide credentials" });
      } else {
        res.json({ message: "user login successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalide credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;