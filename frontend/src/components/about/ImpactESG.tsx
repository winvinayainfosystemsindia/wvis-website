import React from 'react';
import {
    Box,
    Container,
    Typography,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { School, Handshake } from '@mui/icons-material';
import { impactESGData as impact } from '../../data/about/impactESGData';

const PILLAR_ICONS = [School, Handshake];

const ImpactESG: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="impact-esg-section"
            aria-labelledby="impact-esg-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.5)} 0%, ${theme.palette.background.paper} 100%)`,
                    zIndex: 0,
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ maxWidth: 800, mx: 'auto', mb: isMobile ? 5 : 8, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        component="span"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            letterSpacing: 4,
                            mb: 2,
                            display: 'block',
                            fontSize: '0.875rem'
                        }}
                    >
                        OUR CORE PURPOSE
                    </Typography>
                    <Typography
                        variant="h2"
                        id="impact-esg-title"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 3,
                            letterSpacing: '-0.02em',
                            color: 'text.primary',
                        }}
                    >
                        {impact.title}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            lineHeight: 1.8,
                            fontWeight: 400,
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            maxWidth: '90%',
                            mx: 'auto'
                        }}
                    >
                        {impact.description}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? 3 : 5,
                    alignItems: 'stretch'
                }}>
                    {impact.pillars.map((pillar, index) => {
                        const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
                        const accentMain = theme.palette[pillar.accent].main;
                        const accentContrast = theme.palette[pillar.accent].contrastText;

                        return (
                            <Box
                                key={pillar.title}
                                sx={{
                                    position: 'relative',
                                    p: { xs: 4, md: 5 },
                                    borderRadius: 5,
                                    bgcolor: theme.palette.background.default,
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                    transition: 'all 0.4s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.08)}`,
                                        borderColor: alpha(accentMain, 0.35),
                                    }
                                }}
                            >
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: accentMain,
                                        color: accentContrast,
                                        mb: 3,
                                        boxShadow: `0 10px 20px ${alpha(accentMain, 0.3)}`,
                                    }}
                                >
                                    <Icon sx={{ fontSize: 30 }} />
                                </Box>

                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '1.35rem',
                                        color: 'text.primary',
                                        mb: 2,
                                    }}
                                >
                                    {pillar.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: '1.05rem',
                                        fontWeight: 400,
                                    }}
                                >
                                    {pillar.description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default ImpactESG;
