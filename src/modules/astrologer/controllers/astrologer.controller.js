"use strict";
let Validator = require("validatorjs");
// let astrologerService = new(require("../services/astrologer.service"))();
// let astrologerFormatter = new(require("../formatters/astrologer.formatter"))();
// let astrologerValidator = new(require("../validators/astrologervalidator"))();
// let astrologerResponse = require("../responses/astrologer.response");
let astrologerModel = new(require("../models/astrologer.model"))();


module.exports = class astrologerController {
    constructor() {}

    async addAstrologer(req, res) {
        


        let result  = astrologerModel.displayAstrologer();
        
        res.json(result.json);
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


   
};