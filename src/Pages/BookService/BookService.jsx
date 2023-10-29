import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const BookService = () => {
    const service=useLoaderData()
    const {img,title}=service
    const {user}=useContext(AuthContext)
    const handleBook=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const date=e.target.date.value;
        const email=user?.email;
        const phone=e.target.phone.value;
        const order={
            customerName:name,
            customerDate:date,
            customerEmail:email,
            customerPhone:phone,
            img,title

        }
        fetch('http://localhost:5001/bookings',{
            method:"POST",
            headers:{
                   'content-type':"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json()
        .then(data=>{
            console.log(data);
            alert('added a booking')
        }))
    }
    return (
        <div>
           
            <div>
            <h2 className="text-center  text-3xl">Check Out:{service.title}</h2>
            <form className="card-body " onSubmit={handleBook}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required name="name" defaultValue={user?.displayName}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Date" className="input input-bordered" required  name="date"/>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  name="email" defaultValue={user?.email}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" required name="phone" />
         
        </div>
                </div>
        
        <div className="form-control mt-6">
          <button className="btn  btn-block">Oder confirm</button>
        </div>
      </form>
        </div>
        </div>
    );
};

export default BookService;