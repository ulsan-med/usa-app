import { useEffect, useState } from "react";
import Header from "../components/Header";

function Practice() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/data/practice.json")
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <div>
      <Header title="실습일정" />

      <div style={styles.container}>
        {list.map((item, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.date}>{item.date}</div>
            <div>{item.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;

const styles = {
  container: { padding: 16 },

  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12
  },

  title: { fontWeight: "700" },
  date: { fontSize: 12, color: "#888", marginBottom: 6 }
};