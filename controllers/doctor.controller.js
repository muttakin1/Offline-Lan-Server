const Doctor = require('../models/doctor.model');
const extend = require('lodash/extend');
const errorHandler = require('../helpers/dbErrorHandler');

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().select('first_name last_name email phoneNumber updated created');

        res.status(200).json({ success:true, data: doctors})
    } catch (err) {
        res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
}

const postDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        //console.log(doctor);
        await doctor.save();
        return res.status(200).json({ message: "Successfully signed up!", data: doctor })
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err)});
    }
}

// const getUserByID = async (req, res) => {
//     try {
//         let doctor = await Doctor.findById({_id: req.params.userId});
//         if (!doctor){
//             return res.status(400).json({ success: false });
//             }
//         res.status(200).json({ success: true, data: doctor });        
//     } catch (error) {
//         res.status(400).json({ success: false });
//     }
// }

// Load doctor to append to req
const doctorByID = async (req, res, next, id) => {
    try {
        let doctor = await Doctor.findById(id)
        if (!doctor)
            return res.status('400').json({
                error: "Doctor not found"
            })
        req.profile = doctor
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve doctor"
        })
    }
}

const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const update = async (req, res) => {
    try {
        let doctor = req.profile
        doctor = extend(doctor, req.body)
        doctor.updated = Date.now()
        await doctor.save()
        doctor.hashed_password = undefined
        doctor.salt = undefined
        res.json(doctor)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let doctor = req.profile
        let deletedUser = await doctor.remove()
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
                // --------------------------------------------

// const updateUser = async (req, res) => {
//     try {
//         const updatedUser = await Doctor.findByIdAndUpdate({ _id: req.params.userId }, req.body);

//         if (!updatedUser){
//             return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: updatedUser});
//     } catch {
//         res.status(400).json({ success: false });
//     }
// }

// const deleteUser = async (req, res) => {
//     try {
//         const deleteUser = await Doctor.findByIdAndDelete({ _id: req.params.userId });

//         if(!deleteUser){
//             return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: {} });
//     } catch {
//         res.status(400).json({ success: false });
//     }
// }


module.exports = {
    getAllDoctors,
    postDoctor,
    // getUser,
    // updateUser,
    // deleteUser,
    // getUserByID,
    doctorByID,
    read,
    update,
    remove
    // read,
    // update,
    // updateUser,
    // deleteUser

}