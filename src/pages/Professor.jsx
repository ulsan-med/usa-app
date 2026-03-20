import { useEffect, useState } from "react";
import Header from "../components/Header";

function Professor() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/data/professor.json")
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <div>
      <Header title="교수소개" />

      <div style={styles.container}>
        {list.map((p, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.name}>{p.name}</div>
            <div>{p.department}</div>
            <div style={styles.desc}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professor;

const styles = {
  container: { padding: 16 },

  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12
  },

  name: { fontWeight: "700" },
  desc: { fontSize: 13, color: "#666", marginTop: 6 }
};