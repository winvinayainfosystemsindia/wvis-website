import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    useTheme,
    useMediaQuery,
    alpha,
} from '@mui/material';
import { ArrowForward, Info } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { careersCTAData as cta } from '../../data/careers/careersCTAData';

const CareersCTA: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            id="careers-cta-section"
            aria-labelledby="careers-cta-title"
            sx={{
                py: isMobile ? 6 : 8,
                position: 'relative',
                overflow: 'hidden',
                background: theme.gradients.banner,
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', color: 'common.white' }}>
                    <Typography
                        variant="h2"
                        id="careers-cta-title"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            fontWeight: 600,
                            mb: 2,
                            lineHeight: 1.2,
                        }}
                    >
                        {cta.title}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '1.125rem', md: '1.25rem' },
                            mb: 5,
                            opacity: 0.95,
                            lineHeight: 1.7,
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        {cta.description}
                    </Typography>

                    <Stack direction={isSmall ? 'column' : 'row'} spacing={2} justifyContent="center">
                        <Button
                            component={Link}
                            to={cta.primaryCTA.link}
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: 'common.white',
                                color: 'primary.main',
                                px: 4,
                                py: 1.75,
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                borderRadius: 2,
                                textTransform: 'none',
                                boxShadow: `0 4px 16px ${alpha(theme.palette.common.black, 0.15)}`,
                                '&:hover': {
                                    bgcolor: 'grey.100',
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 8px 24px ${alpha(theme.palette.common.black, 0.2)}`,
                                },
                            }}
                        >
                            {cta.primaryCTA.text}
                        </Button>

                        <Button
                            component={Link}
                            to={cta.secondaryCTA.link}
                            variant="outlined"
                            size="large"
                            startIcon={<Info />}
                            sx={{
                                borderColor: 'common.white',
                                color: 'common.white',
                                borderWidth: 2,
                                px: 4,
                                py: 1.75,
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                borderRadius: 2,
                                textTransform: 'none',
                                '&:hover': {
                                    borderWidth: 2,
                                    borderColor: 'common.white',
                                    bgcolor: alpha(theme.palette.common.white, 0.1),
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            {cta.secondaryCTA.text}
                        </Button>
                    </Stack>

                    <Typography variant="body2" sx={{ mt: 4, opacity: 0.85, fontSize: '0.9375rem' }}>
                        {cta.trustBadge}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default CareersCTA;
