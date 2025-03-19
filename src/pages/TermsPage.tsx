import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { FiCheck, FiAlertTriangle, FiLock, FiShield } from 'react-icons/fi'

interface Term {
	icon: JSX.Element
	title: string
	content: string
}

const terms: Term[] = [
	{
		icon: <FiCheck className="w-6 h-6" />,
		title: 'Acceptance of Terms',
		content:
			'By accessing or using AILive services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
	},
	{
		icon: <FiLock className="w-6 h-6" />,
		title: 'API Usage',
		content:
			'You agree to use the API in accordance with our documentation and guidelines. Any misuse or unauthorized access may result in immediate termination of your account.',
	},
	{
		icon: <FiShield className="w-6 h-6" />,
		title: 'Data Rights',
		content:
			'You retain all rights to your data. We process data solely to provide and improve our services, as detailed in our Privacy Policy.',
	},
	{
		icon: <FiAlertTriangle className="w-6 h-6" />,
		title: 'Prohibited Uses',
		content:
			'You may not use our services for any illegal or unauthorized purpose, including but not limited to violation of intellectual property rights.',
	},
]

const sections = [
	{
		title: 'Service Description',
		content: [
			'AILive provides access to artificial intelligence models via API.',
			'Services are provided "as is" without warranty of any kind.',
			'We reserve the right to modify or discontinue services with notice.',
			'API availability and performance metrics are subject to our SLA.',
		],
	},
	{
		title: 'User Obligations',
		content: [
			'Maintain accurate account information',
			'Protect API credentials and access tokens',
			'Report any security vulnerabilities or breaches',
			'Comply with rate limits and usage quotas',
		],
	},
	{
		title: 'Payment Terms',
		content: [
			'Fees are charged based on API usage and selected plan',
			'Payments are processed securely through our payment providers',
			'Refunds are provided in accordance with our refund policy',
			'Late payments may result in service suspension',
		],
	},
	{
		title: 'Intellectual Property',
		content: [
			'AILive retains all rights to our technology and services',
			'Users retain rights to their input data and results',
			'API documentation and resources are provided for authorized use',
			'Trademark and copyright notices must be preserved',
		],
	},
	{
		title: 'Limitation of Liability',
		content: [
			'We are not liable for indirect or consequential damages',
			'Maximum liability is limited to fees paid in last 12 months',
			'Force majeure events are excluded from liability',
			'Users indemnify AILive against third-party claims',
		],
	},
	{
		title: 'Term and Termination',
		content: [
			'Agreement remains in effect until terminated',
			'Either party may terminate with 30 days notice',
			'Immediate termination for material breach',
			'Post-termination obligations survive',
		],
	},
]

export default function TermsPage() {
	const [activeSection, setActiveSection] = useState(0)

	return (
		<div className="min-h-screen bg-theme-gradient">
			<Header variant="default" />
			<div className="pt-24 pb-32">
				<div className="container mx-auto px-4">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto mb-16"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Terms of Service
						</h1>
						<p className="text-lg text-violet-200">
							Please read these terms carefully before using our services. By using
							AILive, you agree to these terms and conditions.
						</p>
					</motion.div>

					{/* Key Terms */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
					>
						{terms.map((term, index) => (
							<motion.div
								key={term.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + index * 0.1 }}
								className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6"
							>
								<div className="text-purple-400 mb-4">{term.icon}</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									{term.title}
								</h3>
								<p className="text-violet-200">{term.content}</p>
							</motion.div>
						))}
					</motion.div>

					{/* Detailed Terms */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="max-w-4xl mx-auto"
					>
						<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8">
							{/* Section Navigation */}
							<div className="flex overflow-x-auto mb-8 pb-4 space-x-4">
								{sections.map((section, index) => (
									<button
										key={section.title}
										onClick={() => setActiveSection(index)}
										className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
											activeSection === index
												? 'bg-purple-500 text-white'
												: 'text-violet-200 hover:text-white'
										}`}
									>
										{section.title}
									</button>
								))}
							</div>

							{/* Section Content */}
							<motion.div
								key={activeSection}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
								className="space-y-6"
							>
								<h2 className="text-2xl font-bold text-white mb-4">
									{sections[activeSection].title}
								</h2>
								<ul className="space-y-4">
									{sections[activeSection].content.map((item, index) => (
										<motion.li
											key={index}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											className="flex items-start text-violet-200"
										>
											<FiCheck className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
											<span>{item}</span>
										</motion.li>
									))}
								</ul>
							</motion.div>
						</div>
					</motion.div>

					{/* Last Updated */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="text-center mt-12"
					>
						<p className="text-violet-300">Last Updated: March 15, 2024</p>
					</motion.div>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 