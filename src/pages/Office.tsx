import Header from "../components/Header";

function Office() {
  return (
    <div>
      <Header title="교학행정실" />

      <div style={styles.container}>
        <div style={styles.card}>
          📞 052-000-0000
        </div>

        <div style={styles.card}>
          🕐 운영시간: 09:00 ~ 18:00
        </div>

        <div style={styles.card}>
          📍 울산대학교 의과대학 1층
        </div>
      </div>
    </div>
  );
}

export default Office;

const styles = {
  container: { padding: 16 },

  card: {
    background: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12
  }
};