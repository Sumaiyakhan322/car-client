import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Booking from "./Booking";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  // let [count,setCount]=useState(1)
 
  const url = `http://localhost:5001/bookings?customerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const handleDelete=id=>{
    const procced=confirm('are you sure')
    if(procced){
      fetch(`http://localhost:5001/bookings/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          const remianing=bookings.filter(booking=>booking._id !==id)
          setBookings(remianing)
        }
      })
    }
  }
  const handleUpdate=id=>{
    fetch(`http://localhost:5001/bookings/${id}`,{
      method:"PATCH",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify({status:'Confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        //update state
        const remaining=bookings.filter(booking=>booking._id !==id)

        const updated=bookings.find(booking=>booking._id ===id)
        updated.status==='Confirm'
        const newBooking=[updated, ...remaining]
        setBookings(newBooking)
      }
    })
   
  }

  // const handleDelete = async (id) => {
  //   const res = await fetch(`http://localhost:5001/bookings/${id}`, {
  //     method: "DELETE",
  //   });
  //   const data=await res.json();
  //   if(data.acknowledged){
  //     setCount((count)=>count=count+1)
  //     console.log(count);
  //   }
  // };
  return (
    <div>
      <h2>My bookings:{bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="flex gap-16">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Customer name</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <Booking
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></Booking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
