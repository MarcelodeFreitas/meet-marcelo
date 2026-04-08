import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 120,
          color: "#eef4ff",
          fontSize: 280,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 120,
            background: "rgba(0,0,0,0.16)",
          }}
        />
        <span style={{ position: "relative", letterSpacing: "-0.06em" }}>M</span>
      </div>
    ),
    size,
  );
}
