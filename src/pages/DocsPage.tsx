import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { useApp } from '../context/AppContext'

export default function DocsPage() {
	const [searchParams] = useSearchParams()
	const [activeSection, setActiveSection] = useState('getting-started')
	const { isDarkTheme } = useApp()

	const sections = [
		{ id: 'getting-started', title: 'Getting Started' },
		{ id: 'authentication', title: 'Authentication' },
		{ id: 'api-reference', title: 'API Reference' },
		{ id: 'models', title: 'Models' },
		{ id: 'examples', title: 'Examples' },
		{ id: 'tutorials', title: 'Tutorials' },
		{ id: 'sdks', title: 'SDKs & Libraries' },
	]

	useEffect(() => {
		const section = searchParams.get('section')
		if (section && sections.some(s => s.id === section)) {
			setActiveSection(section)
		}
	}, [searchParams])

	return (
		<div className="min-h-screen bg-theme-gradient">
			<Header variant="docs" />
			<div className="pt-32 pb-20">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-8">
						{/* Sidebar */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="lg:w-64 flex-shrink-0"
						>
							<nav className="space-y-1">
								{sections.map((section) => (
									<button
										key={section.id}
										onClick={() => setActiveSection(section.id)}
										className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
											activeSection === section.id
												? 'bg-purple-500 text-white'
												: 'text-violet-200 hover:text-white'
										}`}
									>
										{section.title}
									</button>
								))}
							</nav>
						</motion.div>

						{/* Main Content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex-1"
						>
							<div className="prose prose-invert max-w-none">
								<h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>
								
								{activeSection === 'getting-started' && (
									<div className="space-y-6">
										<section>
											<h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
											<p className="text-violet-200">
												Get started with AILive by following these simple steps. Our platform
												provides access to state-of-the-art AI models through a simple and
												intuitive API.
											</p>
											<pre className="mt-4 p-4 bg-black bg-opacity-50 rounded-lg overflow-x-auto">
												<code className="text-violet-200">
													{`npm install ailive-sdk
# or
yarn add ailive-sdk`}
												</code>
											</pre>
										</section>

										<section>
											<h2 className="text-2xl font-semibold text-white mb-4">Basic Usage</h2>
											<p className="text-violet-200">
												Here's a simple example of how to use our SDK:
											</p>
											<pre className="mt-4 p-4 bg-black bg-opacity-50 rounded-lg overflow-x-auto">
												<code className="text-violet-200">
													{`import { AILive } from 'ailive-sdk';

const ailive = new AILive('your-api-key');

// Generate text with GPT-4
const response = await ailive.complete({
  model: 'gpt-4',
  prompt: 'Hello, world!',
  maxTokens: 100
});

console.log(response.text);`}
												</code>
											</pre>
										</section>
									</div>
								)}

								{activeSection === 'authentication' && (
									<div className="space-y-6">
										<section>
											<h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
											<p className="text-violet-200">
												To use AILive, you'll need an API key. You can get one by signing up
												for an account and visiting your dashboard.
											</p>
											<div className="mt-4 p-4 border border-purple-500 rounded-lg">
												<p className="text-white font-semibold">Security Note:</p>
												<p className="text-violet-200">
													Never expose your API key in client-side code. Always use it
													server-side and implement proper security measures.
												</p>
											</div>
										</section>
									</div>
								)}

								{activeSection === 'tutorials' && (
									<div className="space-y-6">
										<section>
											<h2 className="text-2xl font-semibold text-white mb-4">Tutorials</h2>
											<div className="grid gap-6">
												<div className="bg-white bg-opacity-5 rounded-lg p-6">
													<h3 className="text-xl text-white mb-2">Getting Started with AILive</h3>
													<p className="text-violet-200 mb-4">Learn the basics of integrating AILive into your applications.</p>
													<a href="#" className="text-purple-400 hover:text-purple-300">Read more →</a>
												</div>
												<div className="bg-white bg-opacity-5 rounded-lg p-6">
													<h3 className="text-xl text-white mb-2">Building Conversational AI</h3>
													<p className="text-violet-200 mb-4">Create engaging chatbots using our language models.</p>
													<a href="#" className="text-purple-400 hover:text-purple-300">Read more →</a>
												</div>
												<div className="bg-white bg-opacity-5 rounded-lg p-6">
													<h3 className="text-xl text-white mb-2">Advanced Image Generation</h3>
													<p className="text-violet-200 mb-4">Master image generation with DALL·E 3 and Stable Diffusion.</p>
													<a href="#" className="text-purple-400 hover:text-purple-300">Read more →</a>
												</div>
											</div>
										</section>
									</div>
								)}

								{/* Add more sections as needed */}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 