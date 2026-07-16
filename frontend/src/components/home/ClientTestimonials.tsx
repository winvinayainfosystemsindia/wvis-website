import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Avatar,
    Rating,
    useTheme,
    alpha,
    Paper,
    useMediaQuery,
} from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { testimonialData } from '../../data/home/testimonialData';

const ClientTestimonials: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="testimonials-section"
            aria-labelledby="testimonials-title"
            sx={{
                py: isMobile ? 6 : 8,
                bgcolor: alpha(theme.palette.primary.main, 0.02),
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: isMobile ? 5 : 8 }}>
                    <Typography
                        variant="h2"
                        id="testimonials-title"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3rem' },
                            fontWeight: 600,
                            mb: 2,
                        }}
                    >
                        {testimonialData.header.title.main}{' '}
                        <Box component="span" className="gradient-text">
                            {testimonialData.header.title.gradient}
                        </Box>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 700,
                            mx: 'auto',
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        {testimonialData.header.description}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {testimonialData.testimonials.map((testimonial, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5,
                                    height: '100%',
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                    position: 'relative',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.05)}`,
                                    }
                                }}
                            >
                                <FormatQuote
                                    sx={{
                                        fontSize: 40,
                                        color: alpha(theme.palette.primary.main, 0.2),
                                        position: 'absolute',
                                        top: 20,
                                        right: 20,
                                    }}
                                />

                                <Rating
                                    value={testimonial.rating}
                                    readOnly
                                    size="small"
                                    aria-label={`Rated ${testimonial.rating} out of 5 stars`}
                                    sx={{ mb: 3, color: 'primary.main' }}
                                />

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontStyle: 'italic',
                                        lineHeight: 1.8,
                                        color: 'text.primary',
                                        mb: 4,
                                        minHeight: 100,
                                    }}
                                >
                                    "{testimonial.quote}"
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            mr: 2,
                                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                                            color: 'primary.main',
                                            fontWeight: 700,
                                        }}
                                        aria-hidden="true"
                                    >
                                        {testimonial.author[0]}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
                                            {testimonial.author}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {testimonial.role}, {testimonial.company}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ClientTestimonials;
