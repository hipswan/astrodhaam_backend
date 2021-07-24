"use strict";
let knex = require('../../../../config/knex');
// let seq_lize = require('../../../../config/sequelize');
//let common_knex = require('../../../../../config/common_knex');

module.exports = class astrologerModel {
    constructor() { }

     displayAstrologer(){
    
        return knex.select("*").from("tb_mst_user");
         
       
    }


    getClubList(data) {

       let columns={
           id:'master_club.id',
           club_name:'master_club.club_name',
           program_name:'master_program.program_name',
           status:'master_club.status',
           description:'master_club.description'
       }
               let obj = knex("master_club")
                 .select(columns)
                 .join('master_program','master_program.id','master_club.program_id')
                 .orderBy('master_club.id', 'desc');

        if (data['club_name']) {
            obj.where("master_club.club_name", "like", "%" + data['club_name'] + "%");
        }

        if (data["status"]) {
            obj.where("master_club.status", data["status"]);
        }
        if (data['program_id']) {
            obj.where("master_club.program_id",  data['program_id']);
        }
        return obj;
    }

    get_club_select_list(data) {
        let columns={
            id:'master_club.id',
            name:'master_club.club_name',
        }
        return knex("master_club")
            .select(columns)
            .orderBy('master_club.club_name', 'ASC');
        }

    validateName(data) {
        return knex("master_club").select().where("club_name", data.columns.club_name);
    }

    // validateCode(data) {
    //     return common_knex("master_brand").select().where("brand_code", data.columns.brand_code);
    // }

    addClub(data) {
        return knex("master_club").insert(data.columns);
    }

    getClubByID(data) {
        let columns = {
            id: "master_club.id",
            club_name: "master_club.club_name",
            description:"master_club.description",
            program_id: "master_club.program_id",
            status: "master_club.status",
        };

        return knex("master_club")
            .select(columns)
            .where("id", data["columns"]["club_id"]);
    }


    editClub(data, queryType) {

      console.log("datadatadata",data,"queryTypequeryTypequeryTypequeryTypequeryType",queryType)
        switch (queryType) {
            case "update":
                {
                    let id = data.columns.id;
                    delete data.columns.id;
                    return knex("master_club")
                        .update(data.columns)
                        .where("id", id)
                }

            // case "fetchOldValues":
            //     {


            //         let columns = {
            //             name: "master_brand.brand_name",
            //             code: "master_brand.brand_code",
            //             created_by: "master_tenant_users.first_name"
            //         }

            //         return common_knex("master_brand")
            //             .select(columns)
            //             .leftJoin("master_tenant_users", "master_tenant_users.id", "=", "master_brand.created_by")
            //             .where("master_brand.id", data.columns.id)
            //     }

        }
    }

    deleteBrand(data) {
        return common_knex("master_brand")
            .where({
                id: data.columns.id
            })
            .del();
    }

    updateStatus(data, queryType) {
        switch (queryType) {
            case "update":
                {
                    let id = data.columns.id;
                    delete data.columns.id;
                    delete data.columns.tenant_id;
                    delete data.columns.updated_by;

                    return knex("master_club").update(data.columns).where("id", id);

                }

            case "fetchOldValues":
                {
                    return common_knex("master_brand")
                        .select("*")
                        .where("master_brand.id", data.columns.id)
                }

        }
    }


};