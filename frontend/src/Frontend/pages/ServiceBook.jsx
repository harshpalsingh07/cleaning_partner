import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ServiceBook() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [isSuccess, setIsSuccess] = useState("red");
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const App_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    getService(id);
    setFormData((prev) => ({
      ...prev,
      service: id,
    }));
  }, [id]);

  const getService = async (id) => {
    try {
      const response = await axios.get(`${App_URL}/web/service/${id}`);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value, // dynamic field update
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${App_URL}/web/bookings`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFormData({});
      setMessage(response.data.message);
      setIsSuccess("green");
      console.log(response);
    } catch (error) {
      setMessage(error.response.data.message);
      setIsSuccess("red");
      console.log(error);
    }
  };
  return (
    <>
      <section className="bg-white p-5 pt-40 md:pt-40">
        <div className="bg-green-100 max-w-lg mx-auto rounded-2xl p-6 shadow-lg">
          {message?.trim() && (
            <div
              class={`bg-${isSuccess}-100 border border-${isSuccess}-400 text-${isSuccess}-700 px-4 py-3 rounded relative`}
              role="alert"
            >
              <strong class="font-bold">
                {isSuccess === "green" ? "Success" : "Error"}!
              </strong>
              <span class="block sm:inline">{message}</span>
            </div>
          )}

          {/* Title */}
          <div className="text-2xl font-bold">
            {data?.category?.name}
            <span className="text-green-600 float-end">₹{data?.price}</span>
          </div>

          <p className="mt-3 font-semibold">
            Duration{" "}
            <span className="float-end">
              {data?.time} {data?.duration}
            </span>
          </p>

          {/* Form */}
          <div className="mt-8 space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Enter mobile number"
              onChange={handleChange}
              name="phone"
              value={formData.phone}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {/* Address */}
            <textarea
              placeholder="Enter your address"
              onChange={handleChange}
              name="address"
              rows="3"
              value={formData.address}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>

            {/* Date */}
            <input
              type="date"
              onChange={handleChange}
              name="date"
              value={formData.date}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {/* Time */}
            <input
              type="time"
              onChange={handleChange}
              name="time"
              value={formData.time}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceBook;
