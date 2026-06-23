


export default function TrustedBy() {


    return (
        <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
            <h3 className="font-semibold">Trusted by Leading Companies</h3>
            <div className="flex items-center gap-2">
                <img src="/microsoft_logo.png" alt="mircosoft" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
                <img src="/zoom_logo.png" alt="zoom" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
                <img src="/rakuten_logo.png" alt="rakutan" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
                <img src="/coinbase_logo.png" alt="coinbase" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
                <img src="/airbnb_logo.svg" alt="airbnb" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
                <img src="/google.svg" alt="google" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
            </div>
        </div>
    );
}