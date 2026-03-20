import Header from "../components/Header";

function Office() {
  const teams = [
    { name: "학사운영팀", manager: "000", phone: "052-000-0001", work: "학사관리, 성적, 졸업" },
    { name: "교무기획팀", manager: "000", phone: "052-000-0002", work: "교육과정, 교육부 대응" },
    { name: "연구지원팀", manager: "000", phone: "052-000-0003", work: "연구과제, 업적점수" }
  ];

  return (
    <div>
      <Header title="교학행정실" />

      <div style={styles.container}>

        {/* 🔥 운영시간 복구 */}
        <div style={styles.infoBox}>
          🕐 운영시간: 09:00 ~ 18:00 (점심 12:00~13:00)
        </div>

        <div style={styles.tableBox}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>팀명</th>
                <th style={styles.th}>담당자</th>
                <th style={styles.th}>연락처</th>
                <th style={styles.th}>주요업무</th>
              </tr>
            </thead>

            <tbody>
              {teams.map((t, i) => (
                <tr key={i} style={styles.tr}>
                  <td style={styles.td}>{t.name}</td>
                  <td style={styles.td}>{t.manager}</td>
                  <td style={styles.td}>{t.phone}</td>
                  <td style={styles.td}>{t.work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Office;

const styles = {
  container: {
    padding: 16,
    background: "#f5f5f5",
    minHeight: "100vh"
  },

  infoBox: {
    background: "#ffffff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 14,
    fontWeight: "600"
  },

  tableBox: {
    background: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  headerRow: {
    background: "#e26b00",
    color: "#fff"
  },

  th: {
    padding: 12,
    textAlign: "center",
    fontWeight: "700"
  },

  tr: {
    borderBottom: "1px solid #eee"
  },

  td: {
    padding: 12,
    textAlign: "center",
    fontSize: 14
  }
};