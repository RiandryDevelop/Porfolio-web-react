const Monogram = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="64" height="64" rx="14" fill="#08090C" />
    <rect
      x="1.1"
      y="1.1"
      width="61.8"
      height="61.8"
      rx="12.9"
      fill="none"
      stroke="#E9B949"
      strokeOpacity="0.45"
      strokeWidth="1.1"
    />
    <path
      fill="#F2F3F5"
      fillRule="evenodd"
      d="M17.8 14.9H42v19.2H24.9v15H17.8V14.9ZM24.9 21.3h10.7v6.4H24.9v-6.4Z"
    />
    <path
      stroke="#E9B949"
      strokeWidth="6.4"
      strokeLinecap="round"
      d="m35.9 33.8 9.6 15.3"
    />
  </svg>
);

export default Monogram;
