import { useEffect } from "react";
import { default as Cookies } from "js-cookie";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = Cookies.get("jwtToken");

    if (!storedToken) {
      navigate("/");
    }
  }, []);

  return <p>WELCOME</p>;
};

export default LandingPage;
