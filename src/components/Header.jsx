import { useNavigate } from "react-router-dom";

function Header({ title }) {

  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      padding: "15px 10px",
      background: "#ffffff",
      borderBottom: "1px solid #eee",
      marginBottom: 20
    }}>
      
      <button
        onClick={() => navigate(-1)}
        style={{
          border: "none",
          background: "none",
          fontSize: 18,
          cursor: "pointer",
          marginRight: 10
        }}
      >
        ←
      </button>

      <h3 style={{ margin: 0 }}>
        {title}
      </h3>

    </div>
  );
}

export default Header;