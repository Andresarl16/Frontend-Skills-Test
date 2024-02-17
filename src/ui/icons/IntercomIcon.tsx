import React from "react";

const IntercomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <circle cx="28" cy="28" r="24.5" fill="#3290E8" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M38.5 14h-21c-1.908-.003-3.497 1.595-3.5 3.5v21a3.5 3.5 0 0 0 3.5 3.5h21c1.908.003 3.497-1.596 3.5-3.5v-21a3.5 3.5 0 0 0-3.5-3.5Zm-6.767 5.133a.934.934 0 0 1 1.867 0v12.47a.934.934 0 0 1-.933.934c-.495 0-.932-.438-.934-.934v-12.47Zm-4.667-.472a.934.934 0 0 1 1.868 0v13.534a.934.934 0 0 1-.934.933.962.962 0 0 1-.933-.933l-.001-13.534Zm-4.666.472a.934.934 0 0 1 1.867 0v12.47a.934.934 0 0 1-.934.934.962.962 0 0 1-.933-.934v-12.47ZM17.733 21a.933.933 0 1 1 1.867 0v8.395a.934.934 0 0 1-.933.933.943.943 0 0 1-.934-.933V21Zm20.208 14.236c-.143.125-3.602 3.025-9.941 3.025-6.34 0-9.795-2.9-9.941-3.025a.942.942 0 0 1-.1-1.316.96.96 0 0 1 1.312-.102c.055.046 3.142 2.577 8.728 2.577 5.656 0 8.696-2.55 8.726-2.575a.96.96 0 0 1 1.315.1.94.94 0 0 1-.099 1.316Zm.326-5.84a.934.934 0 0 1-.934.933.943.943 0 0 1-.933-.934V21a.933.933 0 1 1 1.867 0v8.395Z"
      clip-rule="evenodd"
    />
  </svg>
);

export default IntercomIcon;