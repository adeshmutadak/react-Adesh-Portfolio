import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
        I am a recent 2022 graduate, enthusiastic about becoming a proficient Full Stack Java developer. My experience encompasses a range of projects, notably the Library Management System and successful creation of REST APIs. Proficiency in Java, Spring Boot, Hibernate, and Rest APIs underscores my technical skills, while my commitment to problem-solving is evident through my achievement of solving over 300 coding questions on platforms like Geekster and LeetCode. My skill set extends beyond the technical , encompassing creative thinking, collaborative teamwork, and leadership .
        </p>
        <br />
        <p className="text-xl">
        One of my standout projects includes the collaborative development of a Library Management System, demonstrating my knack for creating user-friendly solutions. Additionally, I've spearheaded the creation of robust REST APIs, showcasing my proficiency in facilitating smooth data exchange between applications.
        </p>
      </div>
    </div>
  );
};

export default About;
