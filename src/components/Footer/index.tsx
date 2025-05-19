"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10  pt-8 dark:bg-gray-dark md:pt-8 lg:pt-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-8 max-w-[360px] lg:mb-8">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/HHPlogoNew.png"
                    alt="logo"
                    className=" dark:hidden"
                    width={100}
                    height={50}
                  />
                  <Image
                    src="/images/logo/HHPlogoNew.png"
                    alt="logo"
                    className="hidden dark:block"
                    width={100}
                    height={50}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  HHP Software is a leading mobile app development company in
                  the US, UK & UAE and India. We offer innovative digital
                  solutions to our clients across industries.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/hhpsoftware"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 text-[#1877F2] duration-300 hover:text-[#2DB009] dark:text-[#1877F2] dark:hover:text-[#2DB009]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/SoftwareHhp?mx=2"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 text-black duration-300 hover:text-[#2DB009] dark:text-black dark:hover:text-[#2DB009]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/hhpsoftwarepvtltd/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="mr-3 text-[#833AB4] duration-300 hover:text-[#2DB009] dark:text-[#833AB4]  dark:hover:text-[#2DB009]"

                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hhp-software-pvt-ltd/about/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] duration-300 hover:text-[#2DB009] dark:text-[#0077B5] dark:hover:text-[#2DB009]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-[#ff6600]">
                  Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/billingSoftwareDemo"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Billing Software Demo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="dark:hover:text-[#2DB009 mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-[#ff6600]">
                  Services
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/services/webDevelopment"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobileAppDevelopment"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/softwareDevelopment"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/blockchainDevelopment"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Block Chain Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digitalMarketingServices"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      Digital Marketing Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/additionalServices/ITHardware"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      IT Hardware
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/additionalServices/ITManpower"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]"
                    >
                      IT Manpower
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-[#ff6600]">
                  Support & Help
                </h2>
                <ul>
                  <li className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]">
                    Head Office : C-25, Sector 58, Noida, Uttar Pradesh 201301
                  </li>

                  <li className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#2DB009] dark:text-body-color-dark dark:hover:text-[#2DB009]">
                    Back Office : J4, Noida Sec-58, Opposite U-Flex, UP (201301)
                  </li>
                  <li className=" mb-4  flex items-center gap-1 text-base text-body-color">
                    <Link
                      href="mailto:support@hhpsoftware.in?subject=Support%20Request&body=Hello,%20I%20need%20assistance%20with..."
                      className=" duration-300 text-[#ff0000] hover:text-[#2DB009] dark:[#ff0000] dark:hover:text-[#2DB009]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                      </svg>
                    </Link>
                    support@hhpsoftware.in
                  </li>
                  <li className="mb-4 flex items-center gap-1 text-base text-body-color ">
                    <Link
                      href="tel:01204511388"
                      className="duration-300 text-[#2589ff]  hover:text-[#2DB009] dark:text-[#2589ff]  dark:hover:text-[#2DB009] "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.62 10.79a15.534 15.534 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.3 22 2 13.7 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54a1 1 0 01-.24 1.05l-2.2 2.2z" />
                      </svg>
                    </Link>
                    0120-4511388
                  </li>

                  <li className="mb-4 flex items-center gap-1 text-base text-body-color ">
                    <Link
                      className=" duration-300 text-[#25d366] bg-[] hover:text-[#2DB009] dark:text-[#25d366] dark:hover:text-[#2DB009] "
                      href="https://wa.me/919599959908?text=Hello!%20I'm%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                      >
                        <path d="M16.003 2.998c-7.16 0-13 5.84-13 13 0 2.303.603 4.557 1.744 6.532L3 29l6.646-1.716A12.93 12.93 0 0016.003 29c7.16 0 13-5.84 13-13s-5.84-13-13-13zm0 23.4a10.362 10.362 0 01-5.279-1.449l-.38-.222-3.948 1.018 1.05-3.85-.247-.394a10.36 10.36 0 01-1.58-5.52c0-5.71 4.648-10.357 10.357-10.357s10.357 4.648 10.357 10.357-4.648 10.357-10.357 10.357zm5.846-7.85c-.32-.16-1.902-.938-2.196-1.046-.294-.107-.508-.16-.723.16-.214.32-.828 1.045-1.015 1.26-.187.213-.374.24-.694.08-.32-.16-1.352-.5-2.577-1.59-.953-.85-1.597-1.9-1.784-2.22-.187-.32-.02-.492.14-.652.143-.143.32-.374.48-.56.16-.187.213-.32.32-.533.106-.213.054-.4-.027-.56-.08-.16-.723-1.748-.99-2.398-.267-.64-.538-.547-.723-.56l-.62-.013c-.213 0-.56.08-.854.374s-1.12 1.093-1.12 2.665 1.147 3.094 1.307 3.306c.16.213 2.258 3.444 5.474 4.826.765.33 1.36.528 1.824.675.767.243 1.464.208 2.015.127.615-.092 1.902-.777 2.17-1.527.267-.75.267-1.393.187-1.527-.08-.133-.293-.213-.613-.374z" />
                      </svg>
                    </Link>
                    +91 9599 9599 08
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              HHP Software © All Rights Reserved
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#cce6f0" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#00a0e3"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopColor="#00a0e3" stopOpacity="0.47" />
                <stop offset="1" stopColor="#cce6f0" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00a0e3" stopOpacity="0.62" />
                <stop offset="1" stopColor="#00a0e3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00a0e3" stopOpacity="0" />
                <stop offset="1" stopColor="#00a0e3" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00a0e3" stopOpacity="0.62" />
                <stop offset="1" stopColor="#00a0e3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00a0e3" stopOpacity="0" />
                <stop offset="1" stopColor="#00a0e3" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00a0e3" stopOpacity="0.62" />
                <stop offset="1" stopColor="#00a0e3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00a0e3" stopOpacity="0" />
                <stop offset="1" stopColor="#00a0e3" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
