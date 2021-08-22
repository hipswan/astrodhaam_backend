"use strict";
let knex = require('../../../../config/knex');
// let seq_lize = require('../../../../config/sequelize');
//let common_knex = require('../../../../../config/common_knex');

module.exports = class OTPModel {
    constructor() { }

     displayAstrologer(){


        return 
            [
                {
                    "Id": "10",
                    "AstroUniqueId": "ADA000001",
                    "Name": "Kunal Gandhi",
                    "EmailId": "kuns987@gmail.com",
                    "MobileNo": "08850951174",
                    "AlternateNo": "",
                    "Password": "1234567",
                    "PrimaryLanguage": "",
                    "SecondaryLanguage": "",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "",
                    "Category": "",
                    "Gender": "M",
                    "Age": 32,
                    "Experience": 2,
                    "City": "Mira Road",
                    "Address": "",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 100,
                    "ChatOnlineStatus": false,
                    "NextChatOnlineTime": null,
                    "CallRate": 100,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Test",
                    "ProfilePicURL": "Kunal new.jpg",
                    "IsActive": false,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 735,
                    "CreatedBy": "1",
                    "CreatedDate": "2020-12-30T03:58:58.273Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-03-27T14:57:33.047Z"
                },
                {
                    "Id": "11",
                    "AstroUniqueId": "ADA000002",
                    "Name": "Acharya Jyotirmay",
                    "EmailId": "Jyotirmay@india.com",
                    "MobileNo": "07021209461",
                    "AlternateNo": "07021209461",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Vedic Astrology",
                    "Category": "Select Category",
                    "Gender": "M",
                    "Age": 45,
                    "Experience": 15,
                    "City": "Mumbai",
                    "Address": "Mahrashtra",
                    "Country": "India",
                    "PanCardNo": "rrvwev",
                    "AadharCardNo": "dgsd733238",
                    "BankName": "Hdfc Bank",
                    "BankAccountType": "Hindi, English",
                    "BankAccountName": "Sachin Account",
                    "BankAccountNo": "3243434728300",
                    "BankIFSCCode": "HDFC10999",
                    "BankBranchAddress": "Shivaji Nagar,Dadar",
                    "GSTNo": "Rt539233idj",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 20,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 20,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Jyotirmay is a professional Vedic Astrologer having more than 15 years of experience in the same field.  He attained his degree in Engineering from a Tezpur Univrsity. He accomplished his degree in Astrology from Delhi.Currently he is pursuing his studies in Chandra Kala Nadi Astrology. He aims at providing the most profound Astrology Guidance on the basis of the native’s horoscope and details provided. Moreover, He specializes in providing predictions over love, career, business, property, matchmaking and etc. Till date, he has done thousands of horoscopes reading and matchmaking. Besides, he has a clientele base spanning across several cities in India. He has severe expertise in providing Gemstone Consultation, Birth Time Rectification, Career and Business Consultation, Marriage Consultation, Love and Relationship and also Remedy Consultation. Till date, he has received several awards and appraisals in the field of astrology for the contribution of his work..",
                    "ProfilePicURL": "Ajay2.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 3572.5,
                    "CreatedBy": "1",
                    "CreatedDate": "2020-12-30T06:18:45.653Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-07-10T00:06:47.387Z"
                },
                {
                    "Id": "12",
                    "AstroUniqueId": "ADA000003",
                    "Name": "Asha",
                    "EmailId": "vijay@gmail.com",
                    "MobileNo": "08104795248",
                    "AlternateNo": "",
                    "Password": "123456",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": null,
                    "Category": null,
                    "Gender": "F",
                    "Age": 35,
                    "Experience": 5,
                    "City": "Mira Road",
                    "Address": "Shanti Nagar",
                    "Country": "India",
                    "PanCardNo": "Adsd324d",
                    "AadharCardNo": "4534534643",
                    "BankName": "Hdfc Bank",
                    "BankAccountType": "Saving",
                    "BankAccountName": "Account",
                    "BankAccountNo": "566544534535",
                    "BankIFSCCode": "HDFC10944",
                    "BankBranchAddress": "Shanti Nagar",
                    "GSTNo": "yt7656tttt5656",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 50,
                    "ChatOnlineStatus": false,
                    "NextChatOnlineTime": null,
                    "CallRate": 50,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Testing",
                    "ProfilePicURL": "Asha 1.jpg",
                    "IsActive": false,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 1325,
                    "CreatedBy": "1",
                    "CreatedDate": "2020-12-30T07:10:06.580Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-03-06T15:34:04.917Z"
                },
                {
                    "Id": "13",
                    "AstroUniqueId": "ADA000004",
                    "Name": "Guruji Vikas",
                    "EmailId": "vikas.baid@yahoo.com",
                    "MobileNo": "08657601505",
                    "AlternateNo": "1234567892",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Vedic Astrology",
                    "Category": "Love & Relationships,Marriage & Kundali,Career,Money & Investments,Business,Others",
                    "Gender": "M",
                    "Age": 45,
                    "Experience": 12,
                    "City": "Mumbai",
                    "Address": "Maharashtra",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 10,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 500,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Acharya Vikash is a well-experienced certified Astrologer. He has been practicing astrology since childhood. His area of specialization in Marriage, love life, Relationship, Health, Financial, Education, Career, and business issues and many more. He has completed his Shastri degree from Sampoornanand Sanskrit Vishwa Vidyalaya. He is expertise in Vedic astrology, Nadi Astrology, Numerology, and Prashna Kundali. He does not only give accurate predictions but also provides very effective remedies. He gives simple remedies which can easily be performed by every one. He is well-versed in Kundali reading and helps his clients. Till now, he has helped many MNCs employees, Students, Business Owners and Freelancers for all common issues through Astrology. ",
                    "ProfilePicURL": "Acharya Vikash 1.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 640,
                    "CreatedBy": "1",
                    "CreatedDate": "2020-12-30T13:29:38.433Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-05-30T11:01:16.717Z"
                },
                {
                    "Id": "14",
                    "AstroUniqueId": "ADA000005",
                    "Name": "Vikram",
                    "EmailId": "vikram@gmail.com",
                    "MobileNo": "09967970023",
                    "AlternateNo": "",
                    "Password": "123456",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": null,
                    "Category": null,
                    "Gender": "F",
                    "Age": 37,
                    "Experience": 5,
                    "City": "Lakhnaw",
                    "Address": "UttarPradesh",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 200,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 200,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "i am vikram",
                    "ProfilePicURL": "Suresh new.jpg",
                    "IsActive": false,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 315,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-01-12T17:45:01.000Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-03-06T15:32:43.030Z"
                },
                {
                    "Id": "18",
                    "AstroUniqueId": "ADA000105",
                    "Name": "Shubham",
                    "EmailId": "ajay.73in@gmail.com",
                    "MobileNo": "09967016032",
                    "AlternateNo": "8104795248",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Tarot Card Reading",
                    "Category": "Love & Relationships,Marriage & Kundali,Career,Money & Investments,Business,Others",
                    "Gender": "F",
                    "Age": 37,
                    "Experience": 5,
                    "City": "Jabalpur",
                    "Address": "Madhya Pradesh",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 20,
                    "ChatOnlineStatus": false,
                    "NextChatOnlineTime": null,
                    "CallRate": 20,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Tarot Reader and astrologer from Delhi with several years’ experience. Her style of reading is honest and compassionate. She doesn’t sugarcoat and doesn’t give false hopes but before declaring defeat, she takes a pause and requests God to take over. She believes that no matter what the situation is, with faith and patience, one can create a wonderful life for themselves.Tarot Cards are ancient instruments of divinity to connect with our higher consciousness. She believes in free will and that very little, if anything - is set in stone . She has helped people transform their lives from deep despair to desire the excel. She considers her intuition to be the strongest guiding force while doing the readings. She believes it is a gift that she has been given which helps her to help people to overcome their challenges and obstacles in life by providing practical remedies. Apart from tarot reading, she is also well knowned for her expertise in spiritual healing. She is a certified Lama Fera healer and uses her positive energy from a distance to assist the person in need. She believes in the power of the universe and in the mysterious ways it works. You can contact her regarding Marriage Consultation, Education and Career Consultation, Love & Relationships, Money related issues, Legal Matters and much more.",
                    "ProfilePicURL": "RINKU.jpeg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 353.75,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-02-08T19:55:17.690Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-07-10T00:07:26.810Z"
                },
                {
                    "Id": "19",
                    "AstroUniqueId": "ADA000106",
                    "Name": "Laliteshwar",
                    "EmailId": "info@astrodhaam.com",
                    "MobileNo": "07304903490",
                    "AlternateNo": "",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Vedic Astrology,Numerology,Prashna Kundali",
                    "Category": "Love & Relationships,Marriage & Kundali,Career,Money & Investments,Business,Others",
                    "Gender": "M",
                    "Age": 44,
                    "Experience": 18,
                    "City": "Patna",
                    "Address": "Bihar",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 20,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 20,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Laliteshwar is a renowned astrologer with an experience of more than 10 years in the field of Astrology. He is an expert of Vedic Astrology and Numerology and Vastu Shastra. Talking about his educational qualifications, He is Working from the last 10 years, he has served a number of people who actually trust him and rely upon his remedies and solutions. Despite being an Astrologer, he is always keen to learn new things in order to enhance his knowledge and develop newer ways of helping society and working for the benefit of the people. Besides this, you can also contact him regarding Marriage Consultation, Remedy Consultation, Health Consultation, Love & Relationship, Wealth & Property, Legal matters and much more.",
                    "ProfilePicURL": "Lalteshwar.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 150,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-02-09T15:10:44.780Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-07-10T00:07:53.010Z"
                },
                {
                    "Id": "26",
                    "AstroUniqueId": "ADA000109",
                    "Name": "Tarot Bhavoo",
                    "EmailId": "Bhovvikankaur@gmail.Com",
                    "MobileNo": "09711296758",
                    "AlternateNo": "09711253674",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Tarot Card Reading",
                    "Category": "Love & Relationships",
                    "Gender": "F",
                    "Age": 37,
                    "Experience": 7,
                    "City": "Delhi",
                    "Address": "Delhi",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 30,
                    "ChatOnlineStatus": false,
                    "NextChatOnlineTime": null,
                    "CallRate": 30,
                    "CallOnlineStatus": true,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Tarot Bhovvika and numerologist guides people and clarifies them to choose the right path with the guidance of Divine energies. She helps people strengthen their Chakras and balance their energies. Her intuitions and highly spiritual energy are based on her tarot card readings which has helped many people in their lives whether be it their career or their personal life she is very passionate towards guiding people with her skills. ",
                    "ProfilePicURL": "avtar8.jpg",
                    "IsActive": true,
                    "IsVerified": false,
                    "AD_Badge_Status": null,
                    "Wallet": 0,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-02-20T19:40:50.757Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-07-08T17:00:12.810Z"
                },
                {
                    "Id": "27",
                    "AstroUniqueId": "ADA000110",
                    "Name": "Manoj Joshi",
                    "EmailId": "srikantrawas@gmail.com",
                    "MobileNo": "08087098716",
                    "AlternateNo": "9822193790",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Vedic Astrology,Tarot Card Reading",
                    "Category": "Love & Relationships,Marriage & Kundali,Career,Money & Investments,Business,Others",
                    "Gender": "M",
                    "Age": 49,
                    "Experience": 20,
                    "City": "Pune",
                    "Address": "Maharashtra",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "dfdsfdsf",
                    "BankName": "fdsf",
                    "BankAccountType": "dfds",
                    "BankAccountName": "dfdf",
                    "BankAccountNo": "dfds",
                    "BankIFSCCode": "dfds",
                    "BankBranchAddress": "fsdf",
                    "GSTNo": "sdfds",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 45,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 45,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "I am renowned Vedic astrologer and Vastu Consultant. I have enlightened thousands of clients over past 20+ yrs. I have a scientific approach towards astrology. With my dedication, efforts and credence I have rejuvenated the lives of numerous people. I posses an optimistic approach towards life. I can guide with your problems like life, relations, career, health and prosperity. I am firm believer of the fact that everything can be worked about and one thing that needs to be known is to how to get it.08087098716",
                    "ProfilePicURL": "Srikant Rawas1.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 202.5,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-03-09T14:45:58.620Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-06-02T13:16:29.980Z"
                },
                {
                    "Id": "28",
                    "AstroUniqueId": "ADA000111",
                    "Name": "Tarot Priya",
                    "EmailId": "preetimjha.mdb@gmail.com",
                    "MobileNo": "07709733349",
                    "AlternateNo": "",
                    "Password": "123456",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Tarot Card Reading",
                    "Category": "Love & Relationships,Marriage & Kundali,Career,Money & Investments,Business,Others",
                    "Gender": "F",
                    "Age": 27,
                    "Experience": 7,
                    "City": "Mumbai",
                    "Address": "Maharashtra",
                    "Country": "India",
                    "PanCardNo": "JFNPK5989H",
                    "AadharCardNo": "",
                    "BankName": "Central bank Of India",
                    "BankAccountType": "Saving",
                    "BankAccountName": "PREETI KUMARI",
                    "BankAccountNo": "3780738195",
                    "BankIFSCCode": "CBINO280053",
                    "BankBranchAddress": "Madhubani",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 39,
                    "ChatOnlineStatus": false,
                    "NextChatOnlineTime": null,
                    "CallRate": 39,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Priya has been reading the Tarot for people from all walks of life across the globe. Tarot is much more than a tool of prediction and is used as a life guide for the present moment bringing peace, clarity and a way forward. The Tarot believes we are the Masters of our own Destiny and as energies change so may the outcome. She is a certified Tarot Master, and holds a diploma in Counselling Psychology, Aromatherapy and Crystal Therapy. A percentage of her earnings goes towards the rescue and rehabilitation of wildlife and street animals For a reading with her, all you need is a clear question and an open mind.",
                    "ProfilePicURL": "Asha 2.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 526.5,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-03-17T16:58:09.033Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-04-02T15:57:55.890Z"
                },
                {
                    "Id": "32",
                    "AstroUniqueId": "ADA000114",
                    "Name": "Acharya Kunal",
                    "EmailId": "harsh_c7@yahoo.com",
                    "MobileNo": "09323534417",
                    "AlternateNo": "",
                    "Password": "",
                    "PrimaryLanguage": "Hindi",
                    "SecondaryLanguage": "English",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "Vedic Astrology,Tarot Card Reading,Numerology,Vaastu,Fengshui,KP Astrology,Prashna Kundali",
                    "Category": "Love & Relationships,Marriage & Kundali,Career,Money & Investments,Business,Others",
                    "Gender": "M",
                    "Age": 44,
                    "Experience": 20,
                    "City": "Mumbai",
                    "Address": "Maharashtra",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 20,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 20,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Vedic Pandit and Astrologer Acharya Kunal is a well experiencenced \r\nexpert in Vedic astrology. He studied in Sanyas Asharam, Mumbai.\r\nHe has completed Vedic studied with all the degrees of the professional\r\nAstrologer in Sanskrit. He is having 15 years of experience. He is specialist\r\nin vedic Astrology, Finance, Vastu,Medical Astrology and Health. he can also\r\nsuggest gemstones and remedies improve the good results. You can be advised \r\nto find solutions to the problem of your life.",
                    "ProfilePicURL": "Kunal new.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 822.5,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-03-31T17:38:54.950Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-07-10T00:08:30.103Z"
                },
                {
                    "Id": "30",
                    "AstroUniqueId": "ADA000112",
                    "Name": "Tarot Trisha",
                    "EmailId": "shambhavisingh423@gmail.com",
                    "MobileNo": "09986015323",
                    "AlternateNo": "",
                    "Password": "123456",
                    "PrimaryLanguage": "",
                    "SecondaryLanguage": "",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "",
                    "Category": "",
                    "Gender": "F",
                    "Age": 32,
                    "Experience": 7,
                    "City": "Ghaziabad",
                    "Address": "Utter Pradesh",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 36,
                    "ChatOnlineStatus": true,
                    "NextChatOnlineTime": null,
                    "CallRate": 36,
                    "CallOnlineStatus": true,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "A professional Tarot reader with intuitive and psychic\r\nclairvoiant instincts. Trisha has done her management studies\r\nans master in Economics. With passion towards human psychological\r\nstudies and her constant interest has led her to a journey of HR in \r\nCorporate world and parallelly a Tarot reader and an Angel healer.\r\nSome other areas she works are yoga psychology, energy healer, \r\nMeditation, chakra balancing etc.\r\n",
                    "ProfilePicURL": "Trisha.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 324,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-03-22T15:10:16.447Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-06-11T14:53:05.650Z"
                },
                {
                    "Id": "31",
                    "AstroUniqueId": "ADA000113",
                    "Name": "Tarot Noopur ",
                    "EmailId": "noopurr11@gmail.com",
                    "MobileNo": "09953570570",
                    "AlternateNo": "",
                    "Password": "123456",
                    "PrimaryLanguage": "",
                    "SecondaryLanguage": "",
                    "PrimaryLanguageId": "0",
                    "SecondaryLanguageId": "0",
                    "Expertise": "",
                    "Category": "",
                    "Gender": "F",
                    "Age": 36,
                    "Experience": 7,
                    "City": "New Delhi",
                    "Address": "Delhi",
                    "Country": "India",
                    "PanCardNo": "",
                    "AadharCardNo": "",
                    "BankName": "",
                    "BankAccountType": "",
                    "BankAccountName": "",
                    "BankAccountNo": "",
                    "BankIFSCCode": "",
                    "BankBranchAddress": "",
                    "GSTNo": "",
                    "MobileVerified": false,
                    "EmailVerified": false,
                    "ChatRate": 20,
                    "ChatOnlineStatus": false,
                    "NextChatOnlineTime": null,
                    "CallRate": 20,
                    "CallOnlineStatus": false,
                    "NextCallOnlineTime": null,
                    "PromotionalStatus": false,
                    "PromotionalRate": null,
                    "DefaultRatingPoint": 5,
                    "ProfileSummary": "Tarot Noopurr is a professional tarot card \r\nreader from new delhi. She works from her \r\nheart on this subject . She has a natural \r\nability to predict the future via channeling \r\none’s Energy. She connects with people’s \r\nSoul and help them to heal their inner \r\nselves. From past 7 years she has helped \r\nher clients to solve their problems by \r\ngiving them realistic solutions and lo shu \r\ngrid remedies . She is very understanding \r\nand listens to her clients patiently .",
                    "ProfilePicURL": "Astro Noopur1.jpg",
                    "IsActive": true,
                    "IsVerified": true,
                    "AD_Badge_Status": null,
                    "Wallet": 370,
                    "CreatedBy": "1",
                    "CreatedDate": "2021-03-31T16:48:54.910Z",
                    "UpdatedBy": "1",
                    "UpdatedDate": "2021-07-14T11:31:23.767Z"
                }
            ]
        
    
        return knex.select("*").from("tb_mst_user");
         
       
    }

    getAllAstrologers(){
        

        return knex.select("*")
        .from("tb_mst_astrologer")
        .leftJoin("tb_transaction_ivr","tb_transaction_ivr.AstroId","tb_mst_astrologer.Id")

    }

    getAllAstrologersFilter(data){
        console.log("datatattatta",data);

        let obj = knex.select("*").from("tb_mst_astrologer");
    
        if (data['search']) {   
            obj.where("tb_mst_astrologer.name",  "like", "%" + data['search'] + "%") 
            obj.orWhere("tb_mst_astrologer.Expertise",  "like", "%" + data['search'] + "%")
        }

        // if (data['search']) {
        //     obj.where("tb_mst_astrologer.experties",  "like", "%" + data['name'] + "%");
        // }

        return obj 
      



    }
    getAstrologerByID(data){
        return knex.select("*").from("tb_mst_astrologer")
                   .where("Id",data.Id)

                //    sendOTP

    }
    sendOTP(data){

        let OTP=1234
        return{
            status:"Not Registered",
            OTP:OTP
        }

    }
    updateAstrologer(data){
        console.log("dattatattatattaa in modelllll",data)

        let astroId=data.AstroId
        delete data.AstroId
            return knex("tb_transaction_ivr")
                .update(data)
                .where("AstroId",astroId )
        

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