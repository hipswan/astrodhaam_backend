"use strict";
let router = require("express").Router();
let followController = new (require("../controllers/follow.controller"))();


// router.get("/add_astrologer",astrologerController.addAstrologer)
router.get("/:userId", followController.getFollowing)
router.get("/astrofollower/:astroId", followController.getAstroFollowers)
router.post("/astrologer", followController.addUserFollowing)

// router.get("/search", astrologerController.getAllAstrologersFilter)
// router.post("/update/ivr", astrologerController.updateAstrologer)



// router.get("/get_club_by_id", astrologerController.getClubByID);
// router.put("/update_status", astrologerController.updateStatus);
// router.put("/edit_club_master", astrologerController.editClub);
// router.get("/get_club_select_list", astrologerController.get_club_select_list)

  
module.exports = router;