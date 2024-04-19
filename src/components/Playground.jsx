import { useEffect, useState } from 'react';
import image3 from '../assets/images/image-3.jpg';

const Playground = () => {

  const [rotate, setRotate] = useState(0);
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let posX = e.clientX;
      let posY = e.clientY;
      let deltaX = posX - window.innerWidth/2;
      let deltaY = posY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);
      setTransformX(deltaX / 30);
      setTransformY(deltaY / 30);
    })
  })

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center object-cover" style={{ backgroundImage: `url(${image3})` }}>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-7 '>
          <div className='w-[13vw] h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='w-[13vw] h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground