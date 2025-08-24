export default function Projects(){
    return(
        <section id="projects" className="py-20 bg-white px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {/* Example Project Card */}
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">Contrax</h3>
                <p className="mt-2 text-gray-600">
                A fantasy football application that incorporates a salary cap and contract management
                to allow users to more accurate simulate real NFL franchises. Users are able to 
                create and sign players to contracts, bid and auction for free agents, and have complete
                freedom in how their fantasy team performs.
                </p>
                <div className="mt-4 flex space-x-4">
                <a
                    href="https://github.com/yourname/project1"
                    className="text-blue-600 hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://project1-demo.com"
                    className="text-blue-600 hover:underline"
                >
                    Live Demo
                </a>
                </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">NutriApp</h3>
                <p className="mt-2 text-gray-600">
                Short description of your project. Tech stack, what it does, and
                why it’s cool.
                </p>
                <div className="mt-4 flex space-x-4">
                <a
                    href="https://github.com/yourname/project1"
                    className="text-blue-600 hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://project1-demo.com"
                    className="text-blue-600 hover:underline"
                >
                    Live Demo
                </a>
                </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">Blogger</h3>
                <p className="mt-2 text-gray-600">
                Short description of your project. Tech stack, what it does, and
                why it’s cool.
                </p>
                <div className="mt-4 flex space-x-4">
                <a
                    href="https://github.com/yourname/project1"
                    className="text-blue-600 hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://project1-demo.com"
                    className="text-blue-600 hover:underline"
                >
                    Live Demo
                </a>
                </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">Recipe Domain</h3>
                <p className="mt-2 text-gray-600">
                Short description of your project. Tech stack, what it does, and
                why it’s cool.
                </p>
                <div className="mt-4 flex space-x-4">
                <a
                    href="https://github.com/yourname/project1"
                    className="text-blue-600 hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://project1-demo.com"
                    className="text-blue-600 hover:underline"
                >
                    Live Demo
                </a>
                </div>
            </div>
            </div>
      </section>
    )
}