import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='bg-[url("/public/images/pattern-bg.png")]  bg-cover h-[250px]'>
        <div className='flex pt-5  flex-col justify-center  items-center'>
          <h1 className='text-2xl font-medium text-white pb-5'>
            IP Address Tracker
          </h1>
          <div className='flex min-w-[328px] min-h-[58px] justify-center rounded-2xl text-2xl  items-center'>
            <input className='w-10/12 min-h-[58px] rounded-l-2xl pl-5' />
            <button className='w-2/12 bg-black text-white min-h-[58px]  rounded-r-2xl'>
              {'>'}
            </button>
          </div>
          <div className='min-w-[328px] grid place-items-center sm:min-h-[157px] rounded-2xl mt-8 min-h-[300px] bg-white z-10'>
            <div className='grid grid-cols-1 sm:grid-cols-4 sm:divide-x content-center sm:flex-row sm:pl-8 sm:pr-8 sm:mb-0'>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3 sm:pr-3'>
                <p className='text-xs font-medium text-darkgray'>IP ADDRESS</p>
                <p className='pt-2 font-medium text-xl'>192.212.174.101</p>
              </div>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3 sm:pr-3'>
                <p className='text-xs font-medium text-darkgray pt-4 sm:pt-0'>
                  LOCATION
                </p>
                <p className='pt-2 font-medium text-xl capitalize'>
                  BROOKLYN, NY <br className='hidden sm:block' /> 10001
                </p>
              </div>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3 sm:pr-3'>
                <p className='text-xs font-medium text-darkgray pt-4 sm:pt-0 '>
                  TIMEZONE
                </p>
                <p className='pt-2 font-medium text-xl'>UTC -05:00</p>
              </div>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3'>
                <p className='text-xs font-medium text-darkgray pt-4 sm:pt-0'>
                  ISP
                </p>
                <p className='pt-2 font-medium text-xl'> SpaceX Starlink</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='z-0'>
        <h1>The map will be here and only here alone</h1>
      </div>
    </div>
  );
};

export default Home;
