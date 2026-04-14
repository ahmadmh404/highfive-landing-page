export function BackgroundGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(203,172,249,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
  );
}
