const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blackListTokenModel = require('../models/blacklistToken.model');
const { validationResult } = require('express-validator');



module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, email, password, vehicle } = req.body;
    const isCaptainAlreadyExists = await CaptainModel.findOne({ email });

    const hashedPassword = await captainService.hashPassword(password);
     const captain = await captainService.CaptainModel({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehiclesType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({token, captain});
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await CaptainModel.findOne({ email }).select('+password');

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const token = captain.generateAuthToken();
    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    req.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}