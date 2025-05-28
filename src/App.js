import React from "react";
import profileImg from './assets/profile.jpeg';



export default function Portfolio() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="bg-gray-900 text-white py-10 px-6 text-center">
  <h1 className="text-4xl font-bold">Adith Konduru</h1>
  <p className="mt-2">Software Developer | B.Tech CSE Student</p>

  <img
    src={profileImg}
    alt="Adith Konduru"
    className="w-32 h-32 rounded-full mx-auto my-4 shadow-lg border-4 border-white"
  />

  <div className="mt-4">
    <a href="mailto:adithkonduru@gmail.com" className="underline">adithkonduru@gmail.com</a> |
    <span className="mx-2">7907366062</span> |
    <span>Hyderabad, Telangana</span>
  </div>
  <div className="mt-2">
    <a href="https://www.linkedin.com/in/adith-konduru" target="_blank" rel="noopener noreferrer" className="mr-4 underline">LinkedIn</a>
    <a href="https://github.com/AdithKonduru" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
  </div>
</header>


      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>
          Results-driven software developer with a strong foundation in programming and web
          technologies. Passionate about problem-solving, optimizing processes, and collaborating
          with cross-functional teams to build innovative software solutions.
        </p>
      </section>

      <section className="px-6 py-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2">
          <li>HTML, CSS, JavaScript</li>
          <li>C, C++, Java, Python</li>
          <li>Word, Excel, PowerPoint</li>
          <li>Object-Oriented Programming, Java Swing</li>
          <li>Git, GitHub</li>
          <li>OpenCV (Image Processing)</li>
          <li>Problem Solving, Communication, Teamwork</li>
          <li>Time Management, Creativity, Innovation</li>
        </ul>
      </section>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          <li>
            <strong>Online Quiz Management System</strong> (Java Swing) -
            <a href="https://github.com/AdithKonduru/Online-Quiz-Management-System" className="underline ml-1">GitHub</a>
          </li>
          <li>
            <strong>Pong Game</strong> -
            <a href="https://github.com/AdithKonduru/Pong-Game" className="underline ml-1">GitHub</a>
          </li>
          <li>
            <strong>Random Password Generator</strong> -
            <a href="https://github.com/AdithKonduru/Random-Password-Generator" className="underline ml-1">GitHub</a>
          </li>
          <li>
            <strong>Turning Image into Cartoon</strong> -
            <a href="https://github.com/AdithKonduru/Turning-Image-into-Cartoon" className="underline ml-1">GitHub</a>
          </li>
          <li>
            <strong>Text-to-Speech Converter</strong> -
            <a href="https://github.com/AdithKonduru/Text-to-Speech-Converter" className="underline ml-1">GitHub</a>
          </li>
        </ul>
      </section>

      <section className="px-6 py-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-2">
          <li><strong>B.Tech in CSE</strong>, Sreyas Institute of Engineering and Technology (2025) - CGPA: 7.3</li>
          <li><strong>HSC</strong>, Sri Gayatri Junior College (2021) - 72%</li>
          <li><strong>SSC</strong>, KKR Gotham High School (2019) - CGPA: 9.3</li>
        </ul>
      </section>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Certifications & Achievements</h2>
        <ul className="list-disc list-inside">
          <li>Machine Learning - Internshala</li>
          <li>Mobile App Development - Skillup</li>
          <li>UI Developer - ICT Academy</li>
          <li>Internship & Job Preparation - Internshala</li>
          <li>Blockchain Technology Workshop (Nov 2023)</li>
        </ul>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Adith Konduru. All rights reserved.
      </footer>
    </div>
  );
}
