import ScrollLine from "../../components/ScrollLine";

export default function About() {
    return (
      <div>
          <div className="flex text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-white">
            <a className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-1 sm:py-1 md:py-2 lg:py-2.5 xl:py-3.5 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 text-blue-500 hover:bg-gray-100 transition" href="/">
              Home
            </a>
            <div className="flex-1"/>
              <a className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 transition" href="/about">
                About
              </a>
              <a className="text-blue-500 hover:bg-gray-200 flex items-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 transition"
                href="https://drive.google.com/file/d/1hVEbr6_vkdRG7JLkGS3aArXNnpP7fbvZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
          </div>
          <ScrollLine/>
          <div className="bg-splash text-center flex-grow  bg-white text-black" style={{ lineHeight: "100vh" }}>
            <div id="home-about-content" className="inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                <h2 className="text-5xl sm:text-7xl md:text-8xl">
                    About Me
                </h2>
                <br />
                <div className="inline-block text-left max-w-full text-lg sm:text-sm md:text-xl" style={{ width: '65ch' }}>
                  I’m Karan from India, a Software Development Engineer with almost one year of experience. My work includes projects in frontend, backend, and full-stack development.
                  <br />
                  <br />
                  Currently, I work at Happy People AI, where I focus on designing, developing, and implementing efficient solutions for engineering software.
                  <br />
                  <br />
                  I studied Biotechnology as My Major and Computer Science (CS) as my minor at NIT Raipur in 2025.
                  <br />
                  <br />
                  I have been programming since my college days and solved 700+ coding problems, achieving a LeetCode rating of 1565. These are the tech stacks that I have worked on so far:
                  <br />
                  <br />
                  <strong>Primary Skills:</strong>  
                  C/C++, Java, JavaScript, C++ STL, Data Structures & Algorithms, System Design, Multi-Threading, Socket Programming, DBMS, Cloud Computing, Design Patterns  
                  <br />
                  <br />
                  <strong>Practical Experience:</strong>  
                  OS, ReactJS, Node.js, Express.js, MongoDB, Python, AWS, Kafka, Docker, Containers, Microservices, Distributed Systems, Serverless (AWS Lambda), gTest, Git  
                  <br />
                  <br />
                  <strong>Operating Systems:</strong>  
                  Linux, Windows  
                  <br />
                  <br />
                  <strong>Responsibilities:</strong>  
                  Low-Level Design and Architecture, Integration, CI/CD, Unit Testing, Full Stack Development, Frontend Development, Backend Development, Product Lifecycle Management  
                  <br />
                </div>
            </div>
        </div>
      </div>
    );
  };
