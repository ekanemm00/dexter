"use client"
import {  Box, Typography, Button, Card, CardContent } from "@mui/material";


export default function Home(){
  return (
    <Box sx={{minHeight: "100vh",
      backgroundColor: "#ffd700",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 2
    }}>
      <Card sx={{maxWidth: 480, padding: 3, transition:"0.3s", "&:hover":{transform:"scale(1.02)", boxShadow:5}}}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to my homepage
          </Typography>

          <Typography variant="body1" sx={{marginBlock: 2}}>
            I'm a Web Developer passionate about building modern and simple user interface.
          </Typography>

          <a 
          href="https://www.linkedin.com/in/michael-ekanem-917241301"
          target="_blank">
          <Button variant="contained" size="large" fullWidth sx={{mt: 2}}>
            Visit My linkedin Lets Get Started
          </Button>
          </a>

        </CardContent>

      </Card>
    </Box>
  )
}