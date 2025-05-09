import React from 'react'
import im1 from '../assets/images/1.jpeg'
import im2 from '../assets/images/2.jpg'
import im3 from '../assets/images/3.jpg'


function HomePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to My Learning Platform
      </h1>


      <p className="text-center text-lg text-gray-700 mb-8">
        Empowering learners with interactive, quality content and real-world projects.
      </p>

  
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-10">
  <div
    className="flex w-max"
    style={{
      animation: 'marquee 20s linear infinite'
    }}
  >
    
    <img src={im1} alt="Slide 1" className="w-full max-w-[100%]" />
    <img src={im2} alt="Slide 2" className="w-full max-w-[100%]" />
    <img src={im3} alt="Slide 3" className="w-full max-w-[100%]" />
    <img src={im1} alt="Slide 1" className="w-full max-w-[100%]" />
    <img src={im2} alt="Slide 2" className="w-full max-w-[100%]" />
    <img src={im3} alt="Slide 3" className="w-full max-w-[100%]" />
  </div>

  
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</div>
<br/>
<br/>
<br/>


     
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Aim</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide accessible, flexible, and affordable learning opportunities to students worldwide. 
          We aim to bridge the gap between academic knowledge and practical skills by offering hands-on courses in technology, 
          business, and personal development.
        </p>
      </div>
    </div>
  )
}

export default HomePage
