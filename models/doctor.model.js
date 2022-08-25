const mongoose = require ('mongoose');
const crypto = require('crypto');

const DoctorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    last_name: {
        type: String,
        trim: true,
        // required: [true, 'Name is required']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, 'Email already exists'],
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        // required: "Email required"
    },
    hashed_password: {
        type: String,
        // required: "Please enter your password"
    },
    salt: String,
    accountType: {
        type: Number,
        default: 0
    },
    phoneNumber: {
        type: String,
        minLength: [11, 'Enter a valid contact number']
    },
    profileImage: {
        data: Buffer,
        contentType: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    //timestamps: {}
});

DoctorSchema
    .virtual('password')
    .set(function(password) {
        this._password = password
        this.salt = this.makeSalt ()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function() {
        return this._password
    })

DoctorSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password) {
        if (!password) return ''
        try {
            return crypto
                .createHmac('sha256', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

DoctorSchema.path('hashed_password').validate(function(v) {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.')
    }
    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required')
    }
}, null)

module.exports = mongoose.model("Doctor", DoctorSchema);