import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      <div style={styles.left} onClick={() => navigate(-1)}>
        <span style={styles.arrow}>←</span>
        <span style={styles.text}>뒤로</span>
      </div>

      <div style={styles.title}>{title}</div>

      {/* 오른쪽 여백 맞추기 */}
      <div style={{ width: 60 }} />
    </div>
  );
}

export default Header;

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    background: "#0B6B74",
    color: "#fff",
    fontWeight: "600"
  },

  left: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },

  arrow: {
    fontSize: "18px",
    marginRight: "6px"
  },

  text: {
    fontSize: "14px"
  },

  title: {
    fontSize: "16px",
    fontWeight: "700"
  }
};