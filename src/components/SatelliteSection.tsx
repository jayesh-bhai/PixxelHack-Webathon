import { Satellite, Radio, Eye, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import satelliteImage from '@/assets/satellite-image.jpg';

const SatelliteSection = () => {
  const satellites = [
    {
      icon: Radio,
      name: "INSAT Series",
      type: "Communication",
      description: "Providing telecommunications, broadcasting, and meteorological services across India.",
      applications: ["Telecommunications", "Broadcasting", "Weather Forecasting", "Disaster Management"],
    },
    {
      icon: Eye,
      name: "ResourceSat Series",
      type: "Earth Observation",
      description: "Advanced remote sensing for natural resource management and environmental monitoring.",
      applications: ["Agriculture", "Forestry", "Water Resources", "Urban Planning"],
    },
    {
      icon: Navigation,
      name: "NavIC (IRNSS)",
      type: "Navigation",
      description: "India's regional navigation satellite system providing accurate positioning services.",
      applications: ["Navigation", "Timing", "Emergency Services", "Transportation"],
    },
  ];

  return (
    <section id="satellite" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text ">
              Satellite Technology
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced satellite systems serving diverse applications from communication 
            to earth observation and navigation services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Satellite Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={satelliteImage} 
                alt="ISRO Satellite"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border animate-glow">
              <div className="text-center">
                <div className="text-2xl font-bold text-space-blue">400+</div>
                <div className="text-sm text-muted-foreground">Satellites Launched</div>
              </div>
            </div>
          </div>

          {/* Satellite Categories */}
          <div className="space-y-6">
            {satellites.map((satellite, index) => (
              <Card 
                key={satellite.name}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-cosmic">
                      <satellite.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">{satellite.name}</CardTitle>
                      <CardDescription className="text-space-blue font-medium">
                        {satellite.type} Satellite
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {satellite.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {satellite.applications.map((app) => (
                      <span 
                        key={app}
                        className="px-3 py-1 bg-space-blue/20 text-space-blue rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Technical Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Record Launch",
                description: "104 satellites in a single mission",
                highlight: "PSLV-C37",
              },
              {
                title: "Cost Efficiency",
                description: "World's most economical Mars mission",
                highlight: "₹450 Crores",
              },
              {
                title: "Precision",
                description: "Sub-meter accuracy positioning",
                highlight: "NavIC System",
              },
            ].map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-secondary/30 backdrop-blur-sm border border-border animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-space-blue mb-2">
                  {achievement.highlight}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {achievement.title}
                </div>
                <div className="text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteSection;