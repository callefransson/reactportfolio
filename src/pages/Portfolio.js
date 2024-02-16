import GithubProjects from "../components/GithubProjects";
import React, {useState,useEffect} from "react";
import HashLoader from "react-spinners/HashLoader";
import '../css/Portfolio.css';
import '../css/index.css';

export default function Portfolio(){
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
    return(
        <>
        <main>
        {
            loading ? 
            <div className="loading-content">
            <HashLoader
            color="#00f7c6"
            loading
            size={100}
            />
            <h2 className="p-4 text-light ">Loading content</h2>
          </div>
          :
        <GithubProjects />
        }
        </main>
        </>
    );
}