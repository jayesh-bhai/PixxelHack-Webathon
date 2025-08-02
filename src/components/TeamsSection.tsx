import { Users, Award, Lightbulb, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeamsSection = () => {
  const teams = [
    {
      icon: Users,
      name: "Mission Planning",
      description: "Strategic planning and execution of complex space missions.",
      expertise: ["Mission Design", "Trajectory Analysis", "Risk Assessment", "Timeline Management"],
      members: "150+ Engineers",
    },
    {
      icon: Award,
      name: "Engineering",
      description: "Design and development of spacecraft, satellites, and launch vehicles.",
      expertise: ["Mechanical Design", "Electronics", "Software Systems", "Testing & Validation"],
      members: "500+ Engineers",
    },
    {
      icon: Lightbulb,
      name: "Research & Development",
      description: "Pioneering research in space technology and scientific exploration.",
      expertise: ["Space Sciences", "Advanced Materials", "Propulsion Systems", "AI & Robotics"],
      members: "300+ Scientists",
    },
    {
      icon: Globe,
      name: "Operations",
      description: "Mission control, satellite operations, and ground station management.",
      expertise: ["Mission Control", "Telemetry", "Data Analysis", "Ground Systems"],
      members: "200+ Specialists",
    },
  ];

  const achievements = [
    {
      title: "Leadership",
      stat: "Dr. S. Somanath",
      description: "Chairman, ISRO",
    },
    {
      title: "Workforce",
      stat: "17,000+",
      description: "Dedicated Professionals",
    },
    {
      title: "Centers",
      stat: "14",
      description: "Research Facilities",
    },
    {
      title: "Experience",
      stat: "60+ Years",
      description: "Space Excellence",
    },
  ];

  const values = [
    "Innovation and Excellence",
    "Scientific Integrity", 
    "Collaborative Spirit",
    "National Pride",
    "Global Partnership",
    "Sustainable Development",
  ];

  return (
    <section id="teams" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Our Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Brilliant minds working together to achieve extraordinary milestones 
            in space exploration and technology development.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teams.map((team, index) => (
            <Card 
              key={team.name}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-cosmic">
                      <team.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{team.name}</CardTitle>
                      <CardDescription className="text-space-blue font-medium">
                        {team.members}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {team.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Core Expertise:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {team.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-space-blue/20 text-space-blue rounded-full text-sm font-medium text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organization Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-secondary/30 backdrop-blur-sm border border-border animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.2}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-2">
                {achievement.stat}
              </div>
              <div className="text-lg font-semibold mb-1">
                {achievement.title}
              </div>
              <div className="text-muted-foreground text-sm">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Values & Culture */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Our Values
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value}
                className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 8) * 0.1}s` }}
              >
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-cosmic text-primary-foreground">
            <h4 className="text-2xl font-bold mb-4">Join Our Mission</h4>
            <p className="text-lg mb-6 opacity-90">
              Be part of India's space journey and contribute to humanity's greatest adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="px-6 py-3 bg-background/20 rounded-lg font-medium">
                Careers @ ISRO
              </span>
              <span className="px-6 py-3 bg-background/20 rounded-lg font-medium">
                Research Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;