import { LOGO2, LOGO3 } from "./utils/constants";
import image7 from '../assets/images/image-7.png';


const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 bg-zinc-100 py-[9vw]  px-12">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center">
          <div className="w-[6vw] h-[3vw]">{LOGO2}</div>
          <button className="button absolute left-8 bottom-8 uppercase px-4 py-1 rounded-[50px] border border-[#C8E668] text-[#C8E668]">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
          <div className="w-[6vw] h-[3vw]">{LOGO3}</div>
          <button className="button absolute left-8 bottom-8 uppercase px-4 py-1 text-[1vw] rounded-[50px] border border-zinc-300">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
          <img className="w-[7vw] h-[7vw]" src={image7} alt="" />
          <button className="button absolute left-8 bottom-8 uppercase px-4 py-1 text-[1vw] rounded-[50px] border border-zinc-300">
            bussiness bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards