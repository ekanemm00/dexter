import { Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import {LuView} from "react-icon/lu";


export default function GuestList (){
    return (
        <main className="min-h-screen max-w-5xl mx-auto my-10 p-4">
            <h1 className="text-4xl mb-10 text-center font-bold text-gray-700">All Guests</h1>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{backgroundColor: "#63b3ed"}}>
                        <TableRow>
                            <TableCell>FullName</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Room Number</TableCell>
                            <TableCell>CheckInDate</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Mr Ekanem</TableCell>
                            <TableCell>08120166185</TableCell>
                            <TableCell>Standard Room</TableCell>
                            <TableCell>001</TableCell>
                            <TableCell>12/25/2025</TableCell>
                            <TableCell><LuView className="text-2xl cursor-pointer"/></TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
        </main>
    )
}
