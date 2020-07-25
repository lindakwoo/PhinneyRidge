import React, {Component} from "react";
import classes from "./Landing.module.css";
import Prstore from "./prstore.jpg";
import mice from "./micegreen.jpeg";

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
                if(place<100){
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
                    <img src = {mice}/>
                    <p ref = {this.state.phinneyRef}>Phinney Ridge Eyecare</p>
                   
                </div>
                <div className = {classes.PhotoContainer}>
                </div>
                <p className = {classes.Come} ref = {this.state.comeRef}>Come Enjoy the View</p>
                <div className = {classes.StorefrontContainer}>
                    <img src = {Prstore} ref = {this.state.storeRef}/>
                    <div className = {classes.Text}>
                        <h2 className = {classes.TitleBox}>Phinney Ridge Eyecare</h2>
                        <div className = {classes.Address}>
                            <p>Dr. Robert Rosales and Dr. Cindy Woo</p>
                            <p> 7423 Greenwood Avenue North</p>
                            <p> Seattle, WA</p>
                        </div>
                        <div className = {classes.Open}>
                            <h1>Open Tuesday through Saturday</h1>
                        </div>
                       
                    </div>

                </div>
            </div>
            
            
            
        )


    }


}

export default Landing;