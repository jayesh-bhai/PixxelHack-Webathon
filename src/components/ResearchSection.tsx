import { Microscope, Beaker, Cpu, Atom } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import researchImage from '@/assets/research-image.jpg';

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Space Sciences",
      description: "Fundamental research in astrophysics, planetary science, and space weather.",
      projects: ["Solar Physics", "Planetary Studies", "Space Weather", "Cosmic Ray Research"],
    },
    {
      icon: Beaker,
      title: "Materials Science",
      description: "Developing advanced materials for spacecraft and satellite applications.",
      projects: ["Lightweight Composites", "Heat Shields", "Solar Panels", "Cryogenic Materials"],
    },
    {
      icon: Cpu,
      title: "Technology Development",
      description: "Cutting-edge technology for future space missions and applications.",
      projects: ["AI & ML", "Quantum Computing", "Advanced Propulsion", "Robotics"],
    },
    {
      icon: Atom,
      title: "Nuclear Technology",
      description: "Nuclear power systems and radioisotope applications for space missions.",
      projects: ["RTGs", "Nuclear Propulsion", "Space Reactors", "Radiation Shielding"],
    },
  ];

  const facilities = [
    "Vikram Sarabhai Space Centre (VSSC)",
    "ISRO Satellite Centre (ISAC)",
    "Space Applications Centre (SAC)",
    "Laboratory for Electro-Optics Systems (LEOS)",
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-space-navy/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Research & Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pushing the boundaries of scientific knowledge through cutting-edge research 
            and technological innovation in space sciences.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <Card 
              key={area.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-cosmic">
                    <area.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{area.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-base leading-relaxed">
                  {area.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Projects:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.projects.map((project) => (
                      <span 
                        key={project}
                        className="px-3 py-1 bg-space-blue/20 text-space-blue rounded-full text-sm font-medium text-center"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Facilities & Labs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  World-Class Facilities
                </span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our state-of-the-art research facilities and laboratories provide the 
                infrastructure needed for groundbreaking space research and development.
              </p>
            </div>

            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <div 
                  key={facility}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 0.2}s` }}
                >
                  <div className="w-2 h-2 bg-space-blue rounded-full animate-pulse"></div>
                  <span className="font-medium">{facility}</span>
                </div>
              ))}
            </div>

            {/* Research Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { number: "2000+", label: "Research Papers" },
                { number: "50+", label: "Patents Filed" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 8) * 0.2}s` }}
                >
                  <div className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={researchImage} 
                alt="ISRO Research Facility"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            
            {/* Floating Innovation Badge */}
            <div className="absolute -top-6 -left-6 bg-gradient-cosmic rounded-xl p-6 animate-glow">
              <div className="text-center text-primary-foreground">
                <div className="text-xl font-bold">Innovation</div>
                <div className="text-sm opacity-90">Hub</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;