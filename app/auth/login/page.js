import { TextField } from "@mui/material"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login(){
    return(
        <main className="min-h-screen flex justify-center px-2 md:px-12 md:py-10 lg:px-16 lg:py-12">
            <div className="w-full md:w-[350px] max-h-[400px] flex flex-col gap-8 rounded md:shadow-md md:px-3 md:py-4">
                <div>
                    <h1 className="text-3xl font-semibond text-center">Log in</h1>
                    <p className="text-blue-300 text-center">Create an Account or Sign in</p>
                </div>
                <form className="justify-item-center">
                    <div className="w-full mb-2">
                        <TextField
                        fullWidth
                        placeholder="ekanem@gmail.com"
                        label="Enter Email"
                        type="email"
                        id="email"
                        size="small"
                        />
                        <button type="submit" className="w-full text-white h-10 rounded-md bg-blue-500 hover:opacity-40 p-3 mt-2">Continue</button>
                    </div>
                </form>
                <p className="text-center text-gray-700">or sign up with</p>
                <div className="flex justify-center gap-4">
                <form className="justify-item-center">
                    <button type="submit" className="w-10 h-10 border rounded-md shadow-lg border-gray-300 cursor-pointer">
                        <FcGoogle className="text-4xl"/>
                    </button>
                </form>
                <form>
                    <button type="submit" className="w-10 h-10 border rounded-md shadow-lg border-gray-300 cursor-pointer">
                        <FaGithub className="text-4xl"/>
                    </button>
                </form>
                </div>

            </div>
        </main>
        
    )
}