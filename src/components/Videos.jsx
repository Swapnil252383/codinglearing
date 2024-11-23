import React from "react";
import "./Videos.css";

const Videos = () => {
  const videosData = [
    {
      title: "JAVA FULL STACK",
      description: "Learn the JAVA FULL STACK",
      thumbnail: "data:image/jpeg;base64,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AAAACnyv5ir7LI35StwfJX9uIMb3wABiUb9LXUSi2iF6bvvRG6UuipL9VTf8Et9eiryr/V2OanxH2IfY7vr0c8rL3/6YdGfFkuqNP7DfXtJw5J/redE31az6pxiv+KTJedEcqwhwsz7rzJHk+le7gpPfNub/AOVyM5rpV8Hij61/fqsormdebRFYryDiQAAAAAAAAAAAAAAAAAAAADY+D/pMPe+llmL3Mvjfil2RqeKAAAAAAAp8r+Yq+yyN+UrcHyV/biDG98AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGx8H/SYe99LLMXuZfG/FLsjU8UAAAAAABT5X8xV9lkb8pW4Pkr+3EGN74AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANj4P+kw976WWYvcy+N+KXZGp4oAAAAAACpypFujUSTbcXZJXbZG3KVmGYjJEz1choFbhVO7kZtk9HtcRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oNArcKp3chsnocRi7oXuQ8JUjXg5U5peNrcJJeSyeOsxZn8XmpbFMVl1hoeSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z",
      link: "https://www.youtube.com/@SR-coder25",
    },
    {
      title: "MERN STACK",
      description: "Master the MERN STACK.",
      thumbnail: "data:image/jpeg;base64,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",
      link: "https://www.youtube.com/@SR-coder25",
    },
    {
      title: "UP-COMING",
      description: "Understand the server-side with Node.js.",
      thumbnail: "data:image/jpeg;base64,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",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXc",
    },
  ];

  return (
    <div className="videos-container">
      <h2 className="videos-heading">Watch Coding Tutorials</h2>
      <p className="videos-description">Learn coding through these video tutorials and practical demonstrations.</p>
      <div className="videos-grid">
        {videosData.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <h3 className="video-title">{video.title}</h3>
            <p className="video-description">{video.description}</p>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <button className="btn watch-now-btn">Watch Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;