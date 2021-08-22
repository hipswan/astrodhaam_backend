"use strict";
let router = require("express").Router();
let OTPController = new (require("../controllers/OTPcontroller"))();


// router.get("/add_astrologer",astrologerController.addAstrologer)
// router.get("/all", astrologerController.getAllAstrologer)
router.get("/:phone", OTPController.sendOTP)
// router.get("/search", astrologerController.getAllAstrologersFilter)
// router.post("/update/ivr", astrologerController.updateAstrologer)



// router.get("/get_club_by_id", astrologerController.getClubByID);
// router.put("/update_status", astrologerController.updateStatus);
// router.put("/edit_club_master", astrologerController.editClub);
// router.get("/get_club_select_list", astrologerController.get_club_select_list)

  
module.exports = router;