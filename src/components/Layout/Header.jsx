import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 w-full">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-gray-900 font-bold text-xl">
            <svg
              width="150"
              height="32"
              viewBox="0 0 150 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.68 25V7.84H76.512L84.192 7.816C87.296 7.816 89.704 8.544 91.416 10C93.128 11.456 93.984 13.592 93.984 16.408C93.984 19.224 93.128 21.36 91.416 22.816C89.704 24.272 87.296 25 84.192 25H73.68ZM83.928 10.936H77.52V21.88H83.928C85.944 21.88 87.472 21.44 88.512 20.56C89.552 19.68 90.072 18.296 90.072 16.408C90.072 14.504 89.552 13.12 88.512 12.256C87.472 11.376 85.944 10.936 83.928 10.936ZM96.3909 25V7.84H115.207V10.96H100.231V14.752H113.815V17.872H100.231V21.88H115.207V25H96.3909ZM123.884 25L116.156 7.84H120.332L126.692 22H127.004L133.364 7.84H137.54L129.812 25H123.884Z"
                fill="black"
              />
              <rect width="68.0721" height="32" fill="#0B0C0E" />
              <path
                d="M11.6257 25.12V22L25.4257 22.024C26.1297 22.024 26.6657 21.864 27.0337 21.544C27.4177 21.208 27.6097 20.672 27.6097 19.936C27.6097 19.2 27.4177 18.672 27.0337 18.352C26.6657 18.016 26.1297 17.848 25.4257 17.848H16.8337C15.0577 17.848 13.6737 17.424 12.6817 16.576C11.7057 15.712 11.2177 14.448 11.2177 12.784C11.2177 11.12 11.7057 9.864 12.6817 9.016C13.6737 8.152 15.0577 7.72 16.8337 7.72H30.3217V10.84L17.2417 10.816C16.5537 10.816 16.0177 10.976 15.6337 11.296C15.2497 11.6 15.0577 12.096 15.0577 12.784C15.0577 13.472 15.2497 13.976 15.6337 14.296C16.0177 14.6 16.5537 14.752 17.2417 14.752H25.8337C27.6097 14.752 28.9857 15.192 29.9617 16.072C30.9537 16.936 31.4497 18.224 31.4497 19.936C31.4497 21.632 30.9537 22.92 29.9617 23.8C28.9857 24.68 27.6097 25.12 25.8337 25.12H11.6257ZM33.8574 25V7.888H37.6974V14.872H43.4094L49.0494 7.888H53.8254L46.7694 16.432L53.8254 25H49.0494L43.3854 17.992H37.6974V25H33.8574Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
