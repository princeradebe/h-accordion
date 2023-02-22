import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

const Accordion = ({ key, accord, accordion, toggleAccordion }) => {
    return (
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
    )
}

export default Accordion