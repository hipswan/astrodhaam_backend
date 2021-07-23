'use strict';
module.exports = class astrologerValidator {
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


}