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
import { hiringProcessData, hiringProcessHeader as header } from '../../data/careers/hiringProcessData';

const HiringProcess: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="hiring-process-section"
            aria-labelledby="hiring-process-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 640, mx: 'auto', mb: isMobile ? 5 : 8, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        component="span"
                        sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 4, mb: 2, display: 'block' }}
                    >
                        {header.overline}
                    </Typography>
                    <Typography
                        variant="h2"
                        id="hiring-process-title"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2.25rem', md: '3rem' },
                            letterSpacing: '-0.02em',
                            mb: 2,
                        }}
                    >
                        {header.title.main}{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>{header.title.accent}</Box>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {header.description}
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 3, md: 0 }}>
                    {hiringProcessData.map((step, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.step} sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    px: { md: 2.5 },
                                    ...(index < hiringProcessData.length - 1 && !isMobile
                                        ? {
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 28,
                                                right: 0,
                                                width: '50%',
                                                height: 2,
                                                bgcolor: alpha(theme.palette.primary.main, 0.15),
                                            },
                                        }
                                        : {}),
                                }}
                            >
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        width: 56,
                                        height: 56,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        fontWeight: 600,
                                        fontSize: '1.125rem',
                                        mb: 2.5,
                                        boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                                    }}
                                >
                                    {step.step}
                                </Box>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{ fontWeight: 600, fontSize: '1.125rem', color: 'text.primary', mb: 1 }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, pr: { md: 2 } }}>
                                    {step.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default HiringProcess;
