import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [likes, setLikes] = useState([0, 0, 0]); // Tracks likes for each note

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const notesData = [
    {
      title: "Java Full Stack Notes",
      description: "Download Notes Here",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      driveLink: "https://media.licdn.com/dms/document/media/v2/D4D1FAQGWaihHQbGnUg/feedshare-document-pdf-analyzed/feedshare-document-pdf-analyzed/0/1731768484529?e=1733356800&v=beta&t=Ejh7NrPP-IzB-5f67RagHFAPJKeOPDSi2xaPOHrujIs",
    },
    {
      title: "MERN Stack Notes",
      description: "Download Notes Here",
      image: "data:image/png;base64,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",
      driveLink: "https://media.licdn.com/dms/document/media/v2/D4D1FAQGS19X2YDOUZg/feedshare-document-pdf-analyzed/feedshare-document-pdf-analyzed/0/1725024669845?e=1733356800&v=beta&t=HorbfJ1cXbqzbi3NX62-YkcDz6t-xnbkgMpD-mVDYJM",
    },
    {
      title: "Upcoming Notes",
      description: "Stay tuned for more!",
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="notes-container">
      <h2 className="notes-heading">Download Notes</h2>
      <p className="notes-description">Access coding notes here for various topics. More coming soon!</p>
      <div className="notes-grid">
        {notesData.map((note, index) => (
          <div key={index} className="note-card">
            <img src={note.image} alt={note.title} className="note-image" />
            <h3 className="note-title">{note.title}</h3>
            <p className="note-description">{note.description}</p>
            <div className="note-buttons">
              {index < 2 ? (
                <a href={note.driveLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn pdf-btn">Download Notes</button>
                </a>
              ) : (
                <button className="btn coming-soon-btn">Coming Soon</button>
              )}
            </div>
            <div className="like-section">
              <button className="like-btn" onClick={() => handleLike(index)}>
                ❤️ Like
              </button>
              <span className="like-count">{likes[index]} Likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
