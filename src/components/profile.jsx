import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { state: { email } = {} } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/get-user?email=${email}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [email]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");

    if (confirmed) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8080/delete-account?email=${user.email}`);

        if (response.status === 200) {
          navigate("/");
        } else {
          console.error(response);
          alert("Failed to delete account. Please try again later.");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to delete account. Please try again later.");
      }
    }
  };

  return (
    <div className="prof-container">
      <div className="profback"></div>
      <div className="prof-image">
        <img src="https://i.pravatar.cc/300" alt="Profile icon" />
      </div>
      <div className="contain">
        <div className="prof-details">
          <h2>Email: {user.email}</h2>
          <h2>Phone: {user.phone}</h2>
          <h2>Role: {user.userrole}</h2>
          <button onClick={handleDelete} className="delete" >Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
