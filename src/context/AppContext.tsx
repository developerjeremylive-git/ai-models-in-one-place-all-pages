import React, { createContext, useContext, useState, useEffect } from 'react'

interface AppContextType {
	isDarkTheme: boolean
	isSnowEnabled: boolean
	isPurpleTheme: boolean
	isGraphEnabled: boolean
	toggleTheme: () => void
	toggleSnow: () => void
	toggleGraph: () => void
	toggleBackgroundTheme: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		const saved = localStorage.getItem('theme')
		return saved ? saved === 'dark' : true
	})
	const [isSnowEnabled, setIsSnowEnabled] = useState(() => {
		const saved = localStorage.getItem('snow')
		return saved ? saved === 'true' : false
	})
	const [isPurpleTheme, setIsPurpleTheme] = useState(() => {
		const saved = localStorage.getItem('backgroundTheme')
		return saved ? saved === 'purple' : true
	})
	const [isGraphEnabled, setIsGraphEnabled] = useState(() => {
		const saved = localStorage.getItem('graph')
		return saved ? saved === 'true' : true
	})

	// Apply theme classes to document root
	useEffect(() => {
		const root = document.documentElement
		// Remove all theme classes first
		root.classList.remove('light-theme', 'dark-theme', 'purple-theme', 'gray-theme', 'dark-mode')
		
		if (isDarkTheme) {
			root.classList.add('dark-mode')
			root.style.setProperty('--bg-gradient-from', '#111827') // gray-900
			root.style.setProperty('--bg-gradient-to', '#1f2937') // gray-800
		} else {
			root.classList.add('purple-theme')
			root.style.setProperty('--bg-gradient-from', '#4c1d95') // purple-900
			root.style.setProperty('--bg-gradient-to', '#5b21b6') // violet-800
		}

		// Add bg-theme-gradient class to style.css
		const style = document.createElement('style')
		style.textContent = `
			.bg-theme-gradient {
				background-image: linear-gradient(to bottom, var(--bg-gradient-from), var(--bg-gradient-to));
			}
		`
		document.head.appendChild(style)

		// Store theme preferences
		localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')

		return () => {
			document.head.removeChild(style)
		}
	}, [isDarkTheme])

	useEffect(() => {
		localStorage.setItem('snow', String(isSnowEnabled))
	}, [isSnowEnabled])

	useEffect(() => {
		localStorage.setItem('graph', String(isGraphEnabled))
	}, [isGraphEnabled])

	const toggleTheme = () => {
		setIsDarkTheme(prev => !prev)
	}

	const toggleSnow = () => setIsSnowEnabled(prev => !prev)
	
	const toggleGraph = () => setIsGraphEnabled(prev => !prev)

	const toggleBackgroundTheme = () => {
		setIsDarkTheme(prev => !prev)
	}

	return (
		<AppContext.Provider value={{ 
			isDarkTheme, 
			isSnowEnabled,
			isPurpleTheme,
			isGraphEnabled,
			toggleTheme, 
			toggleSnow,
			toggleGraph,
			toggleBackgroundTheme
		}}>
			{children}
		</AppContext.Provider>
	)
}

export function useApp() {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error('useApp must be used within an AppProvider')
	}
	return context
} 