import React from "react";
import { useState } from "react";
import Accordian from "./component/Accordian/Accordian";
import Randomcolor from "./component/random-color/Randomcolor";
import StarRating from "./component/star-rating/Starrating";
import ImageSlider from "./component/image-slider/Image-slider";
import LoadMore from "./component/load-more/Load-more";
import TreeView from "./component/tree-view/TreeView";
import QrCode from "./component/qr-code-generatore/Qrcode.jsx"
import ScanQrCode from "./component/scan-qr-code/Scan-qr-code.jsx";
import LightDarkMode from "./component/light-dark-switch/Light-dark-mode.jsx";
import ScrollIndicator from "./component/scroll-indicator/ScrollIndicator.jsx";
import TabMenu from "./component/tab-menu/TabMenu.jsx";
function App() {
	return (
		<div className="app">
			{/* <Accordian /> */}
			{/* <Randomcolor /> */}
			{/* <StarRating /> */}
			{/* <ImageSlider
				url={"https://picsum.photos/v2/list"}
				page={"2"}
				limit={"10"}
			/> */}
      
			{/* <LoadMore url={"https://dummyjson.com/products"} limit ={"20"}/> */}
			{/* <TreeView /> */}
			{/* <QrCode /> */}
			{/* <ScanQrCode /> */}
			{/* <LightDarkMode /> */}
			{/* <ScrollIndicator  url={"https://dummyjson.com/products?limit=100"}/> */}
			<TabMenu />

		</div>
	);
}

export default App;
