import { useState, useEffect } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import "./image-slider.css"

export default function ImageSlider({ url, page, limit }) {
	const [images, setImages] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(null);

	async function fetchData(getUrl, getPage, getLimit) {
		try {
			setLoader(true);
			// ?page=2&limit=100
			const res = await fetch(`${getUrl}?page=${getPage}&limit=${getLimit}`);
			const data = await res.json();
			if (data) {
				setImages(data);
				setLoader(false);
			}
		} catch (e) {
			setLoader(false);
			setError(e.message);
		}
	}

	useEffect(() => {
		fetchData(url, page, limit);
	}, [url, page, limit]);

	if (error !== null) return <div>Error Occured!</div>;
	if (loader) return <div>Loading... Please wait!</div>;
    function handlePrevious() {
        setCurrentImage (prev => prev === 0 ? images.length-1 : prev - 1 )
    }
    function handleNext(){
        setCurrentImage (prev => prev === (images.length-1 ) ? 0: prev + 1 )
    }
	return (
		<div className="container">
			<BsArrowLeftCircle onClick={handlePrevious}
            className="arrow arrow-left " />
			{images && images.length ?
				 images.map((img,index) => (
						<img
							key={img.id}
							alt={img.download_url}
							src={img.download_url}
							className={currentImage === index ? "currentImage" : " currentImage hidden"}
						/>
				  ))
				: null}
			<BsArrowRightCircle onClick={handleNext} className="arrow arrow-right" />
			<span className="slide-indicatore">
				
				{images && images.length ? 
                 images.map((_, index) => (
					<button 
                    key={index} 
                    onClick = { ()=>  setCurrentImage (index)}
                    className={ currentImage === index  ? "current-indicatore active" : "current-indicatore"}
                    >
                    </button>
				))
				:null}
			</span>
		</div>
	);
}
