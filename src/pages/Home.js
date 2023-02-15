import { Icon } from 'leaflet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Map,
  Marker,
  Popup,
} from 'react-leaflet';

const Home = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipAddressSubmit, setIpAddressSubmit] = useState('');

  const [longLat, setLongLat] = useState([]);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [center, setCenter] = useState([lat, long]);
  const [newValue, setnewValue] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    if (!newValue) {
      axios.get('https://api.ipify.org/').then((res) => {
        // console.log(res);
        setIpAddressSubmit(res.data);
      });
    }

    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_FCUAu5yFCSuQGwn9ZDmbkJgVPMyDQ&ipAddress=${ipAddressSubmit}`
      )
      .then((res) => {
        setData(res);
        setLat(res?.data.location?.lat);
        setLong(res?.data.location?.lng);
        console.log(res);
        setCenter([res?.data.location?.lat, res?.data.location?.lng]);
      });
  }, [ipAddressSubmit, lat, long, newValue]);
  const newIcon = new Icon({
    iconUrl: '/images/icon-location.svg',
    iconSize: [30, 35],
  });
  const handleChange = (e) => {
    let val = e.target.value;

    setIpAddress(val);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setnewValue(true);
    setIpAddressSubmit(ipAddress);
  };
  return (
    <div>
      <div className='bg-[url("/public/images/pattern-bg.png")]  bg-cover h-[250px]'>
        <div className='flex pt-5  flex-col justify-center  items-center'>
          <h1 className='text-2xl font-medium text-white pb-5'>
            IP Address Tracker
          </h1>
          <div className='flex min-w-[328px] min-h-[58px] justify-center rounded-2xl text-2xl  items-center'>
            <form onSubmit={handleSubmit}>
              <input
                className='w-10/12 min-h-[58px] rounded-l-2xl pl-5'
                // type={'number'}
                onChange={handleChange}
              />
              <button
                disabled={ipAddress.length < 4}
                className='w-2/12 bg-black text-white min-h-[58px]  rounded-r-2xl active:bg-darkgray'
              >
                {'>'}
              </button>
            </form>
          </div>
          <div className='min-w-[328px] grid place-items-center sm:min-h-[157px] rounded-2xl mt-8 min-h-[300px] bg-white z-10'>
            <div className='grid grid-cols-1 sm:grid-cols-4 sm:divide-x content-center sm:flex-row sm:pl-8 sm:pr-8 sm:mb-0'>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3 sm:pr-3'>
                <p className='text-xs font-medium text-darkgray'>IP ADDRESS</p>
                <p className='pt-2 font-medium text-xl'>{data?.data?.ip}</p>
              </div>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3 sm:pr-3'>
                <p className='text-xs font-medium text-darkgray pt-4 sm:pt-0'>
                  LOCATION
                </p>
                <p className='pt-2 font-medium text-xl capitalize'>
                  {data?.data?.location?.region},{' '}
                  {data?.data?.location?.country}{' '}
                  <br className='hidden sm:block' /> {data?.data?.as?.asn}
                </p>
              </div>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3 sm:pr-3'>
                <p className='text-xs font-medium text-darkgray pt-4 sm:pt-0 '>
                  TIMEZONE
                </p>
                <p className='pt-2 font-medium text-xl'>
                  UTC {data?.data?.location?.timezone}
                </p>
              </div>
              <div className='flex flex-col items-center sm:items-start sm:h-full sm:pl-3'>
                <p className='text-xs font-medium text-darkgray pt-4 sm:pt-0'>
                  ISP
                </p>
                <p className='pt-2 font-medium text-xl'> {data?.data?.isp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='z-0 relative'>
        {long !== null && lat !== null && (
          <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={center} icon={newIcon}>
              <Popup>{data.data.location.city}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Home;
