import React from 'react';
import { useNavigate } from 'react-router-dom';
import newHope from '../../assets/images/films/a-new-hope.jpg'

export default function LibraryFilmsSection({ scrollToSectionRef }) {

    const navigate = useNavigate();

    const navigateToAllMovies = () => {
        navigate('/films'); 
    };

return (
    <div ref={scrollToSectionRef} className="p-8 md:p-12 bg-yellow-500 text-black min-h-screen">
        <h3 className="text-3xl mb-4 text-start font-bold uppercase">Films</h3>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
            <img src={newHope} alt="A New Hope" className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"/>
            <div className="flex flex-col justify-center">
                <p className="text-lg md:text-2xl mb-4">
                    The Star Wars saga, created by George Lucas, began in 1977 with the release of "Star Wars: Episode IV - A New Hope." It introduced audiences to a galaxy far, far away, filled with iconic characters, advanced technology, and epic battles between good and evil. The original trilogy, followed by two sequels ("The Empire Strikes Back" in 1980 and "Return of the Jedi" in 1983), became a cultural phenomenon.
                </p>
                <hr className="border-black mb-4"/>
                <p className="text-lg md:text-2xl mb-4">
                    The prequel trilogy, released between 1999 and 2005, explored the origins of Darth Vader and the rise of the Galactic Empire. In 2015, the sequel trilogy began with "The Force Awakens," continuing the story of the Skywalker family and introducing new characters. The trilogy concluded with "The Last Jedi" in 2017 and "The Rise of Skywalker" in 2019. Standalone films like "Rogue One" and "Solo" expanded the universe by exploring side stories and character backstories.
                </p>
                <div className='flex justify-center'>
                    <button 
                        className="mt-4 bg-black text-yellow-500 px-10 py-3 rounded-lg text-lg capitalize border border-black hover:bg-yellow-500 hover:text-black transition-all duration-300"
                        onClick={navigateToAllMovies}
                    >
                        See All Films
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}
