    "use client"
import { db } from "@/config/firebase.config";
import { CircularProgress } from "@mui/material";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";




export default function GuestPage(){
    const {id}=useParams();
    const [guest,setGuest]=useState(null);
    const[loading,setloading]=useState();
    const router = useRouter();
    //Fetch guest from database

    useEffect(()=>{
        const fetchGuest=async()=>{
            const guestRef = doc(db,"guests",id)
            const snapShot = await getDoc(guestRef)
            if(!snapShot.exists()){
                router.push("/dashboard/add-guest");
                return;
            }
            setGuest({
                id,
                ...snapShot.data(),
            });
        };
        fetchGuest();
    },[id,router])

        const handleDelete = async()=>{
                const confirmDelete = window.confirm("Are you sure you want to delete this guest?");
                if (!confirmDelete) return;
                try {
                    const deleteRef = doc(db, "guest",id)
                    await deleteDoc(db,"guests",id);
                    alert("Guest deleted successfully");
                    router.push("/dashboard/guest-list");
                }
                catch(errors){
                    console.error("Error deleting guest:",errors);
                    alert("Failed to delete guest. Please try again.")
                };  
        };
    

    return(
    <main className="min-h-screen flex justify-center px-2 md:py-20 md:px-12 lg:py-20 lg:px-20">
        <div className="w-full md:w-[350px] h-[450px] shadow-md rounded-md py-5 px-4">
            <h1 className="text-3x1 text-gray-800 text-center">Guest Details</h1>
            <div className="flex flex-col gap-4 mt-5">
                <div className="flex justify-between">
                    <p className="text-gray-800 text-xl">Guest Name</p>
                    <p className="text-gray-600 text-sm mt-2">{guest?.fullname}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800 text-xl">Phone Number</p>
                    <p className="text-gray-600 text-sm mt-2">{guest?.phoneNumber}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800 text-xl">Room Type</p>
                    <p className="text-gray-600 text-sm mt-2">{guest?.roomType}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800 text-xl">Room Number</p>
                    <p className="text-gray-600 text-sm mt-2">{guest?.roomNumber}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800 text-xl">CheckInDate</p>
                    <p className="text-gray-600 text-sm mt-2">{guest?.checkInDate}</p>
                </div>

            </div>
            <div
            onClick={handleDelete} className="mt-5">
                <button className="w-[60px] h-[50px] bg-red-500 text-white flex justify-center items-center rounded-md shadow-md cursor-pointer">
                    <AiFillDelete className="text-2xl"/>
                </button>
            </div>

        </div>

    </main>
    )
}