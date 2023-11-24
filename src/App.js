import logo from './logo.svg';
import './common.css';
import './layout.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="doc">
			<BrowserRouter>
				<div className="opening">
					<h1 className="boxTitle">
						<span className="t1">Widenety Style</span>
						<span className="t2">web resources preview</span>
					</h1>
					<div className="boxLink">
						<nav>
							<ul id="test">
								<li>
									<Link to="/site01/">Home</Link>
								</li>
								<li>
									<Link to="/site01/mypage">Mypage</Link>
								</li>
								<li>
									<Link to="/site01/dashboard">Dashboard</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="contents">
					<Routes>
						<Route path='/site01/' element={<Home />} />
						<Route path='/site01/mypage' element={<MyPage />} />
						<Route path='/site01/dashboard' element={<Dashboard />} />
					</Routes>
				</div>
			</BrowserRouter>
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