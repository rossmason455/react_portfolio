

export default function Navbar({ activeSection }){
    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-4">
            {['intro', 'projects', 'contact'].map(section => (
                <button
                    key={section}
                    onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
                    className={`w-2 h-8 cursor-pointer rounded-full
                      ${activeSection === section ? 'bg-foreground' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'} `}
                ><span className="text-md ml-4 font-semibold uppercase" >{section}</span></button>
            ))}
          </div>
        </nav>
    );
}