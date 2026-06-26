import Title from "./Title";



export default function OurWork() {

    const workData = [
        {
            title: "Mobile app marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            image: "/work_dashboard_management.png",
        },
        {
            title: "Dashboard management",
            description: "We help you execute your plan and deliver results.",
            image: "/work_fitness_app.png",
        },
        {
            title: "Fitness app promotion",
            description: "We help you create a marketing strategy that drives results.",
            image: "/work_mobile_app.png",
        }
    ]
    return <div id="our-work" className="flex flex-col items-center gap-7 px-4 pt-30 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
        <Title title="Our latest work" description="From strategy to execution, we craft digital that move your business forward"></Title>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {workData.map(({title, description, image}) => {
                return <div className="hover:scale-105 transition-all duration-500 cursor-pointer" key={title}>
                    <img src={image} alt={title} className="w-full rounded-xl"></img>
                    <h3 className="mt-3 text-lg font-bold">{title}</h3>
                    <p className="text-sm opacity-60 w-5/6">{description}</p>
                </div>
            })}
        </div>

    </div>
}