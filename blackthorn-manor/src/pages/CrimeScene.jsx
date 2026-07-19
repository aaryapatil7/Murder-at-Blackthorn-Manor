import { useState, useContext } from "react";
import { ClueContext } from "../context/ClueContext";
import PageMusic from "../components/PageMusic";

export default function CrimeScene() {
  
  const { foundClues, addClue } =
    useContext(ClueContext);

  const [selectedClue, setSelectedClue] =
    useState(null);

  const [lockedMessage, setLockedMessage] =
    useState(false);

  const clues = {
    desk: {
      name: "Broken Watch",
      description:
        "A shattered pocket watch stopped at exactly 11:47 PM. This likely marks the time of the murder.",
      image: "/images/watch.jpg",
    },

    fireplace: {
      name: "Burned Letter",
      description:
        "A partially burned letter from Edward Blackthorn: 'If the missing company funds are not explained, I will expose the truth tomorrow.'",
      image: "/images/letter.jpg",
    },

    bookshelf: {
      name: "Silver Key",
      description:
        "A silver key hidden behind books. It appears to open Edward's private safe. Victoria's fingerprints are found on it.",
      image: "/images/key.jpg",
    },

    window: {
      name: "Muddy Footprint",
      description:
        "A muddy footprint near the window. The size suggests it belongs to an adult man.",
      image: "/images/footprint.jpg",
    },

    drawer: {
      name: "Bank Statement",
      description:
        "Bank records show several suspicious transfers to an account controlled by James Carter.",
      image: "/images/bankstatement.jpg",
    },

    safe: {
      name: "Secret Diary",
      description:
        "Edward's personal diary. Several entries mention concerns about being betrayed by someone he trusted.",
      image: "/images/diary.jpg",
    },

    portrait: {
      name: "Torn Photograph",
      description:
        "A torn photograph of a young looking Edward Blackthorn.",
      image: "/images/photo.jpg",
    },

    armchair: {
      name: "Blood-Stained Glove",
      description:
        "A leather glove stained with blood. It was found under the armchair, suggesting a struggle took place here.",
      image: "/images/glove.jpg",
    }
  };



  const collectEvidence = () => {
    addClue(selectedClue.name);
    setSelectedClue(null);
  };

  const handleSafeClick = () => {
    if (
      !foundClues.includes(
        "Silver Key"
      )
    ) {
      setLockedMessage(true);
      return;
    }

    setSelectedClue(clues.safe);
  };

  return (
    <>
      <PageMusic src="/audio/crime.mp3" />

      {/* Crime Scene */}
      {/* Full Screen Study */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Study Image */}
        <img
          src="/images/study.jpg"
          alt="Study"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Title Overlay */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "gold",
            zIndex: 10,
            textShadow: "2px 2px 8px black",
          }}
        >
          <h1>Edward Blackthorn's Study</h1>
          <p>
            Search the room carefully for
            evidence.
          </p>
        </div>

        {/* DESK */}
        <button
          onClick={() =>
            setSelectedClue(clues.desk)
          }
          style={{
            position: "absolute",
            left: "28%",
            top: "67%",
            width: "18%",
            height: "6%",
            opacity: 0,
            cursor: "pointer",
          }}
        />

        {/* FIREPLACE */}
        <button
          onClick={() =>
            setSelectedClue(clues.fireplace)
          }
          style={{
            position: "absolute",
            left: "56%",
            top: "55%",
            width: "7%",
            height: "10%",
            opacity: 0,
            cursor: "pointer",
          }}
        />

        {/* BOOKSHELF */}
        <button
          onClick={() =>
            setSelectedClue(clues.bookshelf)
          }
          style={{
            position: "absolute",
            left: "0%",
            top: "42%",
            width: "11%",
            height: "15%",
            opacity: 0,
            cursor: "pointer",
          }}
        />

        {/* WINDOW */}
        <button
          onClick={() =>
            setSelectedClue(clues.window)
          }
          style={{
            position: "absolute",
            left: "69%",
            top: "28%",
            width: "8%",
            height: "30%",
            opacity: 0,
            cursor: "pointer",
          }}
        />



        {/* DRAWER */} //ledger
        <button
          onClick={() =>
            setSelectedClue(clues.drawer)
          }
          style={{
            position: "absolute",
            left: "50%",
            top: "45%",
            width: "16%",
            height: "6%",
            opacity: 0,
            cursor: "pointer",
          }}
        />

        {/* SAFE */}
        <button
          onClick={() =>
            handleSafeClick()
          }
          style={{
            position: "absolute",
            left: "14%",
            top: "29%",
            width: "9%",
            height: "10%",
            opacity: 0,
            cursor: "pointer",
            
          }}
        />

        {/* PORTRAIT */}
        <button
          onClick={() =>
            setSelectedClue(clues.portrait)
          }
          style={{
            position: "absolute",
            left: "56%",
            top: "30%",
            width: "6%",
            height: "12%",
            opacity: 0,
            
            cursor: "pointer",
          }}
        />

        {/* ARMCHAIR */}
        <button
          onClick={() =>
            setSelectedClue(clues.armchair)
          }
          style={{
            position: "absolute",
            left: "83%",
            top: "78%",
            width: "15%",
            height: "14%",
            opacity: 0,
            cursor: "pointer",
          }}
        />
      </div>

      {/* CLUE MODAL */}
      {selectedClue && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor:
              "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              border: "2px solid #6f42c1",
              borderRadius: "12px",
              padding: "30px",
              width: "550px",
              maxWidth: "90%",
              textAlign: "center",
              color: "white",
              boxShadow:
                "0 0 30px rgba(255,215,0,0.4)",
            }}
          >
            <h3>
              🔍 Evidence Discovered!
            </h3>

            <h2>{selectedClue.name}</h2>

            <img
              src={selectedClue.image}
              alt={selectedClue.name}
              style={{
                width: "250px",
                maxWidth: "100%",
                margin: "0 auto 20px auto",
                display: "block",
                border: "1px solid #6f42c1",
              }}
            />

            <p>
              {selectedClue.description}
            </p>

            {!foundClues.includes(
              selectedClue.name
            ) ? (
              <button
                onClick={collectEvidence}
                style={{
                  marginRight: "10px",
                }}
              >
                Collect Evidence
              </button>
            ) : (
              <p>
                ✅ Evidence already
                collected
              </p>
            )}

            <button
              onClick={() =>
                setSelectedClue(null)
              }
              style={{
                marginTop: "15px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SAFE LOCKED MODAL */}
      {lockedMessage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor:
              "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              border: "2px solid #6f42c1",
              borderRadius: "12px",
              padding: "30px",
              width: "450px",
              maxWidth: "90%",
              textAlign: "center",
              color: "white",
              boxShadow:
                "0 0 30px rgba(255,215,0,0.4)",
            }}
          >
            <h2>🔒 Safe Locked</h2>

            <p>
              The safe is locked.
              You need the Silver Key to open it.
            </p>

            <button
              onClick={() =>
                setLockedMessage(false)
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
