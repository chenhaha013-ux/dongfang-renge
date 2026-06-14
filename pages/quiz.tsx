import { useState } from "react";
import { useRouter } from "next/router";
import { questions } from "./data";

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleAnswer = (selectedOptionIdx: number) => {
    const dimension = question.dimension;
    let newScores = { ...scores };

    if (dimension === 'EI') {
      selectedOptionIdx === 0 ? newScores.E += 1 : newScores.I += 1;
    } else if (dimension === 'SN') {
      selectedOptionIdx === 0 ? newScores.S += 1 : newScores.N += 1;
    } else if (dimension === 'TF') {
      selectedOptionIdx === 0 ? newScores.T += 1 : newScores.F += 1;
    } else if (dimension === 'JP') {
      selectedOptionIdx === 0 ? newScores.J += 1 : newScores.P += 1;
    } else if (dimension === 'MX') {
      // 第5、6幕的综合题，映射到对应MBTI维度
      if (current === 16) { selectedOptionIdx === 0 ? newScores.F += 1 : newScores.T += 1; }
      else if (current === 17) { selectedOptionIdx === 0 ? newScores.E += 1 : newScores.I += 1; }
      else if (current === 18) { selectedOptionIdx === 0 ? newScores.T += 1 : newScores.F += 1; }
      else if (current === 19) { selectedOptionIdx === 0 ? newScores.S += 1 : newScores.N += 1; }
      else if (current === 20) { selectedOptionIdx === 0 ? newScores.E += 1 : newScores.I += 1; }
      else if (current === 21) { selectedOptionIdx === 0 ? newScores.J += 1 : newScores.P += 1; }
      else if (current === 22) { selectedOptionIdx === 0 ? newScores.J += 1 : newScores.P += 1; }
      else if (current === 23) { selectedOptionIdx === 0 ? newScores.E += 1 : newScores.I += 1; }
    }

    setScores(newScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const finalType = 
        (newScores.E >= newScores.I ? 'E' : 'I') +
        (newScores.S >= newScores.N ? 'S' : 'N') +
        (newScores.T >= newScores.F ? 'T' : 'F') +
        (newScores.J >= newScores.P ? 'J' : 'P');
      
      localStorage.setItem('mbtiResult', finalType);
      router.push('/result');
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "white", position: "relative", overflow: "hidden" }}>
      {/* 红雾背景 */}
      <div style={{ position: "absolute", top: "-220px", right: "-120px", width: "520px", height: "520px", borderRadius: "50%", background: "#631212", filter: "blur(200px)", opacity: 0.45 }} />
      <div style={{ position: "absolute", left: "-180px", top: "220px", width: "420px", height: "420px", borderRadius: "50%", background: "#631212", filter: "blur(180px)", opacity: 0.25 }} />

      <div style={{ position: "relative", zIndex: 10 }}>
        {/* 顶部导航 */}
        <div style={{ position: "sticky", top: 0, backdropFilter: "blur(20px)", background: "rgba(0,0,0,.45)", borderBottom: "1px solid rgba(255,255,255,.05)", padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,.5)", fontSize: "14px" }}>
            <span>{question.act}</span>
            <span>{current + 1} / {questions.length}</span>
          </div>
          <div style={{ marginTop: "16px", height: "4px", borderRadius: "999px", background: "rgba(255,255,255,.08)", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", background: "#631212", transition: ".4s" }} />
          </div>
        </div>

        {/* 题目区 */}
        <div style={{ padding: "30px 24px 100px" }}>
          <h1 style={{ fontSize: "34px", lineHeight: 1.5, margin: 0 }}>{question.title}</h1>
          <p style={{ marginTop: "24px", color: "rgba(255,255,255,.6)", lineHeight: 1.9, fontSize: "15px" }}>{question.description}</p>
          <div style={{ marginTop: "50px" }}>
            {question.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}
                style={{ width: "100%", padding: "24px", marginBottom: "16px", borderRadius: "28px", border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.04)", color: "white", textAlign: "left", fontSize: "15px", cursor: "pointer", backdropFilter: "blur(30px)" }}
              >{option}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}