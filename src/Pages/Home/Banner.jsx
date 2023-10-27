import img1 from '../../assets/assets/images/banner/1.jpg'
import img2 from '../../assets/assets/images/banner/2.jpg'
import img3 from '../../assets/assets/images/banner/3.jpg'
import img4 from '../../assets/assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute h-full flex items-center gap-6 left-0 bottom-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='space-y-4 w-2/3 pl-12'>
        <h2 className='font-bold text-4xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div><button className='btn btn-primary mr-5'>Choose us</button>
        <button className='btn btn-outline btn-secondary'>Discover more</button></div>
      </div>
    </div>
    <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute h-full flex items-center gap-6 left-0 bottom-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='space-y-4 w-2/3 pl-12'>
        <h2 className='font-bold text-4xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div><button className='btn btn-primary mr-5'>Choose us</button>
        <button className='btn btn-outline btn-secondary'>Discover more</button></div>
      </div>
    </div>
    <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute h-full flex items-center gap-6 left-0 bottom-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='space-y-4 w-2/3 pl-12'>
        <h2 className='font-bold text-4xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div><button className='btn btn-primary mr-5'>Choose us</button>
        <button className='btn btn-outline btn-secondary'>Discover more</button></div>
      </div>
    </div>
    <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute h-full flex items-center gap-6 left-0 bottom-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='space-y-4 w-2/3 pl-12'>
        <h2 className='font-bold text-4xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div><button className='btn btn-primary mr-5'>Choose us</button>
        <button className='btn btn-outline btn-secondary'>Discover more</button></div>
      </div>
    </div>
    <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;