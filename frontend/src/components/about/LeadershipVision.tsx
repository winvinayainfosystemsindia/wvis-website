import React from 'react';
import {
    Box,
    Container,
    Typography,
    useTheme,
    alpha,
    Grid,
    useMediaQuery,
} from '@mui/material';
import { FormatQuote, WorkspacePremium } from '@mui/icons-material';
import { leadershipVisionData as leadership } from '../../data/about/leadershipVisionData';

const LeadershipVision: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const badgeLabel = leadership.role.split(',')[0].toUpperCase();

    return (
        <Box
            component="section"
            id="leadership-vision-section"
            aria-labelledby="leadership-vision-title"
            sx={{
                py: isMobile ? 8 : 12,
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'background.default',
            }}
        >
            {/* Ambient background — consistent with the rest of the page */}
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-8%',
                    width: { xs: 280, md: 480 },
                    height: { xs: 280, md: 480 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.07)} 0%, transparent 70%)`,
                    filter: 'blur(90px)',
                    zIndex: 0,
                }}
            />
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    bottom: '-15%',
                    right: '-8%',
                    width: { xs: 260, md: 440 },
                    height: { xs: 260, md: 440 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={isMobile ? 5 : 8} alignItems="center">
                    {/* Chairman Photo */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                maxWidth: { xs: 340, md: '100%' },
                                mx: { xs: 'auto', md: 0 },
                            }}
                        >
                            {/* Gradient glow ring behind the photo */}
                            <Box
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute',
                                    inset: -16,
                                    borderRadius: 6,
                                    background: theme.gradients.freshworks,
                                    opacity: 0.15,
                                    filter: 'blur(30px)',
                                    zIndex: 0,
                                }}
                            />

                            <Box
                                component="img"
                                src={leadership.image}
                                alt={leadership.author}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: 4,
                                    boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.18)}`,
                                    position: 'relative',
                                    zIndex: 1,
                                    border: `4px solid ${theme.palette.background.paper}`,
                                }}
                            />

                            {/* Chairman badge */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 20,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    py: 1,
                                    px: 2.5,
                                    borderRadius: '100px',
                                    zIndex: 2,
                                    boxShadow: `0 10px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                                }}
                            >
                                <WorkspacePremium sx={{ fontSize: 18 }} aria-hidden="true" />
                                <Typography variant="h6" component="span" sx={{ fontWeight: 600, fontSize: '0.8125rem', letterSpacing: 1 }}>
                                    {badgeLabel}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Content */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ pl: { md: 4 } }}>
                            <Typography
                                variant="overline"
                                component="span"
                                sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3, mb: 1, display: 'block' }}
                            >
                                {leadership.subtitle}
                            </Typography>

                            <Typography
                                variant="h2"
                                id="leadership-vision-title"
                                sx={{ fontWeight: 600, mb: 4, fontSize: { xs: '2.25rem', md: '3rem', lg: '3.5rem' }, lineHeight: 1.2 }}
                            >
                                {leadership.title}
                            </Typography>

                            {/* Pull quote */}
                            <Box
                                component="blockquote"
                                sx={{
                                    position: 'relative',
                                    m: 0,
                                    mb: 5,
                                    pl: { xs: 3, md: 4 },
                                    py: 2,
                                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                                    bgcolor: alpha(theme.palette.primary.main, 0.04),
                                    borderRadius: '0 12px 12px 0',
                                }}
                            >
                                <FormatQuote
                                    sx={{
                                        fontSize: 48,
                                        color: alpha(theme.palette.primary.main, 0.2),
                                        display: 'block',
                                        mb: 0.5,
                                    }}
                                    aria-hidden="true"
                                />
                                <Typography
                                    variant="h4"
                                    component="p"
                                    sx={{
                                        fontStyle: 'italic',
                                        color: 'text.primary',
                                        fontWeight: 500,
                                        lineHeight: 1.4,
                                        fontSize: { xs: '1.25rem', md: '1.6rem' }
                                    }}
                                >
                                    {leadership.visionStatement}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 5 }}>
                                {leadership.paragraphs.map((para, index) => (
                                    <Typography
                                        key={index}
                                        variant="body1"
                                        sx={{
                                            color: 'text.secondary',
                                            lineHeight: 1.9,
                                            fontSize: '1.1rem',
                                            mb: 3,
                                            '&:last-child': { mb: 0 }
                                        }}
                                    >
                                        {para}
                                    </Typography>
                                ))}
                            </Box>

                            {/* Signature block */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2.5,
                                    pt: 4,
                                    borderTop: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        width: 4,
                                        height: 44,
                                        borderRadius: 2,
                                        background: theme.gradients.freshworks,
                                        flexShrink: 0,
                                    }}
                                />
                                <Box>
                                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.25 }}>
                                        {leadership.author}
                                    </Typography>
                                    <Typography variant="subtitle1" component="span" sx={{ display: 'block', color: 'primary.main', fontWeight: 600, letterSpacing: 0.5 }}>
                                        {leadership.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LeadershipVision;
