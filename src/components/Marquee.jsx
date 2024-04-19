import {motion} from 'framer-motion'

const Marquee = () => {

  return (
    <div className="marquee w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1.5px] border-b-[1.5px] border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10, delay: 2}} className="marquee-text text-[20vw] uppercase pt-10 -mb-[5vw] leading-none tracking-tighter font-semibold font-['Founders_Grotesk']">
          We Are OChi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10, delay: 2}} className="marquee-text text-[20vw] uppercase pt-10 -mb-[5vw] leading-none tracking-tighter font-semibold font-['Founders_Grotesk']">
          We Are OChi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10, delay: 2}} className="marquee-text text-[20vw] uppercase pt-10 -mb-[5vw] leading-none tracking-tighter font-semibold font-['Founders_Grotesk']">
          We Are OChi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
