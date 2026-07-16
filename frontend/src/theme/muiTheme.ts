import { createTheme, styled, alpha } from '@mui/material/styles';
import type { CSSProperties as MuiCSSProperties } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

/* =========================================================
   THEME EXTENSIONS - FRESHWORKS DESIGN SYSTEM
========================================================= */
declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
		gradients: {
			primary: string;
			banner: string;
			primaryReverse: string;
			freshworks: string;
			freshworksReverse: string;
		};
		utils: {
			gradientText: {
				backgroundImage: string;
				WebkitBackgroundClip: string;
				WebkitTextFillColor: string;
				backgroundClip: string;
			};
		};
	}
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
		gradients?: {
			primary?: string;
			banner?: string;
			primaryReverse?: string;
			freshworks?: string;
			freshworksReverse?: string;
		};
		utils?: {
			gradientText?: {
				backgroundImage: string;
				WebkitBackgroundClip: string;
				WebkitTextFillColor: string;
				backgroundClip: string;
			};
		};
	}
	interface Palette {
		custom: {
			a11ySense: string;
			winVinayaMis: string;
			invoiceIntel: string;
			orange: string;
			orangeDark: string;
		};
	}
	interface PaletteOptions {
		custom?: {
			a11ySense?: string;
			winVinayaMis?: string;
			invoiceIntel?: string;
			orange?: string;
			orangeDark?: string;
		};
	}
	interface TypeBackground {
		paper: string;
		default: string;
		light?: string;
		white?: string;
	}
	interface TypographyVariants {
		navLink: MuiCSSProperties;
		navButton: MuiCSSProperties;
		footerHeader: MuiCSSProperties;
		footerLink: MuiCSSProperties;
		footerLegal: MuiCSSProperties;
	}
	interface TypographyVariantsOptions {
		navLink?: MuiCSSProperties;
		navButton?: MuiCSSProperties;
		footerHeader?: MuiCSSProperties;
		footerLink?: MuiCSSProperties;
		footerLegal?: MuiCSSProperties;
	}
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true; // large / 4K monitors
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		navLink: true;
		navButton: true;
		footerHeader: true;
		footerLink: true;
		footerLegal: true;
	}
}

/* =========================================================
   FRESHWORKS-INSPIRED THEME
========================================================= */
export const muiTheme = createTheme({
	palette: {
		primary: {
			main: '#8512E0', // Freshworks Purple
			light: '#A855F7',
			dark: '#6B21A8',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#002FFF', // Freshworks Blue (from gradient)
			light: '#3B82F6',
			dark: '#1E3A8A',
			contrastText: '#FFFFFF',
		},
		success: {
			main: '#10B981',
			light: '#34D399',
			dark: '#059669',
		},
		warning: {
			main: '#F59E0B',
			light: '#FBBF24',
			dark: '#D97706',
			contrastText: '#FFFFFF',
		},
		info: {
			main: '#0891B2',
			light: '#22D3EE',
			dark: '#0E7490',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#EF4444',
			light: '#F87171',
			dark: '#B91C1C',
			contrastText: '#FFFFFF',
		},
		custom: {
			a11ySense: '#2563EB',
			winVinayaMis: '#0891B2',
			invoiceIntel: '#7C3AED',
			orange: '#F59E0B',
			orangeDark: '#D97706',
		},
		background: {
			default: '#FFFFFF',
			paper: '#FFFFFF',
			light: '#F9FAFB',
		},
		text: {
			primary: '#000000', // Freshworks uses pure black for headings
			secondary: '#1D2026', // Freshworks charcoal black for navbar/body
		},
		divider: '#E5E7EB',
	},

	/* ===============================
	   RESPONSIVE BREAKPOINTS

	   xs: 0     - phones (portrait)
	   sm: 600   - phones (landscape) / small tablets
	   md: 900   - tablets
	   lg: 1200  - laptops / small desktops
	   xl: 1536  - desktops
	   xxl: 1920 - large / 4K monitors
	================================ */
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			xxl: 1920,
		},
	},

	/* ===============================
	   FRESHWORKS GRADIENTS
	================================ */
	gradients: {
		// Freshworks signature gradient (purple to blue)
		freshworks: 'linear-gradient(239.93deg, #8512E0 43.93%, #002FFF 93.49%)',
		freshworksReverse: 'linear-gradient(239.93deg, #002FFF 43.93%, #8512E0 93.49%)',
		banner: 'linear-gradient(rgb(7, 6, 36) -17.19%, rgba(7, 6, 36, 0) 111.4%), linear-gradient(86.97deg, rgba(255, 168, 0, 0.4) -0.67%, rgba(25, 187, 125, 0.4) 24.91%, rgba(0, 82, 204, 0.4) 48.82%, rgba(69, 164, 236, 0.4) 72.18%, rgba(184, 95, 255, 0.4) 88.31%), rgb(7, 6, 36);',
		// Legacy gradients for backward compatibility
		primary: 'linear-gradient(90deg, #8512E0 0%, #002FFF 100%)',
		primaryReverse: 'linear-gradient(90deg, #002FFF 0%, #8512E0 100%)',
	},

	/* ===============================
	   GRADIENT TEXT UTILITY
	================================ */
	utils: {
		gradientText: {
			backgroundImage: 'linear-gradient(239.93deg, #8512E0 43.93%, #002FFF 93.49%)',
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
			backgroundClip: 'text',
		},
	},

	/* ===============================
	   TYPOGRAPHY - INTER SYSTEM
	================================ */
	typography: {
		fontFamily: '"Inter", "Helvetica Neue", "Arial Nova", sans-serif',
		h1: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 700,
			fontSize: '3.75rem', // 60px - desktop (lg+)
			lineHeight: 1.2,
			'@media (max-width:1199.95px)': { fontSize: '3rem' }, // laptop
			'@media (max-width:899.95px)': { fontSize: '2.5rem' }, // tablet
			'@media (max-width:599.95px)': { fontSize: '2rem' }, // phone
		},
		h2: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 700,
			fontSize: '2.5rem', // 40px - desktop (lg+)
			lineHeight: 1.3,
			'@media (max-width:1199.95px)': { fontSize: '2.25rem' },
			'@media (max-width:899.95px)': { fontSize: '2rem' },
			'@media (max-width:599.95px)': { fontSize: '1.75rem' },
		},
		h3: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 700,
			fontSize: '2rem', // 32px - desktop (lg+)
			lineHeight: 1.4,
			'@media (max-width:1199.95px)': { fontSize: '1.75rem' },
			'@media (max-width:899.95px)': { fontSize: '1.625rem' },
			'@media (max-width:599.95px)': { fontSize: '1.5rem' },
		},
		h4: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 700,
			fontSize: '1.5rem', // 24px - desktop (md+)
			lineHeight: 1.4,
			'@media (max-width:899.95px)': { fontSize: '1.375rem' },
			'@media (max-width:599.95px)': { fontSize: '1.25rem' },
		},
		h5: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 700,
			fontSize: '1.25rem', // 20px - desktop (sm+)
			lineHeight: 1.5,
			'@media (max-width:599.95px)': { fontSize: '1.125rem' },
		},
		h6: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 700,
			fontSize: '1.125rem', // 18px - desktop (sm+)
			lineHeight: 1.5,
			'@media (max-width:599.95px)': { fontSize: '1rem' },
		},
		body1: {
			fontSize: '1rem', // 16px
			lineHeight: 1.75, // 28px
			'@media (max-width:599.95px)': { fontSize: '0.9375rem' },
		},
		body2: {
			fontSize: '0.875rem', // 14px
			lineHeight: 1.7,
			'@media (max-width:599.95px)': { fontSize: '0.8125rem' },
		},
		button: {
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1.125rem', // 18px
			'@media (max-width:899.95px)': { fontSize: '1rem' },
			'@media (max-width:599.95px)': { fontSize: '0.9375rem' },
		},
		// Custom variants for navigation
		navLink: {
			fontFamily: '"Inter", "Helvetica Neue", "Arial Nova", sans-serif',
			fontSize: '18px',
			fontWeight: 400,
			lineHeight: 1.5,
			textTransform: 'none',
			'@media (max-width:899.95px)': { fontSize: '16px' },
			'@media (max-width:599.95px)': { fontSize: '15px' },
		},
		navButton: {
			fontFamily: '"Inter", "Helvetica Neue", "Arial Nova", sans-serif',
			fontSize: '16px',
			fontWeight: 700,
			lineHeight: 1.5,
			textTransform: 'none',
			'@media (max-width:599.95px)': { fontSize: '14px' },
		},
		// Footer typography variants
		footerHeader: {
			fontFamily: '"Inter", "Helvetica Neue", "Arial Nova", sans-serif',
			fontSize: '18px',
			fontWeight: 500,
			lineHeight: 1.5,
			color: '#1D2026',
			'@media (max-width:599.95px)': { fontSize: '16px' },
		},
		footerLink: {
			fontFamily: '"Inter", "Helvetica Neue", "Arial Nova", sans-serif',
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: 1.75,
			color: '#1D2026',
			'@media (max-width:599.95px)': { fontSize: '15px' },
		},
		footerLegal: {
			fontFamily: '"Inter", "Helvetica Neue", "Arial Nova", sans-serif',
			fontSize: '12px',
			fontWeight: 400,
			lineHeight: 1.5,
			color: '#505766',
		},
	},

	/* ===============================
	   SHAPE & SHADOWS - FLAT DESIGN
	================================ */
	shape: {
		borderRadius: 6, // Freshworks uses 6px
	},
	shadows: [
		'none',
		'0 1px 3px rgba(0, 0, 0, 0.08)', // subtle
		'0 2px 6px rgba(0, 0, 0, 0.08)', // soft
		'0 4px 12px rgba(0, 0, 0, 0.1)', // medium
		...Array(21).fill('none'),
	] as any,

	/* ===============================
	   COMPONENT OVERRIDES
	================================ */
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					padding: '10px 24px',
					fontSize: '1.125rem', // 18px - desktop
					fontWeight: 700,
					transition: 'all 0.2s ease-in-out',
					'@media (max-width:899.95px)': {
						fontSize: '1rem',
						padding: '9px 20px',
					},
					'@media (max-width:599.95px)': {
						fontSize: '0.9375rem',
						padding: '8px 18px',
					},
				},
				containedPrimary: {
					background: '#8512E0',
					'&:hover': {
						background: '#6B21A8',
						transform: 'translateY(-1px)',
						boxShadow: '0 4px 12px rgba(133, 18, 224, 0.3)',
					},
				},
				outlined: {
					borderWidth: 2,
					'&:hover': {
						borderWidth: 2,
					},
				},
			},
		},

		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 6,
				},
				elevation1: {
					boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
				},
				elevation2: {
					boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
				},
			},
		},

		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
				},
			},
		},

		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: 6,
					},
				},
			},
		},

		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 6,
				},
			},
		},
	},
});

export default muiTheme;

/* =========================================================
   NAVBAR STYLED COMPONENTS
========================================================= */

export const NavButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'active'
})<{ active?: boolean; component?: any; to?: any }>(({ theme, active }) => ({
	color: active ? theme.palette.primary.main : theme.palette.text.secondary,
	padding: theme.spacing(1, 0),
	minWidth: 'auto',
	fontSize: '0.9375rem', // 15px - xl+ (large desktops)
	fontWeight: 500,
	textTransform: 'none',
	whiteSpace: 'nowrap',
	flexShrink: 0,
	transition: 'color 0.2s ease-in-out',
	[theme.breakpoints.down('xl')]: {
		// most laptops (900-1536px) need tighter type to avoid crowding
		fontSize: '0.875rem', // 14px
	},
	'&:hover': {
		backgroundColor: 'transparent',
		color: theme.palette.primary.main,
	},
	'& .MuiButton-endIcon': {
		marginLeft: theme.spacing(0.5),
		transition: 'transform 0.2s ease',
	},
	...(active && {
		'& .MuiButton-endIcon': {
			transform: 'rotate(180deg)',
		},
	}),
}));

export const ServiceCategoryBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1),
}));

export const CategoryHeader = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(2),
	alignItems: 'flex-start',
}));

export const CategoryIconWrapper = styled(Box)(({ theme }) => ({
	width: 48,
	height: 48,
	background: theme.gradients.freshworks,
	borderRadius: (theme.shape.borderRadius as number) + 2,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#fff',
	flexShrink: 0,
}));

export const ServiceItemLink = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: theme.spacing(0.8, 1.5),
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.04),
		'& .item-arrow': {
			opacity: 1,
			transform: 'translateX(4px)',
		},
	},
	'& .item-arrow': {
		opacity: 0,
		color: theme.palette.text.disabled,
		transition: 'all 0.2s ease',
	},
}));

export const ProductCard = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: (theme.shape.borderRadius as number) + 4,
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	textDecoration: 'none',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1.5),
	'&:hover': {
		borderColor: theme.palette.primary.main,
		boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
		transform: 'translateY(-2px)',
	},
}));

export const ProductIconWrapper = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
	width: 56,
	height: 56,
	backgroundColor: alpha(bgcolor, 0.1),
	color: bgcolor,
	borderRadius: 12,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export const ResourceItem = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2),
	padding: theme.spacing(2, 2.5),
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	textDecoration: 'none',
	'&:hover': {
		backgroundColor: alpha(theme.palette.text.primary, 0.02),
		borderColor: theme.palette.primary.main,
		'& .resource-arrow': {
			transform: 'translateX(4px)',
		},
	},
	'& .resource-arrow': {
		color: theme.palette.text.disabled,
		transition: 'transform 0.2s ease',
	},
}));

export const FeaturedBox = styled(Box)(({ theme }) => ({
	backgroundColor: alpha(theme.palette.primary.main, 0.02),
	padding: theme.spacing(4),
	borderRadius: (theme.shape.borderRadius as number) + 8,
	height: '100%',
	border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
}));

