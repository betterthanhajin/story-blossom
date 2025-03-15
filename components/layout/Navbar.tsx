import Link from "next/link";
import { useSnapshot } from "valtio";
import { authStore, authActions } from "../../lib/state/auth";

const Navbar = () => {
  const { isAuthenticated } = useSnapshot(authStore);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-xl font-serif font-bold text-primary-700">
                  StoryBlossom
                </span>
              </a>
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/stories">
                <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Browse Stories
                </a>
              </Link>
              {isAuthenticated && (
                <Link href="/dashboard">
                  <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex space-x-4">
                <Link href="/dashboard/stories/new">
                  <a className="btn btn-primary">Create Story</a>
                </Link>
                <button
                  onClick={() => authActions.logout()}
                  className="btn btn-outline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link href="/auth/login">
                  <a className="btn btn-outline">Login</a>
                </Link>
                <Link href="/auth/register">
                  <a className="btn btn-primary">Sign Up</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
