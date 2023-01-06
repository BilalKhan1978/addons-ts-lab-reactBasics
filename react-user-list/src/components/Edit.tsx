import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Edit = () =>{
    const [contdata, setdata] = useState<Partial<Results>>({})
    const [error, setError] = useState({})
    console.log("inside Edit");
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

    return (<form>
      <h1>List of users</h1>
      <div className='name'><span>Name:</span><div>
                        <input value={contdata?.name?.first}></input>
                        </div>   </div>
      <div className='age'><span>Age:</span><div>
                        <input value={contdata?.dob?.age}></input>
                        </div>  </div>

      <div className='name'><span>StreetName:</span><div>
                        <input value={contdata?.location?.street?.name}></input>
                        </div>  </div>
      
      <div className='name'><span>StreetNumber:</span><div>
                        <input value={contdata?.location?.street?.number}></input>
                        </div>   </div>

      <div className='name'><span>PostCode:</span><div>
                        <input value={contdata?.location?.postcode}></input>
                        </div> </div>
      
      <div className='name'><span>City:</span><div>
                        <input value={contdata?.location?.city}></input>
                        </div>   </div>
      
      <div className='name'><span>Country:</span><div>
                        <input value={contdata?.location?.country}></input>
                        </div>   </div>
      
      <div ><br/><Link to="/">Save</Link></div>
      </form>)
  }
  export default Edit;