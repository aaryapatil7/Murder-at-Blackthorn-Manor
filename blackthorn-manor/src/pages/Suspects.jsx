import { Link } from "react-router-dom";
import { suspects } from "../data/suspects";
import PageMusic from "../components/PageMusic";

export default function Suspects() {
  return (
    <>
      <PageMusic src="/audio/interrogation.mp3" />
      <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#956ee2",
          marginBottom: "40px",
        }}
      >
        🕵️ Suspect Board
      </h1>

      <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
              maxWidth: "1400px",
              margin: "auto",
            }}
          >
        {suspects.map((suspect) => (
          <div
            key={suspect.id}
            style={{
              backgroundColor: "#1a1a1a",
              border: "2px solid #6f42c1",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              transition: "0.3s",
              boxShadow:
                "0 0 15px rgba(255,215,0,0.2)",
            }}
          >
            <img
              src={suspect.image}
              alt={suspect.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            <h2
              style={{
                color: "#d8c5ff",
                textShadow:
                  "0 0 8px rgba(216,197,255,0.4)",
              }}
            >
              {suspect.name}
            </h2>

            <p>
              <strong>Relation:</strong>{" "}
              {suspect.relation}
            </p>

            <p>
              <strong>Motive:</strong>{" "}
              {suspect.motive}
            </p>

            <Link
              to={`/interrogation/${suspect.id}`}
            >
              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                }}
              >
                Interrogate
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}