import { Link } from "react-router-dom";
import PageMusic from "../components/PageMusic";


export default function Home() {
  return (
    <>
      <PageMusic src="/audio/home.mp3" />

      {/* Rest of Home page */}
      <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/manor.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          
          padding: "40px",
          border: "2px solid #6f42c1",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "700px",
        }}
      >

      <h1>The Secrets of Blackthorn Manor</h1>

      <p>
        Blackthorn Manor, 12:15 AM Edward Blackthorn lies dead in his study. A violent storm has trapped everyone inside the manor. Five suspects remain under one roof. Search for clues. Uncover their secrets. Find the killer.
      </p>

      <Link to="/scene">
        <button>Begin Investigation</button>
      </Link>
      </div>
      </div>
    </>
  );
}