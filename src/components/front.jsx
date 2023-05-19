import { Link } from "react-router-dom";
import './front.css';

const Front=()=>{
    return(
        <div>
            <head>
            <link href='https://fonts.googleapis.com/css?family=Graduate' rel='stylesheet'></link>
            </head>
            <h1>Educational Loan </h1>
            <img src="https://static.india.com/wp-content/uploads/2021/10/Flights-1.png" alt="background"></img>
            <p className="ps">Explore the world of Knowledge</p>
            <button className="box"><Link to="/Login"><span className="sp">LOGIN</span></Link></button>
            <button className="box1"><Link to="/Sign"><span className="sp">SIGN UP</span></Link></button>
        </div>
    )
}
export default Front;