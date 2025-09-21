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
                <div className="mt-4 flex flex-col space-x-4">
                    <a
                        className="text-blue-600"
                    >
                        Tech Stack: 
                    </a>
                    <a
                        className="text-blue-600"
                    >
                        GoLang, JavaScript, Next.js, React Native
                    </a>
                </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">NutriApp</h3>
                <p className="mt-2 text-gray-600">
                A web application that allows users to set fitness / health goals and track their progress. Features include logging workouts as well as meals 
                and foods to see your daily calorie goal as well as progress throughout the day
                </p>
                <div className="mt-4 flex flex-col space-x-4">
                    <a
                        className="text-blue-600"
                    >
                        Tech Stack: 
                    </a>
                    <a
                        className="text-blue-600"
                    >
                        Java, SCRUM, HTML, CSS
                    </a>
                </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">Blogger</h3>
                <p className="mt-2 text-gray-600">
                An open source social media platform that allows users to easily post blogs by incoporating AWS technologies. One key feature is using AWS polly which allows users to create 
                blogs using text-to-speech. Another is using AWS rekognition which allows the application to scan a handwritten or typed blog and covert it to text for a post. These features are incorporated
                to ensure a seemless and effortless work structure for users to uploads posts to the application.
                </p>
                <div className="mt-4 flex flex-col space-x-4">
                    <a
                        className="text-blue-600"
                    >
                        Tech Stack: 
                    </a>
                    <a
                        className="text-blue-600"
                    >
                        Python, AWS (rekognition, polly, lambda, cognito, amplify)
                    </a>
                </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">Recipe Domain</h3>
                <p className="mt-2 text-gray-600">
                A database application that allows users to create, import, and/or save recipes. With hundreds of ingredients and dozens of premade recipes that users can sort and search for.
                Creating a recipe is made simple by adding ingredients, steps, and directions and the application will tie it up together for a recipe than can be made either private or public for others
                to save and share.
                </p>
                <div className="mt-4 flex flex-col space-x-4">
                    <a
                        className="text-blue-600"
                    >
                        Tech Stack: 
                    </a>
                    <a
                        className="text-blue-600"
                    >
                        Python, Django, Javascript, CSS, PostgreSQL
                    </a>
                </div>
            </div>
            </div>
      </section>
    )
}