import { motion, useAnimation } from "framer-motion";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.jpg";
import image6 from "../assets/images/image-6.jpg";


const Projects = () => {

  const cardsAnime = [useAnimation(), useAnimation()]
  const handleHover = (index) => {
    cardsAnime[index].start({y: "0"})
  }

  const handleHoverEnd = (index) => {
    cardsAnime[index].start({ y: "100%" });
  };

  return (
    <div className="w-full pt-20 pb-10 ">
      <div className="w-full px-12 pb-10 border-b-[1px] border-zinc-600">
        <h1 className="font-['Neue_Montreal'] text-[3.5vw]">
          Featured Projects
        </h1>
      </div>

      <div className="cards mt-[5vw] w-full flex gap-5 px-12">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card w-full"
        >
          <div className="card-title flex gap-4 items-center mb-5 ">
            <div className="dot w-[10px] h-[10px] rounded-full bg-zinc-100 "></div>
            <h1 className="uppercase">FYDE</h1>
          </div>
          <div className="card-img w-full h-[70vh] relative ">
            <h1 className="absolute z-[9] left-full flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase text-[5vw] tracking-tighter leading-none text-[#cdea68] font['Founders_Grotesk'] font-bold">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cardsAnime[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img className="w-full h-full bg-cover" src={image4} alt="" />
            </div>
          </div>
          <div className="buttons mt-5 flex gap-3">
            <button className="button uppercase px-4 py-1 rounded-[50px] border border-zinc-300">
              Audit
            </button>
            <button className="button uppercase px-4 py-1 rounded-[50px] border border-zinc-300">
              copywriting
            </button>
            <button className="button uppercase px-4 py-1 rounded-[50px] border border-zinc-300">
              salesdeck
            </button>
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card w-full"
        >
          <div className="card-title flex gap-4 items-center mb-5 ">
            <div className="dot w-[10px] h-[10px] rounded-full bg-zinc-100 "></div>
            <h1 className="uppercase">trawa</h1>
          </div>
          <div className="card-img w-full h-[70vh] relative">
            <h1 className="absolute z-[9] right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 uppercase text-[5vw] tracking-tighter leading-none text-[#cdea68] font['Founders_Grotesk'] font-bold">
              {"trawa".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cardsAnime[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img className="w-full h-full bg-cover" src={image6} alt="" />
            </div>
          </div>
          <div className="buttons mt-5 flex gap-3">
            <button className="button uppercase px-4 py-1 rounded-[50px] border border-zinc-300">
              agency
            </button>
            <button className="button uppercase px-4 py-1 rounded-[50px] border border-zinc-300">
              company presentation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
