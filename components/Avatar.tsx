import React from 'react'

const Avatar = () => {
    return (
      <div className="absolute top-4 left-4 flex items-center justify-center w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" style={{zIndex: 5000}}>
        <img src="/ProfilPic.jpg" alt="" className="w-[100%] h-[100%] object-cover rounded-full" />
      </div>
    )
  }
  
export default Avatar