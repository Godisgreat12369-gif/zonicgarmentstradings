function HeroBanner() {
  return (
    <section className="bg-[#e5d5c3] py-16 lg:py-24 overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          animation: slideInLeft 0.8s ease-out;
        }

        .hero-subtitle {
          animation: slideInLeft 0.8s ease-out 0.2s both;
        }

        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .hero-spline {
          animation: slideInRight 0.8s ease-out 0.2s both;
        }

        spline-viewer {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-[#8b7355] pl-6 space-y-2 hero-title">
              <h1 className="text-5xl lg:text-6xl font-serif italic leading-tight">
                <span className="block text-[#111827]">Dress the Perfect</span>
                <span className="block text-[#8b7355] mt-2">First Impression</span>
              </h1>
              <p className="text-lg text-[#111827] mt-4">
                High-quality professional uniforms that define hospitality and care
              </p>
            </div>

            <div className="pt-6 space-y-4 hero-subtitle">
              <p className="text-2xl font-serif italic text-[#8b7355]">
                Uniforms Built for
              </p>
              <p className="text-3xl font-serif italic text-[#8b7355]">
                Superior Comfort
              </p>
            </div>

            <div className="flex gap-4 pt-4 hero-buttons">
              <button className="bg-[#111827] text-white px-8 py-3 text-sm font-medium hover:bg-[#16a34a] transition-colors transform hover:scale-105 duration-200">
                SHOP NOW
              </button>
              <button className="border-2 border-[#111827] text-[#111827] px-8 py-3 text-sm font-medium hover:bg-[#111827] hover:text-white transition-colors transform hover:scale-105 duration-200">
                EXPLORE COLLECTIONS
              </button>
            </div>
          </div>

          <div className="relative hero-spline h-96 lg:h-[500px]">
            <spline-viewer url="https://prod.spline.design/zJV8lKDkcRGpTPVL/scene.splinecode"></spline-viewer>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-white rounded-lg pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-white rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
