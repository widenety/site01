import logo from './logo.svg';
import './layout.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="doc">
			<div className="opening">
				<h1 className="boxTitle">
					<span className="t1">Widenety Style</span>
					<span className="t2">web resources preview</span>
				</h1>
				<BrowserRouter>
					<div className="boxLink">
						<nav>
							<ul id="test">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/mypage">Mypage</Link>
								</li>
								<li>
									<Link to="/dashboard">Dashboard</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="boxMsg">
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/mypage' element={<MyPage />} />
							<Route path='/dashboard' element={<Dashboard />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</div>
	);
}
export default App;

function Home() {
	return <h1>Home</h1>
}
function MyPage() {
	return <h1>Mypage</h1>
}
function Dashboard() {
	return <h1>Dashboard</h1>
}