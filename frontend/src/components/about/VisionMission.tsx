import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { visionMissionData as visionMission, visionMissionHeader as header } from '../../data/about/visionMissionData';

const VisionMission: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="strategic-pillars-section"
            aria-labelledby="strategic-pillars-title"
            sx={{
                py: isMobile ? 6 : 12,
                background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${theme.palette.common.white} 100%)`,
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: isMobile ? 6 : 12 }}>
                    <Typography
                        variant="overline"
                        component="span"
                        sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 4, mb: 2, display: 'block' }}
                    >
                        {header.overline}
                    </Typography>
                    <Typography
                        variant="h2"
                        id="strategic-pillars-title"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                            fontWeight: 500,
                            letterSpacing: '-0.02em',
                            mb: 2,
                        }}
                    >
                        {header.title.main}{' '}
                        <Box component="span" className="gradient-text">
                            {header.title.gradient}
                        </Box>
                    </Typography>
                    <Box
                        sx={{
                            width: 80,
                            height: 4,
                            bgcolor: 'primary.main',
                            mx: 'auto',
                            mb: 4,
                            borderRadius: 2
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 800,
                            mx: 'auto',
                            fontSize: isMobile ? '1.1rem' : '1.25rem',
                            lineHeight: 1.6,
                            fontWeight: 400,
                        }}
                    >
                        {header.description}
                    </Typography>
                </Box>

                <Grid container spacing={isMobile ? 3 : 6}>
                    {visionMission.map((item) => {
                        const accentMain = theme.palette[item.accent].main;
                        const accentDark = theme.palette[item.accent].dark;
                        const accentGradient = `linear-gradient(135deg, ${accentMain} 0%, ${accentDark} 100%)`;

                        return (
                            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        position: 'relative',
                                        height: '100%',
                                        borderRadius: 5,
                                        bgcolor: 'background.paper',
                                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                        overflow: 'hidden',
                                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            transform: 'translateY(-15px)',
                                            boxShadow: `0 40px 80px ${alpha(theme.palette.common.black, 0.1)}`,
                                            borderColor: alpha(accentMain, 0.4),
                                        },
                                    }}
                                >
                                    {/* Top accent bar — gives each pillar its own color identity */}
                                    <Box
                                        aria-hidden="true"
                                        sx={{
                                            height: 5,
                                            background: accentGradient,
                                            flexShrink: 0,
                                        }}
                                    />

                                    <Box sx={{ p: { xs: 4, md: 5 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 4 }}>
                                            <Box
                                                aria-hidden="true"
                                                sx={{
                                                    width: 72,
                                                    height: 72,
                                                    borderRadius: 3,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: accentGradient,
                                                    color: theme.palette[item.accent].contrastText,
                                                    boxShadow: `0 12px 24px ${alpha(accentMain, 0.3)}`,
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                        </Box>

                                        <Typography
                                            sx={{
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                letterSpacing: 2,
                                                color: accentMain,
                                                mb: 1.5,
                                            }}
                                        >
                                            {item.eyebrow}
                                        </Typography>

                                        <Typography
                                            variant="h4"
                                            component="h3"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 2,
                                                fontSize: '1.5rem',
                                                lineHeight: 1.25,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.8,
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {item.content}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default VisionMission;
