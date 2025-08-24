export default function Hero() {
  return (
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold">Hi, I’m Kevin Luong</h1>
        <p className="mt-4 text-lg text-gray-600">
          Software Engineer | Problem Solver | Lifelong Learner
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="https://github.com/kal4615"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
          >
            GitHub
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
  );
}