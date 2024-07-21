import { useRef } from 'react';
import LibraryStarshipSection from '../components/LibrarySections/LibraryStarshipSection';
import LibraryPlanetSection from '../components/LibrarySections/LibraryPlanetSection';
import LibraryFilmsSection from '../components/LibrarySections/LibraryFilmsSection';
import LibraryPeopleSection from '../components/LibrarySections/LibraryPeopleSection';
import LibrarySpeciesSection from '../components/LibrarySections/LibrarySpeciesSection';
import 'animate.css'

export default function Library() {

const scrollToSectionRef = useRef(null);

const scrollToSection = () => {
  scrollToSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

return (
  <>
    <div className="grid grid-cols-1 galaxy min-h-screen">
      <div className="flex flex-col justify-center items-center py-32">
        <h2 className="hero-caption px-5 text-2xl lg:text-5xl xl:text-7xl text-center leading-normal">
          Journey through the galaxy and explore all the adventures, people, spaceships, and alien species in the Star Wars universe!
        </h2>
        <button 
          className="mt-5 bg-yellow-400 text-black px-6 py-1 rounded-lg text-md md:text-xl hover:bg-yellow-300 transition-all duration-300 flex flex-col items-center"
          onClick={scrollToSection}
        >
          Scroll to explore
          <div className='animate__animated animate__bounceIn animate__infinite mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </div>
        </button>
      </div>
    </div>
    <LibraryFilmsSection scrollToSectionRef={scrollToSectionRef} />
    <LibraryPeopleSection />
    <LibrarySpeciesSection />
    <LibraryPlanetSection />
    <LibraryStarshipSection />
  </>
);
}
