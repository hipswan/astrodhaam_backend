"use strict";
let Validator = require("validatorjs");
//let reviewService = new(require("../services/review.service"))();
 let reviewFormatter = new(require("../formatters/review.formatter"))();
 let reviewValidator = new(require("../validators/review.validator"))();
 let reviewResponse = require("../responses/review.response");
let reviewModel = new(require("../models/review.model"))();


module.exports = class reviewController {
    constructor() {}

    async addReview(req, res) {


        


        // let result  = astrologerModel.displayAstrologer();
        // console.log(result);
        // res.json(await result);
        let returnResponse = {};
        let formData = {};
        formData = reviewFormatter.addReview(req);
        let rules = reviewValidator.addReview();
        let validation = new Validator(formData, rules);
        if (validation.passes() && !validation.fails()) {
            returnResponse = await reviewModel.addReview(formData, function(result) {
                res.json(result);
            });
        } else {
            returnResponse = reviewResponse.failed(
                "form_fields_required",
                validation.errors.errors
            );
        }
        res.json(returnResponse);
    }

    async likeReview(req,res){
        let returnResponse = {};
        let formData = {};
        formData = reviewFormatter.likeReview(req);
        let rules = reviewValidator.likeReview();
        let validation = new Validator(formData, rules);
        if (validation.passes() && !validation.fails()) {
            returnResponse = await reviewModel.likeReview(formData, function(result) {
                console.log("result",result);
                res.json({"message":"success"});
            });
        } else {
            returnResponse = reviewResponse.failed(
                "form_fields_required",
                validation.errors.errors
            );
        }
        res.json(returnResponse);

    }

    async deletReview(req,res){
        console.log("reqqqqqqqqqqqqq",req.body);

        let role=req.body.role
        if(role='Admin'){
            await reviewModel.deletReview(req.body.reviewid)
            res.json({"message":"Review Deleted "})


        }


    }

    // async getAllAstrologer(req, res) {
        


    //     let result  = astrologerModel.getAllAstrologers();
    //     // console.log(result);
    //      res.json(await result);
    //     // let returnResponse = {};
    //     // let formData = {};
    //     // formData = astrologerFormatter.addAstrologer(req);
    //     // let rules = astrologerValidator.addAstrologer();
    //     // let validation = new Validator(formData, rules);
    //     // if (validation.passes() && !validation.fails()) {
    //     //     returnResponse = await astrologerService.addAstrologer(formData, function(result) {
    //     //         res.json(result);
    //     //     });
    //     // } else {
    //     //     returnResponse = astrologerResponse.failed(
    //     //         "form_fields_required",
    //     //         validation.errors.errors
    //     //     );
    //     // }
    //     // res.json(returnResponse);
    // }

    // async getAllAstrologersFilter(req, res) {

        
        


    //     let result  = astrologerModel.getAllAstrologersFilter(req.query);
    //     // console.log(result);
    //      res.json(await result);
    //     // let returnResponse = {};
    //     // let formData = {};
    //     // formData = astrologerFormatter.addAstrologer(req);
    //     // let rules = astrologerValidator.addAstrologer();
    //     // let validation = new Validator(formData, rules);
    //     // if (validation.passes() && !validation.fails()) {
    //     //     returnResponse = await astrologerService.addAstrologer(formData, function(result) {
    //     //         res.json(result);
    //     //     });
    //     // } else {
    //     //     returnResponse = astrologerResponse.failed(
    //     //         "form_fields_required",
    //     //         validation.errors.errors
    //     //     );
    //     // }
    //     // res.json(returnResponse);
    // }

    // async getAstrologerByID(req,res){
    //     console.log("req.body",req.params);
     
    //       let returnResponse = {};
    //      let formData = {};
    //     formData = astrologerFormatter.getAstrologerByID(req);
    //     console.log("formdtatatatta",formData);
    //     let rules = astrologerValidator.getAstrologerByID();
    //     console.log("rulesssssssssssss",rules);
    //     let validation = new Validator(formData, rules);
    //      if (validation.passes() && !validation.fails()) {
    //          console.log("iffffff vblovk");
    //         returnResponse = await astrologerModel.getAstrologerByID(formData, function(result) {
    //             res.json(result);
    //         });
    //     } else {
    //         console.log("elseeee block");
    //         returnResponse = astrologerResponse.failed(
    //             "form_fields_required",
    //             validation.errors.errors
    //         );
    //     }
    //     res.json(returnResponse);
     
    // }
    // async updateAstrologer(req,res){
    //     console.log("reqqqqqqqqqqqqq",req.body)

    //     let returnResponse = {};
    //     let formData = {};
    //    formData = astrologerFormatter.updateAstrologer(req);
    //    console.log("formdtatatatta",formData);
    //    let rules = astrologerValidator.updateAstrologer();
    //    console.log("rulesssssssssssss",rules);
    //    let validation = new Validator(formData, rules);
    //     if (validation.passes() && !validation.fails()) {
    //         console.log("iffffff vblovk");
    //        returnResponse = await astrologerModel.updateAstrologer(formData, function(result) {
    //            res.json(result);
    //        });
    //    } else {
    //        console.log("elseeee block");
    //        returnResponse = astrologerResponse.failed(
    //            "form_fields_required",
    //            validation.errors.errors
    //        );
    //    }
    //    res.json(returnResponse);
    



    // }


   
};