export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold">Hi, I’m Kevin Luong</h1>
        <p className="mt-4 text-lg text-gray-600">
          Software Engineer | Problem Solver | Lifelong Learner
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
          >
            View Projects
          </a>
          <a
            href="docs/Luong_Kevin_Resume_SWEN_BS_PDF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow hover:bg-gray-300"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-luong-1a8409221/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a recent graduate in Software Engineering from RIT with interests
          in full-stack development, database management, and scalable systems.
          Passionate about solving real-world problems and always eager to
          learn new technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Example Project Card */}
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-4">
          Feel free to reach out via email or connect with me on LinkedIn!
        </p>
        <div className="space-x-6">
          <a
            href="mailto:kluong24kl@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-luong-1a8409221/"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourname"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );

}
