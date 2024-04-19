import { LOGO } from './utils/constants'

const Footer = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 p-12 mt-9 flex">

      <div className="w-1/2 min-h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="uppercase text-[7vw] tracking-tighter leading-none  font['Founders_Grotesk'] font-semibold">Eye-</h1>
          <h1 className="uppercase text-[7vw] tracking-tighter leading-none  font['Founders_Grotesk'] font-semibold">opening</h1>
        </div>
        <div>{LOGO}</div>
      </div>

      <div className="w-1/2">
        <h1 className="uppercase text-[7vw] tracking-tighter leading-none  font['Founders_Grotesk'] font-semibold">presentations</h1>
          <div className="dets flex w-full justify-between gap-[20vw]">

            <div className="left w-1/2 mt-10 flex flex-col gap-2 capitalize  tracking-tighter leading-none  font['Founders_Grotesk'] font-light">
              <div className="title mb-5 mt-4 text-[1.5vw]">s:</div>
              {["instagram", "facebook", "behance", "linkedin"].map((item, index) => <a key={index} className='underline mb-1 text-[1.2vw]'>{item}</a>)}

              <div className="title mb-5 mt-4 text-[1.5vw]">L:</div>
              {["202-1965 W 4th Ave", "Vancouver, Canada", "30 Chukarina St", "Lviv, Ukraine"].map((item, index) => <a key={index} className={`underline mb-1 text-[1.2vw] ${index === 1 && "mb-7"}`}>{item}</a>)}

              <div className="title mb-5 mt-4 text-[1.5vw]">e:</div>
              <a className='underline mb-1 text-[1.2vw]'>hello@ochi.design</a>
            </div>

            <div className="right w-1/2 mt-10 flex flex-col  justify-center gap-2 capitalize  tracking-tighter leading-none  font['Founders_Grotesk'] font-light">
              <div className="title mb-5 mt-4 text-[1.5vw]">m:</div>
              {["home", "services", "about us", "our work", "insights", "contact us"].map((item, index) => <a key={index} className='underline mb-1 text-[1.2vw]'>{item}</a>)}
            </div>


          </div>
      </div>
    </div>
  )
}

export default Footer 