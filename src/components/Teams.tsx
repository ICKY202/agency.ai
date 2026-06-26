import Title from "./Title";
import { teamsData } from "../assets/teamsData";

export default function Teams() {


    return (
        <div id="teams" className="flex flex-col gap-7 px-4 pt-30 sm:px-12 lg:px-24 xl:px-40 items-center text-gray-800 dark:text-white">
            <Title title="Meet the team" description="A passionate team of digital experts dedicated to your brands success."></Title>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {teamsData.map(({name, title, image}) => {
                    return (
                        <div className="flex max-sm:flex-col items-center p-4 rounded-xl gap-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-blue-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-500" style={{opacity: 1, transform: "none"}}>
                            <img src={image} alt={name} className="w-12 h-12 rounded-full"></img>
                            <div className="flex-1">
                                <h3>{name}</h3>
                                <p>{title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}