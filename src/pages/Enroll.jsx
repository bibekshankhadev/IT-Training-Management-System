import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import khalti from "../assets/khalti.png";
import esewa from "../assets/esewa.png";
import { AuthContext } from "../context/AuthProvider";

function Enroll() {
  const { state } = useLocation();
  const {user} = useContext(AuthContext);
const [choosePayment, setChoosePayment]= useState("");
 const navigate = useNavigate()
  let coursePrice = state?.fee
  let tax = coursePrice * (13/100);
  let totalAmount = coursePrice+tax

  const createPayment=async()=>{
    try {
      let res = await fetch("http://localhost:9000/api/payment/create",{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"Application/json"
      },
      body: JSON.stringify({
        courseEnrolled: state._id,
        totalAmount:totalAmount
      })
    })

    if(res.ok){
      res = await res.json();
      console.log(res);
      choosePayment === "esewa"? navigate("esewa",{state:res.paymentResponse}):navigate("khalti",{state:res.paymentResponse})
    }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="bg-gray-200 p-20">
      <div className="top-heading text-center px-20 pb-8 space-y-5">
        <h1 className="text-4xl font-bold">
          Your Journey <span className="text-blue-700">Starts Here</span>
        </h1>
        <p className="text-gray-600 text-[15px] font-semibold">
          Fill out the admission form below to secure your seat at Sipalaya IT
          Training. Follow our streamlined 4-step process to begin your journey.
        </p>
      </div>
      <div className="forms-payment flex gap-x-5 items-center">
        <div className="forms w-[60%] space-y-4 bg-blue-50 p-8 rounded-xl">
          <p className="text-gray-600 font-semibold text-md">Selected Course</p>
          <div className="selected-course flex gap-x-6 shadow-md shadow-gray-300 rounded-2xl border border-gray-500 p-3">
            <div className="image">
              <img
                className="h-full object-cover rounded-l-2xl"
                src={`http://localhost:9000/image/${state?.courseImage}`}
                alt=""
              />
            </div>
            <div className="course-details space-y-3">
              <h1 className="text-2xl font-bold">{state?.title}</h1>
              <p className="text-sm text-gray-500">{state?.description}</p>
              <h1 className="text-lg font-bold">NPR{state?.fee}</h1>
            </div>
          </div>
          
          <div className="name-email flex justify-between">
            <div className="flex flex-col w-[47%] gap-y-2">
              <label
                className="text-gray-600 font-semibold text-md"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
                type="text"
                value={user.fullName}
                disabled
              />
            </div>
            <div className="flex flex-col w-[47%] gap-y-2">
              <label
                className="text-gray-600 font-semibold text-md"
                htmlFor="email"

              >
                Email
              </label>
              <input
                id="email"
                className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
                type="email"
                value={user.email}
                disabled
              />
            </div>
          </div>
          <div className="phone flex flex-col gap-y-2">
            <label
              className="text-gray-600 font-semibold text-md"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
              type="number"
              value={user.phone}
                disabled
            />
          </div>
          <div className="payment-method">
            <h1 className="text-gray-600 font-semibold text-md pb-3">
              Choose payment method
            </h1>
            <div className=" flex gap-x-4">
              <div className={`esewa p-4 flex flex-col justify-center items-center rounded-2xl ${choosePayment === "esewa" ? "bg-[#aba8fb]":"bg-[#E7E6FF]"} `}
              onClick={()=>{
                setChoosePayment("esewa")
              }}>
                <img src={esewa} alt="" />
                <label htmlFor="esewa">Esewa</label>
              </div>
              <div className={`khalti p-4 flex flex-col justify-center items-center rounded-2xl ${choosePayment === "khalti" ? "bg-[#aba8fb]":"bg-[#E7E6FF]"} `} 
              onClick={()=>{
                setChoosePayment("khalti")
              }}>
                <img src={khalti} alt="" />
                <p>Khalti</p>
              </div>
            </div>
          </div>
          <button className="bg-blue-800 p-3 text-white rounded-2xl w-full shadow-lg hover:bg-blue-700 shadow-blue-400" 
          onClick={()=>{
            createPayment()
          }}
          >
            Complete Enrollment
          </button>
        </div>
        <div className="courseSummary  w-[40%] p-8">
          <div className="card bg-blue-800 text-white py-10 px-14 rounded-2xl shadow-lg shadow-blue-300 space-y-3">
            <h1 className="text-2xl font-bold text-center">Course Summary</h1>
            <div className="flex justify-between">
                <p className="text-[14px] text-gray-200">Course Fee:</p>  
                <p className="text-[16px] font-semibold">NPR {coursePrice}</p>  
            </div>
            <div className="flex justify-between">
                <p className="text-[14px] text-gray-200">Tax(VAT 13%):</p>
                <p className="text-[16px] font-semibold">NPR {tax}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-[14px] text-gray-200">Discount:</p>
                <p className="text-[16px] font-semibold">NPR 0</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p className="text-[15px] font-semibold">Total Amount:</p>
                <p className="text-[19px] font-bold">NPR {totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
