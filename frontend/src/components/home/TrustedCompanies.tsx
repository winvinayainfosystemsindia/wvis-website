import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { trustedLogos } from '../../data/home/trustedCompaniesData';

const scrollLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const ScrollingContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px 0',
    background: theme.palette.background.default,
    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    [theme.breakpoints.down('lg')]: {
        maxWidth: '80%',
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    },
}));

const LogoTrack = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',
    animation: `${scrollLeft} 80s linear infinite`,
    willChange: 'transform',
    '&:hover': {
        animationPlayState: 'paused',
    },
});

const LogoImage = styled('img')({
    maxHeight: '80px',
    width: 'auto',
    objectFit: 'contain',
    opacity: 0.8,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    margin: '0 20px',
    '&:hover': {
        opacity: 1,
        transform: 'scale(1.1)',
    },
});

const TrustedCompanies: React.FC = () => {
    // Duplicate the logos once to ensure a seamless infinite scroll
    const duplicatedLogos = [...trustedLogos, ...trustedLogos];

    const getCompanyName = (url: string) => {
        const filename = url.split('/').pop()?.split('.')[0] ?? '';
        return filename
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Box 
            component="section" 
            aria-label="Our Trusted Corporate Partners" 
            sx={{ py: { xs: 3, md: 4 }, bgcolor: 'background.default' }}
        >
            <Typography
                variant="h6"
                component="h2"
                sx={{
                    display: 'block',
                    textAlign: 'center',
                    letterSpacing: '0.1em',
                    color: 'text.primary',
                }}
            >
                Trusted by 50+ Companies
            </Typography>
            <ScrollingContainer>
                <LogoTrack>
                    {duplicatedLogos.map((logo, index) => (
                        <LogoImage
                            key={`${logo}-${index}`}
                            src={logo}
                            alt={`${getCompanyName(logo)} logo`}
                            loading="lazy"
                        />
                    ))}
                </LogoTrack>
            </ScrollingContainer>
        </Box>
    );
};

export default TrustedCompanies;
