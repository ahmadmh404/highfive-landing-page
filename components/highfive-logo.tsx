export function HighFiveLogo() {
  return (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground"
    >
      <path
        d="M8 10H4V18H8V10ZM12 10V18H16V10H12ZM8 22V30H4V22H8ZM12 22H16V30H12V22Z"
        fill="currentColor"
        className="text-primary"
      />
      <circle
        cx="20"
        cy="20"
        r="4"
        fill="currentColor"
        className="text-accent"
      />

      <text
        x="30"
        y="26"
        fontFamily="Geist, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="currentColor"
      >
        highfive
      </text>
    </svg>
  );
}
