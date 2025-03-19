import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AnimatedFooter() {
	return (
		<footer className="relative mt-auto">
			{/* Animated Wave */}
			<div className="absolute bottom-0 left-0 w-full overflow-hidden">
				<motion.div
					className="relative h-48"
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
					}}
				>
					<svg
						className="absolute bottom-0 w-full h-full"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
					>
						<motion.path
							fill="rgba(139, 92, 246, 0.1)"
							d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,144C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
							animate={{
								d: [
									"M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,144C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
									"M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
								],
								transition: {
									duration: 10,
									repeat: Infinity,
									repeatType: "reverse",
								},
							}}
						/>
						<motion.path
							fill="rgba(139, 92, 246, 0.2)"
							d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
							animate={{
								d: [
									"M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
									"M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,224C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
								],
								transition: {
									duration: 8,
									repeat: Infinity,
									repeatType: "reverse",
								},
							}}
						/>
					</svg>
				</motion.div>
			</div>

			{/* Footer Content */}
			<div className="container mx-auto px-4 pt-16 pb-32">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-white">AILive</h3>
						<p className="text-violet-200">
							Empowering developers with state-of-the-art AI models through a
							unified platform.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-violet-200 hover:text-white transition-colors"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
								</svg>
							</a>
							<a
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-violet-200 hover:text-white transition-colors"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
									/>
								</svg>
							</a>
						</div>
					</div>

					{/* Products */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Products</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/models"
									className="text-violet-200 hover:text-white transition-colors"
								>
									AI Models
								</Link>
							</li>
							<li>
								<Link
									to="/interactive-demo"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Interactive Demo
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									to="/docs"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Documentation
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/docs?section=getting-started"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Getting Started
								</Link>
							</li>
							<li>
								<Link
									to="/docs?section=api-reference"
									className="text-violet-200 hover:text-white transition-colors"
								>
									API Reference
								</Link>
							</li>
							<li>
								<Link
									to="/docs?section=examples"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Examples
								</Link>
							</li>
							<li>
								<Link
									to="/docs?section=tutorials"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Tutorials
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/about"
									className="text-violet-200 hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Contact Sales
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-violet-200 hover:text-white transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 pt-8 border-t border-purple-800">
					<p className="text-center text-violet-300">
						© {new Date().getFullYear()} AILive. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
} 