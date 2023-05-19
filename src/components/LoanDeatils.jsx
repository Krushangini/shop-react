import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './loandetail.css';

const LoanDetail = () => {
  const [user, setUser] = useState(null);
  const { state: { email } = {} } = useLocation();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/get-loan-details?email=${email}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [email]);


  //style
  const styles = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    borderRadius: '5px',
  };

  if (!user) {
    return (<>
    <div className="bacloan">
  </div>
    <div style={styles}>No Loan Has been found</div>
    </>);
  }

  return (
    <div className="loan-div">
      <div className="loanback"></div>
      <div className="prof">
        <img src="https://i.pravatar.cc/300" alt="Profile icon" />
      </div>
        <div className="loancontain">
      <div className="loandet">
        <h2>Email: {user.applicantname}</h2>
        <h2>Phone: {user.applicantmobile}</h2>
        <h2>address:  {user.applicantaddress}</h2>
        <h2>Email:  {user.applicantemail}</h2>
        <h2>pan:  {user.applicantpan}</h2>
        <h2>salary:  {user.applicantsalary}</h2>
        <h2>amount Req:  {user.loanamountrequired}</h2>
        <h2>repay month:  {user.loanrepaymentmonth}</h2>
        <h2>type:  {user.loantype}</h2>
      </div>
      </div>
    </div>
  );
};

export default LoanDetail;
