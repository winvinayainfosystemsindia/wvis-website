import React, { useState, useEffect, useCallback } from 'react';
import MegaMenu from './MegaMenu';
import {
	AppBar,
	Toolbar,
	Button,
	Container,
	Box,
	IconButton,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	useTheme,
	useMediaQuery,
	Typography,
	Collapse,
	alpha
} from '@mui/material';
import {
	Menu as MenuIcon,
	Close as CloseIcon,
	KeyboardArrowDown,
	ExpandLess,
	ExpandMore
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { WHAT_WE_DO_DATA, NAV_MENU_ITEMS, CTA_BUTTONS, NAV_ITEMS, type MegaMenuKey } from '../../data/shared/navbarData';

// ==================== STYLED COMPONENTS ====================
// Moved to src/theme/muiTheme.ts

import {
	NavButton
} from '../../theme/muiTheme';

// ==================== MAIN COMPONENT ====================

const Navbar: React.FC = () => {
	const theme = useTheme();
	const location = useLocation();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
	const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
	const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
	const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey | null>(null);

	const handleMegaMenuToggle = (menu: MegaMenuKey) => {
		setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
	};

	const handleCloseAll = useCallback(() => {
		setActiveMegaMenu(null);
		setMobileOpen(false);
		setMobileWhatWeDoOpen(false);
		setMobileSolutionsOpen(false);
		setMobileResourcesOpen(false);
	}, []);

	useEffect(() => {
		handleCloseAll();
	}, [location.pathname]);


	const NAVBAR_HEIGHT = isMobile ? 64 : 72;

	const whoWeAreItem = NAV_ITEMS.find((i) => i.label === 'Who We Are')!;
	const careersItem = NAV_ITEMS.find((i) => i.label === 'Careers')!;
	const ourTeamItem = NAV_ITEMS.find((i) => i.label === 'Our Team')!;

	return (
		<>
			{/* MAIN APP BAR */}
			<AppBar
				position="sticky"
				elevation={0}
				sx={{
					bgcolor: 'background.paper',
					borderBottom: 1,
					borderColor: alpha(theme.palette.divider, 0.6),
					zIndex: theme.zIndex.drawer + 2,
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters sx={{ height: NAVBAR_HEIGHT, minHeight: NAVBAR_HEIGHT }}>
						{/* LOGO */}
						<Box
							component={RouterLink}
							to="/"
							sx={{
								display: 'flex',
								alignItems: 'center',
								// flexShrink: 0,
								mr: { xs: 2, md: 3, xl: 6 },
								textDecoration: 'none',
							}}
						>
							<Box
								component="img"
								src="/images/winvinayainfosystems_fulllogo.png"
								alt="WinVinaya InfoSystems"
								sx={{ height: { xs: 36, md: 58 }, width: 'auto' }}
							/>
						</Box>

						{/* DESKTOP NAV */}
						{!isMobile && (
							<Box component="nav" aria-label="Main Navigation" sx={{ display: 'flex', alignItems: 'center', gap: { md: 1.5, xl: 4 } }}>
								{NAV_ITEMS.map((item) =>
									item.megaMenu ? (
										<NavButton
											key={item.label}
											onClick={() => handleMegaMenuToggle(item.megaMenu!)}
											active={activeMegaMenu === item.megaMenu || location.pathname.startsWith(item.activePrefix)}
											endIcon={<KeyboardArrowDown sx={{ fontSize: '1.1rem' }} />}
										>
											{item.label}
										</NavButton>
									) : (
										<NavButton
											key={item.label}
											component={RouterLink}
											to={item.path!}
											active={location.pathname.startsWith(item.activePrefix)}
										>
											{item.label}
										</NavButton>
									)
								)}
							</Box>
						)}

						<Box sx={{ flexGrow: 1 }} />

						{/* DESKTOP CTA */}
						{!isMobile && (
							<Box sx={{ display: 'flex', gap: { md: 1, xl: 1.5 }, alignItems: 'center', flexShrink: 0 }}>
								{CTA_BUTTONS.map((btn) => (
									<Button
										key={btn.label}
										variant={btn.variant}
										component={RouterLink}
										to={btn.path}
										sx={{
											borderRadius: 1,
											px: { md: 2, xl: 3 },
											py: 1,
											fontWeight: 700,
											whiteSpace: 'nowrap',
											fontSize: { md: '0.875rem', xl: '1rem' },
											...(btn.variant === 'contained'
												? {
													boxShadow: 'none',
													'&:hover': { boxShadow: 'none' },
												}
												: {
													borderWidth: 1.5,
													color: 'text.secondary',
													borderColor: alpha(theme.palette.divider, 0.8),
													'&:hover': {
														borderWidth: 1.5,
														bgcolor: alpha(theme.palette.text.primary, 0.02),
														borderColor: theme.palette.divider,
													},
												}),
										}}
									>
										{btn.label}
									</Button>
								))}
							</Box>
						)}

						{/* MOBILE TOGGLE */}
						{isMobile && (
							<IconButton onClick={() => setMobileOpen(true)} color="inherit" edge="end">
								<MenuIcon sx={{ color: 'text.secondary' }} />
							</IconButton>
						)}
					</Toolbar>
				</Container>
			</AppBar>

			{/* MEGA MENU DRAWER - REFACORTED TO COMPONENT */}
			<MegaMenu
				activeMenu={activeMegaMenu}
				onClose={handleCloseAll}
				navbarHeight={NAVBAR_HEIGHT}
			/>

			{/* MOBILE DRAWER */}
			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={handleCloseAll}
				PaperProps={{ sx: { width: '100%', maxWidth: 360 } }}
			>
				<Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 1, borderColor: 'divider' }}>
					<Box component="img" src="/images/winvinayainfosystems_fulllogo.png" sx={{ height: 28 }} />
					<IconButton onClick={handleCloseAll} size="small">
						<CloseIcon />
					</IconButton>
				</Box>

				<List sx={{ px: 1.5, pt: 1 }}>
					<ListItemButton component={RouterLink} to="/" onClick={handleCloseAll} sx={{ borderRadius: 1.5 }}>
						<ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
					</ListItemButton>

					{/* Who We Are */}
					<ListItemButton component={RouterLink} to={whoWeAreItem.path!} onClick={handleCloseAll} sx={{ borderRadius: 1.5 }}>
						<ListItemText primary={whoWeAreItem.label} primaryTypographyProps={{ fontWeight: 600 }} />
					</ListItemButton>

					{/* What We Do (formerly Services) */}
					<ListItemButton onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)} sx={{ borderRadius: 1.5 }}>
						<ListItemText
							primary="What We Do"
							primaryTypographyProps={{ fontWeight: 600, color: mobileWhatWeDoOpen ? 'primary.main' : 'inherit' }}
						/>
						{mobileWhatWeDoOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={mobileWhatWeDoOpen} timeout="auto">
						<List sx={{ pl: 2 }}>
							{WHAT_WE_DO_DATA.map((section) => (
								<Box key={section.title} sx={{ mb: 2 }}>
									<Typography
										variant="overline"
										sx={{ color: 'primary.main', fontWeight: 700, px: 2, letterSpacing: '0.05em', fontSize: '0.7rem' }}
									>
										{section.title}
									</Typography>
									{section.items.map((item, idx) => (
										<ListItemButton key={idx} sx={{ py: 0.5, borderRadius: 1 }}>
											<ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.85rem', color: 'text.secondary' }} />
										</ListItemButton>
									))}
								</Box>
							))}
						</List>
					</Collapse>

					{/* Our Solutions (formerly Products) */}
					<ListItemButton onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} sx={{ borderRadius: 1.5 }}>
						<ListItemText
							primary="Our Solutions"
							primaryTypographyProps={{ fontWeight: 600, color: mobileSolutionsOpen ? 'primary.main' : 'inherit' }}
						/>
						{mobileSolutionsOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={mobileSolutionsOpen} timeout="auto">
						<List sx={{ pl: 2 }}>
							{NAV_MENU_ITEMS.ourSolutions.map((product) => (
								<ListItemButton key={product.label} component={RouterLink} to={product.path} onClick={handleCloseAll} sx={{ borderRadius: 1 }}>
									<ListItemText primary={product.label} primaryTypographyProps={{ fontSize: '0.9rem' }} />
								</ListItemButton>
							))}
						</List>
					</Collapse>

					{/* Resources */}
					<ListItemButton onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} sx={{ borderRadius: 1.5 }}>
						<ListItemText
							primary="Resources"
							primaryTypographyProps={{ fontWeight: 600, color: mobileResourcesOpen ? 'primary.main' : 'inherit' }}
						/>
						{mobileResourcesOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={mobileResourcesOpen} timeout="auto">
						<List sx={{ pl: 2 }}>
							{NAV_MENU_ITEMS.resources.map((resource) => (
								<ListItemButton key={resource.label} component={RouterLink} to={resource.path} onClick={handleCloseAll} sx={{ borderRadius: 1 }}>
									<ListItemText primary={resource.label} primaryTypographyProps={{ fontSize: '0.9rem' }} />
								</ListItemButton>
							))}
						</List>
					</Collapse>

					{/* Careers */}
					<ListItemButton component={RouterLink} to={careersItem.path!} onClick={handleCloseAll} sx={{ borderRadius: 1.5 }}>
						<ListItemText primary={careersItem.label} primaryTypographyProps={{ fontWeight: 600 }} />
					</ListItemButton>

					{/* Our Team */}
					<ListItemButton component={RouterLink} to={ourTeamItem.path!} onClick={handleCloseAll} sx={{ borderRadius: 1.5 }}>
						<ListItemText primary={ourTeamItem.label} primaryTypographyProps={{ fontWeight: 600 }} />
					</ListItemButton>

					<Box sx={{ mt: 3, px: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
						{CTA_BUTTONS.map((btn) => (
							<Button
								key={btn.label}
								variant={btn.variant}
								fullWidth
								component={RouterLink}
								to={btn.path}
								onClick={handleCloseAll}
								sx={{ py: 1.2, borderRadius: 1.5, fontWeight: 700, textTransform: 'none' }}
							>
								{btn.label}
							</Button>
						))}
					</Box>
				</List>
			</Drawer>
		</>
	);
};

export default Navbar;