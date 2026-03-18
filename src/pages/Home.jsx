import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Home() {

  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  const user = {
    name: "임영석",
    role: "학장",
    org: "울산대학교 의과대학",
    id: "UlsanMed_0001"
  };

  const menus = [
    { title: "식단표", icon: "🍱", path: "/meal" },
    { title: "강의시간표", icon: "📅", path: "/schedule" },
    { title: "실습일정", icon: "🏥", path: "/practice" },
    { title: "교수소개", icon: "👨‍⚕️", path: "/professor" },
    { title: "교학행정실", icon: "🏢", path: "/office" },
    { title: "공지사항", icon: "📢", path: "/notice" }
  ];

  return (
    <div style={{ background: "#f4f7f9", minHeight: "100vh" }}>

      {/* 🔵 상단 헤더 */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: 20,
        background: "#0B6B74",
        color: "white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 15
      }}>

        {/* 이니셜 */}
        <div style={{
          width: 55,
          height: 55,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          fontSize: 22,
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15
        }}>
          {user.name[0]}
        </div>

        {/* 텍스트 */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: "700" }}>
            {user.name}
          </div>
          <div style={{ fontSize: 13 }}>
            {user.role}
          </div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>
            {user.org}
          </div>
        </div>

        {/* QR 버튼 */}
        <div
          onClick={() => setShowQR(true)}
          style={{
            width: 55,
            height: 55,
            background: "#ffffff",
            color: "#0B6B74",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          QR
        </div>

      </div>

      {/* 🟡 메뉴 */}
      <div style={{ padding: 15 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 15
        }}>
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => navigate(menu.path)}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: 22,
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
              onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {menu.icon}
              </div>

              <div style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#333"
              }}>
                {menu.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 하단 */}
      <div style={{ padding: 15 }}>
        <div style={{
          background: "#ffffff",
          padding: 18,
          borderRadius: 14,
          marginBottom: 10,
          textAlign: "center",
          fontWeight: "500",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
        }}>
          📘 학생규정 및 학칙
        </div>

        <div
          onClick={() => window.open("https://uwins.ulsan.ac.kr", "_blank")}
          style={{
            background: "#ffffff",
            padding: 18,
            borderRadius: 14,
            textAlign: "center",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          🌐 UWINS 바로가기
        </div>
      </div>

      {/* 🔥 QR 전체화면 */}
      {showQR && (
        <div
          onClick={() => setShowQR(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16
            }}
          >
            <QRCodeCanvas value={user.id} size={220} />

            <div style={{ marginTop: 10, fontSize: 12 }}>
              {user.id}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;