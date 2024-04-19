import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "@/components/FesRegistration/Form";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/Loader";

const Registration = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [regdata, setregdata] = useState({
    count: 0,
    college: "",
    email: "",
  });
  const [loading, setloading] = useState(true);

  //check if the user is authenticated
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("api/user/verify");
        if (!response.data.success) {
          toast.error("You are not authorized to view this page");
          navigate("/login");
        } else {
          setAuthenticated(true);
          setregdata((prevState) => ({
            ...prevState,
            count: response.data.data.registration,
            college: response.data.data.collegeName,
            email: response.data.data.email,
          }));
        }
      } catch (error) {
        toast.error("Please Signup/Login to continue");
        console.error("Error in authorizing:", error);
        navigate("/login");
      } finally {
        setloading(false);
      }
    };
    checkAuthentication();
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black w-screen h-screen">
          <Loader />
        </div>
      ) : authenticated ? (
        <Form regdata={regdata} />
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Registration;
