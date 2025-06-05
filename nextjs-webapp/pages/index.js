import React, { useEffect, useState, useRef } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function Home() {
  const [user, setUser] = useState(null);

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>


      {/* Home Section */}
      <Box
        ref={homeRef}
        sx={{
          height: "100vh",
          bgcolor: "#f0f2f5",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Necxis Web App
        </Typography>
        {!user && (
          <Typography variant="body1" color="textSecondary" mb={2}>
            Join interactive events and earn rewards!
          </Typography>
        )}
        {user && (
          <Typography variant="h5" mb={2}>
            Hello, {user.displayName}
          </Typography>
        )}
        {!user ? (
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Sign UP with Google
          </Button>
        ) : (
          <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Sign Out
          </Button>
        )}
      </Box>

      

      
    </>
  );
}
