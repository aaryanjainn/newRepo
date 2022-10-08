// Components
import Logo from './views/Logo'
import Navbar from './views/Navbar'
import SelectCity from './views/SelectCity'
import NewsLetter from './views/NewsLetter'

// Css files
import './css/style.css'


function App() {
	return (
		<>
			<div className='navbarHead'>
				<Logo />
				<Navbar />
			</div>
			<SelectCity />
			<NewsLetter />


		</>
	)
}

export default App
