import { useState, useEffect } from "react";
import "./load-more.css";

export default function LoadMore({ url, limit }) {
// 	{
// 		/* fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res => res.json())
// .then(console.log);
//  */
// 	}

	const [products, setProducts] = useState([]);
	const [numberOfLoading, setNumberOfLoading] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loader, setLoader] = useState(false);
    const [disabled ,setDisabled] = useState(false)

	async function fetchData(getUrl, getLimit ) {
		try {
			setLoader(true);
			const res = await fetch(`${getUrl}?limit=${getLimit}&skip=${ numberOfLoading === 0 ? 0 : numberOfLoading* getLimit}`);
			const data = await res.json();
			if (data && data.products && data.products.length) {
				setProducts(prevData => [...prevData, ...data.products]);
				setLoader(false);
			}
		} catch (e) {
			setErrorMsg(e.message);
			setLoader(false);
		}
	}
    
    useEffect (()=> {
        if(products && products.length === 100) setDisabled (true)
        }, [products])
    
    useEffect(() => {
        if (url !== null) fetchData(url, limit);
    }, [numberOfLoading]);

	if (loader) return <div>Loading... Please wait!</div>;
	if (errorMsg !== null) return <div>Error Occured!{errorMsg}</div>;

	return (
		<>
            {products && products.length
                ? 
                <div className="product">
                    <a href="#end">go to bottom</a>
                    <div className="product__container">
                            {products.map((item, index) => (
                                                <div className="product__card" key={item.id}>
                                                    <img
                                                        className="product__image"
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                    />
                                                    <div className="product__desc">
                                                        <p className="product__title">{item.title}</p>
                                                        <span>Price {item.price}</span>
                                                    </div>
                                                </div>
                                            ))
                            }
                    </div>
                    <div className="product__button">
                        <button
                            disabled={disabled}
                            id="end"
                            onClick={() => setNumberOfLoading(numberOfLoading + 1)}
                            className="btn product__button"
                            >
                            Load More
                        </button>
                        {
                            disabled ? <p>You have reached 100 products</p> : null
                        }
                    </div>
                    
                </div>
                : null}
		</>
	);
}
