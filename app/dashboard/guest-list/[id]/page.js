import { AiFillDelete } from "react-icons/ai";

export default function GuestPage(){
    return(
    <main className="min-h-screen flex justify-center px-2 md:py-20 md:px-12 lg:py-20 lg:px-20">
        <div className="w-full md:w-[350px] h-[450px] shadow-md rounded-md py-5 px-4">
            <h1 className="text-3x1 text-gray-800 text-center">Guest Details</h1>
            <div className="flex flex-col gap-4 mt-5">
                <div className="flex justify-between">
                    <p className="text-gray-800">Guest Name</p>
                    <p className="text-gray-800">Ekanem Michael</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800">Phone Number</p>
                    <p className="text-gray-800">08120166185</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800">Room Type</p>
                    <p className="text-gray-800">Deluxe Room</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800">Room Number</p>
                    <p className="text-gray-800">001</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800">CheckInDate</p>
                    <p className="text-gray-800">25/12/2025</p>
                </div>

            </div>
            <div className="mt-5">
                <button className="w-[60px] h-[50px] bg-red-500 text-white flex justify-center items-center rounded-md shadow-md cursor-pointer">
                    <AiFillDelete className="text-2xl" />
                </button>
            </div>

        </div>

    </main>
    )
}