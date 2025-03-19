import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { useApp } from '../context/AppContext'
import { FiMessageSquare, FiImage, FiMic, FiCpu, FiCommand } from 'react-icons/fi'

const GPTDemo = () => {
	const [input, setInput] = useState('')
	const [response, setResponse] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = () => {
		setIsLoading(true)
		// Simulate API call
		setTimeout(() => {
			setResponse('This is a simulated response from GPT-4. In a real implementation, this would be connected to the actual API.')
			setIsLoading(false)
		}, 1000)
	}

	return (
		<div className="space-y-4">
			<textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="w-full h-32 p-4 rounded-xl bg-white bg-opacity-5 text-white placeholder-violet-300"
				placeholder="Enter your prompt here..."
			/>
			<button
				onClick={handleSubmit}
				disabled={isLoading}
				className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50"
			>
				{isLoading ? 'Generating...' : 'Generate Response'}
			</button>
			{response && (
				<div className="p-4 rounded-xl bg-white bg-opacity-5">
					<p className="text-violet-200">{response}</p>
				</div>
			)}
		</div>
	)
}

const ClaudeDemo = () => {
	const [input, setInput] = useState('')
	const [response, setResponse] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [context, setContext] = useState<string[]>([])

	const handleSubmit = () => {
		setIsLoading(true)
		// Simulate API call with context awareness
		setTimeout(() => {
			const newResponse = 'This is a simulated response from Claude. I aim to be helpful while maintaining ethical principles and safety guidelines.'
			setResponse(newResponse)
			setContext([...context, input, newResponse])
			setIsLoading(false)
		}, 1000)
	}

	return (
		<div className="space-y-4">
			{context.length > 0 && (
				<div className="space-y-4 mb-6">
					{context.map((message, index) => (
						<div
							key={index}
							className={`p-4 rounded-xl ${
								index % 2 === 0
									? 'bg-purple-500 bg-opacity-10 ml-auto max-w-[80%]'
									: 'bg-white bg-opacity-5 mr-auto max-w-[80%]'
							}`}
						>
							<p className="text-violet-200">{message}</p>
						</div>
					))}
				</div>
			)}
			<textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="w-full h-32 p-4 rounded-xl bg-white bg-opacity-5 text-white placeholder-violet-300"
				placeholder="Ask Claude anything..."
			/>
			<div className="flex justify-between items-center">
				<button
					onClick={() => setContext([])}
					className="px-6 py-3 text-violet-300 hover:text-white transition-colors"
				>
					Clear Context
				</button>
				<button
					onClick={handleSubmit}
					disabled={isLoading}
					className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50"
				>
					{isLoading ? 'Thinking...' : 'Send Message'}
				</button>
			</div>
		</div>
	)
}

const LlamaDemo = () => {
	const [input, setInput] = useState('')
	const [response, setResponse] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [temperature, setTemperature] = useState(0.7)
	const [maxTokens, setMaxTokens] = useState(100)

	const handleSubmit = () => {
		setIsLoading(true)
		// Simulate API call with parameters
		setTimeout(() => {
			setResponse(`This is a simulated response from LLaMA using temperature ${temperature} and max tokens ${maxTokens}.`)
			setIsLoading(false)
		}, 1000)
	}

	return (
		<div className="space-y-6">
			<div className="space-y-4">
				<label className="block text-violet-200">Temperature: {temperature}</label>
				<input
					type="range"
					min="0"
					max="1"
					step="0.1"
					value={temperature}
					onChange={(e) => setTemperature(parseFloat(e.target.value))}
					className="w-full"
				/>
			</div>
			<div className="space-y-4">
				<label className="block text-violet-200">Max Tokens: {maxTokens}</label>
				<input
					type="range"
					min="10"
					max="500"
					step="10"
					value={maxTokens}
					onChange={(e) => setMaxTokens(parseInt(e.target.value))}
					className="w-full"
				/>
			</div>
			<textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="w-full h-32 p-4 rounded-xl bg-white bg-opacity-5 text-white placeholder-violet-300"
				placeholder="Enter your prompt for LLaMA..."
			/>
			<button
				onClick={handleSubmit}
				disabled={isLoading}
				className="w-full px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50"
			>
				{isLoading ? 'Generating...' : 'Generate Response'}
			</button>
			{response && (
				<div className="p-4 rounded-xl bg-white bg-opacity-5">
					<p className="text-violet-200">{response}</p>
				</div>
			)}
		</div>
	)
}

const ImageDemo = () => {
	const [prompt, setPrompt] = useState('')
	const [image, setImage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleGenerate = () => {
		setIsLoading(true)
		// Simulate API call
		setTimeout(() => {
			setImage('/placeholder-image.jpg')
			setIsLoading(false)
		}, 1500)
	}

	return (
		<div className="space-y-4">
			<input
				type="text"
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				className="w-full p-4 rounded-xl bg-white bg-opacity-5 text-white placeholder-violet-300"
				placeholder="Describe the image you want to generate..."
			/>
			<button
				onClick={handleGenerate}
				disabled={isLoading}
				className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50"
			>
				{isLoading ? 'Generating...' : 'Generate Image'}
			</button>
			{image && (
				<div className="rounded-xl overflow-hidden">
					<img src={image} alt="Generated" className="w-full" />
				</div>
			)}
		</div>
	)
}

const SpeechDemo = () => {
	const [isRecording, setIsRecording] = useState(false)
	const [transcript, setTranscript] = useState('')

	const toggleRecording = () => {
		setIsRecording(!isRecording)
		if (!isRecording) {
			// Simulate recording
			setTimeout(() => {
				setTranscript('This is a simulated transcript. In a real implementation, this would use the Web Speech API or similar.')
				setIsRecording(false)
			}, 3000)
		}
	}

	return (
		<div className="space-y-4">
			<button
				onClick={toggleRecording}
				className={`px-6 py-3 rounded-full transition-colors ${
					isRecording
						? 'bg-red-500 hover:bg-red-600'
						: 'bg-purple-500 hover:bg-purple-600'
				} text-white`}
			>
				{isRecording ? 'Stop Recording' : 'Start Recording'}
			</button>
			{transcript && (
				<div className="p-4 rounded-xl bg-white bg-opacity-5">
					<p className="text-violet-200">{transcript}</p>
				</div>
			)}
		</div>
	)
}

interface DemoInterface {
	id: string
	title: string
	description: string
	icon: JSX.Element
	component: React.FC
}

const demoInterfaces: DemoInterface[] = [
	{
		id: 'gpt4',
		title: 'GPT-4 Demo',
		description: 'Experience the power of our most advanced language model.',
		icon: <FiMessageSquare className="w-6 h-6" />,
		component: GPTDemo,
	},
	{
		id: 'claude',
		title: 'Claude Demo',
		description: 'Interact with our ethical and helpful AI assistant.',
		icon: <FiCommand className="w-6 h-6" />,
		component: ClaudeDemo,
	},
	{
		id: 'llama',
		title: 'LLaMA Demo',
		description: 'Try our efficient and powerful open-source model.',
		icon: <FiCpu className="w-6 h-6" />,
		component: LlamaDemo,
	},
	{
		id: 'dalle3',
		title: 'DALL·E 3 Demo',
		description: 'Generate stunning images from text descriptions.',
		icon: <FiImage className="w-6 h-6" />,
		component: ImageDemo,
	},
	{
		id: 'whisper',
		title: 'Whisper Demo',
		description: 'Convert speech to text with exceptional accuracy.',
		icon: <FiMic className="w-6 h-6" />,
		component: SpeechDemo,
	},
	{
		id: 'stable-diffusion',
		title: 'Stable Diffusion Demo',
		description: 'Create high-quality images with fast processing.',
		icon: <FiImage className="w-6 h-6" />,
		component: ImageDemo,
	},
]

export default function InteractiveDemoPage() {
	const [searchParams] = useSearchParams()
	const [selectedDemo, setSelectedDemo] = useState<string>(
		searchParams.get('model') || demoInterfaces[0].id
	)
	const { isDarkTheme } = useApp()

	useEffect(() => {
		const model = searchParams.get('model')
		if (model && demoInterfaces.some(demo => demo.id === model)) {
			setSelectedDemo(model)
		}
	}, [searchParams])

	const currentDemo = demoInterfaces.find(demo => demo.id === selectedDemo)

	return (
		<div className="min-h-screen bg-theme-gradient">
			<Header variant="default" />
			<div className="pt-32 pb-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-4xl mx-auto mb-12"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Interactive Demo
						</h1>
						<p className="text-lg text-violet-200">
							Try our AI models in real-time and experience their capabilities
							firsthand.
						</p>
					</motion.div>

					{/* Model Selection */}
					<div className="flex overflow-x-auto space-x-4 mb-12 pb-4">
						{demoInterfaces.map((demo) => (
							<button
								key={demo.id}
								onClick={() => setSelectedDemo(demo.id)}
								className={`px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
									selectedDemo === demo.id
										? 'bg-purple-500 text-white'
										: 'text-violet-200 hover:text-white'
								}`}
							>
								{demo.title}
							</button>
						))}
					</div>

					{/* Demo Interface */}
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedDemo}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="max-w-4xl mx-auto"
						>
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8">
								<h2 className="text-2xl font-semibold text-white mb-4">
									{currentDemo?.title}
								</h2>
								<p className="text-violet-200 mb-8">
									{currentDemo?.description}
								</p>
								{currentDemo?.component && <currentDemo.component />}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 