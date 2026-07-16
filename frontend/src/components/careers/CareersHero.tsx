import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { careersHeroData as hero } from '../../data/careers/careersHeroData';

const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const CareersHero: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="careers-hero-section"
            aria-labelledby="careers-hero-title"
            sx={{
                py: isMobile ? 8 : 12,
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'background.default',
            }}
        >
            {/* Ambient background */}
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    top: '-15%',
                    right: '-8%',
                    width: { xs: 300, md: 560 },
                    height: { xs: 300, md: 560 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
                    filter: 'blur(100px)',
                    zIndex: 0,
                }}
            />
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    bottom: '-15%',
                    left: '-8%',
                    width: { xs: 260, md: 480 },
                    height: { xs: 260, md: 480 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 70%)`,
                    filter: 'blur(90px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Typography
                    variant="overline"
                    component="span"
                    sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 4, mb: 2, display: 'block' }}
                >
                    {hero.overline}
                </Typography>

                <Typography
                    variant="h1"
                    id="careers-hero-title"
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: '2.5rem', md: '3.75rem', lg: '4.25rem' },
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        mb: 3,
                    }}
                >
                    {hero.title.main}{' '}
                    <Box component="span" className="gradient-text">
                        {hero.title.accent}
                    </Box>
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        lineHeight: 1.8,
                        maxWidth: 680,
                        mx: 'auto',
                        mb: 5,
                    }}
                >
                    {hero.description}
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    sx={{ mb: 7 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => scrollToId(hero.primaryCta.targetId)}
                        endIcon={<ArrowForward />}
                        sx={{
                            px: 4,
                            py: 1.75,
                            fontSize: '1.0625rem',
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: 'none',
                            boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.25)}`,
                            '&:hover': { transform: 'translateY(-2px)' },
                        }}
                    >
                        {hero.primaryCta.text}
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={() => scrollToId(hero.secondaryCta.targetId)}
                        sx={{
                            px: 4,
                            py: 1.75,
                            fontSize: '1.0625rem',
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: 'none',
                            borderWidth: 1.5,
                            '&:hover': { borderWidth: 1.5 },
                        }}
                    >
                        {hero.secondaryCta.text}
                    </Button>
                </Stack>

                <Stack
                    direction="row"
                    spacing={{ xs: 3, md: 6 }}
                    justifyContent="center"
                    flexWrap="wrap"
                    useFlexGap
                >
                    {hero.stats.map((stat) => (
                        <Box key={stat.label} sx={{ textAlign: 'center' }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                                    color: 'primary.main',
                                    lineHeight: 1,
                                    mb: 0.5,
                                }}
                            >
                                {stat.value}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '0.8125rem',
                                    fontWeight: 500,
                                    color: 'text.secondary',
                                    letterSpacing: 0.5,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default CareersHero;
