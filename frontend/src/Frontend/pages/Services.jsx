import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Services() {
  const [data, setData] = useState([]);
  const App_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await axios.get(`${App_URL}/web/services`);
      setData(response.data.data);
      console.log("response", response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <section className="bg-white p-40">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {data.map((row, index) => (
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {row.category.name}
              </h3>
              <p className="text-3xl font-bold mb-4 text-black">₹{row.price}</p>

              <ul className="text-green-800 space-y-2 mb-6">
                <li>
                  {row.time} {row.duration}
                </li>
              </ul>
              <div
                className="text-black"
                dangerouslySetInnerHTML={{ __html: row.description }}
              />

              <Link
                to={`/service/${row._id}`}
                className="w-full mt-auto bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-center block"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
