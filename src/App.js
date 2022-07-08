// import "./timelineCss.css";
import "./timeline.css";
import React from "react";
import { useState, useEffect } from "react";
import Timeline from "./Timeline";

function App() {
  const [input, setInput] = useState("");
  const [timeline, setTimeline] = useState(JSON.parse(localStorage.getItem("timeline-items")) || []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const lastElement = timeline[timeline.length - 1] || {};
    let lastId = lastElement.id || 0;
    if (input.trim() !== "") {
      const newEvent = {
        id: ++lastId,
        text: input,
        date: new Date().toLocaleString(),
      };
      const events = timeline;
      events.push(newEvent);
      setTimeline(events);
    }
    setInput("");
    console.log(timeline);
  };

  useEffect(() => {
    localStorage.setItem("timeline-items", JSON.stringify(timeline));
  }, [timeline, input]);

  return (
    <main className="wrapper">
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="input--add"
            placeholder="e.g. Fifa World Cup"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" className="button">
            Add
          </button>
          <button type="button" className="button clear" onClick={() => setTimeline([])}>
            Clear
          </button>
        </div>
      </form>

      {timeline.map((item, i) => (
        <Timeline key={item.id} timeline={item} index={i} />
      ))}
    </main>
  );
}

export default App;
