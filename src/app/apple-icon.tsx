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
          background: "linear-gradient(165deg, #0f172a 0%, #1e3a8a 100%)",
          borderRadius: 40,
          color: "#f8fafc",
          fontSize: 112,
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
