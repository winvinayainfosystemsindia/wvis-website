import React, { type ReactNode } from 'react';

import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
			<Navbar />
			<Box component="main" sx={{ flexGrow: 1 }}>
				{children}
			</Box>
			<Footer />
		</Box>
	);
};

export default MainLayout;
