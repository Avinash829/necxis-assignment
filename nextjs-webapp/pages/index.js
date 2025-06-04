import React, { useEffect, useState, useRef } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";
import NavBar from "../components/NavBar";

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
      <NavBar
        user={user}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        onNavClick={(section) => {
          if (section === "home") scrollToSection(homeRef);
          else if (section === "about") scrollToSection(aboutRef);
          else if (section === "contact") scrollToSection(contactRef);
        }}
      />

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
            Sign In with Google
          </Button>
        ) : (
          <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Sign Out
          </Button>
        )}
      </Box>

      {/* About Section */}
      <Box
        ref={aboutRef}
        sx={{
          height: "100vh",
          bgcolor: "#fff",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            About Necxis
          </Typography>
          <Typography variant="body1">
            Necxis is a platform for event engagement that redefines digital interaction. Users participate in interactive, competitive, and creative events, share experiences, and engage in a dynamic digital ecosystem—all while earning rewards for their popular participations.
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        ref={contactRef}
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
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            For inquiries and support, please email us at{" "}
            <a href="mailto:teamnecxis@gmail.com">teamnecxis@gmail.com</a>.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
