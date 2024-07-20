import { useNavigate } from 'react-router-dom';


export default function LibraryPeopleSection() {

    const navigate = useNavigate();

    const navigateToAllPeople = () => {
    navigate('/people'); 
    };

return (
<div className="p-8 md:p-12 bg-black text-black min-h-screen">
<h3 className="text-3xl text-yellow-500 mb-4 text-start font-bold uppercase">People</h3>
    <div className='flex flex-col lg:flex-row-reverse gap-10 items-center'>
    <img src="src/assets/images/people/obi.jpg" alt="Obi" className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"/>
    <div className="flex flex-col justify-center">
        <p className="text-lg text-white md:text-2xl mb-4">
        The Star Wars universe is populated by a diverse array of characters, both heroes and villains. Key figures include Luke Skywalker, a farm boy who becomes a Jedi Knight and hero of the Rebel Alliance; Princess Leia Organa, a leader of the rebellion and Luke's sister; Han Solo, a smuggler with a heart of gold; and Darth Vader, a fallen Jedi Knight who becomes the Sith Lord serving the Emperor.            </p>
        <hr className="border-yellow-500 mb-4"/>
        <p className="text-lg text-white md:text-2xl mb-4">
        The prequel trilogy focuses on characters like Anakin Skywalker, who transforms from a gifted Jedi into Darth Vader; Padmé Amidala, a queen and later a senator; and Obi-Wan Kenobi, a wise Jedi Master. The sequel trilogy introduces Rey, a scavenger with a mysterious past; Finn, a former stormtrooper who joins the Resistance; and Kylo Ren, the conflicted son of Han Solo and Leia Organa.            </p>
    <div className='flex justify-center'>
        <button 
            className="mt-4 bg-yellow-500 text-black px-10 py-3 rounded-lg text-lg border border-yellow-500 capitalize hover:bg-black  hover:text-yellow-500 transition-all duration-300"
            onClick={navigateToAllPeople}
            >
            see all people
            </button>
        </div>
    </div>
    </div>
</div>
)
}
