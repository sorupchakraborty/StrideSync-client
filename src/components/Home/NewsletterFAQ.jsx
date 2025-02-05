
import img1 from "../../assets/newyork.jpeg"
import img2 from "../../assets/Berlin.jpg"
import img3 from "../../assets/boston.jpg"
import img4 from "../../assets/tokyo.jpg"   

import SectionTitle from "../shared/SectionTitle";

const NewsletterFAQ = () => {
    return (
        <section className="py-10 px-6 bg-gradient-to-b from-rose-300 via-rose-200 to-rose-100 text-white dark:from-rose-950 dark:via-rose-800 dark:to-rose-700">
            <div className="max-w-7xl mx-auto">

                {/* Successful Marathons Section */}
                <div className="mt-12 md:mt-24">
                    <SectionTitle
                        title="Successful Marathons"
                        subtitle="Check out some of our past successful marathon campaigns!"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                        {/* Marathon Card 1 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={img1}
                                alt="Marathon 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    New York City Marathon
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">New York City</p>
                            </div>
                        </div>

                        {/* Marathon Card 2 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={img2} // replace with your image path
                                alt="Marathon 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Berlin Marathon
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">Berlin, Germany</p>
                            </div>
                        </div>

                        {/* Marathon Card 3 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                            src={img3} // replace with your image path
                                alt="Marathon 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Boston Marathon
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">Boston, USA</p>
                            </div>
                        </div>

                        {/* Marathon Card 4 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={img4} // replace with your image path
                                alt="Marathon 4"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Tokyo Marathon
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">Tokyo, Japan</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter Section */}
                <div className="text-center mt-24">
                    <SectionTitle
                        title="Stay Updated"
                        subtitle="Join our community of runners! Subscribe to receive the latest marathon updates, training tips, and exclusive event offers directly in your inbox."
                    />
                    <div className="mt-10">
                        <form className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full sm:flex-1 px-6 py-3 text-gray-800 bg-white dark:bg-gray-900 rounded-lg focus:ring-4 focus:ring-white focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 text-lg font-semibold bg-rose-900 dark:bg-rose-400 hover:bg-rose-800 dark:hover:bg-rose-500 rounded-lg shadow-lg dark:text-black transition-transform transform focus:ring-4 focus:ring-rose-300 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default NewsletterFAQ;
