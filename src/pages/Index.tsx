import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import SatelliteSection from '@/components/SatelliteSection';
import ResearchSection from '@/components/ResearchSection';
import TeamsSection from '@/components/TeamsSection';
import LaunchAnimation from '@/components/LaunchAnimation';

const Index = () => {
  const [showLaunchAnimation, setShowLaunchAnimation] = useState(false);
  const navigate = useNavigate();

  const handleLaunch = () => {
    setShowLaunchAnimation(true);
  };

  const handleLaunchComplete = () => {
    navigate('/explore');
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar onLaunch={handleLaunch} />
      <HeroSection />
      <MissionSection />
      <SatelliteSection />
      <ResearchSection />
      <TeamsSection />
      
      <LaunchAnimation 
        isVisible={showLaunchAnimation} 
        onComplete={handleLaunchComplete} 
      />
    </div>
  );
};

export default Index;
