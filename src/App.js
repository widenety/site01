import logo from './logo.svg';
import './common.css';
import './layout.css';
import './App.css';
import $ from 'jquery'

// ** 리액트 Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { collection, getDocs } from 'firebase/firestore'
//import { db } from 'firebase/firebase.config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ** FireStore 데이터 읽기
import { disablePersistentCacheIndexAutoCreation, getFirestore } from "firebase/firestore";
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
let querySnapshotArray = [];
// let querySnapshotIdxTmp = null;			// ** idx 중복검사 않함. 아이템 생성시 방지.

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

// ** Home
function Home() {
	setSiteTitle( "Home" );

	// ** FireBase 데이터 추출.
	async function dataFetch() {
		querySnapshotArray = [];	// ** FireStore 데이터 삽입전에 초기화. 여러 메뉴탐방후 본메뉴 재진입시 데이터가 누적되는 현상발견. 선언은 위에서 진행.
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
	}

	// ** 데이터 정렬, Object 배열 출력.
	function dataRearrange() {
		let arrayData = [];
		let arrayDatas = [];
		querySnapshotArray.forEach( obj => {
			// ** Key값 기준 정렬.
			const arrayData = {};
			Object.keys( obj ).sort().forEach(key => {
				arrayData[key] = obj[key];
			});
			arrayDatas.push( arrayData );

			// ** 정렬된 배열 출력.
			/*
			for( let index in arrayData ) {
				console.log(index + " : " + arrayData[index] + "");
			}
			// */
		});
		return arrayDatas;
	}
	async function main() {
		await dataFetch();
		let arrayRes = dataRearrange();
		let arrayResCompo = "";
		let homeMain = document.getElementById("HomeMain");
		arrayResCompo += "<ul class='firebaseList'>";
		arrayRes.forEach( arrChild1 => {
			arrayResCompo += "<li>";
			for( let index in arrChild1 ) {
				arrayResCompo += "<dl><dt>" + index + "</dt><dd>" + arrChild1[index] + "</dd></dl>";
			}
			arrayResCompo += "</li>";
		});
		arrayResCompo += "</ul>";
		homeMain.innerHTML = arrayResCompo;

		$("#Home").css({ "border":"10px solid #f00" });
	}
	main();



	return (
		<div id="Home">
			<h3 className="dataTit">
				Firebase data 출력.
			</h3>
			<div id="HomeMain" className="dataBody"></div>
		</div>
	);
}

// ** Mypage
function MyPage() {
	setSiteTitle( "Mypage" );
	return <h1>Mypage</h1>
}

// ** DashBoard
function Dashboard() {
	setSiteTitle( "Dashboard" );
	return <h1>Dashboard</h1>
}
export default App;