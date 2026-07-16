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
import { whyJoinUsData, whyJoinUsHeader as header } from '../../data/careers/whyJoinUsData';

const WhyJoinUs: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="why-join-us-section"
            aria-labelledby="why-join-us-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.paper',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 720, mx: 'auto', mb: isMobile ? 6 : 10, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        component="span"
                        sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 4, mb: 2, display: 'block' }}
                    >
                        {header.overline}
                    </Typography>
                    <Typography
                        variant="h2"
                        id="why-join-us-title"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2.25rem', md: '3rem' },
                            letterSpacing: '-0.02em',
                            mb: 3,
                        }}
                    >
                        {header.title.main}{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>{header.title.accent}</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.8 }}
                    >
                        {header.description}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {whyJoinUsData.map((item) => {
                        const Icon = item.icon;
                        const accentMain = theme.palette[item.accent].main;
                        const accentContrast = theme.palette[item.accent].contrastText;

                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title} sx={{ display: 'flex' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        borderRadius: 4,
                                        bgcolor: 'background.default',
                                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                        overflow: 'hidden',
                                        width: '100%',
                                        transition: 'all 0.4s ease',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 4,
                                            background: accentMain,
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.08)}`,
                                            borderColor: alpha(accentMain, 0.35),
                                        },
                                    }}
                                >
                                    <Box
                                        aria-hidden="true"
                                        sx={{
                                            width: 56,
                                            height: 56,
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
                                        <Icon sx={{ fontSize: 28 }} />
                                    </Box>

                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        sx={{ fontWeight: 600, fontSize: '1.15rem', mb: 1.5, color: 'text.primary' }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.9375rem' }}
                                    >
                                        {item.description}
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

export default WhyJoinUs;
