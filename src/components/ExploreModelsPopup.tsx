import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

interface ExploreModelsPopupProps {
	isOpen: boolean
	onClose: () => void
}

const models = [
	{
		id: 'gpt4',
		name: 'GPT-4',
		description: 'Advanced language model for natural conversations and content generation',
		icon: '🤖',
		category: 'Language',
		features: ['Natural language understanding', 'Content generation', 'Code assistance'],
	},
	{
		id: 'dalle3',
		name: 'DALL-E 3',
		description: 'Create stunning images from textual descriptions',
		icon: '🎨',
		category: 'Image',
		features: ['Text to image', 'Image editing', 'Style transfer'],
	},
	{
		id: 'whisper',
		name: 'Whisper',
		description: 'State-of-the-art speech recognition across multiple languages',
		icon: '🎤',
		category: 'Speech',
		features: ['Speech to text', 'Language detection', 'Accent handling'],
	},
	{
		id: 'stable-diffusion',
		name: 'Stable Diffusion',
		description: 'Generate and edit images with amazing quality',
		icon: '✨',
		category: 'Image',
		features: ['Image generation', 'Inpainting', 'Outpainting'],
	},
	{
		id: 'claude',
		name: 'Claude',
		description: 'Versatile AI assistant for various tasks',
		icon: '🧠',
		category: 'Language',
		features: ['Task assistance', 'Research', 'Analysis'],
	},
	{
		id: 'llama',
		name: 'LLaMA',
		description: 'Open-source language model for diverse applications',
		icon: '🦙',
		category: 'Language',
		features: ['Text generation', 'Translation', 'Classification'],
	},
]

export default function ExploreModelsPopup({ isOpen, onClose }: ExploreModelsPopupProps) {
	const navigate = useNavigate()
	const { isDarkTheme } = useApp()

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className={`w-full max-w-4xl transform overflow-hidden rounded-2xl ${isDarkTheme ? 'bg-gray-900' : 'bg-purple-900'} bg-opacity-90 p-6 text-left align-middle shadow-xl transition-all`}>
								<div className="flex justify-between items-center mb-8">
									<Dialog.Title as="h3" className="text-3xl font-bold text-white">
										Explore AI Models
									</Dialog.Title>
									<button
										onClick={onClose}
										className="text-violet-200 hover:text-white transition-colors"
									>
										<XMarkIcon className="h-6 w-6" />
									</button>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{models.map((model) => (
										<motion.div
											key={model.id}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											whileHover={{ scale: 1.05 }}
											className="bg-white bg-opacity-5 rounded-xl p-6 cursor-pointer"
											onClick={() => {
												onClose()
												navigate(`/models/${model.id}`)
											}}
										>
											<div className="text-4xl mb-4">{model.icon}</div>
											<h4 className="text-xl font-semibold text-white mb-2">
												{model.name}
											</h4>
											<p className="text-violet-200 text-sm mb-4">
												{model.description}
											</p>
											<div className="mb-4">
												<span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-500 text-white">
													{model.category}
												</span>
											</div>
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
											<div
												className="mt-4 inline-block text-purple-300 hover:text-white transition-colors"
											>
												Learn more →
											</div>
										</motion.div>
									))}
								</div>

								<div className="mt-8 text-center">
									<Link
										to="/models"
										className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-600 hover:to-violet-600 transition-all"
										onClick={onClose}
									>
										View All Models
									</Link>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
} 