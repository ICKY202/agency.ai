import toast from "react-hot-toast";
import Title from "./Title";
import type { FormEvent } from "react";



export default function ContactUs() {

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      toast("Sending...");
      try {
          const formData = new FormData(event.currentTarget);
          formData.append("access_key", "4e30d47a-6d32-430b-960c-06de52645e1b");
    
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          });
    
          const data = await response.json();
          if (data.success) {
            toast("Form Submitted Successfully");
            event.currentTarget.reset();
          } else {
            toast("Error");
          }
      }catch(err) {
        console.error("Something wrong...!", err);
      }
    };

    return (
        <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-24 pt-30 text-gray-700 dark:text-white">
            <Title title="Reach out to us" description="From strategy to execution, we craft digital solutions that move your business forward."></Title>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full" style={{opacity: 1, transform: "none"}} >
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img alt="username" src="/user.svg"></img>
                        <input name="name" className="w-full p-3 text-sm outline-none" type="text" placeholder="Enter your name" required/> 
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email Id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img alt="email" src="/email.svg"></img>
                        <input name="email" className="w-full p-3 text-sm outline-none" type="text" placeholder="Enter your email" required/> 
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <textarea name="message" rows={8} placeholder="Enter you message" className="w-full p-3 text-sm" required/>
                    </div>
                </div>
                <button type="submit" className="w-max flex gap-2 bg-blue-600 text-white px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">Submit <img src="/arrow_icon.svg" alt="submit" className="w-4" /></button>
            </form>
        </div>
    );
}