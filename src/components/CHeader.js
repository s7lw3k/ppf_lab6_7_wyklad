import react, {Component} from "react";
import logo from '../logo.svg';
import './CHeader.css'

class CHeader extends Component{
    render(){
        const {aName, aFamili} = this.props; 
        return(
            <div className="headerContainer">
                <img src={logo} className="headerLogo" alt="logo"/>
                <h2>Witaj w przykładowym serwisie {aName+" "+aFamili}</h2>
            </div>
        );
    }
}

export default CHeader;