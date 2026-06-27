


export default function Footer({theme}: Readonly<{theme: string}>) {


    return (
        <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10  mt-20 sm:mt-40 px-4 sm:px-12 lg:px-24 xl:px-40" style={{
            opacity:1, transform: "none"
        }}>
            <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400" style={{opacity: 1, transform: "none"}}>
                    <img src={`${theme === "dark" ? "/logo_white.svg" : "/logo-dark.svg" }`} alt="logo" className="w-20 sm:40" />
                    <p className="max-w-md">From strategy to execution, we craft digital solutions that move your business forward.</p>
                    <ul className="flex gap-8">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                        <li><a href="#our-work" className="hover:text-blue-600">Our Work</a></li>
                        <li><a href="#contact-us" className="hover:text-blue-600" >Contact-us</a></li>
                    </ul>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                    <h3>Subscribe to our newsletter</h3>
                    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex gap-2 text-sm">
                        <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"/>
                        <button className="bg-blue-600 text-white rounded px-6">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-300 dark:border-gray-600"/>
            <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
                <p>Copyright 2025 © GreatStack - All Right Reserved.</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="/facebook.svg" alt="facebook" />
                    <img src="x.svg" alt="x" />
                    <img src="instagram.svg" alt="instagram" />
                    <img src="linkedin.svg" alt="linkedin" />
                </div>
            </div>
        </div>
    );
}