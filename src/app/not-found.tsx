import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">404</h1>
      <p className="text-xl md:text-2xl text-grey-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="btn-primary text-lg"
      >
        Back to Home
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
          <path
            d="M10 8L14 12L10 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
