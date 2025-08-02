import { useEffect, useState } from 'react';

interface LaunchAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LaunchAnimation = ({ isVisible, onComplete }: LaunchAnimationProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setTimeout(onComplete, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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

      {/* Launch Content */}
      <div className="text-center z-10">
        {countdown > 0 ? (
          <>
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-cosmic bg-clip-text text-transparent animate-pulse">
                {countdown}
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Preparing for Launch...
            </div>
            <div className="text-6xl animate-rocket">🚀</div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-aurora bg-clip-text text-transparent animate-glow">
                LAUNCH!
              </div>
            </div>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8">
              Welcome to ISRO Space Explorer
            </div>
            <div className="launch-loading text-8xl">🚀</div>
          </>
        )}
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-border rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-cosmic transition-all duration-1000 ease-out"
          style={{ width: `${((5 - countdown) / 5) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default LaunchAnimation;