import { WrapperContainer2 } from "../WrapperContainers";
import { TextCard } from "../TextComponents";


import { VersionCard } from "../VersionCard";

import "./styles.css";

const SecondFooter = () => {
    const date: Date = new Date();
    
    return (
        <WrapperContainer2 
            className="footer-copy-container"
            padding={"20px 150px"}
            justifyContent="space-between"
            flexDirection="row"
        >
            <TextCard fontSize={10}>Copyright &copy; {date.getFullYear()} <a className="animacion2" style={{color: "#FFFFFF"}} href="https://github.com/5arSanti">Santiago Arias</a></TextCard>
            <VersionCard/>
        </WrapperContainer2>
    );
}

export { SecondFooter };