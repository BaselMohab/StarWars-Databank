import { useNavigate } from 'react-router-dom';


export default function LibraryStarshipSection() {

    const navigate = useNavigate();

    const navigateToAllStarships = () => {
    navigate('/starships'); 
    };

return (
    <div  className="p-8 md:p-12 bg-yellow-500 text-black">
        <h3 className="text-3xl mb-4 text-start font-bold uppercase">starships</h3>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
        <img src="src\assets\images\starships\X-wing.jpeg" alt="xwing" className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"/>
        <div className="flex flex-col justify-center">
            <p className="text-lg md:text-2xl mb-4">
            Starships are a crucial element of the Star Wars universe, enabling travel across the galaxy and playing pivotal roles in battles and adventures. The Millennium Falcon, Han Solo's iconic freighter, is one of the most recognizable ships. X-wings and TIE fighters are the primary starfighters of the Rebel Alliance and the Galactic Empire, respectively.                </p>
            <hr className="border-black mb-4"/>
            <p className="text-lg md:text-2xl mb-4">
            The prequel trilogy introduces ships like the Naboo N-1 starfighter and the sleek Jedi starfighters. The sequel trilogy brings in new designs like the T-70 X-wing and the First Order's TIE fighters. Capital ships like the Star Destroyers and Mon Calamari cruisers dominate space battles, while unique vessels like the Death Star and Starkiller Base represent massive threats to the galaxy.              </p>
            <div className='flex justify-center'>
                <button 
                className="mt-4 bg-black text-yellow-500 px-10 py-3 rounded-lg text-lg capitalize border border-black hover:bg-yellow-500  hover:text-black  transition-all duration-300"
                onClick={navigateToAllStarships}
                >
                see all starships
                </button>
            </div>
        </div>
        </div>
    </div>
)
}
