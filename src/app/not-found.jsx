"use client"

const Notfound = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
      {/* Glassmorphic Container */}
      <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-3xl text-center shadow-2xl">
        {/* Glow Effect behind the text */}
        <div className="relative">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80">
            404
          </h1>
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl -z-10 animate-pulse"></div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-white tracking-tight">
          Lost in the digital void?
        </h2>

        <p className="mt-4 text-slate-400 leading-relaxed">
          The page you're looking for has been moved, deleted, or never existed
          in this dimension.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href="/"
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
          >
            Back to Home
          </a>

          <button
            onClick={() => window.location.reload()}
            className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
          >
            Try refreshing the page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;