import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { personalityData } from "../lib/personalityData";

export default function ResultPage() {
  const router = useRouter();
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mbtiResult");
    if (saved) {
      setType(saved);
    } else {
      router.push('/quiz');
    }
  }, [router]);

  if (!type) return <div style={{ minHeight: "100vh", background: "#050505", color: "white", textAlign: "center", paddingTop: "200px" }}>正在生成你的命运档案...</div>;

  const character = personalityData[type as keyof typeof personalityData];
  if (!character) return <div style={{ minHeight: "100vh", background: "#050505", color: "white", textAlign: "center", paddingTop: "200px" }}>未找到对应人格，请重新测试。</div>;

  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "white", position: "relative", overflow: "hidden" }}>
      {/* 背景红雾 */}
      <div style={{ position: "absolute", top: "-220px", right: "-120px", width: "520px", height: "520px", borderRadius: "50%", background: "#631212", filter: "blur(220px)", opacity: 0.45 }} />
      <div style={{ position: "absolute", bottom: "-180px", left: "-120px", width: "420px", height: "420px", borderRadius: "50%", background: "#631212", filter: "blur(180px)", opacity: 0.25 }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "600px", margin: "0 auto", padding: "30px 24px 60px" }}>
        
        {/* 头部 */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <div style={{ color: "#9A4444", letterSpacing: "3px", fontSize: "12px" }}>东方人格测试结果</div>
          <h1 style={{ fontSize: "56px", marginTop: "20px", marginBottom: "10px" }}>{character.name}</h1>
          <div style={{ fontSize: "24px", color: "#B77B7B" }}>{character.prototype}</div>
          <div style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255,255,255,.4)" }}>对应人格：{type}</div>
          <p style={{ marginTop: "18px", color: "rgba(255,255,255,.75)", lineHeight: 1.8, fontSize: "16px" }}>{character.desc}</p>
        </div>

        {/* 图片 */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <img src={character.image} alt={character.name} style={{ width: "100%", maxWidth: "420px", borderRadius: "28px", display: "inline-block" }} />
        </div>

        {/* 详细档案 */}
        <div style={{ marginTop: "50px", borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: "40px" }}>
          
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>人格概述</h2>
            <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px" }}>{character.details.summary}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>核心人格关键词</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {character.details.keywords.map((kw, idx) => (
                <span key={idx} style={{ background: "rgba(255,255,255,.06)", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", color: "rgba(255,255,255,.8)" }}>{kw}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>你的内在驱动力</h2>
            <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px" }}>{character.details.drive}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>你的天赋</h2>
            <ul style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px", paddingLeft: "20px" }}>
              {character.details.talent.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>你的成长课题</h2>
            <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px" }}>{character.details.growth}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>处事风格</h2>
            <ul style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px", paddingLeft: "20px" }}>
              {character.details.style.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>决策风格</h2>
            <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px" }}>{character.details.decision}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>东方人格原型故事</h2>
            <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 2, fontSize: "15px" }}>{character.details.story}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#F5F5F5" }}>人格关系图谱</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", color: "rgba(255,255,255,.7)", fontSize: "15px" }}>
              <div><strong style={{ color: "white" }}>最佳伙伴：</strong> {character.details.bestPartner} <br/><span style={{ fontSize: "13px", color: "rgba(255,255,255,.5)" }}>{character.details.bestPartnerDesc}</span></div>
              <div><strong style={{ color: "white" }}>最佳情侣：</strong> {character.details.bestLover} <br/><span style={{ fontSize: "13px", color: "rgba(255,255,255,.5)" }}>{character.details.bestLoverDesc}</span></div>
              <div><strong style={{ color: "white" }}>最佳合作者：</strong> {character.details.bestCollaborator} <br/><span style={{ fontSize: "13px", color: "rgba(255,255,255,.5)" }}>{character.details.bestCollaboratorDesc}</span></div>
              <div><strong style={{ color: "white" }}>想法两路人：</strong> {character.details.opposing} <br/><span style={{ fontSize: "13px", color: "rgba(255,255,255,.5)" }}>{character.details.opposingDesc}</span></div>
            </div>
          </div>

          <div style={{ marginTop: "40px", padding: "30px", background: "rgba(255,255,255,.03)", borderRadius: "24px", border: "1px solid rgba(255,255,255,.05)" }}>
            <p style={{ color: "rgba(255,255,255,.8)", lineHeight: 2, fontSize: "16px", fontStyle: "italic", textAlign: "center" }}>「 {character.details.mantra} 」</p>
          </div>

        </div>
      </div>
    </div>
  );
}