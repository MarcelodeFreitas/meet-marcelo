import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(145deg, #1f3fff 0%, #6c3bff 52%, #18d3ff 100%)",
          borderRadius: 40,
          color: "#eef4ff",
          fontSize: 102,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 40,
            background: "rgba(0,0,0,0.16)",
          }}
        />
        <span style={{ position: "relative", letterSpacing: "-0.06em" }}>M</span>
      </div>
    ),
    size,
  );
}
