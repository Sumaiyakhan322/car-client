import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5001/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center my-10">
        <h3 className="text-4xl text-orange-600 font-bold">Our services</h3>
        <h2 className="text-5xl ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        {services.map((service) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={service.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-orange-500 text-lg">Price:${service.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/book/${service._id}`}><button className="btn btn-primary bg-orange-600 ">Book Now</button></Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
