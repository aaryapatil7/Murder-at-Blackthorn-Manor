import { useContext } from "react";
import { ClueContext } from "../context/ClueContext";
import { InterrogationContext } from "../context/InterrogationContext";
import { suspects } from "../data/suspects";
import PageMusic from "../components/PageMusic";

export default function CaseFile() {
  const { foundClues } = useContext(ClueContext);

  const { conversations } =
    useContext(InterrogationContext);

  return (
    <>
      <PageMusic src="/audio/interrogation.mp3" />
      <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#d9c7a3",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "900px",
          backgroundColor: "#fffef5",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",

          backgroundImage: `
            repeating-linear-gradient(
              transparent,
              transparent 31px,
              #cfd8ff 32px
            )
          `,

          borderLeft: "5px solid red",

          fontFamily: "'Courier New', monospace",

          color: "#222",
          lineHeight: "32px",
        }}
      >
        <h1

          style={{
            textAlign: "center",
            color: "#111",
            marginBottom: "40px",
          }}
        >
          Detective's Notebook
        </h1>

        <hr />

        <h2 style={{
          color: "#111",
        }}>Victim</h2>

        <p style={{
          color: "#111",
        }}>
          <strong>Edward Blackthorn</strong>
        </p>

        <p style={{
          color: "#111",
        }}>
          Found dead in his study under
          suspicious circumstances.
        </p>

        <hr />

        <h2 style={{
          color: "#111",
        }}>Timeline</h2>

        <p style={{
          color: "#111",
        }}>
          • 11:30 PM – Argument heard.
        </p>

        <p style={{
          color: "#111",
        }}>
          • 11:47 PM – Pocket watch stopped.
        </p>

        <p style={{
          color: "#111",
        }}>
          • Shortly after – Edward found
          dead in the study.
        </p>

        <h2 style={{
          color: "#111",
        }}>Interrogation Notes</h2>

        {Object.keys(conversations).length ===
          0 ? (
          <p style={{
            color: "#111",
          }}>
            No suspects questioned yet.
          </p>
        ) : (
          Object.entries(conversations).map(
            ([suspectId, notes]) => {
              const suspect = suspects.find(
                (s) => s.id === Number(suspectId)
              );

              return (
                <div
                  key={suspectId}
                  style={{
                    marginBottom: "25px",
                  }}
                >
                  <h3
                    style={{
                      color: "#111",
                    }}
                  >
                    {suspect?.name}
                  </h3>

                  {notes.map((note, index) => (
                    <div key={index}>
                      <p
                        style={{
                          color: "#111",
                        }}
                      >
                        <strong>Q:</strong>{" "}
                        {note.question}
                      </p>

                      <p
                        style={{
                          color: "#111",
                        }}
                      >
                        <strong>A:</strong>{" "}
                        {note.answer}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }
          )
        )}

        <hr />

      </div>
    </div>
    </>
  );
}