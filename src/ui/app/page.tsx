"use client";
import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("Pipeline triggered!");
    // TODO: Wire up GitHub Actions trigger here
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>AI Agent Pipeline</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter website URL and prompt (e.g., 'modernize this website https://example.com')"
          style={{ padding: "10px", width: "400px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Go
        </button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}
