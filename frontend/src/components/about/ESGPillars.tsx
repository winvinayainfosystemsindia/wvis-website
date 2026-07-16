import React from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Grid,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { Verified } from '@mui/icons-material';
import { esgPillarsData, esgPillarsHeader as header } from '../../data/about/esgPillarsData';

const ESGPillars: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const sections = esgPillarsData;

    return (
        <Box
            component="section"
            id="esg-pillars-section"
            aria-labelledby="esg-pillars-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.default',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 800, mb: isMobile ? 6 : 10, mx: 'auto', textAlign: 'center' }}>
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
                        {header.overline}
                    </Typography>
                    <Typography
                        variant="h2"
                        id="esg-pillars-title"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                            mb: 3,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                            color: 'text.primary'
                        }}
                    >
                        {header.title.main} <Box component="span" sx={{ color: 'primary.main' }}>{header.title.accent}</Box>
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.8, fontSize: { xs: '1.1rem', md: '1.25rem' } }}
                    >
                        {header.description}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        const accentMain = theme.palette[section.accent].main;
                        const accentContrast = theme.palette[section.accent].contrastText;

                        return (
                            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: 5,
                                        borderRadius: 4,
                                        bgcolor: 'background.paper',
                                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 5,
                                            background: accentMain,
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.08)}`,
                                            borderColor: alpha(accentMain, 0.35),
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: 3,
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
                                        <Icon sx={{ fontSize: 32 }} />
                                    </Box>

                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        sx={{ fontWeight: 600, mb: 2, color: 'text.primary', fontSize: '1.5rem', letterSpacing: '-0.01em' }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                                        {section.description}
                                    </Typography>

                                    <Stack spacing={2} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                        {section.points.map((point, k) => (
                                            <Stack direction="row" spacing={2} alignItems="flex-start" key={k} component="li">
                                                <Verified sx={{ fontSize: 20, color: accentMain, mt: 0.5, flexShrink: 0 }} aria-hidden="true" />
                                                <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary', lineHeight: 1.6 }}>
                                                    {point}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ESGPillars;
