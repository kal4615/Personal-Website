import Image from 'next/image';

export default function About(){
    return(
        <section id="about" className="py-20 max-w-6xl mx-auto px-6">
            <div className = "flex flex-row gap-10">
                <div className = "flex flex-col">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <div className = "flex flex-row">
                        <p className="text-gray-700 leading-relaxed">
                        At a young age, I already had dreams and aspirations of becoming a Software Engineering. As of August 4, 2025, 
                        I have graduated from RIT with my B.S. in Software Engineering with a minor in Statistics. My goal is to use my knowledge and expertise in 
                        full stack web development, database management, and data analytics to design, build, and produce scalable systems
                        that solve real-world problems. Along the way I hope to learn and discover many new technologies as I am eager and open to 
                        expanding my horizons.
                        </p>
                    </div>
                </div>
                <div className="relative w-150 h-150 md:w-150 md:h-150 flex-shrink-0">
                    <Image
                        src="/images/future-goals.jpg" // The path to your image in the public folder
                        alt="A picture of Kevin Luong"
                        layout="fill" // Makes the image fill the container
                        objectFit="cover" // Ensures the image covers the area without distortion
                        className="rounded-full" // This Tailwind class makes the image circular
                    />
                </div>
            </div>
      </section>
    )
}