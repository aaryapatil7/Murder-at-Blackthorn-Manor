import { Link } from "react-router-dom";
import CaseTracker from "./CaseTracker";

export default function Navbar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#0d0d0d",
          borderBottom: "2px solid #6f42c1",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#8c67d7",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Home
        </Link>

        <Link
          to="/scene"
          style={{
            color: "#8c67d7",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Crime Scene
        </Link>

        <Link
          to="/suspects"
          style={{
            color: "#8c67d7",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Suspects
        </Link>

        <Link
          to="/evidence"
          style={{
            color: "#8c67d7",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Evidence Board
        </Link>

        <Link
          to="/casefile"
          style={{
            color: "#8c67d7",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Case File
        </Link>

        <Link
          to="/accusation"
          style={{
            color: "#8c67d7",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Accusation
        </Link>
        
      </nav>

      <CaseTracker />
    </>
  );
}