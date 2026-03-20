import { useEffect, useState } from "react";

function EmergencyNotice() {
  const [notice, setNotice] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("/data/emergency.json")
      .then(res => res.json())
      .then(data => {
        if (data.active) {
          setNotice(data);

          // ⏱ 10초 후 등장
          setTimeout(() => {
            setVisible(true);

            // ⏱ 5초 후 사라짐
            setTimeout(() => {
              setVisible(false);
            }, 5000);

          }, 10000);
        }
      });
  }, []);

  if (!notice || !visible) return null;

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <div style={styles.title}>🚨 긴급 공지</div>
        <div style={styles.content}>{notice.message}</div>
      </div>
    </div>
  );
}

export default EmergencyNotice;

const styles = {
  wrapper: {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999
  },

  box: {
    background: "#333",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "12px",
    minWidth: "280px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    animation: "slideDown 0.4s ease"
  },

  title: {
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "4px"
  },

  content: {
    fontSize: "14px"
  }
};