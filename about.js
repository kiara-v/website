import React from 'react'

/***********************
  About Component
 ***********************/

  const About = () => {
	return (
	  React.createElement("section", { id: "about" }, 
		React.createElement("div", { className: "wrapper" }, 
		  React.createElement("article", null, 
			React.createElement("div", { className: "title" }, 
			  React.createElement("h3", null, "Who's this girl?"), 
				React.createElement("p", { className: "separator" })
	  ), 
  
	  React.createElement("div", { className: "desc full" }, 
		React.createElement("h4", { className: "subtitle" }, "My name is Kiara."), 
		  React.createElement("p", null, "I am a junior majoring in Computer Science and Applied Math at Brown University."), 
			React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love photography, a hobby I'm taking along since the good old film cameras. Oh, and rice with milk; I have a passion for rice with milk!")
	  ))))
  
  
	);
  
  
  };


  /***********************
  Main Component
 ***********************/

class App extends React.Component {
	render() {
		return (
			React.createElement(React.Fragment, null, 
			React.createElement(About, null))
		);
	}
}



ReactDOM.render( About, document.getElementById('about'));