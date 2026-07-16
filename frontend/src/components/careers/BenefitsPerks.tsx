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
import { benefitsPerksData, benefitsPerksHeader as header } from '../../data/careers/benefitsPerksData';

const BenefitsPerks: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="benefits-perks-section"
            aria-labelledby="benefits-perks-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.default',
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
                        id="benefits-perks-title"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2.25rem', md: '3rem' },
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {header.title.main}{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>{header.title.accent}</Box>
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {benefitsPerksData.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.label} sx={{ display: 'flex' }}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        border: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
                                        bgcolor: 'background.paper',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        width: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: alpha(theme.palette.primary.main, 0.35),
                                            bgcolor: alpha(theme.palette.primary.main, 0.03),
                                        },
                                    }}
                                >
                                    <Box
                                        aria-hidden="true"
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            flexShrink: 0,
                                            borderRadius: 2.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                                            color: 'primary.main',
                                        }}
                                    >
                                        <Icon sx={{ fontSize: 22 }} />
                                    </Box>
                                    <Typography
                                        sx={{ fontWeight: 500, fontSize: '0.9375rem', color: 'text.primary', lineHeight: 1.4 }}
                                    >
                                        {benefit.label}
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

export default BenefitsPerks;
