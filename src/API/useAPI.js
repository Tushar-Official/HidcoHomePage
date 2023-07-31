import { useEffect, useState } from "react";

const Usedata = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList", {
        method: "POST", // Set the HTTP method to POST
        headers: {
          "Content-Type": "application/json", // Set the request body content type
        },
         // Provide the request body (if required by the server)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while data is being fetched
  }

  // Render your component with the fetched data
  return data.data
};

export default Usedata;
