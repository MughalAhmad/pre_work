import React from 'react'

const Task1 = () => {
  return (
    <div className='flex w-full h-full px-24 gap-5' >
       <div className=" w-full h-[440px] px-5 flex-1 flex-col justify-evenly rounded-lg border-2 border-border bg-green-300">
    <div className="flex flex-col items-center ">
     <p className='text-5xl pb-2'>$150</p>
      <p className='w-40 text-center'>Hardware costs Billed monthly</p>
    </div>

  


    <div className='flex justify-center border-2 border-red-900 rounded-full p-1'>
    <img src="assets/icon-green-check.svg" alt='none' />
    <p>Add Server</p>
          </div>
  </div>
      {/* left side */}
    <div className=" w-full  md:w-72 xl:w-80 h-[440px] px-5 flex flex-col justify-evenly rounded-lg border-2 border-border ">
    <div className="flex flex-col items-center ">
     <p className='text-5xl pb-2'>$150</p>
      <p className='w-40 text-center'>Hardware costs Billed monthly</p>
    </div>

    <div className=" flex flex-col gap-4 ">
      <div className="flex gap-2">
      <img src="assets/icon-green-check.svg" alt='none' />
        <p className="text-neutral700" >
      6 Cores @ 2.90GHz
      </p>
      </div>
      <div className="flex gap-2">
      <img src="assets/icon-green-check.svg" alt='none' />
        <p className="text-neutral700" >
      2x 2TB NVME
      </p>
      </div>
      <div className="flex gap-2">
      <img src="assets/icon-green-check.svg" alt='none' />
        <p className="text-neutral700" >
      16GB RAM
      </p>
      </div>
      <div className="flex gap-2">
      <img src="assets/icon-green-check.svg" alt='none' />
        <p className="text-neutral700" >
      1 Dedicated IP Address
      </p>
      </div>
    </div>


    <div className='flex justify-center border-2 border-red-900 rounded-full p-1'>
    <img src="assets/icon-green-check.svg" alt='none' />
    <p>Add Server</p>
          </div>
  </div>
  </div>
  )
}

export default Task1