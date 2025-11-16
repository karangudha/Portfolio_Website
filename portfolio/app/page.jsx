// import ParticlesContainer from "../components/Particles";
import LinkedInIcon from "../components/linkedInIcon";
import GitHubIcon from '../components/GitHubIcon';
import InstagramIcon from '../components/InstagramIcon';
import TwitterIcon from '../components/TwitterIcon';
import ScrollIndicator from "../components/ScrollIndicator";
import AboutSection from "../components/AboutSection";
import LeetCodeIcon from "../components/LeetCodeIcon";
import ParticlesContainer from "../components/particles";
import YoutubeIcon from "../components/youtubeIcon";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <ParticlesContainer />
      <div className="relative z-10 h-screen w-screen flex flex-col items-center justify-center align-middle leading-normal py-8 max-w-full bg-transparent">
        <h1 className="py-4 text-8xl sm:text-10xl md:text-12xl lg:text-14xl tracking-in-contract-bck-top text-black">
          Karan .
        </h1>
        <div className="py-2">
          <a
            href="https://www.linkedin.com/in/karankgudha/"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-delay-700 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 scale-in-center px-2 py-1 rounded inline-block items-center m-1 text-3xl md:text-1xl border focus:ring ring-opacity-50 transition">
            <LinkedInIcon />
          </a>
          <a
            href="https://leetcode.com/u/karankgudha/"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-delay-700 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 scale-in-center px-2 py-1 rounded inline-block items-center m-1 text-3xl md:text-1xl border focus:ring ring-opacity-50 transition">
              <LeetCodeIcon/>
          </a>
          <a
            href="https://github.com/karangudha"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-delay-700 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 scale-in-center px-2 py-1 rounded inline-block items-center m-1 text-3xl md:text-1xl border focus:ring ring-opacity-50 transition">
              <GitHubIcon/>
          </a>
          {/* <a
            href="https://www.instagram.com/canopus74/"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-delay-700 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 scale-in-center px-2 py-1 rounded inline-block items-center m-1 text-3xl md:text-1xl border focus:ring ring-opacity-50 transition">
              <InstagramIcon/>
          </a> */}
          {/* <a
            href="https://x.com/kumar_ajay321"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-delay-700 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 scale-in-center px-2 py-1 rounded inline-block items-center m-1 text-3xl md:text-1xl border focus:ring ring-opacity-50 transition">
              <TwitterIcon/>
          </a> */}
          <a
            href="https://www.youtube.com/@karankgudha"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-delay-700 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 scale-in-center px-2 py-1 rounded inline-block items-center m-1 text-3xl md:text-1xl border focus:ring ring-opacity-50 transition">
              <YoutubeIcon/>
          </a>
        </div>
      </div>
      <ScrollIndicator/>
      <AboutSection/>
      <Footer/>
    </div>
  );
} 
