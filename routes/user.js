


const express = require("express");
const router = express.Router();


router.get("/api/user", (req, res)=>{
    res.send("<h1> Hello User</h>");
});

router.get("/api/user/all", (req, res)=>{
    res.send("<h1> Hello All Users</h>");
});




module.exports = router;