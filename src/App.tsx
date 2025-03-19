import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { useApp } from './context/AppContext'
import Header from './components/Header'
import AnimatedFooter from './components/AnimatedFooter'
import TestimonialsSection from './components/TestimonialsSection'
import NeuralNetworkBackground from './components/NeuralNetworkBackground'
import ScrollToTop from './components/ScrollToTop'
import DocsPage from './pages/DocsPage'
import ModelsPage from './pages/ModelsPage'
import ModelDetailPage from './pages/ModelDetailPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import InteractiveDemoPage from './pages/InteractiveDemoPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import DashboardPreview from './components/DashboardPreview'
import ExploreModelsPopup from './components/ExploreModelsPopup'
import LearnMorePopup from './components/LearnMorePopup'
import { useState } from 'react'
import React from 'react'

function AppContent() {
	const { isGraphEnabled } = useApp()
	const [isExploreModelsOpen, setIsExploreModelsOpen] = useState(false)
	const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

	return (
		<>
			{isGraphEnabled && <NeuralNetworkBackground />}
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<div className="min-h-screen bg-theme-gradient">
							<Header variant="default" />
							<div className="pt-32 pb-20">
								<div className="container mx-auto px-4">
									<div className="text-center max-w-4xl mx-auto">
										<h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-200">
											All Your AI Models
											<br />
											in One Place
										</h1>
										<p className="text-lg md:text-xl text-violet-200 mb-12">
											Access state-of-the-art AI models through a single, unified
											platform. Build smarter applications with our comprehensive
											suite of AI services.
										</p>
										<div className="flex flex-col sm:flex-row justify-center gap-4">
											<button
												onClick={() => setIsExploreModelsOpen(true)}
												className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-600 hover:to-violet-600 transition-all"
											>
												Get Started
											</button>
											<button
												onClick={() => setIsLearnMoreOpen(true)}
												className="px-8 py-4 rounded-full bg-white bg-opacity-10 text-white font-semibold hover:bg-opacity-20 transition-all"
											>
												Try Demo
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* Dashboard Preview Section */}
							<section className="py-20 bg-black/20">
								<div className="container mx-auto px-4">
									<div className="text-center mb-12">
										<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
											Powerful Analytics Dashboard
										</h2>
										<p className="text-violet-200 text-lg max-w-2xl mx-auto">
											Monitor your AI models' performance, usage, and metrics in
											real-time with our intuitive dashboard.
										</p>
									</div>
									<div className="max-w-5xl mx-auto">
										<div className="bg-gradient-to-br from-purple-900/50 to-violet-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/30">
											<DashboardPreview type="analytics" />
										</div>
									</div>
								</div>
							</section>

							{/* Features Grid */}
							<section className="py-20">
								<div className="container mx-auto px-4">
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
										{/* Language Models */}
										<Link
											to="/models?category=language"
											className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105"
										>
											<div className="text-4xl mb-6">🤖</div>
											<h3 className="text-2xl font-semibold text-white mb-4">
												Language Models
											</h3>
											<p className="text-violet-200 mb-6">
												Access powerful language models for natural conversations,
												content generation, and more.
											</p>
											<span className="text-purple-300 hover:text-white transition-colors">
												Try it now →
											</span>
										</Link>

										{/* Image Generation */}
										<Link
											to="/models?category=image"
											className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105"
										>
											<div className="text-4xl mb-6">🎨</div>
											<h3 className="text-2xl font-semibold text-white mb-4">
												Image Generation
											</h3>
											<p className="text-violet-200 mb-6">
												Create stunning visuals from text descriptions with
												state-of-the-art image generation models.
											</p>
											<span className="text-purple-300 hover:text-white transition-colors">
												Try it now →
											</span>
										</Link>

										{/* Speech Recognition */}
										<Link
											to="/models?category=speech"
											className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105"
										>
											<div className="text-4xl mb-6">🎤</div>
											<h3 className="text-2xl font-semibold text-white mb-4">
												Speech Recognition
											</h3>
											<p className="text-violet-200 mb-6">
												Convert speech to text with high accuracy across multiple
												languages and accents.
											</p>
											<span className="text-purple-300 hover:text-white transition-colors">
												Try it now →
											</span>
										</Link>
									</div>
								</div>
							</section>

							{/* Testimonials Section */}
							<TestimonialsSection />

							{/* Footer */}
							<AnimatedFooter />
						</div>
					}
				/>
				<Route path="/models" element={<ModelsPage />} />
				<Route path="/models/:modelId" element={<ModelDetailPage />} />
				<Route path="/docs" element={<DocsPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/interactive-demo" element={<InteractiveDemoPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/privacy" element={<PrivacyPage />} />
				<Route path="/terms" element={<TermsPage />} />
			</Routes>

			<ExploreModelsPopup 
				isOpen={isExploreModelsOpen}
				onClose={() => setIsExploreModelsOpen(false)}
			/>
			<LearnMorePopup
				isOpen={isLearnMoreOpen}
				onClose={() => setIsLearnMoreOpen(false)}
			/>
		</>
	)
}

function App() {
	return (
		<Router>
			<AppProvider>
				<AppContent />
			</AppProvider>
		</Router>
	)
}

export default App 