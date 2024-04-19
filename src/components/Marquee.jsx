import {motion} from 'framer-motion'

const Marquee = () => {

  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".2" className="marquee w-full py-[4.5vw] rounded-tl-3xl  rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px]  border-zinc-400 flex items-center justify-center overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10}} className="marquee-text text-[19vw] uppercase -mb-12 pt-10 pr-8 leading-none tracking-tighter font-semibold font['Founders_Grotesk']">
          We Are OChi
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10}} className="marquee-text text-[19vw] uppercase -mb-12 pt-10 pr-8 leading-none tracking-tighter font-semibold font-['Founders_Grotesk']">
          We Are OChi
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10}} className="marquee-text text-[19vw] uppercase -mb-12 pt-10 pr-8 leading-none tracking-tighter font-semibold font-['Founders_Grotesk']">
          We Are OChi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
