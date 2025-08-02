import { ArrowLeft, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-space flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated Stars Background */}
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

        <div className="relative z-10">
          <div className="animate-float mb-8">
            <div className="text-8xl mb-4">🌌</div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-aurora bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="text-foreground">
              Space Explorer
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            You've successfully launched into the ISRO Space Explorer experience! 
            Discover the wonders of space exploration, cutting-edge satellite technology, 
            groundbreaking research, and the brilliant teams making it all possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="animate-rocket text-6xl">🛰️</div>
            <div className="text-center sm:text-left">
              <p className="text-space-blue font-semibold text-lg">
                Mission Status: Active
              </p>
              <p className="text-muted-foreground">
                Exploring the cosmos since 1969
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: "🚀", label: "Missions", count: "100+" },
              { icon: "🛰️", label: "Satellites", count: "400+" },
              { icon: "🔬", label: "Research", count: "2000+" },
              { icon: "👥", label: "Team", count: "17K+" },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-1">
                  {item.count}
                </div>
                <div className="text-muted-foreground text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="border-space-blue text-space-blue hover:bg-space-blue hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Landing
            </Button>
            <Button
              className="bg-gradient-cosmic hover:scale-105 transition-transform duration-300"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Continue Exploring
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;