import logo from './logo.svg';
import './common.css';
import './layout.css';
import './App.css';

// ** 리액트 Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { collection, getDocs } from 'firebase/firestore'
//import { db } from 'firebase/firebase.config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ** 데이터 읽기
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCKHs1FIC5B0RRgLv0hWmDpHsCZ5VpfleE",
	authDomain: "widenety-style-3c0b9.firebaseapp.com",
	projectId: "widenety-style-3c0b9",
	storageBucket: "widenety-style-3c0b9.appspot.com",
	messagingSenderId: "43443741112",
	appId: "1:43443741112:web:64dad5f131a98b2e202f4d",
	measurementId: "G-XNW0MKRNCY"
};
const app = initializeApp(firebaseConfig);	// Initialize Firebase
const db = getFirestore(app);				// Initialize Cloud Firestore and get a reference to the service
const querySnapshot = await getDocs( collection( db, "clients" ) );
const querySnapshotArray = [];
let querySnapshotIdxTmp = null;
async function getAllData() {
	querySnapshot.forEach(( doc ) => {
		let data = doc.data();
		/* idx 중복검사 않함. 아이템 생성시 방지.
		if ( doc.data().idx == querySnapshotIdxTmp ) {		// ** console.log( "중복존재" );
		} else {											// ** console.log( "중복없음" );
			querySnapshotArray.push( data );
		}
		querySnapshotIdxTmp = doc.data().idx;
		// */
		querySnapshotArray.push( data );
	});
	console.log( querySnapshotArray );
}

// ** 본체
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

// ** 타이틀태그 업데이트
function setSiteTitle( txt ) {
	const siteTitle = document.querySelector("title").dataset.titleString;
	document.querySelector("title").innerText = siteTitle + " > " + txt;
}
function Home() {
	getAllData();
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