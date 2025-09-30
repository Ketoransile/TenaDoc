import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTA: React.FC = () => {
  return (
    <section className="w-full py-16 ">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600  dark:bg-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Text */}
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mt-2 text-lg text-white">
              Connect with a doctor today.
            </p>
          </div>

          {/* Actions */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6"
            >
              <Link href="/find-doctors" aria-label="Find Doctors">
                Find Doctors
              </Link>
            </Button>

            <Button
              asChild
              className="border border-gray-200 bg-white text-gray-800 py-3 px-6 hover:bg-gray-50"
            >
              <Link href="/signup" aria-label="Sign Up">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
