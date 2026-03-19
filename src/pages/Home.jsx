import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Home() {

  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  const user = {
    name: "권순찬",
    role: "부학장",
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
        padding: 24,
        background: "#0B6B74",
        color: "white",
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        marginBottom: 20
      }}>

        {/* 이니셜 */}
        <div style={{
          width: 65,
          height: 65,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          fontSize: 26,
          fontWeight: "800",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 18
        }}>
          {user.name[0]}
        </div>

        {/* 텍스트 */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 20, fontWeight: "800" }}>
            {user.name}
          </div>
          <div style={{ fontSize: 14 }}>
            {user.role}
          </div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>
            {user.org}
          </div>
        </div>

        {/* QR 버튼 */}
        <div
          onClick={() => setShowQR(true)}
          style={{
            width: 60,
            height: 60,
            background: "#ffffff",
            color: "#0B6B74",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 14,
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
          }}
        >
          QR
        </div>

      </div>

      {/* 🟡 메뉴 */}
      <div style={{ padding: 18 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18
        }}>
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => navigate(menu.path)}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 28,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
              onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>
                {menu.icon}
              </div>

              <div style={{
                fontSize: 16,
                fontWeight: "700",
                color: "#222"
              }}>
                {menu.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 하단 */}
      <div style={{ padding: 18 }}>
        <div style={{
          background: "#ffffff",
          padding: 20,
          borderRadius: 16,
          marginBottom: 12,
          textAlign: "center",
          fontWeight: "600",
          fontSize: 15,
          boxShadow: "0 6px 16px rgba(0,0,0,0.06)"
        }}>
          📘 학생규정 및 학칙
        </div>

        <div
          onClick={() => window.open("https://uwins.ulsan.ac.kr", "_blank")}
          style={{
            background: "#ffffff",
            padding: 20,
            borderRadius: 16,
            textAlign: "center",
            fontWeight: "600",
            fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)"
          }}
        >
          🌐 UWINS 바로가기
        </div>
      </div>

      {/* 🔥 하단 로고 */}
      <div style={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center"
      }}>
        <img
          src="/logo.png"
          alt="울산대학교 의과대학"
          style={{
            width: "170px",
            opacity: 0.9
          }}
        />
      </div>

      {/* 🔥 베타 문구 */}
      <div style={{
        textAlign: "center",
        fontSize: 11,
        color: "#888",
        padding: "10px 20px 40px",
        lineHeight: 1.5
      }}>
        본 서비스는 울산대학교 의과대학 학생 지원을 위한<br />
        베타(시범 운영) 버전입니다.<br />
        일부 기능은 테스트 중이며 향후 개선 예정입니다.
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
          <div style={{
            width: 300,
            height: 300,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16
          }}>
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