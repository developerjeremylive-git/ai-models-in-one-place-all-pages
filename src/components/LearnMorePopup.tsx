import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

interface LearnMorePopupProps {
	isOpen: boolean
	onClose: () => void
}

const features = [
	{
		id: 'unified-platform',
		title: 'Unified Platform',
		description:
			'Access all your AI models through a single, intuitive interface. Streamline your workflow and reduce complexity.',
		icon: '🔄',
	},
	{
		id: 'easy-integration',
		title: 'Easy Integration',
		description:
			'Simple API endpoints and comprehensive SDKs make integration a breeze. Get started in minutes, not hours.',
		icon: '🔌',
	},
	{
		id: 'scalable',
		title: 'Highly Scalable',
		description:
			'Built on enterprise-grade infrastructure to handle millions of requests. Scale effortlessly as your needs grow.',
		icon: '📈',
	},
	{
		id: 'cost-effective',
		title: 'Cost-Effective',
		description:
			'Pay only for what you use with transparent pricing. No hidden fees or long-term commitments required.',
		icon: '💰',
	},
	{
		id: 'security',
		title: 'Enterprise Security',
		description:
			'Bank-grade encryption and compliance with industry standards ensure your data stays safe and secure.',
		icon: '🔒',
	},
	{
		id: 'support',
		title: '24/7 Support',
		description:
			'Our expert team is always available to help you succeed. Get the support you need, when you need it.',
		icon: '🤝',
	},
]

const stats = [
	{ id: 1, name: 'Models Available', value: '50+' },
	{ id: 2, name: 'API Requests Daily', value: '1M+' },
	{ id: 3, name: 'Enterprise Clients', value: '500+' },
	{ id: 4, name: 'Uptime SLA', value: '99.99%' },
]

export default function LearnMorePopup({ isOpen, onClose }: LearnMorePopupProps) {
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
										Why Choose AILive?
									</Dialog.Title>
									<button
										onClick={onClose}
										className="text-violet-200 hover:text-white transition-colors"
									>
										<XMarkIcon className="h-6 w-6" />
									</button>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{features.map((feature) => (
										<motion.div
											key={feature.title}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											className="bg-white bg-opacity-5 rounded-xl p-6"
										>
											<div className="text-4xl mb-4">{feature.icon}</div>
											<h4 className="text-xl font-semibold text-white mb-2">
												{feature.title}
											</h4>
											<p className="text-violet-200 text-sm">
												{feature.description}
											</p>
										</motion.div>
									))}
								</div>

								<div className="mt-12">
									<h4 className="text-2xl font-semibold text-white mb-6">
										AILive by the Numbers
									</h4>
									<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
										{stats.map((stat) => (
											<motion.div
												key={stat.id}
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												className="text-center"
											>
												<div className="text-3xl font-bold text-purple-300">
													{stat.value}
												</div>
												<div className="text-sm text-violet-200">
													{stat.name}
												</div>
											</motion.div>
										))}
									</div>
								</div>

								<div className="mt-12 text-center">
									<p className="text-violet-200 mb-6">
										Ready to transform your AI development workflow?
									</p>
									<div className="flex flex-col sm:flex-row justify-center gap-4">
										<Link
											to="/models"
											className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-600 hover:to-violet-600 transition-all"
											onClick={onClose}
										>
											Get Started
										</Link>
										<Link
											to="/docs"
											className="px-6 py-3 rounded-full bg-white bg-opacity-10 text-white font-semibold hover:bg-opacity-20 transition-all"
											onClick={onClose}
										>
											View Documentation
										</Link>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
} 