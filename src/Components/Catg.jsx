import { FaReact, FaHtml5, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Catg() {
    return (
        <>
            <section id="categories" className="max-w-7xl mx-auto py-10 px-6">
                <h2 className="text-4xl font-bold mb-8">Categories</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <FaReact className="text-cyan-500 text-5xl" />
                        <div>
                            <h3 className="font-bold text-xl">React</h3>
                            <p className="text-gray-500">12 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <IoLogoJavascript className="text-yellow-400 text-5xl" />
                        <div>
                            <h3 className="font-bold text-xl">JavaScript</h3>
                            <p className="text-gray-500">18 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <FaCss3Alt className="text-blue-600 text-5xl" />
                        <div>
                            <h3 className="font-bold text-xl">CSS</h3>
                            <p className="text-gray-500">10 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <FaHtml5 className="text-orange-500 text-5xl" />
                        <div>
                            <h3 className="font-bold text-xl">HTML</h3>
                            <p className="text-gray-500">8 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <FaNodeJs className="text-green-500 text-5xl" />
                        <div>
                            <h3 className="font-bold text-xl">NodeJS</h3>
                            <p className="text-gray-500">9 Posts</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Catg;