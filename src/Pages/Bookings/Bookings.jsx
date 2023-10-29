import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    const url=`http://localhost:5001/bookings?customerEmail=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Bookings;