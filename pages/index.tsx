import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景弥散红雾 */}

      <div
        style={{
          position: "absolute",
          top: "-220px",
          right: "-120px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "#631212",
          filter: "blur(200px)",
          opacity: 0.45,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "-180px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#631212",
          filter: "blur(180px)",
          opacity: 0.25,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-180px",
          right: "-100px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "#631212",
          filter: "blur(220px)",
          opacity: 0.2,
        }}
      />

      {/* 黑色遮罩 */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.05), rgba(0,0,0,.25), rgba(0,0,0,.6))",
        }}
      />

      {/* 内容 */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "24px",
          paddingTop: "70px",
          paddingBottom: "40px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 标签 */}

        <div>
          <span
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(255,255,255,.03)",
              color: "rgba(255,255,255,.5)",
              fontSize: "12px",
              letterSpacing: "2px",
            }}
          >
            东方人格 · EASTERN ARCHETYPE
          </span>
        </div>

        {/* 标题 */}

        <div style={{ marginTop: "50px" }}>
          <h1
            style={{
              fontSize: "52px",
              lineHeight: 1.1,
              fontWeight: 600,
              margin: 0,
            }}
          >
            进入一场
            <br />
            东方命运故事
          </h1>
        </div>

        {/* 描述 */}

        <div style={{ marginTop: "28px" }}>
          <p
            style={{
              color: "rgba(255,255,255,.6)",
              lineHeight: 2,
              fontSize: "15px",
            }}
          >
            在这里，我们致力于为 Z 世代打造全新的身份认同体验。
            <br />
            我们以陕西东路皮影为艺术蓝本，
            <br />
            将东方千年智慧与现代人格心理学融合，
            <br />
            为您构建一套独一无二的人格纹样体系。
          </p>
        </div>

        {/* 卡片 */}

        <div
          style={{
            marginTop: "40px",
            borderRadius: "32px",
            padding: "24px",
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "18px",
              }}
            >
              东方人格测试
            </span>

            <span
              style={{
                color: "#9A4444",
                fontWeight: 700,
              }}
            >
              0%
            </span>
          </div>

          <div
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.4)",
              fontSize: "13px",
            }}
          >
            24道命运题 · 约5分钟
          </div>

          <div
            style={{
              marginTop: "18px",
              height: "4px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "0%",
                height: "100%",
                background: "#631212",
              }}
            />
          </div>
        </div>

        {/* 底部按钮 */}

        <div
          style={{
            marginTop: "auto",
            paddingTop: "40px",
          }}
        >
          <Link href="/quiz">
            <button
              style={{
                width: "100%",
                height: "58px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg,#631212,#8A2C2C)",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow:
                  "0 10px 40px rgba(99,18,18,.45)",
              }}
            >
              开启命运旅程
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}