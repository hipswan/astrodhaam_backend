const _ = require("lodash");

("use strict");
module.exports = class astrologerFormatter {
    constructor() { }

    addReview(req) {
        let data = {};
        data['AstroId'] = req.body.astroid;
        data['UserId'] = req.body.userid;
        data['Review'] = req.body.review;
        data['Rating'] = req.body.rating;
        data['ReviewDate'] = new Date();

        

        console.log("datatatatatat frommater",data);

        return data;
    }

    likeReview(req){
        let data = {};
        data['Id'] = req.body.reviewid;
        //data['UserId'] = req.body.userid;
        data['LikeCount'] = req.body.count;
        // data['Rating'] = req.body.rating;
        // data['ReviewDate'] = new Date();

        

        console.log("datatatatatat frommater",data);

        return data;

    }

    updateAstrologer(req){

        return {
            AstroId:req.body.AstroId,
            UserMobileNo: req.body.UserMobileNo,
            Duration:req.body.Duration,
            status:req.body.status,
            CallingType:req.body.CallingType,
            MOU_ID:req.body.MOU_ID,
        }

    }

    getAstrologerByID(req){

        return {
            Id : req.params.id
        }

    }


    getClubByID(req) {
        let data = {};
        data['club_id'] = req.query.id;
        return data;
    }

    getClubList(req) {
        return {
             limit: req.query.limit,
             offset: req.query.offset,
             status: req.query.status,
             club_name: req.query.club_name,
             program_id: req.query.program_id
        }
   }

    updateStatus(req) {
        let data = {};
        data['id'] = req.body.id;
        data['status'] = req.body.status;
        data['tenant_id'] = req.app.locals.tenant_id;
        data['updated_by'] = req.app.locals.tenant_user_id;
        data['tenant_user_name'] = req.app.locals.tenant_user_name;
        return data;
    }

    editClub(req) {
        let data = {};
        data['id'] = req.body.id;
        data['club_name'] = req.body.club_name;
        data['program_id'] = req.body.program_id;
        data['status'] = req.body.status;
        data['description'] = req.body.description;
        return data;
    }


    // getProgramList(req) {
    //     return {
    //         ...this.getQueries(req),
    //     };
    // }




    getQueries(req) {
        return _.pick(req.query, ["limit", "offset"]);
    }



   
}