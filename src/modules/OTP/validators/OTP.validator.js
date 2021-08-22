'use strict';
module.exports = class OTPValidator {
    constructor() { }
    addClub() {
        let returnData = {
             club_name: ['required', 'regex:/^[a-zA-Z0-9]+([ \s]{1}[a-zA-Z0-9.]+)*$'],
             program_id: ['required',],
             description:['required', 'regex:/^[a-zA-Z0-9]+([ \s]{1}[a-zA-Z0-9.]+)*$'],
             status:['required']
        }
        return returnData;
    }

    sendOTP(){
        let returnData = {
            phone:['required']
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