const CaptainModel = require('../models/captain.model');


module.exports.CaptainModel= async({
    firstname, lastname, email, password, color, plate,capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = new CaptainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicles: {
            color,
            plate,            
            capacity,
            vehicleType
        }
    })
    return captain;
}