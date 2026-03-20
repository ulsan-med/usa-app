import { useEffect, useState } from "react";
import Header from "../components/Header";

function Notice() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [emergency, setEmergency] = useState(null);

  useEffect(() => {
    // 📢 일반 공지
    fetch("/data/notice.json")
      .then(res => res.json())
      .then(data => {
        setList(data);
      })
      .catch(err => {
        console.error("공지 로딩 실패:", err);
      });

    // 🚨 긴급 공지
    fetch("/data/emergency.json")
      .then(res => res.json())
      .then(data => {
        if (data.active) {
          setEmergency(data);
        }
      });
  }, []);

  return (
    <div>
      <Header title="공지사항" />

      <div style={styles.container}>

        {/* 🚨 긴급공지 배너 */}
        {emergency && (
          <div
            style={styles.emergencyBanner}
            onClick={() => setSelected({
              title: "🚨 긴급 공지",
              detail: emergency.message
            })}
          >
            🚨 {emergency.message}
          </div>
        )}

        {/* 📢 일반 공지 */}
        {list.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            공지사항이 없습니다.
          </div>
        ) : (
          list.map(item => (
            <div
              key={item.id}
              style={styles.card}
              onClick={() => setSelected(item)}
            >
              {item.important && <div style={styles.badge}>중요</div>}

              <div style={styles.title}>{item.title}</div>
              <div style={styles.date}>{item.date}</div>
              <div style={styles.content}>{item.content}</div>

              {/* 자세히보기 버튼 */}
              <button
                style={styles.detailBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(item);
                }}
              >
                자세히보기
              </button>
            </div>
          ))
        )}
      </div>

      {/* 📄 상세보기 모달 */}
      {selected && (
        <div style={styles.modal} onClick={() => setSelected(null)}>
          <div
            style={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginBottom: "10px" }}>{selected.title}</h3>
            <p style={{ marginBottom: "20px" }}>{selected.detail}</p>

            <button
              style={styles.closeBtn}
              onClick={() => setSelected(null)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notice;

const styles = {
  container: {
    padding: "16px",
    background: "#f5f5f5",
    minHeight: "100vh"
  },

  // 🚨 긴급공지 배너
  emergencyBanner: {
    background: "#ffe5e5",
    color: "#b71c1c",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "12px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer"
  },

  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "12px",
    position: "relative",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    cursor: "pointer"
  },

  badge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#e53935",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px"
  },

  title: {
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "5px"
  },

  date: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "8px"
  },

  content: {
    fontSize: "14px",
    color: "#444"
  },

  detailBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
    fontSize: "13px",
    cursor: "pointer"
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },

  modalBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    width: "80%",
    maxWidth: "400px"
  },

  closeBtn: {
    width: "100%",
    padding: "10px",
    border: "none",
    background: "#1976d2",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "14px"
  }
};