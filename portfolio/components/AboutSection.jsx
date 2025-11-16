import Link from "next/link";
import ReadMore from "./ReadMore"

const AboutSection = () => {
  return (
    <div className="bg-splash text-center flex-grow  bg-blue-500 text-white" style={{ lineHeight: "100vh" }}>
      <div id="home-about-content" className="inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <h2 className="text-5xl sm:text-7xl md:text-8xl">
          <Link href="/about">
            About Me
          </Link>
        </h2>
        <br />
        <div className="inline-block text-left max-w-full" style={{ width: "65ch" }} >
          Hello! <br/>
          I am a Software Engineer with nearly one year of experience, specialising in Backend Software Development <br/>
          Currently, I work at Happy People AI, where I focus on designing, developing, and implementing efficient solutions for engineering software
          <br/>
          I studied Biotechnology as a Major and Computer Science(CS) minor at NIT Raipur
          <br />
          <br />
          FullStack Development | Backend Developer | Enthusiast in System Design, Cloud Computing, Microservices, and Distributed Systems
          </div>
        <br />
        <br />
        <Link href="/about">
          <ReadMore/>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
