import { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

function App() {
  const [accordion, setAccordion] = useState(1);

  const toggleAccordion = (index) => {
    if (accordion === index) {
      return setAccordion(-1);
    }
    setAccordion(index);
  };

  const accordionList = [
    {
      id: 1,
      name: 'Lenders',
      description: 'Reimagine your closing process with wet, hybrid, and full eClosings that impress borrowers and close much faster',
      image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Lender-Accordion-eVault.png',
      link: 'https://www.snapdocs.com/'
    },
    {
      id: 2,
      name: 'Title & Escrow',
      description: 'Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.',
      image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Title-Escrow.png',
      link: 'https://www.snapdocs.com/'
    },
    {
      id: 3,
      name: 'Signing Service',
      description: 'Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.',
      image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Scheduling.png',
      link: 'https://www.snapdocs.com/'
    },
    {
      id: 4,
      name: 'Notary Signing Agents',
      description: 'Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.',
      image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Notary-signing-Agents.png',
      link: 'https://www.snapdocs.com/',
      demo: 'https://www.snapdocs.com/scheduling-platform-for-signing-services'
    },
  ]
  return (
    <div className="flex flex-col bg-[#fff] text-[#1A2538] w-[1170px] m-auto p-14">
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl pb-4">
          Accelarate your digital closing transformation with the platform that's proven
        </h2>
        <p className="text-xl">
          Seize the opportunity to differentiate eith digital closings. We'll make sure your partners succeed.
        </p>
      </div>
      <div className="mt-12 relative">
        {accordionList.map(accord => (
          <div key={accord.id} className="flex justify-between " onClick={() => toggleAccordion(accord.id)} >
            <div className="w-[492px] border-[#1A2538] border-b-[1px]  ">
              <div className="flex items-center justify-between font-bold text-2xl py-6 cursor-pointer" >
                {accord.name} {accordion === accord.id ? (<HiChevronUp size={20} color="#F36B2C" />) : (<HiChevronDown size={20} color="#3A86FF" />)}
              </div>
              <div className={accordion === accord.id ? "mb-8" : "hidden"}>
                {accord.description}
              </div>
              <div className='flex gap-8'>
                <a className={accordion === accord.id ? "flex gap-4 items-center mb-12 cursor-pointer font-bold hover:text-[#F36B2C] transition-colors ease-in delay-100" : "hidden"} href={accord.link}>Learn more <BsFillArrowRightCircleFill size={24} color="#F36B2C" /></a>
                <a className={accordion === accord.id ? "flex gap-4 items-center mb-12 cursor-pointer text-[#3A86FF] opacity-80 transition-colors ease-in delay-100" : "hidden"} href={accord.demo}>Request demo <BsFillArrowRightCircleFill size={24} color="#3A86FF" /></a>
              </div>
            </div>
            <img className={accordion === accord.id ? 'h-[471px] absolute top-0 right-0 transform transition-transform duration-500' : "hidden"} src={accord.image} alt={accord.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
