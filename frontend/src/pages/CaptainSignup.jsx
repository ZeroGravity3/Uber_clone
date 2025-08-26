import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [name, setName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

const {captain , setCaptain}= React.useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleTypeype: vehicleType,
      },
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
    if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain)
        localStorage.setItem('captainToken', data.token)
        

    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");

  };




  return (
    <div className="p-8 h-screen flex flex-col justify-between max-w-2xl mx-auto">
      <div className="space-y-6">
        <img
          className="w-20 mb-8"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h3 className="text-xl font-medium">What's our Captain name</h3>
            <div className="flex gap-4">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-3 border text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-3 border text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">What's our Captain email</h3>
            <input
              required
              className="bg-[#eeeeee] rounded-lg px-4 py-3 border w-full text-base placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee] rounded-lg px-4 py-3 border w-full text-base placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">Vehicle Information</h3>
            <div className="flex gap-4">
            
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-3 border text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
               <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-3 border text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4">
             
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-3 border text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
               <select
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-3 border text-Base  placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="Car">Car</option>
              <option value="Auto">Auto</option>
              <option value="Moto">Moto</option>
            </select>
            </div>
           
          </div>

          <button className="bg-[#111] text-white font-semibold rounded-lg px-4 py-3 w-full text-lg hover:bg-[#222] transition-colors">
            Create Captain Account
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 hover:text-blue-700">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-8">
        <p className="text-[11px] text-gray-500 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline cursor-pointer">Google Privacy Policy</span> and{" "}
          <span className="underline cursor-pointer">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup