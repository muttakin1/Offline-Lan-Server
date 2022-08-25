const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    reportID: {
        type: String,
    },
    reportDetails: [{
        test:{
            type: String,
        },
        result:{
            type: String,
        },
        referenceValue:{
            type: String,
        }
    }],
    referredBy: {
        type: String
    },
    specimen:{
        type: String 
    }


})
module.exports = mongoose.model("Report", ReportSchema);