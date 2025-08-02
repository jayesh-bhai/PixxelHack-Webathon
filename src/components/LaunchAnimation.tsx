import { useEffect, useState } from 'react';

interface LaunchAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LaunchAnimation = ({ isVisible, onComplete }: LaunchAnimationProps) => {
  const [step, setStep] = useState(0);
  const [nowToggle, setNowToggle] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Step 1: Show "YOUR" after 500ms
      const timer1 = setTimeout(() => setStep(1), 500);
      
      // Step 2: Show "SPACE EXPERIENCE" after 1.5s
      const timer2 = setTimeout(() => setStep(2), 1500);
      
      // Step 3: Show "IS LOADING RIGHT NOW" after 2.5s
      const timer3 = setTimeout(() => setStep(3), 2500);
      
      // Start "NOW" toggle effect when step 3 appears
      const nowTimer = setTimeout(() => {
        const toggleInterval = setInterval(() => {
          setNowToggle(prev => !prev);
        }, 1000);
        
        // Stop toggle and start fade out at 4.5s
        setTimeout(() => {
          clearInterval(toggleInterval);
          setFadeOut(true);
        }, 2000);
      }, 2500);
      
      // Complete animation at 5s
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 5000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(nowTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  // Toggle "NOW" text effect
  useEffect(() => {
    if (step >= 3 && !fadeOut) {
      const toggleInterval = setInterval(() => {
        setNowToggle(prev => !prev);
      }, 1000);

      return () => clearInterval(toggleInterval);
    }
  }, [step, fadeOut]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Heavily Blurred Background */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      
      {/* Text Animation Container with Pop-up Effect */}
      <div className={`
        relative z-10 text-center transform transition-all duration-500 ease-out
        ${step > 0 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        ${fadeOut ? 'opacity-0 scale-75' : ''}
      `}>
        {/* Line 1: YOUR */}
        <div className={`
          text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4
          transform transition-all duration-700 ease-out
          ${step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
          YOUR
        </div>

        {/* Line 2: SPACE EXPERIENCE */}
        <div className={`
          text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4
          transform transition-all duration-700 ease-out delay-300
          ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
          SPACE EXPERIENCE
        </div>

        {/* Line 3: IS LOADING RIGHT NOW */}
        <div className={`
          text-4xl md:text-6xl lg:text-7xl font-bold text-white
          transform transition-all duration-700 ease-out delay-500
          ${step >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
          IS LOADING RIGHT{' '}
          <span className={`
            inline-block transition-all duration-300 ease-in-out
            ${nowToggle ? 'transform skew-x-12 font-black italic' : 'transform skew-x-0 font-bold'}
          `}>
            NOW
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaunchAnimation;