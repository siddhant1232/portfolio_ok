import { ImageResponse } from "next/og";

export const alt = "Siddhant Gupta — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0D12",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(184, 243, 107, 0.15)",
            filter: "blur(100px)",
          }}
        />

        {/* Top Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#171B26",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#B8F36B",
                fontWeight: 800,
                fontSize: "22px",
              }}
            >
              SG
            </div>
            <span style={{ color: "#F1F0EB", fontSize: "24px", fontWeight: 700 }}>
              Siddhant Gupta
            </span>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(184, 243, 107, 0.1)",
              border: "1px solid rgba(184, 243, 107, 0.4)",
              color: "#B8F36B",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            OPEN TO OPPORTUNITIES
          </div>
        </div>

        {/* Main Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#B8F36B", fontSize: "20px", fontWeight: 600, letterSpacing: "1px" }}>
            FULL STACK DEVELOPER • BACKEND & AI SYSTEMS
          </div>
          <div
            style={{
              color: "#F1F0EB",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "950px",
            }}
          >
            Building digital products with purpose.
          </div>
          <div
            style={{
              color: "#9496A1",
              fontSize: "22px",
              fontWeight: 400,
              maxWidth: "900px",
            }}
          >
            Next.js • TypeScript • Node.js • Redis • LangGraph • Distributed Systems
          </div>
        </div>

        {/* Bottom Credential Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "32px", color: "#9496A1", fontSize: "16px" }}>
            <span>B.Tech CSE &apos;27</span>
            <span>SIH 2025 National Finalist</span>
            <span>Codec Technologies Intern</span>
          </div>
          <div style={{ color: "#B8F36B", fontSize: "16px", fontWeight: 600 }}>
            siddhantgupta.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
