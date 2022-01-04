import React, { Component} from "react";

export default class CInner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        console.log('CInner - konstruktos');
    }

    static getDervedStateFromProps(props, state){
        console.log("CInner - getDervedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("CInner - componentDidMount")
        return null;
    }

    render() {
        console.log("CInner - render()")
        return(
            <div>
                <h3 className="bgClassInner">Komponent wewnętrzny</h3>
                {/* <h3 className={styl.bgClassModule}>Komponent wewnętrzny</h3> */}
            </div>
        )
    }

    shouldComponentUpdate(){
        console.log("CInner - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("CInner - getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("CInner - componentDidUpdate")
    }
}