import { useState } from 'react';
import { Rocket, Target, Globe, Star, Satellite, Zap, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; 

// Import mission images
import gaganyaanImg from '@/assets/missions/gaganyaan.jpg';
import mangalyaanImg from '@/assets/missions/mangalyaan.jpg';
import chandrayaanImg from '@/assets/missions/chandrayaan.jpg';
import adityaImg from '@/assets/missions/aditya-l1.jpg';
import aryabhataImg from '@/assets/missions/aryabhata.jpg';
import pslvImg from '@/assets/missions/pslv-c56.jpg';
import astrosatImg from '@/assets/missions/astrosat.jpg';

const MissionSection = () => {
  const missions = [
    {
      icon: Rocket,
      title: "Gaganyaan",
      description: "India's first crewed spaceflight mission to demonstrate human spaceflight capability.",
      status: "In Development",
      timeline: "2024-2025",
      image: gaganyaanImg,
    },
    {
      icon: Globe,
      title: "Mangalyaan",
      description: "Mars Orbiter Mission showcasing India's interplanetary exploration capabilities.",
      status: "Successfully Completed",
      timeline: "2013-2022",
      image: mangalyaanImg,
    },
    {
      icon: Star,
      title: "Chandrayaan Series",
      description: "Lunar exploration missions advancing our understanding of the Moon's composition.",
      status: "Ongoing",
      timeline: "2008-Present",
      image: chandrayaanImg,
    },
    {
      icon: Target,
      title: "Aditya-L1",
      description: "Solar observation mission to study the Sun's corona and solar activities.",
      status: "Active",
      timeline: "2023-Present",
      image: adityaImg,
    },
    {
      icon: Satellite,
      title: "Aryabhata",
      description: "India's first satellite, marking the beginning of the Indian space program and satellite technology development.",
      status: "Successfully Completed",
      timeline: "1975",
      image: aryabhataImg,
    },
    {
      icon: Rocket,
      title: "PSLV-C56",
      description: "Polar Satellite Launch Vehicle mission demonstrating India's reliable and cost-effective launch capabilities.",
      status: "Successfully Completed",
      timeline: "2023",
      image: pslvImg,
    },
    {
      icon: Eye,
      title: "Astrosat",
      description: "India's first dedicated multi-wavelength space observatory for studying celestial sources in X-ray and optical wavelengths.",
      status: "Active",
      timeline: "2015-Present",
      image: astrosatImg,
    },
  ];

  const [paused, setPaused] = useState(false);

  // duplicate the array so we can scroll continuously
  const scrollingMissions = [...missions, ...missions]; 

  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-space-navy/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text ">
              Our Missions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering space exploration with cutting-edge missions that push the boundaries 
            of human knowledge and technological advancement.
          </p>
        </div>

        {/* ==== MARQUEE (md and up) ==== */}
<div
  className="hidden md:block marquee"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  <div
    className="marquee-content"
    style={{ animationPlayState: paused ? 'paused' : 'running' }}
  >
    {scrollingMissions.map((mission, idx) => (
      // ← each item needs a fixed width & no shrinking:
      <div
        key={mission.title + idx}
        className="min-w-[300px] flex-shrink-0 px-2"
      >
        {/* ← COPY your entire Card JSX from below into THIS spot */}
        <Card
          className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          {/* --- Begin “Mission Image” block --- */}
          <div className="relative h-48 sm:h-52 overflow-hidden">
            <img
              src={mission.image}
              alt={mission.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 p-2 rounded-full bg-gradient-cosmic">
              <mission.icon className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          {/* --- End “Mission Image” block --- */}

          <CardHeader className="pb-3">
            <div className="space-y-2">
              <CardTitle className="text-lg sm:text-xl font-bold line-clamp-2">
                {mission.title}
              </CardTitle>
              <CardDescription className="text-space-blue font-medium text-sm">
                {mission.timeline}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
              {mission.description}
            </p>
            <div className="flex items-center justify-between">
              <div
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                  mission.status === 'Successfully Completed'
                    ? 'bg-green-500/20 text-green-400'
                    : mission.status === 'Active' || mission.status === 'Ongoing'
                    ? 'bg-space-blue/20 text-space-blue'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}
              >
                {mission.status}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
</div>

{/* ==== FALLBACK GRID (< md) ==== */}
<div className="md:hidden grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
  {missions.map((mission, index) => (
    <Card
      key={mission.title + index}
      className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
    >
      {/* --- Begin “Mission Image” block --- */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={mission.image}
          alt={mission.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 p-2 rounded-full bg-gradient-cosmic">
          <mission.icon className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
      {/* --- End “Mission Image” block --- */}

      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg sm:text-xl font-bold line-clamp-2">
            {mission.title}
          </CardTitle>
          <CardDescription className="text-space-blue font-medium text-sm">
            {mission.timeline}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
          {mission.description}
        </p>
        <div className="flex items-center justify-between">
          <div
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
              mission.status === 'Successfully Completed'
                ? 'bg-green-500/20 text-green-400'
                : mission.status === 'Active' || mission.status === 'Ongoing'
                ? 'bg-space-blue/20 text-space-blue'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}
          >
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