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
                A web application that allows users to set fitness / health goals and track their progress. Features include logging workouts as well as meals 
                and foods to see your daily calorie goal as well as progress throughout the day
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
                An open source social media platform that allows users to post blogs.
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
                A database application that allows users to create recipes
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