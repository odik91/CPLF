import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">CPLF LMS</h1>
        <p className="text-slate-600 mb-8">
          Platform pembelajaran Kurikulum Pembelajaran Literasi Framework — Multimedia & AI.
        </p>
        <Link
          href="/login"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-medium transition-colors"
        >
          Masuk
        </Link>
      </div>
    </div>
  );
}
