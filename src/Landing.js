import React, {Component} from "react";
import classes from "./Landing.module.css";

class Landing extends Component {
    state={
        landingRef : React.createRef(),
        phinneyRef : React.createRef(),
        comeRef: React.createRef()
    }

    render(){

        let place = 0;
        window.addEventListener("scroll", (e)=>{
            if(this.state.landingRef.current){
            place = window.pageYOffset;
            this.state.landingRef.current.style.top = `${-place}px`;
            if(place<170){
            this.state.phinneyRef.current.style.transform = `translate(0,${3*place}px)`;
            }
            }
        })
        

        return(
            <div className = {classes.LandingContainer}>
                <div className = {classes.Landing} ref = {this.state.landingRef}>
                    <p ref = {this.state.phinneyRef}>Phinney Ridge Eyecare</p>
                </div>
                <div className = {classes.PhotoContainer}>
                </div>
                <p className = {classes.Come} ref = {this.state.comeRef}>Come Enjoy the View</p>
            </div>
            
            
            
        )


    }


}

export default Landing;