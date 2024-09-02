import React from 'react';


const Task2 = () => {

  return (
    <div className="flex w-full flex-col items-center p-5 ">
      <div className=" flex w-full flex-col  rounded-md border-2 border-ring px-4 pt-6 pb-5 md:gap-0 xl:w-3/4 ">

        <div className=' mb-12'>
         <h1 className='text-3xl font-bold pb-2'>Your Plan</h1>
         <p>Based on your current choices.</p>
        </div>

        <div className='  flex flex-col pb-4 gap-3'>
            <div className='flex justify-between'><span>Servers</span><span>$1150</span></div>
            <div className='flex justify-between'><span>Bandwidth Commit</span><span>$60</span></div>
            <div className='flex justify-between border-b-2 border-gray-500 pb-4'><span>Support Plan</span><span>$15</span></div>
            <div className='flex justify-between'><span>Total</span><span>$1225</span></div>

        </div>

        <div className='flex justify-center mt-7 md:justify-end '>
            <button className='flex gap-2 px-4 py-2 rounded-full bg-red-100'><span>G</span><span>Go to checkout</span></button>
        </div>
        
      </div>
    </div>
  );
};

export default Task2;