import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface AIModel {
    id: number
    title: string
    description: string
    image: string
    category: string
}

const models: AIModel[] = [
    {
        id: 1,
        title: 'ChatGPT-4',
        description: 'Advanced language model for natural conversations and complex tasks',
        image: '/models/chatgpt.png',
        category: 'Language'
    },
    {
        id: 2,
        title: 'DALL-E 3',
        description: 'Create stunning artwork and images from textual descriptions',
        image: '/models/dalle.png',
        category: 'Image Generation'
    },
    {
        id: 3,
        title: 'Stable Diffusion XL',
        description: 'High-quality image generation with precise control',
        image: '/models/stable-diffusion.png',
        category: 'Image Generation'
    },
    // Add more models as needed
]

export default function AIModels() {
    const [currentModel, setCurrentModel] = useState(0)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const nextModel = () => {
        setCurrentModel((prev) => (prev + 1) % models.length)
    }

    const prevModel = () => {
        setCurrentModel((prev) => (prev - 1 + models.length) % models.length)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-purple-700">
            <div className="container mx-auto px-4 py-8">
                {/* Header with Hamburger Menu */}
                <nav className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        AI Models Explorer
                    </h1>
                    <button className="lg:hidden p-2">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="space-y-2"
                        >
                            <span className="block w-8 h-0.5 bg-white"></span>
                            <span className="block w-8 h-0.5 bg-white"></span>
                            <span className="block w-8 h-0.5 bg-white"></span>
                        </motion.div>
                    </button>
                </nav>

                {/* Carousel Section */}
                <div className="relative overflow-hidden rounded-xl shadow-2xl mb-12">
                    <div className="flex items-center justify-center min-h-[400px] bg-black/20 backdrop-blur-sm">
                        <motion.div
                            key={currentModel}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="relative w-full max-w-4xl"
                        >
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevModel}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-gradient-to-r from-black/50 to-transparent"
                            >
                                <ChevronLeftIcon className="w-8 h-8 text-white hover:text-purple-400 transition-colors" />
                            </button>
                            <button
                                onClick={nextModel}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-gradient-to-l from-black/50 to-transparent"
                            >
                                <ChevronRightIcon className="w-8 h-8 text-white hover:text-purple-400 transition-colors" />
                            </button>

                            {/* Model Card */}
                            <div className="p-8 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    {models[currentModel].title}
                                </h2>
                                <p className="text-lg text-purple-200 mb-6">
                                    {models[currentModel].description}
                                </p>
                                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/30 text-purple-200">
                                    {models[currentModel].category}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Grid of Model Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.id}
                            whileHover={{ scale: 1.05 }}
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                                <p className="text-purple-200 mb-4">{model.description}</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold
                                             hover:from-purple-600 hover:to-pink-600 transition-all duration-300
                                             border border-transparent hover:border-white/20"
                                >
                                    Try Now
                                </motion.button>
                            </div>
                            {hoveredCard === index && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
} 