import { MdArrowOutward } from "react-icons/md";
import image from '../assets/images/image-1.jpg'

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="hero-text mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex ">
                {index === 1 && (
                  <div
                    className="w-[9vw] h-[5.5vw] mr-[1vw] relative top-[1vw] object-cover rounded-md flex justify-center items-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                )}
                <h1 className="uppercase leading-[6.5vw] tracking-tighter text-[8vw] font['Founders_Grotesk'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

        <div className="w-full px-7 border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center">
          {["For public and private companies", "From the first pitch to IPO",].map((item, index) => {
            return (
              <p className="px-5 py-1.5 text-md font-light tracking-tight leading-none mt-4" key={index}>
                {item}
              </p>
            );
          })}
          <div className="start-button flex items-center gap-2 justify-center">
            <div className="px-5 py-1.5 mt-2 border-[1px] border-zinc-500 font-light text-sm rounded-full uppercase">
              Start The Project
            </div>
            <div className="w-8 h-8 rounded-full border-[1px] border-zinc-500 flex items-center justify-center mt-2">
              <MdArrowOutward />
            </div>
          </div>
        </div>
    </div>
  );
};

export default LandingPage;
