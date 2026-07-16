import React, { useState, useMemo } from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Button,
    Chip,
    useTheme,
    alpha,
    useMediaQuery,
} from '@mui/material';
import { LocationOn, Schedule, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
    openPositionsData,
    openPositionsHeader as header,
    departments,
} from '../../data/careers/openPositionsData';

const OpenPositions: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeFilter, setActiveFilter] = useState<string>(header.allLabel);

    const filters = [header.allLabel, ...departments];

    const visiblePositions = useMemo(
        () =>
            activeFilter === header.allLabel
                ? openPositionsData
                : openPositionsData.filter((p) => p.department === activeFilter),
        [activeFilter]
    );

    return (
        <Box
            component="section"
            id="open-positions-section"
            aria-labelledby="open-positions-title"
            sx={{
                py: isMobile ? 6 : 12,
                bgcolor: 'background.paper',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 720, mx: 'auto', mb: isMobile ? 5 : 8, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        component="span"
                        sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 4, mb: 2, display: 'block' }}
                    >
                        {header.overline}
                    </Typography>
                    <Typography
                        variant="h2"
                        id="open-positions-title"
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
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {header.description}
                    </Typography>
                </Box>

                {/* Department filter */}
                <Stack
                    direction="row"
                    justifyContent="center"
                    role="tablist"
                    aria-label="Filter open positions by department"
                    sx={{ mb: { xs: 4, md: 6 }, flexWrap: 'wrap', gap: 1.25 }}
                >
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <Box
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setActiveFilter(filter);
                                    }
                                }}
                                tabIndex={0}
                                role="tab"
                                aria-selected={isActive}
                                sx={{
                                    px: 2.5,
                                    py: 1,
                                    borderRadius: '100px',
                                    cursor: 'pointer',
                                    border: '1.5px solid',
                                    borderColor: isActive ? 'primary.main' : theme.palette.divider,
                                    bgcolor: isActive ? alpha(theme.palette.primary.main, 0.08) : 'background.default',
                                    transition: 'all 0.25s ease',
                                    '&:focus-visible': {
                                        outline: `2px solid ${theme.palette.primary.main}`,
                                        outlineOffset: '2px',
                                    },
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '0.875rem',
                                        color: isActive ? 'primary.main' : 'text.secondary',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {filter}
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>

                {/* Job cards */}
                <Stack spacing={2.5}>
                    {visiblePositions.map((position) => (
                        <Box
                            key={position.id}
                            sx={{
                                p: { xs: 3, md: 4 },
                                borderRadius: 3,
                                bgcolor: 'background.default',
                                border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: { xs: 'flex-start', md: 'center' },
                                gap: { xs: 2.5, md: 3 },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: alpha(theme.palette.primary.main, 0.4),
                                    boxShadow: `0 12px 32px ${alpha(theme.palette.common.black, 0.06)}`,
                                },
                            }}
                        >
                            <Box sx={{ flexGrow: 1 }}>
                                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
                                    <Chip
                                        label={position.department}
                                        size="small"
                                        sx={{
                                            bgcolor: alpha(theme.palette.primary.main, 0.08),
                                            color: 'primary.main',
                                            fontWeight: 600,
                                            fontSize: '0.75rem',
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{ fontWeight: 600, fontSize: '1.25rem', color: 'text.primary', mb: 1 }}
                                >
                                    {position.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 1.5, maxWidth: 560 }}
                                >
                                    {position.description}
                                </Typography>
                                <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                                    <Stack direction="row" spacing={0.75} alignItems="center">
                                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} aria-hidden="true" />
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                            {position.location}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0.75} alignItems="center">
                                        <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} aria-hidden="true" />
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                            {position.type}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>

                            <Button
                                component={Link}
                                to="/contact"
                                state={{ position: position.title }}
                                variant="outlined"
                                endIcon={<ArrowForward />}
                                sx={{
                                    flexShrink: 0,
                                    px: 3,
                                    py: 1.25,
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    borderWidth: 1.5,
                                    whiteSpace: 'nowrap',
                                    '&:hover': { borderWidth: 1.5 },
                                }}
                            >
                                Apply Now
                            </Button>
                        </Box>
                    ))}

                    {visiblePositions.length === 0 && (
                        <Box sx={{ textAlign: 'center', py: 6 }}>
                            <Typography sx={{ color: 'text.secondary' }}>
                                No open roles in this department right now — check back soon.
                            </Typography>
                        </Box>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default OpenPositions;
