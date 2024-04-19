import image2 from "../assets/images/image-2.jpg";

const About = () => {
  return (
    <div className="w-full py-[7vw] bg-[#CDEA68] rounded-3xl text-zinc-950">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-none px-12">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to{" "}
        <span className="underline underline-offset-4 decoration-[3px]">
          raise funds
        </span>
        ,
        <span className="underline underline-offset-4 decoration-[3px]">
          {" "}
          sell products
        </span>
        ,{" "}
        <span className="underline underline-offset-4 decoration-[3px]">
          explain complex ideas
        </span>
        , and{" "}
        <span className="underline underline-offset-4 decoration-[3px]">
          hire great people
        </span>
        .
      </h1>
      <div className="w-full mt-[5vw] flex gap-5 border-t-[1px] border-zinc-500 bg-[#CDEA68]">
        <div className="w-1/2 px-12">
          <h1 className="font-['Neue_Montreal']  text-[4vw] mt-[1vw]">
            Our approach:
          </h1>
          <button className="px-[2vw] py-[1vw] mt-2 text-zinc-50 bg-zinc-800 rounded-[50px] flex justify-center items-center">
            READ MORE{" "}
            <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-zinc-50 ml-[2vw]"></div>
          </button>
        </div>
        <div className="w-[43vw] h-[65vh] bg-red-400 rounded-xl mt-5 bg-cover bg-center object-cover" style={{ backgroundImage: `url(${image2})` }}></div>
      </div>
    </div>
  );
};

export default About;
