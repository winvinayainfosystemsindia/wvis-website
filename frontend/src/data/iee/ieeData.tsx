import React from 'react';
import {
	FactCheck,
	AutoAwesome,
	CloudUpload,
	Storage,
	Security,
	AccountBalance,
	Email,
	GppGood,
	Bolt
} from '@mui/icons-material';

export interface IeeFeature {
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
}

export const IEE_HERO = {
	title: "AI-Powered Invoice Extraction",
	subtitle: "Document Intelligence optimized for the Indian ecosystem. Extract, classify, and automate your financial workflows with 90% accuracy.",
};

export const IEE_FEATURES: IeeFeature[] = [
	{
		title: "Intelligent Extraction",
		description: "Extract line-item details from complex invoices and convert them directly into structured Excel formats.",
		icon: <FactCheck />,
		color: "#6366f1"
	},
	{
		title: "Vendor Classification",
		description: "Automatically differentiate between vendor bills and regular invoices using proprietary AI classification.",
		icon: <AutoAwesome />,
		color: "#8b5cf6"
	},
	{
		title: "Note Processing",
		description: "Smart detection and handling of Debit and Credit notes to ensure ledger accuracy without manual entry.",
		icon: <AccountBalance />,
		color: "#0ea5e9"
	},
	{
		title: "Batch Processing",
		description: "Upload bulk folders and let our distributed Celery workers handle the heavy lifting while you focus on high-value tasks.",
		icon: <CloudUpload />,
		color: "#10b981"
	},
	{
		title: "Email Notifications",
		description: "Stay updated on your batch progress. Receive detailed email reporting once your processing queue is complete.",
		icon: <Email />,
		color: "#f59e0b"
	},
	{
		title: "High Performance",
		description: "Trained on thousands of Indian regional documents to achieve a benchmark-setting 90% accuracy.",
		icon: <Bolt />,
		color: "#ef4444"
	}
];

export const IEE_PRIVACY = {
	title: "Your Data is Yours",
	items: [
		{
			title: "No Data Storage",
			description: "We process your files in real-time and do not store sensitive financial documents on our servers.",
			icon: <Storage />
		},
		{
			title: "No Model Training",
			description: "Customer data is never used to train or refine our models. Your documents remain strictly private.",
			icon: <GppGood />
		},
		{
			title: "Encryption at Rest",
			description: "Industry-standard protocols protect your data during the transient processing phase.",
			icon: <Security />
		}
	]
};

export const IEE_TECH_SPECS = [
	{ label: "AI Model", value: "Proprietary Transformer-based OCR" },
	{ label: "Accuracy", value: "90% Benchmark" },
	{ label: "Region", value: "India-Specific Optimization" },
	{ label: "Backend", value: "Distributed Celery Workers" }
];
