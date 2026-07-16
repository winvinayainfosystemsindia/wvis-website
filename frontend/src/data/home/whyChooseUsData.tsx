import React from 'react';
import {
    EmojiEvents,
    Security,
    Lightbulb,
    Diversity3,
    VerifiedUser,
    TrendingUp,
    Groups,
} from '@mui/icons-material';

export interface StatItem {
    value: string;
    label: string;
    icon: React.ReactNode;
}

export interface BenefitItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const whyChooseUsData = {
    header: {
        overline: "THE WINVINAYA ADVANTAGE",
        title: {
            main: "Why Choose",
            gradient: "WinVinaya"
        },
        description: "We combine deep technical expertise with a unique commitment to inclusivity, delivering digital solutions that drive business growth and social impact."
    },
    stats: [
        {
            value: '10+',
            label: 'Years of Excellence',
            icon: <EmojiEvents sx={{ fontSize: 32 }} />,
        },
        {
            value: '500+',
            label: 'Projects Delivered',
            icon: <TrendingUp sx={{ fontSize: 32 }} />,
        },
        {
            value: '98%',
            label: 'Client Satisfaction',
            icon: <VerifiedUser sx={{ fontSize: 32 }} />,
        },
        {
            value: '60%',
            label: 'Inclusive Workforce',
            icon: <Groups sx={{ fontSize: 32 }} />,
        },
    ] as StatItem[],
    benefits: [
        {
            title: 'Industry Expertise',
            description: 'Decade of experience delivering enterprise-grade solutions across diverse sectors.',
            icon: <EmojiEvents />,
        },
        {
            title: 'Accessibility First',
            description: 'WCAG-compliant solutions ensuring inclusive digital experiences for all users.',
            icon: <Diversity3 />,
        },
        {
            title: 'Innovation Driven',
            description: 'Leveraging cutting-edge AI, cloud, and automation technologies for competitive advantage.',
            icon: <Lightbulb />,
        },
        {
            title: 'Quality Assurance',
            description: 'Rigorous testing methodologies ensuring robust, secure, and scalable applications.',
            icon: <Security />,
        },
    ] as BenefitItem[]
};
