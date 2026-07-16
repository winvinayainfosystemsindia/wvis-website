import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import CareersHero from '../components/careers/CareersHero';
import WhyJoinUs from '../components/careers/WhyJoinUs';
import InclusionCommitment from '../components/careers/InclusionCommitment';
import OpenPositions from '../components/careers/OpenPositions';
import BenefitsPerks from '../components/careers/BenefitsPerks';
import HiringProcess from '../components/careers/HiringProcess';
import CareersCTA from '../components/careers/CareersCTA';

const Careers: React.FC = () => {

    return (
        <MainLayout>
            {/* 1. Hook — the mission, at a glance */}
            <CareersHero />

            {/* 2. Why people stay — our culture */}
            <WhyJoinUs />

            {/* 3. Our defining difference — accessibility as how we operate, not just what we sell */}
            <InclusionCommitment />

            {/* 4. The roles — what's actually open right now */}
            <OpenPositions />

            {/* 5. What you get — benefits & perks */}
            <BenefitsPerks />

            {/* 6. What happens next — the hiring process, made transparent */}
            <HiringProcess />

            {/* 7. Closing CTA — for roles not listed */}
            <CareersCTA />
        </MainLayout>
    );
};

export default Careers;
