const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
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