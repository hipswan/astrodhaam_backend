"use strict";
let router = require("express").Router();
let astrologerController = new (require("../controllers/astrologer.controller"))();


router.get("/add_astrologer", astrologerController.addAstrologer)
// router.get("/get_club_master", astrologerController.getClubList)
// router.get("/get_club_by_id", astrologerController.getClubByID);
// router.put("/update_status", astrologerController.updateStatus);
// router.put("/edit_club_master", astrologerController.editClub);
// router.get("/get_club_select_list", astrologerController.get_club_select_list)

  
module.exports = router;