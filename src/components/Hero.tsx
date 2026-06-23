

export default function Hero() {

    return <div className="flex flex-col items-center gap-6 px-4 py-20 sm:px-12 lg:24 xl:40 text-center w-full dark:text-white overflow-hidden ">
        <div className="inline-flex gap-2 items-center border border-gray-300 p-1.5 pr-2 rounded-full">
            <img src="/group_profile.png" alt="group profile" className="w-20" />
            <p className="text-xs font-medium">Trusted by 10k+ people</p>
        </div>
        <h1 className="text-4xl font-medium max-w-5xl sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-23.75" style={{opacity: 1, transform: "none"}}>Turning the imagination into <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact</h1>
        <p className="text-sm sm:text-xl dark:text-white font-medium text-gray-500 max-w-4/5">
            creating meaningful connections and turning big idea into interactive digital experiences
        </p>
        <div className="relative" style={{opacity:1, transform: "none"}}>
            <img src="/hero_img.png" alt="hero_image" className="w-full max-w-6xl"/>
            <img src="/bgImage1.png" alt="bg-image" className="absolute -top-40 -right-40 sm:-top-100 sm:right-70 -z-1 dark:hidden"/>
        </div>
    </div>
}