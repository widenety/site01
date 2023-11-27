import logo from './logo.svg';
import './common.css';
import './layout.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
	return (
		<div className="doc">
			<BrowserRouter>
				<div className="Head">
					<h1 className="boxTitle">
						<Link to="/site01/">
							<span className="t1">Widenety Style</span>
							<span className="t2">react test preview</span>
						</Link>
					</h1>
					<div className="boxLink">
						<nav>
							<ul>
								<li>
									<Link to="/site01/"><span>Home</span></Link>
								</li>
								<li>
									<Link to="/site01/mypage"><span>Mypage</span></Link>
								</li>
								<li>
									<Link to="/site01/dashboard"><span>Dashboard</span></Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="Contents">
					<Routes>
						<Route path='/site01/' element={<Home />} />
						<Route path='/site01/mypage' element={<MyPage />} />
						<Route path='/site01/dashboard' element={<Dashboard />} />
					</Routes>
				</div>
				<div className="Foot">
					<div className="boxCopy">
						ⓒ widenety.com
					</div>
					<div className="boxLink">
						<nav>
							<ul>
								<li><Link to="/site01/"><span>Home</span></Link></li>
								<li><a href="http://widenety.com/" target="_blank" title="새창열기"><span>Homepage</span></a></li>
								<li><a href="mailto:widenety@gmail.com"><span>Contact me</span></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}
function setSiteTitle( txt ) {
	const siteTitle = document.querySelector("title").dataset.titleString;
	document.querySelector("title").innerText = siteTitle + " > " + txt;
}
function Home() {
	setSiteTitle( "Home" );
	return <h1>Home</h1>
}
function MyPage() {
	setSiteTitle( "Mypage" );
	return <h1>Mypage</h1>
}
function Dashboard() {
	setSiteTitle( "Dashboard" );
	return <h1>Dashboard</h1>
}
export default App;