'use strict';
let response = {
   form_fields_required: {
      message: 'Form fields are required',
      code: 'TPU_0007'
   },
   club_added: {
      message: 'Club Data Added',
      code: 'TPU_0008'
   },
   club_failed_to_add: {
      message: 'Club Data not Added',
      code: 'TPU_0009'
   },

   club_updated:{
      message: 'Club Data Updated',
      code: 'TPU_0009'

   },
   club_not_updated:{
      message: 'Club Data not Updated',
      code: 'TPU_0009'

   },

   club_status_updated:{

      message: 'Club Status Updated',
      code: 'TPU_0009'

   },


   club_name_already_exist: {
      message: 'Club Name Already Exist',
      code: 'TPU_0016'
   },
   club_found: {
      message: 'Brand Data found',
      code: 'TPU_0010'
   },
   club_not_found: {
      message: 'Brand Data not found',
      code: 'TPU_0011'
   },
   program_not_found:{
      message: 'Program Data not found',
      code: 'TPU_0011'

   },



}

module.exports = response;
module.exports.success = function (key, values) {
   let returnResponse = response[key] == undefined ? {} : response[key];
   returnResponse.status = true;
   values ? returnResponse.values = values : '';
   return returnResponse;
}
module.exports.failed = function (key, errors) {
   let returnResponse = response[key] == undefined ? {} : response[key];
   returnResponse.status = false;
   errors && errors != key ? returnResponse.error = errors : '';
   return returnResponse;
}
module.exports.catch_error = function (err) {
   let returnResponse = response[err.message] == undefined ? { message: err.message } : response[err.message];
   if (response[err.message] == undefined)
      console.log(err);
   returnResponse.status = false;
   return returnResponse;
}