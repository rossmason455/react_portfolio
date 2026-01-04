export default function Intro(){
    return(
        <header id="intro" className="min-h-screen flex items-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg grid lg:grid-cols-5 gap-12 sm:gap-16 w-full p-30 rounded-lg ">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-mono tracking-wider font-bold text-muted-foreground">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
                  Ross <br />
                  <span className="">Mason</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Frontend Developer crafting digital experiences at the intersection of
                  <span className="text-[#D9073D]"> design</span>,<span className="text-[#D9073D]"> technology</span>, and
                  <span className="text-[#D9073D]"> user experience</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-lg text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Ireland</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-lg text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground text-lg">STUDENT</div>
                  <div className="text-muted-foreground text-lg">@ IADT</div>
                  <div className="text-md text-muted-foreground">2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2 text-[#5D67FF] cursor-pointer">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-lg border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}