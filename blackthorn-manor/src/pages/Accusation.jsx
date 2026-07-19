import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { suspects } from "../data/suspects";
import { ClueContext } from "../context/ClueContext";
import PageMusic from "../components/PageMusic";

export default function Accusation() {
  const [gameOver, setGameOver] = useState(false);
  const [accusedPerson, setAccusedPerson] = useState("");
  const [message, setMessage] = useState("");
  const [showKiller, setShowKiller] = useState(false);

  const { resetClues } = useContext(ClueContext);

  const navigate = useNavigate();

  const realKiller = "James Carter";

  const makeAccusation = (suspectName) => {
    if (gameOver) return;

    setAccusedPerson(suspectName);
    setGameOver(true);

    if (suspectName === realKiller) {
      setMessage(
        "🎉 Congratulations! You correctly identified the murderer."
      );
    } else {
      setMessage(
        "❌ Your accusation was incorrect. The case remains unsolved."
      );
    }
  };

  const revealKiller = () => {
    setShowKiller(true);
  };

  const playAgain = () => {
    resetClues();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <PageMusic src="/audio/accusation.mp3" />

      {/* Rest of page */}
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
          marginBottom: "15px",
        }}
      >
        ⚖️ Final Accusation
      </h1>

      {!gameOver ? (
        <>
          <p
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontSize: "18px",
            }}
          >
            You only get one chance.
            Review the evidence carefully and
            choose the murderer.
          </p>

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
                  boxShadow:
                    "0 0 15px rgba(255,215,0,0.25)",
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

                <button
                  onClick={() =>
                    makeAccusation(
                      suspect.name
                    )
                  }
                  style={{
                    marginTop: "15px",
                    padding:
                      "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Accuse
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            maxWidth: "700px",
            margin: "60px auto",
            backgroundColor: "#1a1a1a",
            border: "2px solid #6f42c1",
            borderRadius: "12px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "gold",
            }}
          >
            Case Closed
          </h2>

          <p>
            <strong>Your Accusation:</strong>{" "}
            {accusedPerson}
          </p>

          <hr />

          <p
            style={{
              fontSize: "18px",
            }}
          >
            {message}
          </p>

          {!showKiller ? (
            <>
              <button
                onClick={revealKiller}
                style={{
                  marginRight: "10px",
                  padding:
                    "10px 20px",
                }}
              >
                Reveal Real Killer
              </button>

              <button
                onClick={playAgain}
                style={{
                  padding:
                    "10px 20px",
                }}
              >
                Play Again
              </button>
            </>
          ) : (
            <>
              <div
                style={{
                  marginTop: "25px",
                  padding: "20px",
                  border:
                    "1px solid gold",
                }}
              >
                <h2
                  style={{
                    color: "gold",
                  }}
                >
                  Killer Revealed
                </h2>

                <h3>
                  {realKiller}
                </h3>

                <p>
                  Edward Blackthorn discovered
                  that James Carter was
                  embezzling company funds.
                  Fearing exposure, James
                  murdered Edward before the
                  truth could be revealed.
                </p>
              </div>

              <button
                onClick={playAgain}
                style={{
                  marginTop: "20px",
                  padding:
                    "10px 20px",
                }}
              >
                Play Again
              </button>
            </>
          )}
        </div>
      )}
    </div>
    </>
  );
}