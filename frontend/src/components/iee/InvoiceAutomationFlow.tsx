import React, { useEffect, useState } from 'react';
import ReactFlow, { Handle, Position, type Node, type Edge, type NodeProps } from 'reactflow';
import 'reactflow/dist/style.css';
import { Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import CloudIcon from '@mui/icons-material/Cloud';
import DescriptionIcon from '@mui/icons-material/Description';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// =====================
// 🎨 Custom Node Components
// =====================

const FlowNode = ({ data }: NodeProps<any>) => (
	<Box
		sx={{
			bgcolor: '#fff',
			borderRadius: 3,
			p: 2.5,
			width: 260,
			border: '1px solid #e5e7eb',
			boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
		}}
	>
		<Handle type="target" position={Position.Left} />
		<Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
			<Box
				sx={{
					width: 42,
					height: 42,
					borderRadius: 2,
					bgcolor: data.color,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#fff',
				}}
			>
				{data.icon}
			</Box>
			<Box>
				<Typography fontWeight={700} fontSize={16}>
					{data.title}
				</Typography>
				<Typography fontSize={13} color="text.secondary">
					{data.subtitle}
				</Typography>
			</Box>
		</Box>
		<Handle type="source" position={Position.Right} />
	</Box>
);

const AINodeStep = ({ step, active, completed }: { step: string; active: boolean; completed: boolean }) => (
	<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
		<Box
			sx={{
				width: 10,
				height: 10,
				borderRadius: '50%',
				bgcolor: completed ? 'green' : active ? '#8b5cf6' : '#c7d2fe',
				transition: 'all 0.3s',
			}}
		/>
		<Typography fontSize={14} fontWeight={600}>
			{step} {completed && <CheckCircleIcon sx={{ fontSize: 16, color: 'green', ml: 0.5 }} />}
		</Typography>
	</Box>
);

const AiExtractionNode = ({ data }: NodeProps<any>) => {
	const steps = ['OCR', 'Identify Entities', 'Extract Table Items', 'Result Collector'];
	const [activeIndex, setActiveIndex] = useState(-1);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1 > steps.length ? -1 : prev + 1));
		}, 1000); // 1s per step
		return () => clearInterval(interval);
	}, []);

	return (
		<Box
			sx={{
				bgcolor: '#fff',
				borderRadius: 3,
				p: 2.5,
				width: 300,
				border: '1px solid #e5e7eb',
				boxShadow: '0 18px 44px rgba(0,0,0,0.15)',
			}}
		>
			<Handle type="target" position={Position.Left} />
			{/* Header */}
			<Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 1.5 }}>
				<Box
					sx={{
						width: 42,
						height: 42,
						borderRadius: 2,
						bgcolor: '#8b5cf6',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: '#fff',
					}}
				>
					{data.icon}
				</Box>
				<Box>
					<Typography fontWeight={700} fontSize={16}>
						AI Extraction
					</Typography>
					<Typography fontSize={13} color="text.secondary">
						Intelligent invoice parsing
					</Typography>
				</Box>
			</Box>
			{/* Internal Flow */}
			<Box
				sx={{
					bgcolor: '#f8fafc',
					borderRadius: 2,
					p: 1.5,
					border: '1px dashed #c7d2fe',
				}}
			>
				{steps.map((step, i) => (
					<AINodeStep key={step} step={step} active={activeIndex === i} completed={activeIndex > i} />
				))}
			</Box>
			{/* Footer */}
			<Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: '#6b7280' }}>
				Output → Human Review
			</Typography>
			<Handle type="source" position={Position.Right} />
		</Box>
	);
};

// Node types
const nodeTypes = {
	custom: FlowNode,
	ai: AiExtractionNode,
};

// =====================
// 🧩 Nodes
// =====================
const nodes: Node[] = [
	{
		id: 'gmail',
		type: 'custom',
		position: { x: 0, y: 70 },
		data: { title: 'Gmail Trigger', subtitle: 'Invoice email received', icon: <MailIcon />, color: '#ef4444' },
		draggable: false,
	},
	{
		id: 'drive',
		type: 'custom',
		position: { x: 0, y: 230 },
		data: { title: 'Cloud Storage', subtitle: 'Invoice uploaded', icon: <CloudIcon />, color: '#22c55e' },
		draggable: false,
	},
	{
		id: 'intake',
		type: 'custom',
		position: { x: 300, y: 150 },
		data: { title: 'Invoice Intake', subtitle: 'Detect & classify', icon: <DescriptionIcon />, color: '#f59e0b' },
		draggable: false,
	},
	{
		id: 'ai',
		type: 'ai',
		position: { x: 640, y: 30 },
		data: { icon: <PsychologyIcon /> },
		draggable: false,
	},
	{
		id: 'review',
		type: 'custom',
		position: { x: 1000, y: 150 },
		data: { title: 'Human Review', subtitle: 'Exception handling', icon: <FactCheckIcon />, color: '#6366f1' },
		draggable: false,
	},
	{
		id: 'export',
		type: 'custom',
		position: { x: 1340, y: 150 },
		data: { title: 'Export', subtitle: 'JSON / Excel', icon: <DataObjectIcon />, color: '#0ea5e9' },
		draggable: false,
	},
	{
		id: 'dashboard',
		type: 'custom',
		position: { x: 1680, y: 150 },
		data: { title: 'Finance Dashboard', subtitle: 'Reports & insights', icon: <DashboardIcon />, color: '#10b981' },
		draggable: false,
	},
];

// =====================
// 🔗 Edges
// =====================
const animatedEdgeStyle = { strokeDasharray: '6 6', strokeWidth: 2 };
const edges: Edge[] = [
	{ id: 'e1', source: 'gmail', target: 'intake', animated: true, style: animatedEdgeStyle },
	{ id: 'e2', source: 'drive', target: 'intake', animated: true, style: animatedEdgeStyle },
	{ id: 'e3', source: 'intake', target: 'ai', animated: true, style: animatedEdgeStyle },
	{ id: 'e4', source: 'ai', target: 'review', animated: true, style: animatedEdgeStyle },
	{ id: 'e5', source: 'review', target: 'export', animated: true, style: animatedEdgeStyle },
	{ id: 'e6', source: 'export', target: 'dashboard', animated: true, style: animatedEdgeStyle },
];

// =====================
// 🚀 Main Component
// =====================
const InvoiceAutomationFlow: React.FC = () => (
	<Box sx={{ height: 400, bgcolor: '#f5f8ff', borderRadius: 4, p: 4, position: 'relative' }}>
		<ReactFlow
			nodes={nodes}
			edges={edges}
			nodeTypes={nodeTypes}
			nodesDraggable={false}
			nodesConnectable={false}
			zoomOnScroll={true}
			zoomOnPinch={true}
			panOnDrag={true}
			panOnScroll={false}
			fitView={true}
			proOptions={{ hideAttribution: true }}
		/>
	</Box>
);

export default InvoiceAutomationFlow;
