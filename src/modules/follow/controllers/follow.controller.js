"use strict";
let Validator = require("validatorjs");
// let astrologerService = new(require("../services/astrologer.service"))();
 let followFormatter = new(require("../formatters/follow.formatter"))();
 let followValidator = new(require("../validators/follow.validator"))();
 let followResponse = require("../responses/follow.response");
let followModel = new(require("../models/follow.model"))();


module.exports = class followController {
    constructor() {}

    async addAstrologer(req, res) {
        


        let result  = astrologerModel.displayAstrologer();
        console.log(result);
        res.json(await result);
        // let returnResponse = {};
        // let formData = {};
        // formData = astrologerFormatter.addAstrologer(req);
        // let rules = astrologerValidator.addAstrologer();
        // let validation = new Validator(formData, rules);
        // if (validation.passes() && !validation.fails()) {
        //     returnResponse = await astrologerService.addAstrologer(formData, function(result) {
        //         res.json(result);
        //     });
        // } else {
        //     returnResponse = astrologerResponse.failed(
        //         "form_fields_required",
        //         validation.errors.errors
        //     );
        // }
        // res.json(returnResponse);
    }

    async getFollowing(req, res) {
        
        let result  = followModel.getFollowing(req.params);
        // console.log(result);
         res.json(await result);
        // let returnResponse = {};
        // let formData = {};
        // formData = astrologerFormatter.addAstrologer(req);
        // let rules = astrologerValidator.addAstrologer();
        // let validation = new Validator(formData, rules);
        // if (validation.passes() && !validation.fails()) {
        //     returnResponse = await astrologerService.addAstrologer(formData, function(result) {
        //         res.json(result);
        //     });
        // } else {
        //     returnResponse = astrologerResponse.failed(
        //         "form_fields_required",
        //         validation.errors.errors
        //     );
        // }
        // res.json(returnResponse);
    }
    async getAstroFollowers(req, res) {
        
        let result  = followModel.getAstroFollowers(req.params);
        // console.log(result);
         res.json(await result);
        // let returnResponse = {};
        // let formData = {};
        // formData = astrologerFormatter.addAstrologer(req);
        // let rules = astrologerValidator.addAstrologer();
        // let validation = new Validator(formData, rules);
        // if (validation.passes() && !validation.fails()) {
        //     returnResponse = await astrologerService.addAstrologer(formData, function(result) {
        //         res.json(result);
        //     });
        // } else {
        //     returnResponse = astrologerResponse.failed(
        //         "form_fields_required",
        //         validation.errors.errors
        //     );
        // }
        // res.json(returnResponse);
    }
    async addUserFollowing(req,res){

        let formData=followFormatter.addUserFollowing(req)
        let result  = followModel.addUserFollowing(formData);
        console.log(result);
        res.json(await result);

    }

    async getAllAstrologersFilter(req, res) {

        
        


        let result  = astrologerModel.getAllAstrologersFilter(req.query);
        // console.log(result);
         res.json(await result);
        // let returnResponse = {};
        // let formData = {};
        // formData = astrologerFormatter.addAstrologer(req);
        // let rules = astrologerValidator.addAstrologer();
        // let validation = new Validator(formData, rules);
        // if (validation.passes() && !validation.fails()) {
        //     returnResponse = await astrologerService.addAstrologer(formData, function(result) {
        //         res.json(result);
        //     });
        // } else {
        //     returnResponse = astrologerResponse.failed(
        //         "form_fields_required",
        //         validation.errors.errors
        //     );
        // }
        // res.json(returnResponse);
    }

    async getAstrologerByID(req,res){
        console.log("req.body",req.params);
     
          let returnResponse = {};
         let formData = {};
        formData = astrologerFormatter.getAstrologerByID(req);
        console.log("formdtatatatta",formData);
        let rules = astrologerValidator.getAstrologerByID();
        console.log("rulesssssssssssss",rules);
        let validation = new Validator(formData, rules);
         if (validation.passes() && !validation.fails()) {
             console.log("iffffff vblovk");
            returnResponse = await astrologerModel.getAstrologerByID(formData, function(result) {
                res.json(result);
            });
        } else {
            console.log("elseeee block");
            returnResponse = astrologerResponse.failed(
                "form_fields_required",
                validation.errors.errors
            );
        }
        res.json(returnResponse);
     
    }
    async updateAstrologer(req,res){
        console.log("reqqqqqqqqqqqqq",req.body)

        let returnResponse = {};
        let formData = {};
       formData = astrologerFormatter.updateAstrologer(req);
       console.log("formdtatatatta",formData);
       let rules = astrologerValidator.updateAstrologer();
       console.log("rulesssssssssssss",rules);
       let validation = new Validator(formData, rules);
        if (validation.passes() && !validation.fails()) {
            console.log("iffffff vblovk");
           returnResponse = await astrologerModel.updateAstrologer(formData, function(result) {
               res.json(result);
           });
       } else {
           console.log("elseeee block");
           returnResponse = astrologerResponse.failed(
               "form_fields_required",
               validation.errors.errors
           );
       }
       res.json(returnResponse);
    



    }


   
};