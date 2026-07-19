import { useContext } from "react";
import { ClueContext } from "../context/ClueContext";
import PageMusic from "../components/PageMusic";

export default function EvidenceBoard() {
  const { foundClues } =
    useContext(ClueContext);

  const clueDetails = {
    "Broken Watch": {
      image: "/images/watch.jpg",
      description:
        "Stopped at exactly 11:47 PM.",
    },

    "Burned Letter": {
      image: "/images/letter.jpg",
      description:
        "Edward threatened to expose missing company funds.",
    },

    "Silver Key": {
      image: "/images/key.jpg",
      description:
        "Hidden behind books. Likely opens a safe.",
    },

    "Muddy Footprint": {
      image: "/images/footprint.jpg",
      description:
        "Large footprint found near the window.",
    },

    "Bank Statement": {
      image: "/images/bankstatement.jpg",
      description:
        "Suspicious transfers linked to a familiar bank account from the business.",
    },
    "Secret Diary": {
      image: "/images/diary.jpg",
      description:
        "Edward's personal diary. Several entries mention concerns about being betrayed by someone he trusted."
    },

    "Torn Photograph": {
      image: "/images/photo.jpg",
      description:
        "A torn photograph of a young looking Edward Blackthorn."
    },

    "Blood-Stained Glove": {
      image: "/images/glove.jpg",
      description:
        "A leather glove stained with blood. An initial is faintly visible inside. It is either a J or a T."
    }
  };

  return (
    <>
      <PageMusic src="/audio/interrogation.mp3" />

      {/* Rest of page */}
      <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('/images/corkboard.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          textShadow:
            "2px 2px 8px black",
          marginBottom: "40px",
        }}
      >
        📌 Investigation Board
      </h1>

      {foundClues.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          No evidence collected yet.
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {foundClues.map((clue) => (
            <div
              key={clue}
              style={{
                width: "250px",
                backgroundColor:
                  "rgba(255,255,240,0.95)",
                border: "2px solid #555",
                borderRadius: "8px",
                padding: "15px",
                boxShadow:
                  "4px 4px 12px rgba(0,0,0,0.5)",
                transform:
                  "rotate(" +
                  (Math.random() * 6 - 3) +
                  "deg)",
                position: "relative",
              }}
            >
              {/* Pin */}
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "-8px",
                  left: "50%",
                  transform:
                    "translateX(-50%)",
                  boxShadow:
                    "0 0 5px black",
                }}
              />

              <h3
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {clue}
              </h3>

              <img
                src={
                  clueDetails[clue]?.image
                }
                alt={clue}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  border: "1px solid gray",
                }}
              />

              <p
                style={{
                  marginTop: "15px",
                  fontSize: "14px",
                  color: "#222",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                {clueDetails[clue]?.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}