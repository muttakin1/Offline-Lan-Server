const Patient = require("../models/patient.model");

const getAllPatient = async (req, res) => {
    try {
        const patients = await Patient.find({});

        res.status(200).json({ success: true, data: patients })
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

const postPatient = async (req, res) => {
    console.log(req.body)
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();

        res.status(200).json({ success: true, data: newPatient });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
    }
}

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById({ _id: req.params.patientId });

        if (!patient) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: patient });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

const getPatientByDetails = async (req, res) => {
    try {
        const patient = await Patient.findOne({ patientName: req.body.patientName, age: req.body.age, sex: req.body.sex });

        if (!patient) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: patient });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate({ _id: req.params.patientId }, req.body);

        if (!updatedPatient) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: updatedPatient });
    } catch {
        res.status(400).json({ success: false });
    }
}

const deletePatient = async (req, res) => {
    try {
        const deletePatient = await Patient.findByIdAndDelete({ _id: req.params.patientId });

        if (!deletePatient) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
    } catch {
        res.status(400).json({ success: false });
    }
}

module.exports = {
    getAllPatient,
    postPatient,
    getPatientById,
    updatePatient,
    deletePatient,
    getPatientByDetails
}