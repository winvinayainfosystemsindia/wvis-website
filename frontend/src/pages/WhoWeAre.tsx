import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import AboutHero from '../components/about/AboutHero';
import VisionMission from '../components/about/VisionMission';
import LeadershipVision from '../components/about/LeadershipVision';
import ImpactESG from '../components/about/ImpactESG';
import ImpactMetrics from '../components/about/ImpactMetrics';
import ESGPillars from '../components/about/ESGPillars';

const WhoWeAre: React.FC = () => {

    return (
        <MainLayout>
                {/* 1. Hook — who we are, at a glance */}
                <AboutHero />

                {/* 2. Why we exist — vision, mission, and what drives us */}
                <VisionMission />

                {/* 3. The deeper reasoning — why business impact and social impact fund each other */}
                <ImpactESG />

                {/* 4. How we execute that purpose — the three pillars */}
                <ESGPillars />

                {/* 5. Proof it works — the numbers behind the story */}
                <ImpactMetrics />

                {/* 6. Closing word, from our Chairman — a personal, human note to end on */}
                <LeadershipVision />
        </MainLayout>
    );
};

export default WhoWeAre;
