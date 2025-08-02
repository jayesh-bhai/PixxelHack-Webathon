import { Rocket, Target, Globe, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MissionSection = () => {
  const missions = [
    {
      icon: Rocket,
      title: "Gaganyaan",
      description: "India's first crewed spaceflight mission to demonstrate human spaceflight capability.",
      status: "In Development",
      timeline: "2024-2025",
    },
    {
      icon: Globe,
      title: "Mangalyaan",
      description: "Mars Orbiter Mission showcasing India's interplanetary exploration capabilities.",
      status: "Successfully Completed",
      timeline: "2013-2022",
    },
    {
      icon: Star,
      title: "Chandrayaan Series",
      description: "Lunar exploration missions advancing our understanding of the Moon's composition.",
      status: "Ongoing",
      timeline: "2008-Present",
    },
    {
      icon: Target,
      title: "Aditya-L1",
      description: "Solar observation mission to study the Sun's corona and solar activities.",
      status: "Active",
      timeline: "2023-Present",
    },
  ];

  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-space-navy/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Our Missions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering space exploration with cutting-edge missions that push the boundaries 
            of human knowledge and technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <Card 
              key={mission.title} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-cosmic">
                    <mission.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{mission.title}</CardTitle>
                    <CardDescription className="text-space-blue font-medium">
                      {mission.timeline}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {mission.description}
                </p>
                <div className="flex items-center space-x-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    mission.status === 'Successfully Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : mission.status === 'Active' || mission.status === 'Ongoing'
                      ? 'bg-space-blue/20 text-space-blue'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {mission.status}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Successful Launches" },
            { number: "50+", label: "Satellites Deployed" },
            { number: "15+", label: "Countries Served" },
            { number: "60+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;