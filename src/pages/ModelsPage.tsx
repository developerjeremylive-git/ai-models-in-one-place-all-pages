import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { useApp } from '../context/AppContext'

export const models = [
	{
		id: 'gpt4',
		name: 'GPT-4',
		description:
			'Advanced language model for natural conversations and content generation',
		icon: '🤖',
		category: 'Language',
		features: ['Natural language understanding', 'Content generation', 'Code assistance'],
		pricing: {
			starter: '$10/mo',
			pro: '$50/mo',
			enterprise: 'Custom',
		},
		metrics: {
			latency: '~1s',
			availability: '99.9%',
			tokens: '8k context',
		},
	},
	{
		id: 'dalle3',
		name: 'DALL-E 3',
		description: 'Create stunning images from textual descriptions',
		icon: '🎨',
		category: 'Image',
		features: ['Text to image', 'Image editing', 'Style transfer'],
		pricing: {
			starter: '$15/mo',
			pro: '$75/mo',
			enterprise: 'Custom',
		},
		metrics: {
			latency: '~3s',
			availability: '99.9%',
			resolution: 'Up to 1024x1024',
		},
	},
	{
		id: 'whisper',
		name: 'Whisper',
		description: 'State-of-the-art speech recognition across multiple languages',
		icon: '🎤',
		category: 'Speech',
		features: ['Speech to text', 'Language detection', 'Accent handling'],
		pricing: {
			starter: '$5/mo',
			pro: '$25/mo',
			enterprise: 'Custom',
		},
		metrics: {
			latency: '~2s',
			availability: '99.9%',
			languages: '100+ supported',
		},
	},
	{
		id: 'stable-diffusion',
		name: 'Stable Diffusion',
		description: 'Generate and edit images with amazing quality',
		icon: '✨',
		category: 'Image',
		features: ['Image generation', 'Inpainting', 'Outpainting'],
		pricing: {
			starter: '$12/mo',
			pro: '$60/mo',
			enterprise: 'Custom',
		},
		metrics: {
			latency: '~4s',
			availability: '99.9%',
			resolution: 'Up to 2048x2048',
		},
	},
	{
		id: 'claude',
		name: 'Claude',
		description: 'Versatile AI assistant for various tasks',
		icon: '🧠',
		category: 'Language',
		features: ['Task assistance', 'Research', 'Analysis'],
		pricing: {
			starter: '$8/mo',
			pro: '$40/mo',
			enterprise: 'Custom',
		},
		metrics: {
			latency: '~1s',
			availability: '99.9%',
			tokens: '100k context',
		},
	},
	{
		id: 'llama',
		name: 'LLaMA',
		description: 'Open-source language model for diverse applications',
		icon: '🦙',
		category: 'Language',
		features: ['Text generation', 'Translation', 'Classification'],
		pricing: {
			starter: 'Free',
			pro: '$30/mo',
			enterprise: 'Custom',
		},
		metrics: {
			latency: '~2s',
			availability: '99.9%',
			tokens: '4k context',
		},
	},
]

const categories = ['All', 'Language', 'Image', 'Speech']

export default function ModelsPage() {
	const { isDarkTheme } = useApp()
	const navigate = useNavigate()
	const [searchParams, setSearchParams] = useSearchParams()
	const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category')?.charAt(0).toUpperCase() + searchParams.get('category')?.slice(1) || 'All')

	useEffect(() => {
		const category = searchParams.get('category')
		if (category) {
			// Capitalize first letter to match our category format
			const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)
			if (categories.includes(formattedCategory)) {
				setSelectedCategory(formattedCategory)
			}
		}
	}, [searchParams])

	const filteredModels =
		selectedCategory === 'All'
			? models
			: models.filter((model) => model.category === selectedCategory)

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category)
		if (category === 'All') {
			setSearchParams({})
		} else {
			setSearchParams({ category: category.toLowerCase() })
		}
	}

	const handleModelClick = (modelId: string) => {
		navigate(`/models/${modelId}`)
	}

	return (
		<div className="min-h-screen bg-theme-gradient">
			<Header variant="models" />
			<div className="pt-32 pb-20">
				<div className="container mx-auto px-4">
					{/* Header */}
					<div className="mb-12">
						<Link
							to="/"
							className="inline-flex items-center text-violet-200 hover:text-white mb-8 transition-colors"
						>
							<ChevronLeftIcon className="w-5 h-5 mr-2" />
							Back to Home
						</Link>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							AI Models
						</h1>
						<p className="text-violet-200 text-lg">
							Explore our comprehensive collection of state-of-the-art AI models.
						</p>
					</div>

					{/* Category Filter */}
					<div className="flex flex-wrap gap-4 mb-12">
						{categories.map((category) => (
							<motion.button
								key={category}
								onClick={() => handleCategoryChange(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
									selectedCategory === category
										? 'bg-purple-500 text-white'
										: 'bg-white bg-opacity-10 text-violet-200 hover:bg-opacity-20'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{category}
							</motion.button>
						))}
					</div>

					{/* Models Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredModels.map((model) => (
							<motion.div
								key={model.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								whileHover={{ scale: 1.02 }}
								className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all hover:bg-opacity-10"
								onClick={() => handleModelClick(model.id)}
							>
								<div className="text-4xl mb-4">{model.icon}</div>
								<h2 className="text-2xl font-semibold text-white mb-2">
									{model.name}
								</h2>
								<div className="mb-4">
									<span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-500 text-white">
										{model.category}
									</span>
								</div>
								<p className="text-violet-200 text-sm mb-6">{model.description}</p>

								{/* Features */}
								<div className="mb-6">
									<h3 className="text-sm font-semibold text-white mb-2">
										Key Features
									</h3>
									<ul className="space-y-2">
										{model.features.map((feature, index) => (
											<li
												key={index}
												className="text-sm text-violet-200 flex items-center"
											>
												<span className="mr-2">•</span>
												{feature}
											</li>
										))}
									</ul>
								</div>

								{/* Metrics */}
								<div className="mb-6">
									<h3 className="text-sm font-semibold text-white mb-2">
										Performance Metrics
									</h3>
									<div className="grid grid-cols-2 gap-4">
										{Object.entries(model.metrics).map(([key, value]) => (
											<div key={key}>
												<div className="text-xs text-violet-300 mb-1">
													{key.charAt(0).toUpperCase() + key.slice(1)}
												</div>
												<div className="text-sm text-white">{value}</div>
											</div>
										))}
									</div>
								</div>

								{/* Pricing */}
								<div>
									<h3 className="text-sm font-semibold text-white mb-2">
										Pricing
									</h3>
									<div className="grid grid-cols-3 gap-2">
										{Object.entries(model.pricing).map(([tier, price]) => (
											<div key={tier} className="text-center">
												<div className="text-xs text-violet-300 mb-1">
													{tier.charAt(0).toUpperCase() + tier.slice(1)}
												</div>
												<div className="text-sm text-white">{price}</div>
											</div>
										))}
									</div>
								</div>

								{/* Learn More Button */}
								<motion.div 
									className="mt-6 text-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.2 }}
								>
									<button
										className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-600 group-hover:scale-105"
									>
										Learn More
									</button>
								</motion.div>
							</motion.div>
						))}
					</div>

					{/* Empty State */}
					{filteredModels.length === 0 && (
						<div className="text-center py-12">
							<p className="text-violet-200">
								No models found in this category. Try selecting a different category.
							</p>
						</div>
					)}
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 