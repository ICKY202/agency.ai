import { ServiceCard } from "./ServiceCard";
import Title from "./Title";


export default function Services() {

    const serviceItems = [
        {
            title: "Advertising",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: "/item1.svg"
        },
        {
            title: "Content marketing",
            description: "We help you execute your plan and deliver results.",
            icon: "/item2.svg"
        },
        {
            title: "Content writing",
            description: "We help you create a marketing strategy that drives results.",
            icon: "/item3.svg"
        },
        {
            title: "Social media",
            description: "We help you build a strong social media presence and engage with your audience.",
            icon: "/item4.svg"
        },
    ]

    return (
        <div id="services" className="relative pt-30 flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-500 dark:text-white">
            <img src="/bgImage2.png" alt="backimage_2" className="absolute -top-110 -left-70 -z-1 dark:hidden"/>
            <Title title={"How can we help ?"} description={"From strategy to execution, we craft digital solutions that move your business forward"}/>
            <div className="flex flex-col md:grid grid-cols-2">
            {serviceItems.map(({title, description, icon}) => {
                return <ServiceCard icon={icon} description={description} title={title}/>
            })}
            </div>
        </div>
    );
}