const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },

    vehicles: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehiclesType: {
            type: String,
            required: true,
            enum: ['car', 'auto', 'bike',],
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

CaptainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' })
    return token;
};
CaptainSchema.method.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

CaptainSchema.static.hashpassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const CaptainModel = mongoose.model('Captain', CaptainSchema);
module.exports = CaptainModel;