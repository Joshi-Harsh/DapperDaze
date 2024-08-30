import React from 'react'

const HomeSectionCard = () => {
  return (
    <div
      className="cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img className='object-cover object-top w-full h-fu;;'
          src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
          alt=""
        />
        </div>
          
      <div className='p-4'>
        <h3>Nofilter</h3>
      </div>
    </div>
  );
}

export default HomeSectionCard