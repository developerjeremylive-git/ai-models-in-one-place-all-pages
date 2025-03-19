import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		modelInterest: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission
		console.log('Form submitted:', formData)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

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
							Contact Our Sales Team
						</h1>
						<p className="text-lg text-violet-200">
							Get in touch with our experts to discuss your AI needs and find the
							perfect solution for your business.
						</p>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="max-w-2xl mx-auto"
					>
						<form
							onSubmit={handleSubmit}
							className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div>
									<label
										htmlFor="name"
										className="block text-violet-200 mb-2"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder="John Doe"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-violet-200 mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder="john@company.com"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="company"
										className="block text-violet-200 mb-2"
									>
										Company Name
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder="Company Inc."
										required
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-violet-200 mb-2"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder="+1 (555) 000-0000"
									/>
								</div>
							</div>

							<div className="mb-6">
								<label
									htmlFor="modelInterest"
									className="block text-violet-200 mb-2"
								>
									AI Model of Interest
								</label>
								<select
									id="modelInterest"
									name="modelInterest"
									value={formData.modelInterest}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white focus:outline-none focus:border-purple-500"
									required
								>
									<option value="" className="bg-purple-900">
										Select a model
									</option>
									<option value="gpt4" className="bg-purple-900">
										GPT-4
									</option>
									<option value="dalle3" className="bg-purple-900">
										DALL-E 3
									</option>
									<option value="whisper" className="bg-purple-900">
										Whisper
									</option>
									<option value="stable-diffusion" className="bg-purple-900">
										Stable Diffusion
									</option>
									<option value="multiple" className="bg-purple-900">
										Multiple Models
									</option>
								</select>
							</div>

							<div className="mb-6">
								<label
									htmlFor="message"
									className="block text-violet-200 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
									placeholder="Tell us about your project and requirements..."
									required
								></textarea>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="w-full py-3 px-6 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
							>
								Send Message
							</motion.button>
						</form>

						{/* Additional Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
						>
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
								<h3 className="text-white font-semibold mb-2">Email</h3>
								<p className="text-violet-200">sales@ailive.com</p>
							</div>
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
								<h3 className="text-white font-semibold mb-2">Phone</h3>
								<p className="text-violet-200">+1 (555) 123-4567</p>
							</div>
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
								<h3 className="text-white font-semibold mb-2">Office Hours</h3>
								<p className="text-violet-200">Mon-Fri, 9am-6pm EST</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 