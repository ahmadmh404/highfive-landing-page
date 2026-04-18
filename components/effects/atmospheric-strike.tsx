export function AtmosphericStrike() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 right-1/4 w-px h-full opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #CBACF9 40%, #E4ECFF 60%, transparent)",
        }}
      />
      <div
        className="absolute top-0 right-1/3 w-px h-3/4 opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #CBACF9 50%, transparent)",
        }}
      />
      <div
        className="absolute -top-20 right-1/4 w-96 h-96 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #CBACF9 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #E4ECFF 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
