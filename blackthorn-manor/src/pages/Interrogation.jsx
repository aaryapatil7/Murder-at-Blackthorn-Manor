import { useParams } from "react-router-dom";
import { useContext } from "react";
import { suspects } from "../data/suspects";
import { ClueContext } from "../context/ClueContext";
import { InterrogationContext } from "../context/InterrogationContext";
import PageMusic from "../components/PageMusic";

export default function Interrogation() {
  const { id } = useParams();

  const { foundClues } = useContext(ClueContext);

  const { conversations, addConversation } =
    useContext(InterrogationContext);

  const suspect = suspects.find(
    (s) => s.id === Number(id)
  );



  if (!suspect) {
    return <h1>Suspect not found</h1>;
  }
  const conversation =
    conversations[suspect.id] || [];

  const askQuestion = (question) => {
    const alreadyAsked = conversation.some(
      (item) => item.question === question.text
    );

    if (!alreadyAsked) {
      addConversation(suspect.id,
        question.text,
        question.answer);
    }
  };

  return (
    <>
      <PageMusic src="/audio/interrogation.mp3" />

      {/* Rest of page */}
      <div style={{ padding: "20px" }}>
      <h1>Interrogation Room</h1>

      <h2>{suspect.name}</h2>

      <p>
        <strong>Relation:</strong> {suspect.relation}
      </p>

      <p>
        <strong>Alibi:</strong> {suspect.alibi}
      </p>

      

      <h3>Choose a Question</h3>

      {suspect.questions.map((question) => {
        const unlocked =
          !question.requiredClue ||
          foundClues.includes(
            question.requiredClue
          );

        return (
          <button
            key={question.id}
            disabled={!unlocked}
            onClick={() =>
              unlocked &&
              askQuestion(question)
            }
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              cursor: unlocked
                ? "pointer"
                : "not-allowed",
              opacity: unlocked ? 1 : 0.6,
            }}
          >
            {unlocked
              ? question.text
              : `🔒 ${question.text}`}

            {!unlocked && (
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                Requires clue:{" "}
                {question.requiredClue}
              </div>
            )}
          </button>
        );
      })}


      <h3>Conversation</h3>

      {conversation.length === 0 ? (
  <p>No questions asked yet.</p>
) : (
  conversation.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "25px",
        marginBottom: "25px",
        alignItems: "stretch",
      }}
    >
      {/* Detective */}
      <div
        style={{
          width: "48%",
          backgroundColor: "#1a1a1a",
          border: "2px solid #6f42c1",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <h3>🕵️ Detective</h3>

        <p>{item.question}</p>
      </div>

      {/* Suspect */}
      <div
        style={{
          width: "48%",
          backgroundColor: "#2a183d",
          border: "2px solid #956ee2",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <h3>
          👤 {suspect.name}
        </h3>

        <p>{item.answer}</p>
      </div>
    </div>
  ))
)}
    </div>
    </>
  );
}