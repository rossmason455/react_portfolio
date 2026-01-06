export default function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-32 ">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-10 rounded-lg">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <a href="mailto:test@example.com" className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300">


                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-md text-muted-foreground font-semibold">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', handle: '@N00230645', url: '#' },
                  { name: 'IADT', handle: '@N00230645', url: '#' },
                  { name: 'HubSpot Community', handle: '@N00230645', url: '#' },
                  { name: 'LinkedIn', handle: '@N00230645', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-8 rounded-lg"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 ">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}