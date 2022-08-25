const mongoose = require ('mongoose');

const PatientSchema = new mongoose.Schema({
    patientName: {
        type: String,
        trim: true, //What is trim?
        //required: [true, 'Name is //required']
    },
    last_name: {
        type: String,
        trim: true, //What is trim?
        //required: [true, 'Name is //required']
    },
    contactNo: {
        type: String,
        minLength: [11, 'Enter a valid contact number']
    },
    patientID: {
        type: String
    },
    age: {
        type: String
        // //required: true
    },
    checkedBy: {
        type: String
    },
    sex: {
        type: String,
        // //required: true,
        enum: ['Male', 'Female', 'Other']
    },
    testType: {
        type: String,
        // //required: true,
        enum: ['Blood']
    },
    reports: [{ type: mongoose.Schema.ObjectId, ref: 'Report' }]
});

module.exports = mongoose.model("Patient", PatientSchema);