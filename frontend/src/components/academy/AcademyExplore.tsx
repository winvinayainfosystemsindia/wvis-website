import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Paper,
	Link
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { EXPLORE_ITEMS } from '../../data/academy/nammAcademyData';

const AcademyExplore: React.FC = () => {

	return (
		<Box sx={{ py: 10, bgcolor: 'background.default' }}>
			<Container maxWidth="lg">
				<Typography
					variant="h3"
					align="center"
					sx={{
						fontWeight: 400,
						mb: 5,
						fontSize: { xs: '1.5rem', md: '2.5rem' }
					}}
				>
					Explore NammAcademy
				</Typography>

				<Grid container spacing={4}>
					{EXPLORE_ITEMS.map((item, index) => (
						<Grid size={{ xs: 12, md: 4 }} key={index}>
							<Paper
								elevation={0}
								sx={{
									borderRadius: 4,
									overflow: 'hidden',
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									transition: 'transform 0.3s ease',
									'&:hover': {
										transform: 'translateY(-8px)'
									}
								}}
							>
								{/* Image */}
								<Box
									sx={{
										height: 240,
										width: '100%',
										overflow: 'hidden',
										borderRadius: 4,
										mb: 3
									}}
								>
									<Box
										component="img"
										src={item.image}
										alt={item.title}
										sx={{
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
									/>
								</Box>

								{/* Content */}
								<Box sx={{ p: 1 }}>
									<Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
										{item.description}
									</Typography>
									<Link
										component={RouterLink}
										to={item.link}
										sx={{
											color: 'primary.main',
											fontWeight: 700,
											display: 'inline-flex',
											alignItems: 'center',
											textDecoration: 'none',
											fontSize: '0.9rem',
											'&:hover': { textDecoration: 'underline' }
										}}
									>
										{item.linkText} <ArrowForwardIos sx={{ fontSize: 10, ml: 1 }} />
									</Link>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default AcademyExplore;
