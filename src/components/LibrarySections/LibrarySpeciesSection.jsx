import { useNavigate } from 'react-router-dom';
import yoda from '../../assets/images/species/yoda.jpg'

export default function LibrarySpeciesSection() {

    const navigate = useNavigate();

    const navigateToAllSpecies = () => {
    navigate('/species'); 
    };

return (
<div  className="p-8 md:p-12 bg-yellow-500 text-black min-h-screen">
    <h3 className="text-3xl mb-4 text-start font-bold uppercase">Species</h3>
    <div className='flex flex-col lg:flex-row gap-10 items-center'>
        <img src={yoda} alt="yoda" className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"/>
        <div className="flex flex-col justify-center">
        <p className="text-lg md:text-2xl mb-4">
        The Star Wars galaxy is home to countless species, each with unique cultures and abilities. Humans are the most prevalent species, but many others play significant roles in the story. Wookiees, like Chewbacca, are known for their strength and loyalty. Twi'leks, with their distinctive head-tails, are seen in various roles across the galaxy.            </p>
        <hr className="border-black mb-4"/>
        <p className="text-lg md:text-2xl mb-4">
        Other notable species include the Yoda's mysterious race, the amphibious Mon Calamari, the desert-dwelling Jawas and Tusken Raiders, and the insectoid Geonosians. Each species contributes to the rich tapestry of the Star Wars universe, adding depth and diversity to the stories.            </p>
        <div className='flex justify-center'>
            <button 
                className="mt-4 bg-black text-yellow-500 px-10 py-3 rounded-lg text-lg capitalize border border-black hover:bg-yellow-500  hover:text-black  transition-all duration-300"
                onClick={navigateToAllSpecies}
            >
                see all species
            </button>
        </div>
        </div>
    </div>
    </div>
)
}
