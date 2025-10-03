"use client";
import Image from 'next/image';
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const items = [
    "Software Engineer |",
    "Problem Solver |",
    "Lifelong Learner"
  ];

  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence((prev) => (prev + 1) % items.length);
    }, items.length * 3000); // one full loop duration
    return () => clearInterval(interval);
  }, [items.length]);

  return (
      <section className="flex flex-col items-center justify-center h-screen text-left">
        <div className ="flex flex-row gap-10">
          <div className ="flex flex-col justify-center">
            <h1 className="text-5xl font-bold">
              <ReactTyped
                strings={["Hello, I’m Kevin A. Luong"]}
                typeSpeed={60}     // typing speed
                backSpeed={20}     // speed when deleting
                loop               // infinite loop
                showCursor={true}  // blinking cursor
                smartBackspace={false}
              />
            </h1>
          <div className="mt-4 text-2xl text-gray-600 flex items-center space-x-2">
            <AnimatePresence mode="wait">
              {items.map((text, idx) => (
                <motion.p
                  key={`${sequence}-${idx}`} // changes each loop to trigger animation
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: idx * 0.5 }}
                >
                  {text}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
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
                href="docs/Luong_Kevin_Resume_SWEN_BS.pdf"
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
          </div>
          <div className="flex flex-col justify-center h-screen text-center relative w-150 h-150 md:w-150 md:h-150 flex-shrink-0">
              <Image
                  src="/images/letchworthStanding.jpg" // The path to your image in the public folder
                  alt="A picture of Kevin Luong"
                  layout="responsive"
                  height={600}
                  width={800}
                  objectFit="cover" // Ensures the image covers the area without distortion
                  className="rounded-full" // This Tailwind class makes the image circular
                  priority
                  quality={100}
              />
          </div>
        </div>
      </section>
  );
}