import React, {Component} from "react";
import classes from "./Landing.module.css";
import Prstore from "./prstore.jpg"

class Landing extends Component {
    state={
        landingRef : React.createRef(),
        phinneyRef : React.createRef(),
        comeRef: React.createRef(),
        storeRef:React.createRef()
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
                // if(place<450){    
                // this.state.comeRef.current.style.transform = `translate(0,${-.5*place}px)`;
                // // this.state.storeRef.current.style.transform = `translate(0,${-.5*place}px)`;
                // }else{
                //     this.state.comeRef.current.style.transform = `translate(0,${place}px)`;
                // }
                console.log(place)
           
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
                <div className = {classes.StorefrontContainer}>
                    <img src = {Prstore} ref = {this.state.storeRef}/>
                </div>
            </div>
            
            
            
        )


    }


}

export default Landing;