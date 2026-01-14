export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Hello World</h1>
      <p style={{ fontSize: "1.25rem", color: "#666" }}>Welcome to your Next.js application!</p>
    </main>
  );
}
