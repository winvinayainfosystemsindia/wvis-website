import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Stack,
    Link,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { aboutHeroData as hero } from '../../data/about/aboutHeroData';

const AboutHero: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box 
            component="section" 
            aria-label="About Hero Information" 
            sx={{ py: isMobile ? 6 : 10, overflow: 'hidden', bgcolor: 'background.default' }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
                    {/* Left Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ maxWidth: 600 }}>
                            <Typography
                                variant="overline"
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                    letterSpacing: 4,
                                    mb: 2,
                                    display: 'block'
                                }}
                            >
                                {hero.overline}
                            </Typography>

                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 500,
                                    mb: 4,
                                    fontSize: { xs: '2.5rem', md: '3.75rem', lg: '4.25rem' },
                                    lineHeight: 1.1,
                                    color: 'text.primary',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                {hero.title.main}{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        display: 'block',
                                        ...theme.utils.gradientText,
                                    }}
                                >
                                    {hero.title.gradient}
                                </Box>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: isMobile ? '1.1rem' : '1.25rem',
                                    color: theme.palette.text.secondary,
                                    mb: 6,
                                    lineHeight: 1.8,
                                    fontWeight: 400
                                }}
                            >
                                {hero.description}
                            </Typography>

                            <Stack direction={isMobile ? 'column' : 'row'} spacing={3} alignItems="center">
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/services"
                                    sx={{
                                        background: theme.palette.primary.main,
                                        borderRadius: theme.shape.borderRadius,
                                        px: 5,
                                        py: 2,
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        width: isMobile ? '100%' : 'auto',
                                        boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        '&:hover': {
                                            background: theme.palette.primary.dark,
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    Explore Services
                                </Button>
                                <Link
                                    component={RouterLink}
                                    to="/contact"
                                    sx={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        fontSize: '1.125rem',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    Work with Us <ArrowForwardIos sx={{ fontSize: 14, ml: 1 }} aria-hidden="true" />
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Images (Modern overlapping layout) */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ position: 'relative', height: isMobile ? 400 : 600, display: 'flex', justifyContent: 'center' }}>
                            {/* Decorative Background Glow */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '10%',
                                    left: '10%',
                                    width: '80%',
                                    height: '80%',
                                    background: theme.gradients.freshworks,
                                    opacity: 0.1,
                                    filter: 'blur(100px)',
                                    zIndex: 0
                                }}
                            />

                            {/* Image 1 (Left/Higher) */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: isMobile ? '5%' : '0',
                                    top: '0',
                                    width: isMobile ? '50%' : '280px',
                                    height: isMobile ? '80%' : '520px',
                                    borderRadius: '40px',
                                    overflow: 'hidden',
                                    boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.15)}`,
                                    zIndex: 2,
                                    border: `4px solid ${alpha(theme.palette.common.white, 0.8)}`,
                                    transition: 'transform 0.5s ease',
                                    '&:hover': { transform: 'scale(1.02) translateY(-10px)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/images/about/diverse_team.png"
                                    alt="Expert Innovation Team"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>

                            {/* Image 2 (Right/Lower) */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    right: isMobile ? '5%' : '0',
                                    bottom: '0',
                                    width: isMobile ? '50%' : '280px',
                                    height: isMobile ? '80%' : '520px',
                                    borderRadius: '40px',
                                    overflow: 'hidden',
                                    boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.1)}`,
                                    zIndex: 1,
                                    border: `4px solid ${alpha(theme.palette.common.white, 0.8)}`,
                                    transition: 'transform 0.5s ease',
                                    '&:hover': { transform: 'scale(1.02) translateY(10px)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/images/about/tech_innovation.png"
                                    alt="Technical Mastery"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutHero;
