import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.headline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7c3aed",
          }}
        >
          People &amp; Culture Partner
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 130, fontWeight: 600, color: "#171717", letterSpacing: -4 }}>
            Hari Pavan
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#555", marginTop: 16 }}>
            HR Domain Expert · Talent Acquisition · Employee Engagement
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#171717" }}>
          Ex-Jio · Ex-Flipkart · Ex-Amara Raja · ANAROCK
        </div>
      </div>
    ),
    { ...size }
  );
}
