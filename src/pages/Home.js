import React from "react";
import '../css/index.css';
import HeroContainer from "../components/HeroContainer";
import GithubLatestProjects from "../components/GithubLatestProjects";
import ChangeBackgroundColor from "../components/ChangeBackgroundColor";

export default function Home(){
return(
    <main>
        <HeroContainer />
        <ChangeBackgroundColor />
        <GithubLatestProjects />
    </main>
);

}