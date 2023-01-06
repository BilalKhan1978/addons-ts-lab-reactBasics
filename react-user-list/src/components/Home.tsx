import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () =>{
    const [contdata, setdata] = useState<Partial<Results>>({})
    const [error, setError] = useState({})
  
  interface Results {
    name:any;
    dob:any;
    email:string;
    gender: string;    
    phone:string;
    location:any;
  }  
  useEffect(() => {
    fetch('https://randomuser.me/api/')    
    .then(response => response.json())
    .then(res =>{ setdata(res.results[0]);console.log(contdata)})
    .catch(err => setError(err))
  },[])

  const refreshPage = () =>{
    window.parent.location = window.parent.location.href;
 }  
 
    return (
    <form>
      <h1>List of users</h1>
      <div className='name'><span>Name:</span> {contdata?.name?.first} {contdata?.name?.last} </div>
      <div className='age'><span>Age:</span> {contdata?.dob?.age} </div>
      <div className='name'><span>Address:</span> {contdata?.location?.street?.name} {contdata?.location?.street?.number},{contdata?.location?.postcode} ,{contdata?.location?.city}, {contdata?.location?.country} </div>    
      <div >
      <Link to="/Raima">Edit</Link>
      </div>
      
      <div >
      <br/><button className='buttonClass' onClick={() => refreshPage() }>Next</button>
      </div>
    
    </form>)
  }
  export default Home;