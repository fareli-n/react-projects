import { useState, useEffect } from "react";
import "./scroll-indicator.css";
export default function ScrollIndicator({ url }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
    const [scrollPercentage , setScrollPercentage] = useState(0)
    
	async function fetchData(getUrl) {
		try {
			setLoading(true);
            const res =  await fetch (getUrl)
            const data = await res.json()
            if (data && data.products && data.products.length ){
                setProducts (prev => data.products)
            }
		} catch (err) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}
    function calculateScrollPercentage (){
        const scrollTop = document.documentElement.scrollTop 
        const height= document.documentElement.scrollHeight - document.documentElement.clientHeight
        const currentScrollPercentage = Math.floor ((scrollTop / height) *100)
        console.log (currentScrollPercentage)
        setScrollPercentage (prev => currentScrollPercentage)
    }

	useEffect(() => {
		if (url !== "") fetchData(url);
	}, [url]);
    useEffect (()=> {
        window.addEventListener ('scroll', calculateScrollPercentage)
        return ()=> 
            window.removeEventListener ('scroll', calculateScrollPercentage)
    }
    ,[])
    if (error) return <div>Error occured!</div>
    if (loading) return <div>Data is Loading...</div>

	return <div className="scroll">
        <div className="scroll__header">
            <h1>List of Products {scrollPercentage}</h1>
            <div className="scroll__scroll-bar-wrapper">
                <div className="scroll__scroll-bar-percentage" style={{width: `${scrollPercentage}%`}}></div>
            </div>
        </div>
        <div className="scroll__content">
            {
                (products && products.length) ?
                products.map (item => <p key= {item.id}>{item.title}</p>) :
                null
            }
        </div>
    </div>;
}
