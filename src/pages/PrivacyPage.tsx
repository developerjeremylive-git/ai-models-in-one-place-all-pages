import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface Section {
	title: string
	content: string[]
}

const sections: Section[] = [
	{
		title: 'Information We Collect',
		content: [
			'Personal information you provide when creating an account or using our services.',
			'Usage data including API calls, model interactions, and performance metrics.',
			'Technical data such as IP addresses, browser type, and device information.',
			'Cookies and similar tracking technologies for improving user experience.',
		],
	},
	{
		title: 'How We Use Your Information',
		content: [
			'To provide and maintain our AI services and API functionality.',
			'To improve and optimize our models and user experience.',
			'To communicate with you about service updates and changes.',
			'To detect and prevent fraudulent or unauthorized API usage.',
		],
	},
	{
		title: 'Data Security',
		content: [
			'Implementation of industry-standard security measures to protect your data.',
			'Regular security audits and vulnerability assessments.',
			'Encryption of data in transit and at rest.',
			'Access controls and authentication mechanisms for API usage.',
		],
	},
	{
		title: 'Data Sharing',
		content: [
			'We do not sell your personal information to third parties.',
			'Data may be shared with service providers who assist in operating our platform.',
			'We may share data when required by law or to protect our rights.',
			'Aggregated, anonymized data may be used for research and development.',
		],
	},
	{
		title: 'Your Rights',
		content: [
			'Right to access and download your personal data.',
			'Right to correct or update your information.',
			'Right to request deletion of your data.',
			'Right to opt-out of certain data processing activities.',
		],
	},
	{
		title: 'Cookie Policy',
		content: [
			'We use essential cookies to maintain core functionality.',
			'Analytics cookies help us understand how users interact with our services.',
			'You can control cookie preferences through your browser settings.',
			'Third-party cookies may be used for enhanced features.',
		],
	},
	{
		title: 'Changes to Privacy Policy',
		content: [
			'We may update this policy to reflect changes in our practices.',
			'Users will be notified of significant changes via email.',
			'Continued use of our services constitutes acceptance of changes.',
			'Previous versions of the policy are available upon request.',
		],
	},
	{
		title: 'Contact Information',
		content: [
			'Email: privacy@ailive.com',
			'Address: 123 AI Street, Tech City, TC 12345',
			'Phone: +1 (555) 123-4567',
			'Response time: Within 48 hours',
		],
	},
]

export default function PrivacyPage() {
	const [expandedSection, setExpandedSection] = useState<string | null>(null)

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
							Privacy Policy
						</h1>
						<p className="text-lg text-violet-200">
							We are committed to protecting your privacy and ensuring the security
							of your data. This policy explains how we collect, use, and protect
							your information.
						</p>
					</motion.div>

					{/* Last Updated */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="max-w-3xl mx-auto mb-12 text-center"
					>
						<p className="text-violet-300">Last Updated: March 15, 2024</p>
					</motion.div>

					{/* Policy Sections */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="max-w-3xl mx-auto space-y-6"
					>
						{sections.map((section, index) => (
							<motion.div
								key={section.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
								className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden"
							>
								<button
									onClick={() =>
										setExpandedSection(
											expandedSection === section.title ? null : section.title
										)
									}
									className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white hover:bg-opacity-5 transition-colors"
								>
									<h2 className="text-xl font-semibold text-white">
										{section.title}
									</h2>
									{expandedSection === section.title ? (
										<FiChevronUp className="w-6 h-6 text-violet-300" />
									) : (
										<FiChevronDown className="w-6 h-6 text-violet-300" />
									)}
								</button>
								<motion.div
									initial={false}
									animate={{
										height: expandedSection === section.title ? 'auto' : 0,
										opacity: expandedSection === section.title ? 1 : 0,
									}}
									transition={{ duration: 0.3 }}
									className="overflow-hidden"
								>
									<div className="px-8 pb-6">
										<ul className="space-y-4">
											{section.content.map((item, i) => (
												<motion.li
													key={i}
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{
														delay:
															expandedSection === section.title
																? 0.1 + i * 0.1
																: 0,
													}}
													className="text-violet-200 flex items-start"
												>
													<span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
													{item}
												</motion.li>
											))}
										</ul>
									</div>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 