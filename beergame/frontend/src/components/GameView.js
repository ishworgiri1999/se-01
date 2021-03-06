import React, { Component } from "react";

export default class GameView extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo1: false,
          showHideDemo2: false,
          showHideDemo3: false
        };
        this.hideComponent = this.hideComponent.bind(this);
      }
    
      hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideDemo1":
            this.setState({ showHideDemo1: !this.state.showHideDemo1 });
            break;
          case "showHideDemo2":
            this.setState({ showHideDemo2: !this.state.showHideDemo2 });
            break;
          case "showHideDemo3":
            this.setState({ showHideDemo3: !this.state.showHideDemo3 });
            break;
          default:
            null;
        }
      }
    
      render() {
        const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
        return (
          <div>
            {showHideDemo1 && <View1 />}
            <hr />
            {showHideDemo2 && <View2 />}
            <hr />
            {showHideDemo3 && <View3 />}
            <hr />
            <div>
              <button onClick={() => this.hideComponent("showHideDemo1")}>
                Click to hide Demo1 component
              </button>
              <button onClick={() => this.hideComponent("showHideDemo2")}>
                Click to hide Demo2 component
              </button>
              <button onClick={() => this.hideComponent("showHideDemo3")}>
                Click to hide Demo3 component
              </button>
            </div>
          </div>
        );
      }
}



function View1(){
    return(
<h1>Orders</h1>


)
    
}



function View2(){
    return(
<h1>Past Information</h1>        
    )
}


function View3(){
    return(
<h1>view 3</h1>
    )
}


function View4(){
    return(
        <h1>view 4</h1>

    )
}