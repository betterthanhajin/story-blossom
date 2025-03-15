"use client";
import Link from "next/link";
import { useSnapshot } from "valtio";
import { authStore } from "../../lib/state/auth";

const HeroSection = () => {
  const { isAuthenticated } = useSnapshot(authStore);

  return (
    <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Story bolossom
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            스토리블라썸은 모든 선택이 중요한 상황에서 매력적인 인터랙티브
            내러티브를 제작할 수 있도록 도와줍니다. 스토리에 생동감을 불어넣고
            독자가 자신만의 모험을 만들어가도록 하세요.
          </p>
          <div className="mt-10 flex justify-center">
            {isAuthenticated ? (
              <Link href="/dashboard/stories/new">
                <a className="btn bg-white text-primary-900 hover:bg-gray-100 py-3 px-6 text-lg">
                  Create Your Story
                </a>
              </Link>
            ) : (
              <div className="space-x-4">
                <Link href="/auth/register">
                  <div className="btn bg-white text-primary-900 hover:bg-gray-100 py-3 px-6 text-lg">
                    Get Started
                  </div>
                </Link>
                <Link href="/stories">
                  <div className="btn bg-transparent border-2 border-white hover:bg-white/10 py-3 px-6 text-lg">
                    Browse Stories
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
