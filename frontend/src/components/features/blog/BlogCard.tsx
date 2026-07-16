import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	alpha,
	Chip,
	Stack,
	Avatar,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const blogs = [
	{
		title: 'Modernizing IT for Inclusive Growth',
		category: 'Technology',
		date: 'Jan 20, 2024',
		author: 'Admin',
		image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070'
	},
	{
		title: 'Empowering Persons with Disabilities',
		category: 'Inclusion',
		date: 'Jan 18, 2024',
		author: 'Team WinVinaya',
		image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070'
	}
];

const BlogCard: React.FC = () => {
	return (
		<Box sx={{ py: 10, bgcolor: 'background.default' }}>
			<Container maxWidth="xl">
				<Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 6 }}>
					<Box>
						<Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 2 }}>
							Insights & News
						</Typography>
						<Typography variant="h2" sx={{ fontWeight: 800 }}>Latest from Our Blog</Typography>
					</Box>
					<Chip
						label="View All Posts"
						clickable
						onDelete={() => { }}
						deleteIcon={<ArrowForward />}
						sx={{ fontWeight: 700, p: 1, '& .MuiChip-deleteIcon': { color: 'primary.main' } }}
					/>
				</Stack>

				<Grid container spacing={4}>
					{blogs.map((blog, index) => (
						<Grid key={index} size={{ xs: 12, md: 6 }}>
							<Card
								elevation={0}
								sx={{
									borderRadius: 4,
									overflow: 'hidden',
									border: '1px solid',
									borderColor: 'divider',
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'translateY(-5px)',
										boxShadow: (theme) => `0 20px 40px ${alpha(theme.palette.primary.main, 0.08)}`,
										borderColor: 'primary.main'
									}
								}}
							>
								<CardMedia
									component="img"
									height="300"
									image={blog.image}
									alt={blog.title}
								/>
								<CardContent sx={{ p: 4 }}>
									<Chip
										label={blog.category}
										size="small"
										sx={{ mb: 2, bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1), color: 'primary.main', fontWeight: 700 }}
									/>
									<Typography variant="h4" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3 }}>
										{blog.title}
									</Typography>
									<Stack direction="row" spacing={2} alignItems="center">
										<Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main', fontSize: '14px' }}>W</Avatar>
										<Box>
											<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{blog.author}</Typography>
											<Typography variant="caption" color="text.secondary">{blog.date}</Typography>
										</Box>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default BlogCard;
