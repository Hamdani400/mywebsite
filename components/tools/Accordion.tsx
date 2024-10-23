import { useAccordion } from "@/hooks/accordion"
import { Experience } from "@/types/types";

type ExtendedExperience = Experience & {
    index: number,
    type: string,
}

const Accordion: React.FC<ExtendedExperience> = ({ company, status, position, duration, activity, index, type }) => {
    const { isOpen, onClickButton } = useAccordion(index, type);

    return <div className="font-normal text-xs">
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-medium p-0 m-0">{company}</p>
                    <p className="text-3xs p-0 m-0">{status}</p>
                    <p className="text-3xs p-0 m-0">{position} {duration}</p>
                </div>
                <button onClick={onClickButton} className=" p-2 transition-all duration-200 ease-out hover:bg-slate-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                        <rect className={`w-3.5 h-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity ease-in`} width={17} height={2} y={6}></rect>
                        <rect y={6} className={`w-3.5 h-0.5 transition-transform duration-200 ease-in transform origin-center ${isOpen ? '' : 'rotate-90'}`}></rect>
                    </svg>
                </button>
            </div>
            <div className={`accordion-content-${index}-${type} px-4 max-h-0 overflow-hidden transition-all duration-500 ease-out`}>
                <ul className="list-disc pt-2">
                    {activity.map((act, idx) => (<li className="text-2xs" key={`act-${idx}`}>{act}</li>))}
                </ul>
            </div>
        </div>
    </div>
}

export default Accordion