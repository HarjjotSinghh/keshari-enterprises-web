import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 lg:px-8 px-6 md:px-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Left column */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <nav>
            <ul className="space-y-2">
              <h2 className="font-extrabold text-xl">NAVIGATION</h2>
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:underline">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:underline">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:underline">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="hover:underline">
                  Enquiry
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:underline">
                  Schaeffler Publications
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Center columns */}
        <div className="w-full md:w-1/2 flex flex-wrap mb-6 md:mb-0">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="font-extrabold text-lg mb-2">ABOUT</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Keshari Enterprises
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/vision-mission-core-values" className="hover:underline">
                  Vision, Mission & Core Values
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:underline">
                  Awards
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-extrabold text-lg mb-2">PRODUCTS & SOLUTIONS</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/schaeffler" className="hover:underline">
                  Schaeffler
                </Link>
              </li>
              <li>
                <Link href="/bonfiglioli" className="hover:underline">
                  Bonfiglioli
                </Link>
              </li>
              <li>
                <Link href="/dodge" className="hover:underline">
                  Dodge Industrial
                </Link>
              </li>
            </ul>
            <Link href={'#'} className="hover:underline">
              <h2 className="text-base mt-2">Bearing Refurbishment</h2>
            </Link>
            <Link href={'/career'} className="hover:underline">
              <h2 className="text-base mt-2">Career</h2>
            </Link>
            <Link href={'/contact-us'} className="hover:underline">
              <h2 className="text-base mt-2">Contact Us</h2>
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/4">
          {/* <Image
            src="/placeholder.svg"
            alt="Certified by Schaeffler"
            width={240}
            height={80}
            className="bg-card p-2"
          /> */}
        </div>
      </div>
      <div className="flex space-x-2 mt-4 container mx-auto ">
        <Link href="#" className="text-white hover:text-gray-200">
          <span className="sr-only">Facebook</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link href="#" className="text-white hover:text-gray-200">
          <span className="sr-only">LinkedIn</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link href="#" className="text-white hover:text-gray-200">
          <span className="sr-only">YouTube</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      {/* Bottom section */}
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-300 flex flex-wrap justify-between items-center">
        {/* <div className="w-full md:w-auto mb-4 md:mb-0">
          <Link href="/disclaimer" className="hover:underline mr-4">
            Disclaimer
          </Link>
          <Link href="/sitemap" className="hover:underline">
            Sitemap
          </Link>
        </div> */}

        <div className="w-full md:w-auto text-sm">
          &copy; Keshari Enterprises 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
