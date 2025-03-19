import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { WiSnow } from 'react-icons/wi'
import { FiSlash, FiShare2, FiSettings } from 'react-icons/fi'
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri'
import { useApp } from '../context/AppContext'

interface HeaderProps {
	variant?: 'default' | 'docs' | 'models'
}

interface Snowflake {
	id: number
	x: number
	y: number
	size: number
	speed: number
}

export default function Header({ variant = 'default' }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
	const settingsRef = useRef<HTMLDivElement>(null)
	const { 
		isDarkTheme, 
		isSnowEnabled, 
		isGraphEnabled,
		toggleTheme, 
		toggleSnow, 
		toggleGraph,
		toggleBackgroundTheme 
	} = useApp()
	const location = useLocation()

	useEffect(() => {
		if (!isSnowEnabled) {
			setSnowflakes([])
			return
		}

		// Create initial snowflakes
		const initialSnowflakes = Array.from({ length: 50 }, (_, i) => ({
			id: i,
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			size: Math.random() * 4 + 1,
			speed: Math.random() * 2 + 1,
		}))
		setSnowflakes(initialSnowflakes)

		// Animation loop
		const animateSnow = () => {
			setSnowflakes((prev) =>
				prev.map((flake) => ({
					...flake,
					y: flake.y + flake.speed,
					x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
					...(flake.y > window.innerHeight && {
						y: -10,
						x: Math.random() * window.innerWidth,
					}),
				}))
			)
		}

		const interval = setInterval(animateSnow, 50)
		return () => clearInterval(interval)
	}, [isSnowEnabled])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
				setIsSettingsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const getTitle = () => {
		// switch (variant) {
		// 	case 'docs':
		// 		return '📚 AILive Documentation'
		// 	case 'models':
		// 		return '🤖 AILive Models Hub'
		// 	default:
		// 		// Check the current location to determine the title
		// 		if (location.pathname === '/interactive-demo') {
		// 			return '🎮 AILive Interactive Demo'
		// 		}
		// 		if (location.pathname === '/pricing') {
		// 			return '💎 AILive Pricing Plans'
		// 		}
		// 		if (location.pathname === '/contact') {
		// 			return '🤝 AILive Connect'
		// 		}
		// 		return '✨ AILive'
		// }
		return 'AILive'
	}

	const headerVariants = {
		hidden: { y: -100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 20,
				duration: 0.5,
			},
		},
	}

	const settingsPopupVariants = {
		hidden: { opacity: 0, scale: 0.95, y: -20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.95,
			y: -20,
			transition: {
				duration: 0.2,
			},
		},
	}

	return (
		<>
			{/* Snow Animation */}
			{isSnowEnabled && (
				<div className="fixed inset-0 pointer-events-none z-40">
					{snowflakes.map((flake) => (
						<motion.div
							key={flake.id}
							className="absolute bg-white rounded-full opacity-60"
							animate={{
								x: flake.x,
								y: flake.y,
							}}
							transition={{
								duration: 0.05,
								ease: 'linear',
							}}
							style={{
								width: flake.size,
								height: flake.size,
							}}
						/>
					))}
				</div>
			)}

			<motion.header
				initial="hidden"
				animate="visible"
				variants={headerVariants}
				className={`fixed top-0 w-full backdrop-blur-sm z-50 ${
					isDarkTheme
						? 'bg-gray-900/90'
						: 'bg-purple-900/90'
				}`}
			>
				<div className="container mx-auto px-4 py-4">
					<div className="flex justify-between items-center">
						<Link
							to="/"
							className="flex items-center gap-2 text-3xl font-extrabold"
						>
							<div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-[2px]">
								<div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										className="w-6 h-6"
									>
										<path
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
											className="fill-purple-400"
										/>
										<path
											d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
											className="fill-pink-600"
										/>
									</svg>
								</div>
							</div>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
								{getTitle()}
							</span>
						</Link>

						<div className="flex items-center space-x-6">
							{/* Settings Button */}
							<div className="relative" ref={settingsRef}>
								<motion.button
									onClick={() => setIsSettingsOpen(!isSettingsOpen)}
									className="p-2 rounded-full bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									aria-label="Open settings"
								>
									<FiSettings className="w-5 h-5" />
								</motion.button>

								<AnimatePresence>
									{isSettingsOpen && (
										<motion.div
											initial="hidden"
											animate="visible"
											exit="exit"
											variants={settingsPopupVariants}
											className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 p-2 space-y-2"
										>
											{/* Theme Toggle */}
											<motion.button
												onClick={toggleBackgroundTheme}
												className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
												whileHover={{ x: 2 }}
											>
												<span>Theme</span>
												{!isDarkTheme ? (
													<RiSunLine className="w-5 h-5" />
												) : (
													<RiMoonClearLine className="w-5 h-5" />
												)}
											</motion.button>

											{/* Graph Toggle */}
											<motion.button
												onClick={toggleGraph}
												className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
												whileHover={{ x: 2 }}
											>
												<span>Graph Animation</span>
												<div className="relative">
													<FiShare2 className="w-5 h-5" />
													{!isGraphEnabled && (
														<FiSlash className="w-5 h-5 absolute top-0 left-0 text-red-500" />
													)}
												</div>
											</motion.button>

											{/* Snow Toggle */}
											<motion.button
												onClick={toggleSnow}
												className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
												whileHover={{ x: 2 }}
											>
												<span>Snow Effect</span>
												<div className="relative">
													<WiSnow className="w-6 h-6" />
													{!isSnowEnabled && (
														<FiSlash className="w-5 h-5 absolute top-0 left-0 text-red-500" />
													)}
												</div>
											</motion.button>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="lg:hidden text-white hover:text-purple-300 transition-colors"
								aria-label="Toggle menu"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d={
											isMenuOpen
												? 'M6 18L18 6M6 6l12 12'
												: 'M4 6h16M4 12h16M4 18h16'
										}
									/>
								</svg>
							</button>
						</div>

						<nav
							className={`${
								isMenuOpen
									? 'absolute top-full left-0 w-full bg-purple-900 py-4'
									: 'hidden'
							} lg:block lg:static lg:bg-transparent lg:py-0`}
						>
							<motion.ul
								className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 px-4 lg:px-0"
								variants={{
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.1,
										},
									},
								}}
							>
								{[
									{ path: '/models', label: 'Explore Models' },
									{ path: '/interactive-demo', label: 'Try Demo' },
									{ path: '/docs', label: 'Docs' },
									{ path: '/pricing', label: 'Pricing' },
									{ path: '/contact', label: 'Contact' },
								].map((item) => (
									<motion.li
										key={item.path}
										variants={{
											hidden: { y: -20, opacity: 0 },
											visible: { y: 0, opacity: 1 },
										}}
									>
										<Link
											to={item.path}
											className={`relative text-white font-medium group transition-colors duration-300
												${location.pathname.includes(item.path) ? 'text-purple-300' : ''}
											`}
										>
											{item.label}
											<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
										</Link>
									</motion.li>
								))}
							</motion.ul>
						</nav>
					</div>
				</div>
			</motion.header>
		</>
	)
} 