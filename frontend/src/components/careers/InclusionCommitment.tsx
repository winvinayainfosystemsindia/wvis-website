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
import { CheckCircle } from '@mui/icons-material';
import { inclusionCommitmentData as data } from '../../data/careers/inclusionCommitmentData';

const InclusionCommitment: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="inclusion-commitment-section"
            aria-labelledby="inclusion-commitment-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.default',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-10%',
                    width: { xs: 260, md: 460 },
                    height: { xs: 260, md: 460 },
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.info.main, 0.07)} 0%, transparent 70%)`,
                    filter: 'blur(90px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={isMobile ? 5 : 8} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography
                            variant="overline"
                            component="span"
                            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 4, mb: 2, display: 'block' }}
                        >
                            {data.overline}
                        </Typography>
                        <Typography
                            variant="h2"
                            id="inclusion-commitment-title"
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '2.25rem', md: '2.75rem' },
                                letterSpacing: '-0.02em',
                                lineHeight: 1.2,
                                mb: 3,
                            }}
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                        >
                            {data.description}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container spacing={3}>
                            {data.points.map((point) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={point.title} sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            p: 3.5,
                                            borderRadius: 3,
                                            bgcolor: 'background.paper',
                                            border: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
                                            width: '100%',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1 }}>
                                            <CheckCircle sx={{ fontSize: 20, color: 'primary.main', mt: 0.25, flexShrink: 0 }} aria-hidden="true" />
                                            <Typography
                                                variant="h4"
                                                component="h3"
                                                sx={{ fontWeight: 600, fontSize: '1.0625rem', color: 'text.primary' }}
                                            >
                                                {point.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'text.secondary', lineHeight: 1.7, pl: '32px' }}
                                        >
                                            {point.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InclusionCommitment;
