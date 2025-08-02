import { ArrowDown } from 'lucide-react';
import spaceHeroBg from '@/assets/space-hero-bg.jpg';
import rocket from '@/assets/rocket-img.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={spaceHeroBg} 
          alt="Space Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-space-blue rounded-full animate-stars"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-aurora bg-clip-text ">
              Explore the
            </span>
            <br />
            <span className="text-foreground">
              Final Frontier
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join ISRO's mission to push the boundaries of space exploration, 
            satellite technology, and scientific research that benefits all of humanity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <div className="animate-rocket text-6xl">
                <img src={rocket} alt="A rocket" />
              </div>
            <div className="text-center sm:text-left">
              <p className="text-space-blue font-semibold text-lg">
                Next Launch: Chandrayaan-4
              </p>
              <p className="text-muted-foreground">
                Advancing lunar exploration
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-space-blue" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;