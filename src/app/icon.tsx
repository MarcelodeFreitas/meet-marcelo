import { ImageResponse } from "next/og";

export const size = {
  width: 128,
  height: 128,
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
          background: "linear-gradient(165deg, #0f172a 0%, #1e3a8a 100%)",
          borderRadius: 28,
          color: "#f8fafc",
          fontSize: 86,
          fontWeight: 800,
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          letterSpacing: "-0.08em",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
