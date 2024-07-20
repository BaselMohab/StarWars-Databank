import { useNavigate } from 'react-router-dom';

export default function LibraryPlanetSection() {

    const navigate = useNavigate();

    const navigateToAllPlanets = () => {
    navigate('/planets'); 
    };

return (
    <div className="p-8 md:p-12 bg-black text-black min-h-screen">
    <h3 className="text-3xl text-yellow-500 mb-4 text-start font-bold uppercase">planets</h3>
    <div className='flex flex-col lg:flex-row-reverse gap-10 items-center'>
        <img src="src\assets\images\planets\Endor.jpg" alt="endor" className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"/>
        <div className="flex flex-col justify-center">
        <p className="text-lg text-white md:text-2xl mb-4">
        The Star Wars galaxy is vast, with countless planets each offering unique environments and cultures. Tatooine, a desert planet, is the home of Anakin and Luke Skywalker. Alderaan, a peaceful world, is destroyed by the Death Star. Hoth, an icy planet, serves as the Rebel Alliance's base in "The Empire Strikes Back." 
        </p>
        <hr className="border-yellow-500 mb-4"/>
        <p className="text-lg text-white md:text-2xl mb-4">
        The forest moon of Endor hosts the final battle in "Return of the Jedi," while Coruscant, the city-covered capital, is the political hub of the galaxy. The prequels introduce planets like Naboo, with its lush landscapes and underwater cities, and Mustafar, a volcanic world where Anakin and Obi-Wan duel. The sequels feature new locations like Jakku, a desert planet with a history of battles, and Ahch-To, where Luke Skywalker hides in exile. Each planet adds to the rich setting and adventurous spirit of the Star Wars saga.            </p>
        <div className='flex justify-center'>
            <button 
                className="mt-4 bg-yellow-500 text-black px-10 py-3 rounded-lg text-lg border border-yellow-500 capitalize hover:bg-black  hover:text-yellow-500 transition-all duration-300"
                onClick={navigateToAllPlanets}
            >
                see all planets
            </button>
        </div>
        </div>
    </div>
    </div>
)
}
