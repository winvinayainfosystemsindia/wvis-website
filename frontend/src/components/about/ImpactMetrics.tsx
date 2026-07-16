import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { TrendingUp } from 'lucide-react';
import { impactMetricsData, impactMetricsHeader as header } from '../../data/about/impactMetricsData';

const ImpactMetrics: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const stats = impactMetricsData;

    return (
        <Box
            component="section"
            id="impact-metrics-section"
            aria-labelledby="impact-metrics-title"
            sx={{
                py: isMobile ? 6 : 8,
                bgcolor: 'background.default',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Ambient Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: { xs: 300, md: 600 },
                    height: { xs: 300, md: 600 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    zIndex: 0,
                    animation: 'float 20s infinite alternate ease-in-out',
                    '@keyframes float': {
                        '0%': { transform: 'translate(0, 0)' },
                        '100%': { transform: 'translate(-50px, 50px)' },
                    }
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: { xs: 250, md: 500 },
                    height: { xs: 250, md: 500 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    zIndex: 0,
                    animation: 'float-reverse 25s infinite alternate ease-in-out',
                    '@keyframes float-reverse': {
                        '0%': { transform: 'translate(0, 0)' },
                        '100%': { transform: 'translate(40px, -40px)' },
                    }
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: isMobile ? 6 : 10, textAlign: 'center' }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1.5,
                            px: 2.5,
                            py: 1,
                            borderRadius: '100px',
                            bgcolor: alpha(theme.palette.primary.main, 0.05),
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            mb: 3
                        }}
                    >
                        <TrendingUp size={16} color={theme.palette.primary.main} aria-hidden="true" />
                        <Typography
                            variant="overline"
                            component="span"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                letterSpacing: 2,
                                display: 'block',
                                lineHeight: 1
                            }}
                        >
                            {header.overline}
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        id="impact-metrics-title"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                            letterSpacing: '-0.02em',
                            mb: 2,
                            background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${alpha(theme.palette.text.primary, 0.7)} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {header.title.main} <Box component="span" sx={{ color: 'primary.main', WebkitTextFillColor: 'initial' }}>{header.title.accent}</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                            fontSize: '1.1rem',
                            lineHeight: 1.6
                        }}
                    >
                        {header.description}
                    </Typography>
                </Box>

                <Grid container spacing={isMobile ? 3 : 4}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const accentMain = theme.palette[stat.accent].main;
                        const accentContrast = theme.palette[stat.accent].contrastText;
                        const isLongValue = stat.value.length > 6;

                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: 5,
                                        height: '100%',
                                        borderRadius: 8,
                                        bgcolor: alpha(theme.palette.background.paper, 0.6),
                                        backdropFilter: 'blur(20px)',
                                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                        textAlign: 'center',
                                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: `linear-gradient(90deg, transparent, ${accentMain}, transparent)`,
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            bgcolor: alpha(theme.palette.background.paper, 0.9),
                                            boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.08)}`,
                                            borderColor: alpha(accentMain, 0.35),
                                            '& .metric-value': {
                                                color: accentMain,
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: 4,
                                            bgcolor: accentMain,
                                            color: accentContrast,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 4,
                                            boxShadow: `0 10px 20px ${alpha(accentMain, 0.3)}`,
                                        }}
                                        aria-hidden="true"
                                    >
                                        <Icon size={32} strokeWidth={1.5} />
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        className="metric-value"
                                        sx={{
                                            display: 'block',
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            mb: 1,
                                            fontSize: isLongValue ? { xs: '1.5rem', md: '1.75rem' } : { xs: '2.25rem', md: '2.75rem' },
                                            transition: 'color 0.4s ease',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        component="h3"
                                        sx={{
                                            fontWeight: 600,
                                            color: 'text.secondary',
                                            letterSpacing: 1,
                                            textTransform: 'uppercase',
                                            fontSize: '0.8rem',
                                            opacity: 0.8
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ImpactMetrics;
