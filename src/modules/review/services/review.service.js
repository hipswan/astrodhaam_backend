// "use strict"

// let cModel = new(require("../models/astrologer.model"))();
// let clubMasterResponse = require("../responses/astrologer.response");
// let knex = require("../../../../../config/knex");
// aa
// let Audit_log = require("../../../../core/Audit-log/audit_log.js");
// let audit_log = new Audit_log();
// module.exports = class astrologerService {
//     constructor() {}

//     // async getClubList(form_data) {
//     //     let return_result = {};
//     //     let obj = clubMasterModel.getClubList(form_data);
//     //     return obj.then(async(result) => {
//     //         if (result.length > 0) {
//     //             return_result.club_list = result;
//     //             delete form_data.limit;
//     //             delete form_data.offset;
//     //             delete form_data.columns;
//     //             let countData = await clubMasterModel.getClubList(form_data);
//     //             return_result.total_records = countData.length;
//     //             return clubMasterResponse.success("club_found", return_result);
//     //         } else {
//     //             throw new Error("club_not_found");
//     //         }
//     //     }).catch(err => clubMasterResponse.catch_error(err));
//     // }

//     async getClubList(form_data) {
//         let return_result = {};
//         let clubQuery = clubMasterModel.getClubList(form_data);
//         return_result.total_records = (await clubQuery).length;
//         return_result.club_list = await clubQuery.limit(form_data['limit']).offset(form_data['offset']);
//         if (return_result.total_records > 0) {
//             return clubMasterResponse.success("club_found", return_result);
//         } else {
//             return clubMasterResponse.failed("club_not_found");
//         }
//     }

//     async get_club_select_list(form_data) {
//         let result = await clubMasterModel.get_club_select_list(form_data);
//         if (result.length > 0) {
//             return clubMasterResponse.success("club_found", result);
//         } else {
//             return clubMasterResponse.failed("club_not_found");
//         }
//     }

    

//     async addClub(_data, callback) {

//      let code = await this.generateUniqueCode()
//      console.log("codeeeeeeeeee",code);
//      _data.code=code




//         console.log("_datatattatattatata Serviceeee",_data);
//         return clubMasterModel.validateName({ columns: _data })
//             .then(result => {
//                 if (result.length > 0) {
//                     return clubMasterResponse.failed("club_name_already_exist");
//                 }
//                 else {
//                     return clubMasterModel.addClub({ columns: _data })
//                         .then(async result => {
//                             if (result.length > 0) {
//                                 callback(clubMasterResponse.success("club_added"));
//                             } else {
//                                 return clubMasterResponse.failed("club_failed_to_add");
//                             }
//                         })
//                 }
//             })
//             .catch(err => clubMasterResponse.catch_error(err));
//     }

//     async generateUniqueCode() {
//         let code= Math.floor(1000 + Math.random() * 9000);
//         let result = await knex('master_club').select({ id: "master_club.id" }).where('code', code);
//         if (result.length > 0) {
//           this.generateUniqueCode();
//         }
//         return code;
//       };

//     getClubByID(_data) {
//         return clubMasterModel
//             .getClubByID({ columns: _data })
//             .then(result => {
//                 if (result.length > 0 || result == 1)
//                     return clubMasterResponse.success("club_found", result);
//                 else return clubMasterResponse.failed("club_not_found");
//             })
//             .catch(err => clubMasterResponse.catch_error(err));
//     }

//     async editClub(_data, callback) {
//         let id = _data.id;
//         return clubMasterModel.editClub({ columns: _data }, "update")
//             .then(async(result) => {
//                 if (result > 0) {
//                     callback(clubMasterResponse.success("club_updated"));
//                 } else {
//                     return clubMasterResponse.failed("club_not_updated")
//                 }
//             })
//             .catch(err => clubMasterResponse.catch_error(err));
//     }

//     deleteBrand(_data, req) {
//         return brandModel
//             .deleteBrand({ columns: _data })
//             .then(result => {
//                 if (result.length > 0 || result == 1)
//                     return brandResponse.success("brand_deleted", result);
//                 else return brandResponse.failed("brand_not_found");
//             })
//             .catch(err => brandResponse.catch_error(err));
//     }

//     updateStatus(_data, callback) {
//         let tenant_user_name = _data.tenant_user_name;
//         let oldData = {};
//         let id = _data.id;
//         let tenant_id = _data['tenant_id'];
//         let tenant_user_id = _data["updated_by"];
//         delete _data.tenant_user_name;
//         return clubMasterModel.updateStatus({ columns: _data }, "fetchOldValues")
//             .then(async(result) => {
//                 oldData = result[0];
//                 delete oldData["updated_by"];

//                //  let created_tenant_user = await knex("master_tenant_users").select("first_name").where("id", oldData["created_by"]);
//                 delete oldData["created_at"];
//                 delete oldData["id"];
//                 delete oldData["updated_at"];
//                 delete oldData["tenant_id"];
//                 //oldData["created_by"] = created_tenant_user[0].first_name;
//                 if (oldData["status"] == 1) {
//                     oldData['status'] = 'Active';
//                 } else {
//                     oldData['status'] = 'InActive';
//                 }
//                 // if (oldData['ceiling_type'] == 'ceil_up') {
//                 //     oldData['ceiling_type'] = 'Ceil up';
//                 // } else {
//                 //     oldData['ceiling_type'] = 'Floor down';
//                 // }


//                 return clubMasterModel.updateStatus({ columns: _data }, "update")
//             })
//             .then(async(result) => {
//                 callback(clubMasterResponse.success("club_status_updated"));

//                 delete _data['id'];
//                 delete _data['tenant_id'];
//                 delete _data["updated_at"];
//                 _data["updated_by"] = tenant_user_name;

//                 let new_values = JSON.parse(JSON.stringify(_data));

//                 new_values["lob_code"] = oldData["lob_code"];
//                 new_values["name"] = oldData["name"];
//                 // new_values["ceiling_type"] = oldData["ceiling_type"];
//                 // new_values["multiples"] = oldData["multiples"];
//                 new_values["description"] = oldData["description"];
//                 if (_data['status'] == 1) {
//                     new_values['status'] = 'Active';
//                 } else {
//                     new_values['status'] = 'InActive';
//                 }
//             })
//             .catch(err => clubMasterResponse.catch_error(err));
//     }

// };