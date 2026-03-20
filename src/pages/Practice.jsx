import Header from "../components/Header";

function Practice() {
  const data = [
    {
      date: "03/22",
      items: [
        { time: "09:00", title: "해부학 실습", place: "5층 실습실" },
        { time: "14:00", title: "임상실습", place: "울산대병원" }
      ]
    },
    {
      date: "03/24",
      items: [
        { time: "10:00", title: "외과 실습", place: "수술실" }
      ]
    }
  ];

  return (
    <div>
      <Header title="실습일정" />

      <div style={styles.container}>
        {data.map((day, i) => (
          <div key={i} style={styles.dayBox}>
            <div style={styles.date}>{day.date}</div>

            {day.items.map((item, idx) => (
              <div key={idx} style={styles.item}>
                <div style={styles.time}>{item.time}</div>
                <div>
                  <div style={styles.title}>{item.title}</div>
                  <div style={styles.place}>{item.place}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;

const styles = {
  container: { padding: 16, background: "#f5f5f5" },

  dayBox: {
    marginBottom: 16
  },

  date: {
    fontWeight: "700",
    marginBottom: 8
  },

  item: {
    display: "flex",
    background: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8
  },

  time: {
    width: 70,
    fontWeight: "600"
  },

  title: {
    fontWeight: "600"
  },

  place: {
    fontSize: 12,
    color: "#888"
  }
};