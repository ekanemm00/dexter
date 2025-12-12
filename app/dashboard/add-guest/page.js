// "use client"
// import { db } from "@/config/firebase.config";
// import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
// import { addDoc, collection } from "firebase/firestore";
// import { useFormik } from "formik"
// import { useSession } from "next-auth/react";
// import * as yup from "yup";


// const schema=yup.object().shape({
// fullname: yup.string().required("Fullname is required").min(8),
// phone: yup.number().required ("phone number is required").min(11),
// roomType: yup.string().oneOf(["standard-room", "special-room", "delux-room", "super-delux room"]),
// roomNumber: yup.string().oneOf(["001","002","003","004"]),
// checkInDate: yup.date().required("Date is required")

// })


// export default function AddGuest (){
//     // const {data: session} = useSession();
//     // console.log(session);

//     const {handleSubmit, handleChange, values, errors, touched} = useFormik({initialValues:{
//         fullname:"", 
//         phone:"",
//         roomType:"",
//         roomNumber:"",
//         checkInDate:"",
//     },
//     onSubmit:async ()=>{
//         try{
//             await addDoc(collection(db,"guests"),{
//                 user: session?.user?.id,
//                 fullname: values.fullname,
//                 phoneNumber: values.phone,
//                 roomType: values.roomType,
//                 roomNumber: values.roomNumber,
//                 checkInDate: values.checkInDate,
//                 timeCreated: new Date(),

//             })
//             alert ("Room has been booked")
//         }
//         catch(errors){
//             console.error("Unable to book room:",errors)
//         }
//     },
//     validationSchema:schema
// })
//     return (
//         <main className="min-h-screen flex justify-center px-4 md:px-10 py-12 lg:px-16 lg:py-16">
//             <div className="w-full md:w-[340px] h-auto rounded-md shadow-md ">
//                 <h1 className="text-center text-3xl font-bold test-green-700">New Guest</h1>
//                 <p className="text-center text-sm text-gray-500">Fill form to Book</p>
//                 <form onSubmit={handleSubmit}
//                  className="flex flex-col gap-3 mt5">
//                     <div>
//                         <TextField
//                         fullWidth
//                         size="small"
//                         type="text"
//                         placeholder="Enter Fullname"
//                         label="Fullname"
//                         id="fullname"
//                         onChange={handleChange}
//                         value={values.fullname}
//                         />
//                         {touched.fullname && errors.fullname? <span className="text-xs text-red-500">{errors.fullname}</span>:null}
//                     </div>
//                     <div>
//                         <TextField
//                         fullWidth
//                         size="small"
//                         type="tel"
//                         placeholder="Enter PhoneNumber"
//                         label="Phone Number"
//                         id="phone"
//                         onChange={handleChange}
//                         value={values.phone}
//                         />
//                         {touched.phone && errors.phone? <span className="text-xs text-red-500">{errors.phone}</span>:null}
//                     </div>
//                     <FormControl>
//                         <InputLabel id="roomType-label">Room Type</InputLabel>
//                         <Select
//                         labelId="roomType-label"
//                         name="roomType"
//                         size="small"
//                         label="Room Type"
//                         id="room type"
//                         onChange={handleChange}
//                         value={values.roomType}
//                         >
//                             <MenuItem value="standard-room">Standard Room</MenuItem>
//                             <MenuItem value="special-room">Special Room</MenuItem>
//                             <MenuItem value="delux-room">Deluxe Room</MenuItem>
//                             <MenuItem value="super-delux room">Super-Delux Room</MenuItem>
//                         </Select>
//                          {touched.roomType && errors.roomType? <span className="text-xs text-red-500">{errors.roomType}</span>:null}
//                     </FormControl>
//                     <FormControl>
//                         <InputLabel id="roomNumber-label">Room Number</InputLabel>
//                         <Select
//                         labelId="roomNumber-label"
//                         name="roomNumber"
//                         size="small"
//                         label="Room Number"
//                         id="roomNumber"
//                         onChange={handleChange}
//                         value={values.roomNumber}
//                         >
//                             <MenuItem value="001">001</MenuItem>
//                             <MenuItem value="002">002</MenuItem>
//                             <MenuItem value="003">003</MenuItem>
//                             <MenuItem value="004">004</MenuItem>
//                         </Select>
//                          {touched.roomNumber && errors.roomNumber? <span className="text-xs text-red-500">{errors.roomNumber}</span>:null}
//                     </FormControl>
//                     <div>
//                         <TextField
//                         fullWidth
//                         size="small"
//                         InputLabelProps={{shrink:true}}
//                         label="check-in date"
//                         type="date"
//                         id="checkInDate"
//                         onChange={handleChange}
//                         value={values.checkInDate}
//                         />
//                          {touched.checkInDate && errors.checkInDate? <span className="text-xs text-red-500">{errors.checkInDate}</span>:null}
//                     </div>

//                     <button type="submit" className=" text-white w-full rounded-md bg-blue-400  h-8 text-sm font-bold">
//                         Book Us Now

//                     </button>
//                 </form>

//             </div>
//         </main>
//     )
// }
  "use client"
  
import { db } from "@/config/firebase.config";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import * as yup from "yup";



const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required").min(8),
    phone: yup.number().required("Phone number is required").min(11),
    roomType: yup.string().oneOf(["standard-room","special-room","deluxe-room","superDeluxe-room"]),
    roomNumber: yup.string().oneOf(["001","002","003","004"]),
    checkInDate: yup.date().required("Date is required"),
    
})
export default function AddGuest () {
    const [loading,setloading]= useState(false);
    const [open, setOpen]=useState(false);
    const {data: session} = useSession();
    
    const handleClose=()=>setOpen(false)

      const {handleSubmit,handleChange,values,errors,touched} = useFormik({
        initialValues : {
            fullname: "",
            phone: "",
            roomType: "",
            roomNumber: "",
            checkInDate: "",
        },
        onSubmit: async(values, {resetForm})=>{
            try {
                setloading(true)
                await addDoc(collection(db,"guests"),{
                    user: session?.user?.id,
                    fullname: values.fullname,
                    phoneNumber: values.phone,
                    roomType: values.roomType,
                    roomNumber: values.roomNumber,
                    checkInDate: values.checkInDate,
                    timeCreated: new Date(),
                })
                setOpen(true)
                setloading(false)
                resetForm();
                
            }
            catch (errors) {
                setloading(false);
                resetForm();
              console.error("Unable to book room:",errors);
            }
        },
        validationSchema:schema,
      });
    return (
        <main className="min-h-screen flex justify-center px-4 md:px-10 py-12 lg:px-16 lg:py-16">
            <div className="w-full md:w-[340px] h-auto rounded-md shadow-md px-4">
                <h1 className="text-center text-3xl font-bold text-gray-700 ">New Guest</h1>
                <p className="text-center text-sm text-gray-500">Fill form to Book</p>
                <form onSubmit={handleSubmit}
                 className="flex flex-col gap-3 mt-5">
                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        type="text"
                        placeholder="Enter Fullname"
                        label="Fullname"
                        id="fullname"
                        onChange={handleChange}
                        value={values.fullname}
                        />
                        {touched.fullname && errors.fullname ? <span className="text-xs text-red-500">{errors.fullname}</span> : null}
                    </div>
                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        type="tel"
                        placeholder="Enter PhoneNumber"
                        label="Phone Number"
                        id="phone"
                        onChange={handleChange}
                        value={values.phone}
                        />
                        {touched.phone && errors.phone ? <span className="text-xs text-red-500">{errors.phone}</span> : null}
                    </div>
                    <FormControl>
                        <InputLabel id="roomType-label">Room Type</InputLabel>
                        <Select 
                        labelId="roomType-label"
                        name="roomType"
                        size="small"
                        label="Room Type"
                        id="roomType"
                        onChange={handleChange}
                        value={values.roomType}
                        >
                            <MenuItem value="standard-room">Standard room</MenuItem>
                            <MenuItem value="special-room">Special room</MenuItem>
                            <MenuItem value="deluxe-room">Deluxe room</MenuItem>
                            <MenuItem value="superDeluxe-room">Super-deluxe room</MenuItem>
                        </Select>
                        {touched.roomType && errors.roomType ? <span className="text-xs text-red-500">{errors.roomType}</span> : null}
                    </FormControl>
                    <FormControl>
                        <InputLabel id="roomNumber-label">Room Number</InputLabel>
                        <Select 
                        labelId="roomNumber-label"
                        name="roomNumber"
                        size="small"
                        label="Room Number"
                        id="roomNumber"
                        onChange={handleChange}
                        value={values.roomNumber}
                        >
                            <MenuItem value="001">001</MenuItem>
                            <MenuItem value="002">002</MenuItem>
                            <MenuItem value="003">003</MenuItem>
                            <MenuItem value="004">004</MenuItem>
                        </Select>
                        {touched.roomNumber && errors.roomNumber ? <span className="text-xs text-red-500">{errors.roomNumber}</span> : null}
                    </FormControl>
                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:true}}
                        label="check-in date"
                        type="date"
                        id="checkInDate"
                        onChange={handleChange}
                        value={values.checkInDate}
                        />
                        {touched.checkInDate && errors.checkInDate ? <span className="text-xs text-red-500">{errors.checkInDate}</span> : null}
                    </div>
                    <button type="submit" className="text-white w-full rounded-md bg-blue-400 h-8 text-sm font-bold">
                        {loading? "Booking..." : "Book Now"}</button>
                    
                </form>

            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Typography>Room has been book successfully</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
                </DialogActions>
            </Dialog>
            
        </main>
    )
}