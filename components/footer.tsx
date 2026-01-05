"use client"

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
                ConstructionArchonix
              </span>
            </h3>
            <p className="text-white/80">In Development</p>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="mailto:info@constructionarchonix.com"
              className="flex items-center space-x-3 text-white hover:text-[#2d7a4f] transition-colors"
            >
              <span className="font-medium">Contact</span>
              <span>info@constructionarchonix.com</span>
            </a>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60">Launching 2026</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
