export default function PacmanGame() {
  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        src="/game/Pacman/index.html"
        width="600"
        height="700"
        style={{ border: "none" }}
        title="Pac-Man"
      />
    </div>
  );
}