import { useState } from "react";
import Header from "../components/Header";

function Schedule() {
  const [tab, setTab] = useState("all");

  const timetable = [
    { time: "09:00", mon: "해부학", tue: "생리학", wed: "", thu: "병리학", fri: "" },
    { time: "11:00", mon: "", tue: "약리학", wed: "생화학", thu: "", fri: "" },
    { time: "14:00", mon: "실습", tue: "", wed: "실습", thu: "", fri: "세미나" }
  ];

  return (
    <div>
      <Header title="강의시간표" />

      <div style={styles.container}>

        <div style={styles.tabBox}>
          <div style={tab === "all" ? styles.activeTab : styles.tab} onClick={() => setTab("all")}>전체</div>
          <div style={tab === "mine" ? styles.activeTab : styles.tab} onClick={() => setTab("mine")}>나의강의</div>
        </div>

        <div style={styles.month}>📅 2026년 3월</div>

        <div style={styles.tableBox}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}></th>
                <th style={styles.th}>월</th>
                <th style={styles.th}>화</th>
                <th style={styles.th}>수</th>
                <th style={styles.th}>목</th>
                <th style={styles.th}>금</th>
              </tr>
            </thead>

            <tbody>
              {timetable.map((row, i) => (
                <tr key={i}>
                  <td style={styles.time}>{row.time}</td>
                  <td style={styles.td}>{row.mon}</td>
                  <td style={styles.td}>{row.tue}</td>
                  <td style={styles.td}>{row.wed}</td>
                  <td style={styles.td}>{row.thu}</td>
                  <td style={styles.td}>{row.fri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Schedule;

const styles = {
  container: { padding: 16, background: "#f5f5f5", minHeight: "100vh" },

  tabBox: { display: "flex", marginBottom: 12 },

  tab: { flex: 1, padding: 10, textAlign: "center", background: "#eee" },

  activeTab: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    background: "#0B6B74",
    color: "#fff"
  },

  month: { fontWeight: "700", marginBottom: 10 },

  tableBox: {
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden"
  },

  table: { width: "100%", borderCollapse: "collapse" },

  headerRow: {
    background: "linear-gradient(90deg, #e26b00, #ff8c1a)",
    color: "#fff"
  },

  th: { padding: 10 },

  td: {
    padding: 10,
    textAlign: "center",
    borderBottom: "1px solid #eee"
  },

  time: {
    padding: 10,
    fontWeight: "600",
    background: "#fafafa"
  }
};