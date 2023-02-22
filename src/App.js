import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

function App() {
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
      link: 'https://www.snapdocs.com/'
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
      <div className="mt-12">
        {accordionList.map(accord => (
          <div key={accord.id} className="flex justify-between" >
            <div className="w-[492px]">
              <div className="flex items-center justify-between font-bold text-2xl py-6 cursor-pointer border-[#1A2538] border-b-[1px]">
                {accord.name} <span><HiChevronUp size={20} color="#F36B2C" /><HiChevronDown size={20} color="#F36B2C" /></span>
              </div>
              <div className="mb-8">
                {accord.description}
              </div>
              <a className="flex gap-2 items-center cursor-pointer font-bold hover:text-[#F36B2C] transition-colors ease-in delay-100" href={accord.link}>Learn more <BsFillArrowRightCircleFill size={24} color="#F36B2C" /></a>
            </div>
            <img className='h-[471px]' src={accord.image} alt={accord.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
