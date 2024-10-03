import React from "react";
import { useState } from "react";
import Accordian from "./component/Accordian/Accordian";
import Randomcolor from "./component/random-color/Randomcolor";
import StarRating from "./component/star-rating/Starrating";
import ImageSlider from "./component/image-slider/Image-slider";
import LoadMore from "./component/load-more/Load-more";
import TreeView from "./component/tree-view/TreeView";
import "./style.css";

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
			<TreeView />
		</div>
	);
}

export default App;
