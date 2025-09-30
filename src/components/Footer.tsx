import * as React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-12 bg-white border-t mt-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">TenaDoc</h3>
            <p className="text-base text-gray-600 max-w-sm">
              Connect with certified doctors online and get medical advice from
              the comfort of your home.
            </p>
          </div>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="mt-2">
            <h4
              id="footer-services"
              className="text-sm font-semibold text-gray-900"
            >
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Online Consultations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Find Specialists
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company" className="mt-2">
            <h4
              id="footer-company"
              className="text-sm font-semibold text-gray-900"
            >
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-labelledby="footer-legal" className="mt-2">
            <h4
              id="footer-legal"
              className="text-sm font-semibold text-gray-900"
            >
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-800">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright row */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 TenaDoc. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <span className="hidden md:inline-block h-4 border-l border-gray-200" />
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
