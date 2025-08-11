import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //navigate to home
import vol1 from "../assets/vol1.png";
import bgImage from "../assets/volunteer-bg.png"; // background image
import heartIcon from "../assets/heart.png";
import unicef from "../assets/unicef.png";
import { FaArrowLeft } from "react-icons/fa"; // Using react-icons for the arrow

const volunteerOpportunities = [
  {
    id: 1,
    title: "Answer the Call: Help Rebuild After the Floods",
    image: vol1,
    description: `Communities are struggling after devastating floods and your time can make all the difference.
    Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.
    Communities are struggling after devastating floods and your time can make all the difference.
    Join our volunteer efforts to deliver aid, support families, and help rebuild what was lost.`,
    date: "2nd July, 2025",
    org: "Unicef",
    orgLogo: unicef,
    address: "No.11/26, Patehein Street, San Chaung Township, Yangon (Unicef)",
  },
];

export default function VolunteerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const volunteer = volunteerOpportunities.find(
    (item) => item.id === parseInt(id)
  );

  if (!volunteer) {
    return (
      <div className="text-center py-20 text-gray-600">
        Volunteer opportunity not found.
      </div>
    );
  }


  return (
    <div
      className="min-h-screen px-6 py-10 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      
        {/* Back Arrow */}
        <div className="relative">
          <button
            onClick={() => navigate("/volunteering")}
            className="flex items-center gap-2 text-[#F180FE] font-semibold mb-6"
          >
            <FaArrowLeft className="text-xl" />
            <span>Back</span>
          </button>
        </div>

      {/* Main Detail Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 backdrop-blur-sm bg-opacity-95 mb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src={volunteer.orgLogo} alt={volunteer.org} className="h-6" />
            <span className="text-gray-800 font-semibold">{volunteer.org}</span>
          </div>
          <p className="text-gray-500 text-sm">{volunteer.date}</p>
        </div>

        {/* Image */}
        <img
          src={volunteer.image}
          alt={volunteer.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {volunteer.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          {volunteer.description}
        </p>

        {/* Address */}
        <p className="text-gray-700 font-medium">{volunteer.address}</p>
      </div>

{/* Form Section */}
<div className="relative min-h-screen bg-transparent flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-lg md:text-xl font-semibold text-center mb-8">
        Fill in the following form to volunteer
      </h2>

      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* <button
          type="submit"
          className="bg-[#F180FE] text-white px-10 py-4 rounded-half font-semibold hover:bg-[#D160E0] transition">
          Submit
        </button> */}
        {/* Centered Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#F180FE] text-white px-10 py-3 rounded-half font-semibold hover:bg-[#D160E0] transition"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-40 text-center">
        <img src={heartIcon} alt="heart" className="w-30 mx-auto mb-10" />
        <p className="text-gray-800 font-medium">
          The world is brighter because of people like you. <br />
          Thank you for your meaningful contribution.
        </p>
      </div>
    </div>


      {/* Bottom Icon & Text
      <div className="text-center mt-8">
        <img
          src={heartIcon}
          alt="Heart Icon"
          className="h-16 mx-auto mb-4"
        />
        <p className="text-gray-700 text-sm">
          The world is brighter because of people like you. <br />
          Thank you for your meaningful contribution.
        </p>
      </div> */}



    </div>
  );
}
