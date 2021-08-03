"use strict";
let router = require("express").Router();
let reviewController = new (require("../controllers/review.controller"))();


router.post("/add_review",reviewController.addReview)
router.post("/like", reviewController.likeReview)
router.post("/delete", reviewController.deletReview)
// router.get("/search", reviewController.getAllAstrologersFilter)
// router.post("/update/ivr", reviewController.updateAstrologer)



// router.get("/get_club_by_id", astrologerController.getClubByID);
// router.put("/update_status", astrologerController.updateStatus);
// router.put("/edit_club_master", astrologerController.editClub);
// router.get("/get_club_select_list", astrologerController.get_club_select_list)

  
module.exports = router;