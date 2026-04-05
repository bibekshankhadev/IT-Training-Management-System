import { IoLocationOutline, IoCall } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [purposeError, setPurposeError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length <= 0) {
      setNameError("Full Name should be not be empty.");
      return;
    }
    if (email.length <= 0) {
      setEmailError("Email be not be empty.");
      return;
    }
    if (purpose.length <= 0) {
      setPurposeError("Purpose of Inquiry should be not be empty.");
      return;
    }
    if (message.length <= 0) {
      setMessageError("Your Message should be not be empty.");
      return;
    }

    try {
      let res = await fetch("http://localhost:9000/api/public/create-contact", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ fullName:name, email, purpose, yourMessage:message }),
      });      
      if(res.ok){
        res = await res.json(); 
        alert(res.message)
        setName("")
        setEmail("")
        setPurpose("")
        setMessage("")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main flex p-10 justify-around items-center">
      <div className="left space-y-5 w-[50%] p-15">
        <h1 className="text-3xl font-bold text-gray-600 tracking-wider">
          Let's Start a Conversation.
        </h1>
        <p className="text-md font-semibold text-gray-600 tracking-wide">
          Have a question about our enrollment process, or looking for corporate
          training solutions? Our team is here to help you navigate your
          technical journey.
        </p>
        <div className="icon-details flex items-center gap-x-3">
          <div className="icon bg-gray-200 text-gray-800 text-xl p-3 rounded-2xl">
            <IoLocationOutline />
          </div>
          <div className="details">
            <h1 className="text-lg font-semibold text-gray-800">
              Physical Location
            </h1>
            <p className="text-sm">Narephat 32- Koteshwor, Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="icon-details flex items-center gap-x-3">
          <div className="icon bg-gray-200 text-gray-800 text-xl p-3 rounded-2xl">
            <IoCall />
          </div>
          <div className="details">
            <h1 className="text-lg font-semibold text-gray-800">
              Direct Contact
            </h1>
            <p className="text-sm">+977 1 4XXXXXX info@sipalaya.edu.np</p>
          </div>
        </div>
        <div className="icon-details flex items-center gap-x-3">
          <div className="icon bg-gray-200 text-gray-800 text-xl p-3 rounded-2xl">
            <FaRegClock />
          </div>
          <div className="details">
            <h1 className="text-lg font-semibold text-gray-800">
              Working Hours
            </h1>
            <p className="text-sm">
              Sun - Fri: 7:00 AM - 8:00 PM Saturday: Open for Workshops
            </p>
          </div>
        </div>
      </div>
      <form
        className="right w-[50%] space-y-4 bg-blue-50 p-15 rounded-xl"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-3xl text-gray-800 font-bold">Send an Inquiry</h1>
        {/* name and email */}
        <div className="flex justify-between">
          <div className="flex flex-col w-[47%] gap-y-2">
            <label
              htmlFor="name"
              className="text-gray-600 font-semibold text-md"
            >
              Full Name
            </label>
            <input
              className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
              type="text"
              id="name"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            {nameError.length > 0 && (
              <p className="text-red-600 text-md">*{nameError}</p>
            )}
          </div>
          <div className="flex flex-col w-[47%] gap-y-2">
            <label
              className="text-gray-600 font-semibold text-md"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
              type="email"
              id="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError.length > 0 && (
              <p className="text-red-600 text-md">*{emailError}</p>
            )}
          </div>
        </div>

        {/* purpose of enquiry */}

        <div className="flex flex-col gap-y-2">
          <label
            className="text-gray-600 font-semibold text-md"
            htmlFor="purpose"
          >
            Purpose of Inquiry
          </label>
          <select
            className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
            name=""
            id="purpose"
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value);
              setPurposeError("");
            }}
          >
            <option value="">---Purpose of Inquiry---</option>
            <option value="course-enrollment">Course Enrollment</option>
            <option value="payment-options">Payment options</option>
          </select>
        </div>
        {purposeError.length > 0 && (
          <p className="text-red-600 text-md">*{purposeError}</p>
        )}

        {/* your message */}
        <div className="flex flex-col gap-y-2">
          <label
            className="text-gray-600 font-semibold text-md"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="bg-gray-200 text-md text-gray-500 p-2 rounded-xl px-5"
            name=""
            id=""
            placeholder="Tell Us how we can help you"
            rows="4"
            cols="15"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError("");
            }}
          ></textarea>
          {messageError.length > 0 && (
            <p className="text-red-600 text-md">*{messageError}</p>
          )}
        </div>

        <div className="px-30">
          <button className="bg-blue-800 text-white py-3 w-full rounded-2xl hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
