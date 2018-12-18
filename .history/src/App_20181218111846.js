import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {isShow : true};
		this.changeShow = this.changeShow.bind(this);
	}

	changeShow(){
		// this.state.isShow = !this.state.isShow;
		this.setState(function(state){
			return {isShow: !state.isShow};
		})
	}

	render(){
		return(
				<div>
					<button onClick={this.changeShow}>change</button>
					<Sub isShow={this.state.isShow}></Sub>
				</div>
			);
	}
}

class Sub extends Component{
	render(){
		// if(this.state.isShow)
		// 	return(<div>1</div>);
		// else
		// 	return(<div>2</div>);
		return(<div>{this.props.isShow?0:2}</div>)
	}
}

// class App extends Component {
//   render() {
//   	if(this.props.isShow){
//   		return (
//   			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<p>
// 						Edit <code>src/App.js</code> and save to reload.
// 					</p>
// 					<a
// 						className="App-link"
// 						href="https://reactjs.org"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						Learn what
// 					</a>
// 				</header>
// 			</div>
//   		);
//   	}

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
