import Link from "next/link";

export default function Custom500() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-black text-2xl font-bold mb-8">
          500 - Server-side error occurred
        </h1>
        <Link
          className="bg-primary rounded-lg py-4 px-8 text-center mt-12 hover:bg-black text-white transition-all duration-1000"
          href="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
