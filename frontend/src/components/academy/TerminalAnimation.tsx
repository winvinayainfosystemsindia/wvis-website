import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Divider, Button } from '@mui/material';
import { Highlight, themes } from 'prism-react-renderer';

const CODE_TEXT = `def say_hello():
    print("Hello, World!")
say_hello()
`;


const TerminalAnimation: React.FC = () => {
	const [typedCode, setTypedCode] = useState('');
	const [index, setIndex] = useState(0);
	const [showCursor, setShowCursor] = useState(true);
	const [isRunning, setIsRunning] = useState(false);
	const [output, setOutput] = useState<string[]>([]);

	// Typing animation
	useEffect(() => {
		if (index < CODE_TEXT.length) {
			const timeout = setTimeout(() => {
				setTypedCode((prev) => prev + CODE_TEXT[index]);
				setIndex(index + 1);
			}, 30); // Faster typing for 20 lines

			return () => clearTimeout(timeout);
		}
	}, [index]);

	// Cursor blink
	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => clearInterval(cursorInterval);
	}, []);

	const handleRun = () => {
		setIsRunning(true);
		setOutput([]);

		const lines = [
			"Added: Web Dev (ISL: True)",
			"Added: Python Basics (ISL: True)",
			"Global Impact: 235.14%"
		];

		let lineIdx = 0;
		const interval = setInterval(() => {
			if (lineIdx < lines.length) {
				setOutput(prev => [...prev, lines[lineIdx]]);
				lineIdx++;
			} else {
				setIsRunning(false);
				clearInterval(interval);
			}
		}, 600);
	};

	return (
		<Paper
			elevation={10}
			sx={{
				backgroundColor: '#1e1e1e',
				borderRadius: 3,
				overflow: 'hidden',
				border: '1px solid #333',
				boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
				maxWidth: 800,
				mx: 'auto'
			}}
		>
			{/* Window Header */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					px: 3,
					py: 1.5,
					bgcolor: '#2d2d2d',
					borderBottom: '1px solid #333'
				}}
			>
				<Box sx={{ display: 'flex', gap: 1, mr: 3 }}>
					<Box sx={{ width: 12, height: 12, bgcolor: '#ff5f56', borderRadius: '50%' }} />
					<Box sx={{ width: 12, height: 12, bgcolor: '#ffbd2e', borderRadius: '50%' }} />
					<Box sx={{ width: 12, height: 12, bgcolor: '#27c93f', borderRadius: '50%' }} />
				</Box>
				<Typography variant="caption" sx={{ color: '#888', fontWeight: 600, fontFamily: 'monospace' }}>
					impact_analyzer.py
				</Typography>
			</Box>

			{/* Code Area */}
			<Box
				sx={{
					p: 3,
					minHeight: 200,
					maxHeight: 500,
					overflowY: 'auto',
					fontFamily: 'monospace',
					fontSize: '0.9rem',
					lineHeight: 1.6
				}}
			>
				<Highlight
					theme={themes.vsDark}
					code={typedCode}
					language="python"
				>
					{({ tokens, getLineProps, getTokenProps }) => (
						<Box component="pre" sx={{ margin: 0, background: 'transparent !important' }}>
							{tokens.map((line, i) => (
								<Box key={i} {...getLineProps({ line })}>
									<Typography
										component="span"
										sx={{
											mr: 2,
											color: '#555',
											userSelect: 'none',
											width: '20px',
											display: 'inline-block',
											textAlign: 'right'
										}}
									>
										{i + 1}
									</Typography>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token })} />
									))}
								</Box>
							))}

							{/* Cursor */}
							{showCursor && (
								<Box
									component="span"
									sx={{
										display: 'inline-block',
										width: 8,
										height: 18,
										bgcolor: '#9cdcfe',
										ml: 0.5,
										verticalAlign: 'text-bottom'
									}}
								/>
							)}
						</Box>
					)}
				</Highlight>
			</Box>

			<Divider sx={{ borderColor: '#333' }} />

			{/* Terminal Output Area */}
			<Box sx={{ p: 2, bgcolor: '#000', minHeight: 180, fontFamily: 'monospace' }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
					<Typography variant="caption" sx={{ color: '#27c93f', fontWeight: 900 }}>
						TERMINAL
					</Typography>
					<Button
						size="small"
						onClick={handleRun}
						disabled={isRunning || index < CODE_TEXT.length}
						sx={{
							py: 0,
							px: 2,
							height: 24,
							bgcolor: '#27c93f',
							color: '#000',
							fontSize: '0.7rem',
							fontWeight: 800,
							'&:hover': { bgcolor: '#1fa132' },
							'&.Mui-disabled': {
								bgcolor: index < CODE_TEXT.length ? 'transparent' : 'rgba(39, 201, 63, 0.2)',
								color: '#555'
							}
						}}
					>
						{isRunning ? 'RUNNING...' : 'RUN MODULE'}
					</Button>
				</Box>

				{output.map((line, i) => (
					<Typography key={i} sx={{ color: '#fff', fontSize: '0.85rem' }}>
						<Box component="span" sx={{ color: '#27c93f', mr: 1 }}>➜</Box> {line}
					</Typography>
				))}

				{isRunning && (
					<Typography sx={{ color: '#aaa', fontSize: '0.85rem', fontStyle: 'italic' }}>
						Compiling and executing...
					</Typography>
				)}
			</Box>
		</Paper>
	);
};

export default TerminalAnimation;
