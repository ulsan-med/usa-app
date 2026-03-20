import { useEffect, useState } from "react";
import Header from "../components/Header";

function Schedule() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/data/schedule.json")
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <div>
      <Header title="강의시간표" />

      <div style={styles.container}>
        {list.map((item, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.day}>{item.day}</div>

            {item.classes.map((cls, idx) => (
              <div key={idx} style={styles.classBox}>
                <div>{cls.time}</div>
                <div style={styles.subject}>{cls.subject}</div>
                <div style={styles.room}>{cls.room}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;

const styles = {
  container: { padding: 16 },

  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12
  },

  day: {
    fontWeight: "700",
    marginBottom: 8
  },

  classBox: {
    borderTop: "1px solid #eee",
    padding: "8px 0"
  },

  subject: { fontWeight: "600" },
  room: { fontSize: 12, color: "#888" }
};