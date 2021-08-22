"use strict";
let Validator = require("validatorjs");
// let astrologerService = new(require("../services/astrologer.service"))();
 let OTPFormatter = new(require("../formatters/OTP.formatter"))();
 let OTPValidator = new(require("../validators/OTP.validator"))();
 let OTPResponse = require("../responses/OTP.response");
let OTPModel = new(require("../models/OTP.model"))();


module.exports = class OTPController {
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

    async getAllAstrologer(req, res) {
        


        let result  = astrologerModel.getAllAstrologers();
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

    async sendOTP(req,res){
        console.log("req.body11111",req.params);
     
          let returnResponse = {};
         let formData = {};
        formData = OTPFormatter.sendOTP(req);
        console.log("formdtatatatta",formData);
        let rules = OTPValidator.sendOTP();
        console.log("rulesssssssssssss",rules);
        let validation = new Validator(formData, rules);
         if (validation.passes() && !validation.fails()) {
             console.log("iffffff vblovk");
            returnResponse = await OTPModel.sendOTP(formData, function(result) {
                res.json(result);
            });
        } else {
            console.log("elseeee block");
            returnResponse = OTPResponse.failed(
                "form_fields_required",
                validation.errors.errors
            );
        }
        res.json(returnResponse);
     
    }




   
};