import "./timelineCss.css";
import React from "react";
import { useState, useEffect } from "react";
import TimelineList from "./TimelineList";

function App() {
  const [input, setInput] = useState("");
  const [timeline, setTimeline] = useState(JSON.parse(localStorage.getItem("timeline-items")) || []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let index = timeline.length || 0;
    if (input.trim() !== "") {
      const newEvent = {
        id: ++index,
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
  }, [timeline]);

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
          <button className="button" onClick={() => setTimeline([])}>
            Clear
          </button>
        </div>
      </form>
      {timeline.map((item, i) => (
        <TimelineList key={item.id} timeline={item} index={i} />
      ))}
    </main>
  );
}

export default App;
