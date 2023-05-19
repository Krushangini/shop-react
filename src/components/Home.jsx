import { useState } from "react";
import "./home.css";
import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const email = location?.state?.email;
  const navigate = useNavigate();

  function handleDropdownClick() {
    setIsDropdownOpen((prevState) => !prevState);
  }

  const handleProfile=()=>{
    setIsDropdownOpen(false);
    navigate("/profile", { state: { email } });
  }

  const handleLogOut=()=>{
    setIsDropdownOpen(false);
    navigate("/Login");
  }

  const handelLoanDetails=()=>{
    navigate("/LoanDetail",{state:{email}});
  }

  const handelApply=()=>{
    navigate("/apply-loan");
  }

  return (
    <>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <div className="profile-icon" onClick={handleDropdownClick}>
          <img
            className="profile"
            src="https://i.pravatar.cc/300"
            alt="Profile icon"
          />
          {isDropdownOpen && (
            <div className="dropdown-container">
              <ul className="dropdown-menu">
              <li className="dropdown-menu-item" onClick={handleProfile}>
                  <a>Profile</a>
                </li>
                <li className="dropdown-menu-item" onClick={handleLogOut}>
                  <a>Log out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="home-background"></div>
      <div className="container">
      <div className="loan-details" onClick={handelLoanDetails}>
        <h2>Loan Details</h2>
        {/* other loan details content */}
      </div>
      <div className="apply" onClick={handelApply}>
        <h2>Apply for Loan</h2>
        {/* apply for loan form */}
      </div>
      </div>
    </>
  );
};

export default Home;
