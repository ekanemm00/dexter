import Image from "next/image"
import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"



export default async function  profile(){
    const session = await auth()
    console.log(session)

     if (!session) {
        redirect("/auth/login")
     }
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-23 md:px-12 lg:py-15 lg:px-16">
            <div className="w-full py-10 px-2 md:w-[350px] h-auto shadow-md rounded-md md:py-10 md:px-4">
                <div className="flex justify-center">
                    <Image
                    src={session?.user?.image}
                    alt="profile picture"
                    width={100}
                    height={100}
                    className="rounded-2xl w-[100px] h-[100px] border border-gray-100"/>
                </div>
                <h1 className="text-lg font-semibold text-center text-gray-800">{session?.user?.name}</h1>
                    <p className="text-center text-sm">@ekanem</p>
                    <div className="flex justify-center mt-3">
                        <button className="w-[115px] h-10 rounded-xl border border-gray-700 ">Edit profile</button>
                    </div>
                    <div className="mt_5">
                        <p className="border-b border-gray-300 text-lg text-center">{session?.user?.email}</p>
                        <p className="border-b border-gray-300 text-lg text-center">{session?.user?.id}</p>
                    </div>
                    <form action={async()=>{
                        "use server"
                        await signOut();
                       
                    }}
                     className="m-3 flex justify-end">
                        <button className="w-full h-10px cursor-pointer bg-red-500 rounded-md text-white">LogOut</button>
                    </form>
            </div>
        </main>
    )
}