const Report = require("../models/report.model");
const Patient = require("../models/patient.model");


const addReportToPatient = async (details, newReport) => {
    try {
        const patient = await Patient.findOneAndUpdate({ patientName: details.patientParticulars.patientName, sex: details.patientParticulars.sex, age: details.patientParticulars.age }, { $addToSet: { reports: newReport._id }, }, { new: true, upsert: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
}

const getReports = async (req, res) => {
    try {
        const reports = await Report.find({});

        res.status(200).json({ success: true, data: reports })
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

const createReport = async (req, res) => {
    try {
        const newReport = new Report(req.body);
        addReportToPatient(req.body, newReport)
        await newReport.save();

        res.status(200).json({ success: true, data: newReport });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
    }
}

module.exports = {
    getReports,
    createReport,
}