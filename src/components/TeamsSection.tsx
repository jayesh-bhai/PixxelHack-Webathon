// src/components/TeamsSection.tsx
import { useState } from 'react';
import member_1 from '@/assets/members/Member-1.png';
import member_2 from '@/assets/members/Member-2.png';
import member_3 from '@/assets/members/Member-3.png';
import member_4 from '@/assets/members/Member-4.png';
import member_5 from '@/assets/members/Member-5.png';

const TeamsSection = () => {
  const teams = [
    { icon: member_1, name: "Dr. V. Narayanan",      position: "Chairman" },
    { icon: member_2, name: "Dr. P K Mishra",        position: "Member"    },
    { icon: member_3, name: "Shri. Ajit Doval",       position: "Member"    },
    { icon: member_4, name: "Prof. Ajay Kumar Sood", position: "Member"    },
    { icon: member_5, name: "Dr. Manoj Govil",        position: "Member"    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="teams" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-cosmic bg-clip-text ">
            Our Teams
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Brilliant minds working together to achieve extraordinary milestones…
        </p>
      </div>

      {/* Full-width list */}
      <div className="w-full space-y-2">
        {teams.map((team, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={team.name}
              className={`
                relative flex items-center justify-between
                w-full py-4 px-6 rounded-lg transition-colors
                ${isHovered ? 'bg-blue-600' : 'bg-white'}
                overflow-visible    /* ensure children can escape */
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left: number + name */}
              <div className="flex items-center space-x-4">
                <span className={`text-lg font-bold ${isHovered ? 'text-white' : 'text-gray-800'}`}>
                  {`0${index + 1}`}
                </span>
                <span className={`text-lg font-medium ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                  {team.name}
                </span>
              </div>

              {/* Right: position */}
              <span className={`${isHovered ? 'text-white' : 'text-gray-500'} text-sm`}>
                {team.position}
              </span>

              {/** Avatar bubble **/}
              <div
                className={`
                  absolute top-1/2 left-1/2
                  transform -translate-x-1/2 -translate-y-1/2
                  w-40 h-40 rounded-full overflow-hidden shadow-lg bg-white
                  transition-all duration-300 ease-out
                  z-20   
                  ${isHovered ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
                `}
              >
                <img
                  src={team.icon}
                  alt={team.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default TeamsSection;
