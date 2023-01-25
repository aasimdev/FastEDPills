import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Icon({ id, open }) {
    return (


        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${id === open ? "rotate-45" : ""} w-6 h-6 transition-transform`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

    );
}

const Faq = ({ title, data }) => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const router = useRouter();

    return (
        <div className={classNames(router.asPath === "/frequently-asked-questions" ? "pt-11 pb-20" : "pt-16 pb-14 md:pb-24", "bg-white")}>
            <div className={classNames(router.asPath === "/frequently-asked-questions" ? "mx-auto md:px-12 xl:px-0 xl:max-w-[890px]" : "mx-auto px-4 md:px-12 xl:px-0 xl:max-w-[890px]")}>
                <h4 className='theme-heading text-center mb-8'>{title}</h4>
                <div className="space-y-4">
                    {data && data.map((item, index) => (
                        <Accordion open={open === index} icon={<Icon id={index} open={open} />} key={index} className={classNames(index === open ? "before:bg-blue before:h-full before:w-1 before:rounded-l-md before:absolute before:left-0" : "", "border border-[#e5e5e5] rounded-md shadow-box-sm")}>
                            <AccordionHeader onClick={() => handleOpen(index)} className="font-medium sm:font-semibold text-[13px] sm:text-lg text-heading border-b-0 py-5 px-4 text-left">
                                {item.label}
                            </AccordionHeader>
                            <AccordionBody className="pt-2 px-4 text-sm text-text">
                                {item.answer}
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Faq