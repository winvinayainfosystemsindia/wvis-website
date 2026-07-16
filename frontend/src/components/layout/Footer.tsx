import React from "react";
import {
	Box,
	Container,
	Typography,
	Stack,
	IconButton,
	Divider,
	Link as MuiLink,
	Chip,
	useTheme,
} from "@mui/material";
import {
	Facebook,
	Twitter,
	LinkedIn,
	Instagram,
	YouTube,
	Phone,
	Email,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const CONTACT = {
	phoneDisplay: "+91 88702 53474",
	phoneHref: "tel:+918870253474",
	emailDisplay: "info@winvinaya.com",
	emailHref: "mailto:info@winvinaya.com",
};

const Footer: React.FC = () => {
	const theme = useTheme();
	const year = new Date().getFullYear();

	return (
		<Box
			component="footer"
			sx={{
				bgcolor: "background.paper",
				color: "text.secondary",
				borderTop: `1px solid ${theme.palette.divider}`,
				pt: { xs: 8, md: 11 },
				pb: 4,
			}}
		>
			<Container maxWidth="xl">

				{/* ================= MAIN FOOTER CONTENT ================= */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						gap: { xs: 6, md: 4 },
						mb: { xs: 6, md: 8 },
					}}
				>

					{/* Brand Section */}
					<Box sx={{ maxWidth: { md: 340 }, flexShrink: 0 }}>
						<Box>
							<Box mb={3}>
								<Link to="/">
									<Box
										component="img"
										src="/images/winvinayainfosystems_fulllogo.png"
										alt="WinVinaya Infosystems"
										sx={{ height: 44 }}
									/>
								</Link>
							</Box>

							<Typography
								sx={{
									...theme.typography.footerLink,
									mb: 3,
								}}
							>
								Empowering individuals and organizations through inclusive IT
								services and digital accessibility solutions.
							</Typography>

							{/* ===== CONTACT ===== */}
							<Stack spacing={1.25} sx={{ mb: 4 }}>
								<Stack direction="row" spacing={1.25} alignItems="center">
									<Phone sx={{ fontSize: 17, color: "text.secondary" }} />
									<MuiLink
										href={CONTACT.phoneHref}
										underline="none"
										sx={{
											...theme.typography.footerLink,
											fontSize: "0.875rem",
											"&:hover": { color: "primary.main" },
										}}
									>
										{CONTACT.phoneDisplay}
									</MuiLink>
								</Stack>
								<Stack direction="row" spacing={1.25} alignItems="center">
									<Email sx={{ fontSize: 17, color: "text.secondary" }} />
									<MuiLink
										href={CONTACT.emailHref}
										underline="none"
										sx={{
											...theme.typography.footerLink,
											fontSize: "0.875rem",
											"&:hover": { color: "primary.main" },
										}}
									>
										{CONTACT.emailDisplay}
									</MuiLink>
								</Stack>
							</Stack>

							{/* ===== SOCIAL MEDIA LINKS ===== */}
							<Stack direction="row" spacing={1.25}>
								{[
									{
										icon: LinkedIn,
										url: "https://www.linkedin.com/company/winvinaya-infosystems",
										label: "LinkedIn",
									},
									{
										icon: Twitter,
										url: "https://x.com/WinVinaya",
										label: "Twitter",
									},
									{
										icon: Facebook,
										url: "https://www.facebook.com/WinVinaya",
										label: "Facebook",
									},
									{
										icon: Instagram,
										url: "https://www.instagram.com/winvinayainfosystems",
										label: "Instagram",
									},
									{
										icon: YouTube,
										url: "#", // add YouTube link when available
										label: "YouTube",
									},
								].map(({ icon: Icon, url, label }) => (
									<IconButton
										key={label}
										component="a"
										href={url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										size="small"
										sx={{
											color: "text.secondary",
											border: `1px solid ${theme.palette.divider}`,
											borderRadius: "10px",
											transition: "all 0.25s ease",
											"&:hover": {
												bgcolor: "primary.main",
												color: "#FFFFFF",
												borderColor: "primary.main",
												transform: "translateY(-3px)",
											},
										}}
									>
										<Icon fontSize="small" />
									</IconButton>
								))}
							</Stack>
						</Box>
					</Box>

					{/* Link columns — grouped and pushed to the right */}
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							flexWrap: "wrap",
							rowGap: 5,
							columnGap: { sm: 5, md: 6, lg: 8 },
						}}
					>

					{/* Quick Links */}
					<Box sx={{ minWidth: 140 }}>
						<Typography sx={{ ...theme.typography.footerHeader, mb: 2.5 }}>
							Quick Links
						</Typography>
						<Stack spacing={1.75}>
							{[
								{ label: "Home", path: "/" },
								{ label: "About Us", path: "/who-we-are" },
								{ label: "Our Solutions", path: "/services" },
								{ label: "Career", path: "/careers", hiring: true },
								{ label: "Contact", path: "/contact" },
							].map((item) => (
								<Stack key={item.label} direction="row" spacing={1} alignItems="center">
									<MuiLink
										component={Link}
										to={item.path}
										underline="none"
										sx={{
											...theme.typography.footerLink,
											fontSize: "0.875rem",
											transition: "color 0.2s ease, padding-left 0.2s ease",
											"&:hover": { color: "primary.main", pl: 0.5 },
										}}
									>
										{item.label}
									</MuiLink>
									{item.hiring && (
										<Chip
											label="HIRING"
											size="small"
											sx={{
												height: 18,
												fontSize: "0.625rem",
												fontWeight: 600,
												bgcolor: "success.light",
												color: "success.dark",
												"& .MuiChip-label": { px: 0.75 },
											}}
										/>
									)}
								</Stack>
							))}
						</Stack>
					</Box>

					{/* IT Consultancy */}
					<Box sx={{ minWidth: 180 }}>
						<Typography sx={{ ...theme.typography.footerHeader, mb: 2.5 }}>
							IT Consultancy
						</Typography>
						<Stack spacing={1.75}>
							{[
								{ label: "Microsoft Power Platform Solutions", path: "/services/power-platform" },
								{ label: "Corporate Training", path: "/services/corporate-training" },
								{ label: "Custom Application Development", path: "/services/custom-app-dev" },
								{ label: "Software Testing", path: "/services/qa-testing" },
								{ label: "Accessibility Audit", path: "/services/a11y-audit" },
							].map((item) => (
								<MuiLink
									key={item.label}
									component={Link}
									to={item.path}
									underline="none"
									sx={{
										...theme.typography.footerLink,
										fontSize: "0.875rem",
										transition: "color 0.2s ease",
										"&:hover": { color: "primary.main", pl: 0.5 },
									}}
								>
									{item.label}
								</MuiLink>
							))}
						</Stack>
					</Box>

					{/* NGO Support */}
					<Box sx={{ minWidth: 180 }}>
						<Typography sx={{ ...theme.typography.footerHeader, mb: 2.5 }}>
							NGO Support
						</Typography>
						<Stack spacing={1.75}>
							{[
								{ label: "Custom Built MIS", path: "/services/custom-built-mis" },
								{ label: "NGO Capacity Building", path: "/services/ngo-capacity" },
								{ label: "Digital Marketing & Design", path: "/services/digital-marketing" },
								{ label: "Operational Excellence", path: "/services/operational-excellence" },
								{ label: "Inclusive Content Creation", path: "/services/inclusive-content" },
							].map((item) => (
								<MuiLink
									key={item.label}
									component={Link}
									to={item.path}
									underline="none"
									sx={{
										...theme.typography.footerLink,
										fontSize: "0.875rem",
										transition: "color 0.2s ease",
										"&:hover": { color: "primary.main", pl: 0.5 },
									}}
								>
									{item.label}
								</MuiLink>
							))}
						</Stack>
					</Box>

					{/* Products */}
					<Box sx={{ minWidth: 180 }}>
						<Typography sx={{ ...theme.typography.footerHeader, mb: 2.5 }}>
							Products
						</Typography>
						<Stack spacing={1.75}>
							{[
								{ label: "A11ySense AI", path: "/products/a11ysense-ai" },
								{ label: "WinVinaya MIS", path: "/products/winvinaya-mis" },
								{ label: "NammAcademy", path: "/products/nammacademy" },
								{ label: "Invoice Intelligence", path: "/products/invoice-intelligence" },
							].map((item) => (
								<MuiLink
									key={item.label}
									component={Link}
									to={item.path}
									underline="none"
									sx={{
										...theme.typography.footerLink,
										fontSize: "0.875rem",
										transition: "color 0.2s ease",
										"&:hover": { color: "primary.main", pl: 0.5 },
									}}
								>
									{item.label}
								</MuiLink>
							))}
						</Stack>
					</Box>
					</Box>
				</Box>

				<Divider sx={{ mb: 4 }} />

				{/* ================= BOTTOM BAR ================= */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Typography sx={{ ...theme.typography.footerLegal }}>
						© {year} WinVinaya Infosystems. All rights reserved.
					</Typography>

					<Stack direction="row" spacing={4}>
						{["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
							<MuiLink
								key={item}
								component={Link}
								to={item === "Privacy Policy" ? "/privacy-policy" : item === "Terms of Service" ? "/terms-of-service" : "/cookies"}
								underline="none"
								sx={{
									...theme.typography.footerLegal,
									"&:hover": { color: "primary.main" },
								}}
							>
								{item}
							</MuiLink>
						))}
					</Stack>
				</Box>

			</Container>
		</Box>
	);
};

export default Footer;
