import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { CheckIcon } from '@heroicons/react/24/solid'

const plans = [
	{
		name: 'Starter',
		price: '$49',
		period: '/month',
		description: 'Perfect for getting started with AI models',
		features: [
			'Access to basic AI models',
			'5,000 API calls per month',
			'Basic analytics dashboard',
			'Email support',
			'99.9% uptime guarantee',
		],
		cta: 'Start Free Trial',
		popular: false,
	},
	{
		name: 'Professional',
		price: '$99',
		period: '/month',
		description: 'Ideal for growing businesses',
		features: [
			'Access to all AI models',
			'25,000 API calls per month',
			'Advanced analytics dashboard',
			'Priority email & chat support',
			'Custom model fine-tuning',
			'99.99% uptime guarantee',
			'API key management',
		],
		cta: 'Start Free Trial',
		popular: true,
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		period: '',
		description: 'For large-scale applications',
		features: [
			'Unlimited access to all AI models',
			'Unlimited API calls',
			'Enterprise analytics dashboard',
			'24/7 dedicated support',
			'Custom model development',
			'99.999% uptime SLA',
			'Advanced security features',
			'Custom integration support',
		],
		cta: 'Contact Sales',
		popular: false,
	},
]

export default function PricingPage() {
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
							Simple, Transparent Pricing
						</h1>
						<p className="text-lg text-violet-200">
							Choose the perfect plan for your needs. All plans include a 14-day free
							trial.
						</p>
					</motion.div>

					{/* Pricing Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{plans.map((plan, index) => (
							<motion.div
								key={plan.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className={`relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border ${
									plan.popular
										? 'border-purple-400'
										: 'border-purple-800'
								}`}
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
											Most Popular
										</span>
									</div>
								)}

								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold text-white mb-2">
										{plan.name}
									</h3>
									<div className="flex items-baseline justify-center mb-4">
										<span className="text-4xl font-bold text-white">
											{plan.price}
										</span>
										<span className="text-violet-300 ml-2">{plan.period}</span>
									</div>
									<p className="text-violet-200">{plan.description}</p>
								</div>

								<ul className="space-y-4 mb-8">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className="flex items-start text-violet-200"
										>
											<CheckIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
											<span>{feature}</span>
										</li>
									))}
								</ul>

								<div className="text-center">
									<Link
										to={
											plan.cta === 'Contact Sales'
												? '/contact'
												: '/interactive-demo'
										}
										className={`inline-block w-full py-3 px-6 rounded-full font-medium transition-all ${
											plan.popular
												? 'bg-purple-500 text-white hover:bg-purple-600'
												: 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
										}`}
									>
										{plan.cta}
									</Link>
								</div>
							</motion.div>
						))}
					</div>

					{/* FAQ Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="max-w-3xl mx-auto mt-24"
					>
						<h2 className="text-3xl font-bold text-white text-center mb-12">
							Frequently Asked Questions
						</h2>
						<div className="space-y-8">
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
								<h3 className="text-xl font-semibold text-white mb-3">
									What's included in the free trial?
								</h3>
								<p className="text-violet-200">
									The 14-day free trial includes full access to all features in
									your selected plan. You can test all AI models and integrate them
									into your applications without any restrictions.
								</p>
							</div>
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
								<h3 className="text-xl font-semibold text-white mb-3">
									Can I switch plans later?
								</h3>
								<p className="text-violet-200">
									Yes, you can upgrade or downgrade your plan at any time. Changes
									will be reflected in your next billing cycle.
								</p>
							</div>
							<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
								<h3 className="text-xl font-semibold text-white mb-3">
									Do you offer custom solutions?
								</h3>
								<p className="text-violet-200">
									Yes, our Enterprise plan can be customized to meet your specific
									needs. Contact our sales team to discuss your requirements.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
} 