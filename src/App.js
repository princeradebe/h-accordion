import { useState } from 'react'
import accordionList from './AccordionList';
import Accordion from './Accordion';

function App() {
  const [accordion, setAccordion] = useState(1);

  const toggleAccordion = (index) => {
    if (accordion === index) {
      return setAccordion(-1);
    }
    setAccordion(index);
  };

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
          <Accordion
            key={accord.id}
            accordion={accordion}
            toggleAccordion={toggleAccordion}
            accord={accord} />
        ))}
      </div>
    </div>
  );
}

export default App;
