"use strict";
let router = require("express").Router();
let astrologerController = new (require("../controllers/astrologer.controller"))();


router.get("/add_astrologer",astrologerController.addAstrologer)
router.get("/all", astrologerController.getAllAstrologer)
router.get("/:id", astrologerController.getAstrologerByID)
router.get("/search", astrologerController.getAllAstrologersFilter)
router.post("/update/ivr", astrologerController.updateAstrologer)



// router.get("/get_club_by_id", astrologerController.getClubByID);
// router.put("/update_status", astrologerController.updateStatus);
// router.put("/edit_club_master", astrologerController.editClub);
// router.get("/get_club_select_list", astrologerController.get_club_select_list)

  
module.exports = router;