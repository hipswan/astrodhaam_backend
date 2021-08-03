'use strict';
module.exports = class astrologerValidator {
    constructor() { }
    addReview() {
        let returnData = {
            AstroId: ['required'],
            UserId: ['required'],
            Rating:['required'],
            Review:['required']
        }
        return returnData;
    }

    likeReview(){
        let returnData = {
            Id: ['required'],
            LikeCount: ['required']
           
        }
        return returnData;

    }

    getAstrologerByID(){
        let returnData = {
            Id:['required']
       }

       return returnData 

    }
    updateAstrologer(){
        let returnData = {
            AstroId:['required']
       }

       return returnData 

    }


}