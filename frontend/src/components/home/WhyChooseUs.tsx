import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    useTheme,
    alpha,
    Paper,
    useMediaQuery,
} from '@mui/material';
import { whyChooseUsData } from '../../data/home/whyChooseUsData';

const WhyChooseUs: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="why-choose-us-section"
            aria-labelledby="why-choose-us-title"
            sx={{
                py: isMobile ? 6 : 8,
                bgcolor: 'background.light',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Elements */}
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: '10%', 
                    right: '-5%', 
                    width: 600, 
                    height: 600, 
                    borderRadius: '50%', 
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`, 
                    filter: 'blur(100px)', 
                    zIndex: 0 
                }} 
            />
            <Box 
                sx={{ 
                    position: 'absolute', 
                    bottom: '10%', 
                    left: '-5%', 
                    width: 500, 
                    height: 500, 
                    borderRadius: '50%', 
                    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 70%)`, 
                    filter: 'blur(100px)', 
                    zIndex: 0 
                }} 
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: isMobile ? 5 : 10 }}>
                    <Typography 
                        variant="overline" 
                        component="span"
                        sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}
                    >
                        {whyChooseUsData.header.overline}
                    </Typography>
                    <Typography 
                        variant="h2" 
                        id="why-choose-us-title"
                        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 600, mb: 3, lineHeight: 1.1 }}
                    >
                        {whyChooseUsData.header.title.main}{' '}
                        <Box component="span" className="gradient-text">
                            {whyChooseUsData.header.title.gradient}
                        </Box>
                    </Typography>
                    <Typography 
                        variant="h6" 
                        component="p"
                        sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        {whyChooseUsData.header.description}
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ mb: 8 }}>
                    {whyChooseUsData.stats.map((stat, index) => (
                        <Grid size={{ xs: 6, md: 3 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4, height: '100%', textAlign: 'center', borderRadius: 4,
                                    background: alpha(theme.palette.background.paper, 0.8),
                                    backdropFilter: 'blur(10px)', border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': { transform: 'translateY(-10px)', borderColor: 'primary.main', boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}` },
                                }}
                            >
                                <Box sx={{ color: 'primary.main', mb: 2 }}>{stat.icon}</Box>
                                <Typography variant="h3" component="span" sx={{ display: 'block', fontWeight: 600, mb: 1 }}>{stat.value}</Typography>
                                <Typography variant="body2" component="span" sx={{ display: 'block', color: 'text.secondary', fontWeight: 600, letterSpacing: 0.5 }}>{stat.label.toUpperCase()}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={4}>
                    {whyChooseUsData.benefits.map((benefit, index) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={index}>
                            <Box
                                sx={{
                                    p: 4, borderRadius: 4, height: '100%', bgcolor: alpha(theme.palette.background.paper, 0.5),
                                    borderLeft: `4px solid ${alpha(theme.palette.primary.main, 0.3)}`, transition: 'all 0.3s ease',
                                    '&:hover': { bgcolor: alpha(theme.palette.background.paper, 1), borderLeft: `4px solid ${theme.palette.primary.main}`, boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.05)}`, '& .benefit-icon': { transform: 'scale(1.1)', color: 'primary.main' } },
                                }}
                            >
                                <Stack direction="row" spacing={3} alignItems="flex-start">
                                    <Box className="benefit-icon" sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.08), color: 'primary.main', transition: 'all 0.3s ease' }}>
                                        {benefit.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1.5 }}>{benefit.title}</Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{benefit.description}</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;
