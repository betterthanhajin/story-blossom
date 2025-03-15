import React from "react";

const AuthBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Top-right decoration */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-70 transform rotate-45"></div>

      {/* Left decoration */}
      <div className="absolute -left-20 top-1/3 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-70"></div>

      {/* Bottom-right decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-50 rounded-full blur-3xl opacity-70"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
    </div>
  );
};

export default AuthBackground;
