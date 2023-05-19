import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import './apply.css';

function Apply() {
  const [name, setName] = useState('');
  const [add, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [salary, setSalary] = useState('');
  const [month, setMonth] = useState('');
  const [required, setRequried] = useState('');
  const [type, setType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!name||!add||!email||!phone||!pan||!salary||!month||!type||!required){
        setErrorMessage("fill all the column");
        return;
    }
    setIsLoading(true);
    const data = {
        applicantaddress:add,
        applicantemail:email,
        applicantmobile:phone,
        applicantname:name,
        applicantpan:pan,
        applicantsalary:salary,
        loanamountrequired:required,
        loanrepaymentmonth:month,
        loantype:type,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8080/apply-loan", data);
      if (response.status === 200) {
          setIsLoading(true);
          console.log("registered successfull");
          navigate("/LoanDetail", { state: {email} });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      console.log("failed");
      setErrorMessage("fill all the column");
    }
  };

  return (
  <>
  <div className='appback'></div>
  <header>Apply for Loan</header>
    <form onSubmit={handleSubmit} className='app-form'>
    <label className='app-lab'>
        Name:
        <input type="text" value={name} className='app-in' onChange={(e) => setName(e.target.value)} />
      </label>
      <label className='app-lab'>
        Address:
        <input type="text" value={add} className='app-in' onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label className='app-lab'>
        Email:
        <input type="text" value={email} className='app-in' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='app-lab'>
        Pan:
        <input type="password" value={pan} className='app-in' onChange={(e) => setPan(e.target.value)} />
      </label>
      <label className='app-lab'>
        Phone:
        <input type="text" value={phone} className='app-in' onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label className='app-lab'>
        Salary:
        <input type="text" value={salary} className='app-in' onChange={(e) => setSalary(e.target.value) } />
      </label>
      <label className='app-lab'>
        Months for Repayment:
        <input type="text" value={month} className='app-in' onChange={(e) => setMonth(e.target.value) } />
      </label>
      <label className='app-lab'>
      loan amount required:
        <input type="text" value={required} className='app-in' onChange={(e) => setRequried(e.target.value) } />
      </label>
      <label className='app-lab'>
      loan type:
        <input type="text" value={type} className='app-in' onChange={(e) => setType(e.target.value) } />
      </label>
      <button type="submit">{isLoading ? "Loading..." : "Apply"}</button>
      {errorMessage && <div className="error-1">{errorMessage}</div>}
    </form>
    </>
  );
}

export default Apply;
