import {useState} from 'react';

import { planet01, planet02, planet03, planet04, planet05, planet06, planet07, planet08, planet09, } from '../assets'


const Stats = () => {
  const [activeElementId, setActiveElementId] = useState(null);

  function handleElementClick(id) {
    setActiveElementId(id);
  }

  return (
    <>
      <div className='lg:flex p-8 lg:px-20 4xl:px-40'>
        <div className={`${activeElementId === 1 ? 'lg:w-4/5' : 'lg:w-1/3'} lg:h-[600px] h-52 lg:mx-4 cursor-pointer rounded-2xl mb-8 lg:mb-0 w-full relative`} onClick={() => handleElementClick(1)} style={{backgroundImage: `url(${planet01})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
          <p className={`${activeElementId === 1 ? 'hidden' : ''} text-4xl font-bold text-white absolute bottom-8 m-8 -rotate-90`}> Element <br /> One</p>
          <p className={`${activeElementId === 1 ? 'block' : 'hidden'} text-4xl font-bold text-white absolute bottom-0 w-full bg-[#000000ab] p-8 rounded-b-2xl`}> Element <br /> One</p>
        </div>
        <div className={`${activeElementId === 2 ? 'lg:w-4/5' : 'lg:w-1/3'} lg:h-[600px] h-52 lg:mx-4 cursor-pointer rounded-2xl mb-8 lg:mb-0 w-full relative`} onClick={() => handleElementClick(2)} style={{backgroundImage: `url(${planet02})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
          <p className={`${activeElementId === 2 ? 'hidden' : ''} text-4xl font-bold text-white absolute bottom-8 m-8 -rotate-90`}> Element <br /> Two</p>
          <p className={`${activeElementId === 2 ? 'block' : 'hidden'} text-4xl font-bold text-white absolute bottom-0 w-full bg-[#000000ab] p-8 rounded-b-2xl`}> Element <br /> Two</p>
        </div>
        <div className={`${activeElementId === 3 ? 'lg:w-4/5' : 'lg:w-1/3'} lg:h-[600px] h-52 lg:mx-4 cursor-pointer rounded-2xl mb-8 lg:mb-0 w-full relative`} onClick={() => handleElementClick(3)} style={{backgroundImage: `url(${planet03})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
          <p className={`${activeElementId === 3 ? 'hidden' : ''} text-4xl font-bold text-white absolute bottom-8 m-8 -rotate-90`}> Element <br /> Three</p>
          <p className={`${activeElementId === 3 ? 'block' : 'hidden'} text-4xl font-bold text-white absolute bottom-0 w-full bg-[#000000ab] p-8 rounded-b-2xl`}> Element <br /> Three</p>
        </div>
        <div className={`${activeElementId === 4 ? 'lg:w-4/5' : 'lg:w-1/3'} lg:h-[600px] h-52 lg:mx-4 cursor-pointer rounded-2xl mb-8 lg:mb-0 w-full relative`} onClick={() => handleElementClick(4)} style={{backgroundImage: `url(${planet04})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
          <p className={`${activeElementId === 4 ? 'hidden' : ''} text-4xl font-bold text-white absolute bottom-8 m-8 -rotate-90`}> Element <br /> Four</p>
          <p className={`${activeElementId === 4 ? 'block' : 'hidden'} text-4xl font-bold text-white absolute bottom-0 w-full bg-[#000000ab] p-8 rounded-b-2xl`}> Element <br /> Four</p>
        </div>
        <div className={`${activeElementId === 5 ? 'lg:w-4/5' : 'lg:w-1/3'} lg:h-[600px] h-52 lg:mx-4 cursor-pointer rounded-2xl mb-8 lg:mb-0 w-full relative`} onClick={() => handleElementClick(5)} style={{backgroundImage: `url(${planet05})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
          <p className={`${activeElementId === 5 ? 'hidden' : ''} text-4xl font-bold text-white absolute bottom-8 m-8 -rotate-90`}> Element <br /> Five</p>
          <p className={`${activeElementId === 5 ? 'block' : 'hidden'} text-4xl font-bold text-white absolute bottom-0 w-full bg-[#000000ab] p-8 rounded-b-2xl`}> Element <br /> Five</p>
        </div>
      </div>
    </>
  )
}

export default Stats