    import { Link } from "react-router-dom"
    import darthImg from '../assets/images/notfound.jpg'

export default function NotFound() {
return (
    <div className="grid min-h-screen grid-cols-1  gap-4 bg-black text-white sm:grid-cols-2">
    <div className="flex justify-center items-center p-4">
        <img src={darthImg} alt="Not Found" className=" hidden w-full max-w-md rounded-lg shadow-lg md:flex " />
    </div>
    <div className="flex flex-col items-center justify-center p-4 text-center md:items-start md:text-left">
        <h1 className="text-4xl font-light text-red-600">404 | Page Not Found</h1>
        <p className="mt-4 text-xl capitalize">
        this is not the page you are looking for, 
        <span className="uppercase text-red-700"> move along now!</span>
        </p>
        <Link to="/library" className="mt-8 text-md capitalize text-white bg-trasparent px-4 py-3 border-2 border-red-700 rounded-lg hover:bg-red-700">
        go back to library
        </Link>
    </div>
    </div>
    )
}
