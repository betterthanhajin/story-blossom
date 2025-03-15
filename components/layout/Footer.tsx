import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              StoryBlossom
            </h3>
            <p className="text-gray-600">
              Create and explore interactive stories with branching narratives.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stories">
                  <a className="text-gray-600 hover:text-primary-600">
                    Browse Stories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auth/register">
                  <a className="text-gray-600 hover:text-primary-600">
                    Create Account
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-primary-600">
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">
                  <a className="text-gray-600 hover:text-primary-600">
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-gray-600 hover:text-primary-600">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            &copy; {currentYear} StoryBlossom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
