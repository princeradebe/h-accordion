function App() {
  const accordionList = [
    {
      id: 1,
      name: 'Lenders',
      description: 'Reimagine your closing process with wet, hybrid, and full eClosings that impress borrowers and close much faster',
      image: 'https://www.monolithai.com/hubfs/bae-systems_logo.svg'
    },
    {
      id: 2,
      name: 'Title & Escrow',
      description: 'Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.',
      image: 'https://www.monolithai.com/hubfs/bae-systems_logo.svg'
    },
    {
      id: 3,
      name: 'Signing Service',
      description: 'Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.',
      image: 'https://www.monolithai.com/hubfs/bae-systems_logo.svg'
    },
    {
      id: 4,
      name: 'Notary Signing Agents',
      description: 'Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.',
      image: 'https://www.monolithai.com/hubfs/bae-systems_logo.svg'
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
            <div className="font-bold text-lg">
              {accord.name}
            </div>
            <img className='h-4 xl:h-8 p-2' src={accord.image} alt={accord.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
