export default function Contact(){
    return(
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
            href="https://github.com/kal4615"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>
    )
}