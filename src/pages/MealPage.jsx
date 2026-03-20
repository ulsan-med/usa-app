import { useEffect, useState } from "react";
import Header from "../components/Header";

function MealPage() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("/data/meal.json")
      .then(res => res.json())
      .then(data => setMeal(data[0]));
  }, []);

  if (!meal) return <div>로딩중...</div>;

  const renderSection = (title, items, color) => (
    <div style={{ background: "#fff", borderRadius: "12px", marginBottom: "15px" }}>
      <div style={{ background: color, color: "#fff", padding: "10px", fontWeight: "bold" }}>
        {title}
      </div>

      {items.map((item, i) => (
        <div key={i} style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
          <div style={{ fontWeight: "bold" }}>{item.name}</div>
          <div style={{ fontSize: "13px", color: "#888" }}>⚠ {item.allergy}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "16px", background: "#f5f5f5", minHeight: "100vh" }}>
     <Header title="식단" />

      <div style={{ background: "#fff", padding: "12px", borderRadius: "12px", marginBottom: "15px" }}>
        ⚠ 알레르기 정보: 일부 포함될 수 있습니다.
      </div>

      {renderSection("조식", meal.meals["조식"], "#F28C64")}
      {renderSection("중식", meal.meals["중식"], "#4CAF50")}
      {renderSection("석식", meal.meals["석식"], "#3F51B5")}
    </div>
  );
}

export default MealPage;