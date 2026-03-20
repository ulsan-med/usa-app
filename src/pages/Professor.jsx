import Header from "../components/Header";

function Professor() {
  const list = [
    {
      name: "김현수",
      major: "외과학",
      school: "서울대학교",
      gender: "male",
      courses: "본2 외과학 / 본3 임상실습"
    },
    {
      name: "이정민",
      major: "해부학",
      school: "울산대학교",
      gender: "female",
      courses: "본1 해부학 / 실습"
    }
  ];

  return (
    <div>
      <Header title="교수소개" />

      <div style={styles.container}>
        {list.map((p, i) => (
          <div key={i} style={styles.card}>

            <div style={{
              ...styles.profile,
              background: p.gender === "male"
                ? "linear-gradient(135deg,#cfd8dc,#90a4ae)"
                : "linear-gradient(135deg,#f8bbd0,#f48fb1)"
            }} />

            <div>
              <div style={styles.name}>{p.name}</div>
              <div>전공: {p.major}</div>
              <div>출신: {p.school}</div>
              <div style={styles.course}>{p.courses}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Professor;

const styles = {
  container: { padding: 16, background: "#f5f5f5" },

  card: {
    display: "flex",
    background: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    alignItems: "center"
  },

  profile: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    marginRight: 16
  },

  name: { fontWeight: "700", fontSize: 16 },

  course: {
    marginTop: 6,
    fontSize: 12,
    color: "#666"
  }
};