function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, 
    React.createElement("div", { className: "overlay" }), 
    React.createElement("div", { className: "menu-items" }, 
    React.createElement("ul", null, 
    React.createElement("li", null, 
    React.createElement("a", { href: "index.html", onClick: props.toggleMenu }, "HOME")), 

    React.createElement("li", null, 
    React.createElement("a", { href: "projects.html", onClick: props.toggleMenu }, "PORTFOLIO")), 
), 


    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null, 
    React.createElement("nav", { id: "navbar" }, 
    React.createElement("div", { className: "nav-wrapper" }, 
    React.createElement("p", { className: "brand" }, "kiara", 

    React.createElement("strong", null, "vong")), 

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, 

    React.createElement("span", null))))));
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" }));
};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    html: 'fab fa-html5',
    py: 'fab fa-python' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" }, 
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, 
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), 

    React.createElement("div", { className: "project-details" }, 
    React.createElement("div", { className: "project-tile" }, 
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => 
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, 
    React.createElement("div", { className: "buttons" }, 
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Code Snippet ", 
    React.createElement("i", { className: "fas fa-external-link-alt" })), 

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", 
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" }, 
    React.createElement("div", { className: "projects-container" }, 
    React.createElement("div", { className: "heading" }, 
    React.createElement("h3", { className: "title" }, "My Works"), 
    React.createElement("p", { className: "separator" })), 



    React.createElement("div", { className: "projects-wrapper" }, 
    
    React.createElement(Project, {
      title: "Dinosaur Game",
      img: 'projects/img/dinosaur.jpg',
      tech: "js css html",
      link: 'projects/dinosaur.html',
      repo: "projects/dinosaur-code.html" }, 

    React.createElement("small", null, "Built using HTML, CSS, and JavaScript."), 


    React.createElement("p", null, "This is a recreation of the no internet dinosaur game by google.")), 



    React.createElement(Project, {
      title: "Hotdog or Not",
      img: 'projects/img/hotdog.png',
      tech: "py html css",
      link: 'http://kiaravong.pythonanywhere.com/',
      repo: "projects/hotdog-code.html" }, 

    React.createElement("small", null, "Built using Python, HTML, and CSS."), 


    React.createElement("p", null, "Uses VGG16 to predict whether an image is a hotdog or not.")), 




    React.createElement(Project, {
      title: "Tarot Cards",
      img: 'https://cdn.shopify.com/s/files/1/2636/1058/products/mini-rider-waite-tarot-cards-deck-friends-herthem-phoebe-mr78-443.jpg',
      tech: "js html css",
      link: 'projects/tarot.html',
      repo: "projects/tarot-code.html" }, 

    React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 


    React.createElement("p", null, "Randomly picks a tarot card for you.")), 







	React.createElement(Project, {
		title: "PI Game",
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI-RzdK1BRIjh-lZKXqjD3Bl195kF85Vu6w&usqp=CAU',
		tech: "js html css",
		link: 'projects/pi.html',
		repo: "projects/pi-code.html" }, 
  
	  React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
  
  
	  React.createElement("p", null, "Randomly picks a tarot card for you.")), 
	


))));







};





/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" }, 
    React.createElement("a", {
      href: "https://www.linkedin.com/in/kiara-vong/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's LinkedIn profile" },

    ' ', 
    React.createElement("i", { className: "fab fa-linkedin" })), 

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/kiara-v",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', 
    React.createElement("i", { className: "fab fa-github" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null, 
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), 
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), 
      React.createElement(Header, null), 
    //   React.createElement(About, null), 
      React.createElement(Projects, null), 
    //   React.createElement(Contact, null), 
    //   React.createElement(Footer, null)
      ));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( React.createElement(App, null), document.getElementById('app'));