import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { useApp } from '../context/AppContext'

// Import models data
import { models } from './ModelsPage'

export default function ModelDetailPage() {
	const { modelId } = useParams()
	const navigate = useNavigate()
	const { isDarkTheme } = useApp()
	const model = models.find((m) => m.id === modelId)

	if (!model) {
		return (
			<>
				<Header variant="models" />
				<div className="min-h-screen bg-theme-gradient py-24">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl text-white mb-8">Model Not Found</h1>
						<button
							onClick={() => navigate('/models')}
							className="text-violet-200 hover:text-white transition-colors"
						>
							Return to Models
						</button>
					</div>
				</div>
			</>
		)
	}

	const handleTryForFree = () => {
		navigate(`/interactive-demo?model=${modelId}`)
	}

	const handleContactSales = () => {
		navigate('/contact')
	}

	return (
		<>
			<Header variant="models" />
			<div className="min-h-screen bg-theme-gradient">
				<div className="container mx-auto px-4">
					{/* Navigation */}
					<Link
						to="/models"
						className="inline-flex items-center text-violet-200 hover:text-white mb-8 transition-colors"
					>
						<ChevronLeftIcon className="w-5 h-5 mr-2" />
						Back to Models
					</Link>

					{/* Hero Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 mb-8"
					>
						<div className="flex items-center mb-6">
							<span className="text-6xl mr-4">{model.icon}</span>
							<div>
								<h1 className="text-4xl font-bold text-white mb-2">
									{model.name}
								</h1>
								<span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-500 text-white">
									{model.category}
								</span>
							</div>
						</div>
						<p className="text-violet-200 text-lg mb-8">{model.description}</p>

						{/* Quick Stats */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							{Object.entries(model.metrics).map(([key, value]) => (
								<motion.div
									key={key}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									className="bg-white bg-opacity-5 rounded-lg p-4"
								>
									<h3 className="text-violet-300 text-sm mb-1">
										{key.charAt(0).toUpperCase() + key.slice(1)}
									</h3>
									<p className="text-white text-2xl font-semibold">{value}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Features Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
					>
						<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8">
							<h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
							<ul className="space-y-4">
								{model.features.map((feature, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className="flex items-center text-violet-200"
									>
										<span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
										{feature}
									</motion.li>
								))}
							</ul>
						</div>

						{/* Pricing Section */}
						<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8">
							<h2 className="text-2xl font-bold text-white mb-6">Pricing Plans</h2>
							<div className="space-y-6">
								{Object.entries(model.pricing).map(([tier, price], index) => (
									<motion.div
										key={tier}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className="flex justify-between items-center pb-4 border-b border-white border-opacity-10"
									>
										<div>
											<h3 className="text-white font-medium">
												{tier.charAt(0).toUpperCase() + tier.slice(1)}
											</h3>
											<p className="text-violet-300 text-sm">
												{tier === 'starter'
													? 'Perfect for getting started'
													: tier === 'pro'
													? 'For growing businesses'
													: 'Custom solutions for enterprises'}
											</p>
										</div>
										<p className="text-2xl font-bold text-white">{price}</p>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* CTA Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8"
					>
						<h2 className="text-2xl font-bold text-white mb-4">
							Ready to Get Started?
						</h2>
						<p className="text-violet-200 mb-6">
							Start building with {model.name} today and transform your applications.
						</p>
						<div className="flex justify-center space-x-4">
							<button
								onClick={handleTryForFree}
								className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors"
							>
								Try for Free
							</button>
							<button
								onClick={handleContactSales}
								className="border border-purple-500 text-purple-500 px-8 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all"
							>
								Contact Sales
							</button>
						</div>
					</motion.div>
				</div>
			</div>
			<AnimatedFooter />
		</>
	)
}

function getModelDescription(modelId?: string): string {
	switch (modelId) {
		case 'gpt4':
			return 'GPT-4 is our most advanced language model, capable of understanding and generating human-like text with unprecedented accuracy and nuance.'
		case 'dalle3':
			return 'DALL·E 3 creates photorealistic images and art from textual descriptions, pushing the boundaries of AI-generated visual content.'
		case 'whisper':
			return 'Whisper is a state-of-the-art speech recognition model that can transcribe and translate spoken language with exceptional accuracy.'
		case 'stable-diffusion':
			return 'Stable Diffusion is an advanced image generation model known for its high-quality outputs and fast processing speed.'
		case 'claude':
			return 'Claude is an AI assistant model focused on helpful, honest, and harmless interactions, with strong capabilities in analysis and writing.'
		case 'llama':
			return 'LLaMA is an open-source language model that delivers strong performance while being more efficient than traditional models.'
		default:
			return 'Advanced AI model delivering state-of-the-art performance in its domain.'
	}
}

function getModelMetrics(modelId?: string): Array<{ label: string; value: string }> {
	const baseMetrics = [
		{ label: 'Response Time', value: '< 100ms' },
		{ label: 'Uptime', value: '99.99%' },
		{ label: 'Success Rate', value: '99.9%' },
	]

	switch (modelId) {
		case 'gpt4':
			return [
				{ label: 'Context Length', value: '32K' },
				{ label: 'Languages', value: '95+' },
				{ label: 'Accuracy', value: '98%' },
			]
		case 'dalle3':
			return [
				{ label: 'Resolution', value: '1024px' },
				{ label: 'Styles', value: '100+' },
				{ label: 'Generation Time', value: '2s' },
			]
		case 'whisper':
			return [
				{ label: 'Languages', value: '100+' },
				{ label: 'Word Accuracy', value: '97%' },
				{ label: 'Processing Speed', value: '1x' },
			]
		default:
			return baseMetrics
	}
} 