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
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), 



    React.createElement("li", null, 
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), 



    React.createElement("li", null, 
    React.createElement("a", { href: "projects.html", onClick: props.toggleMenu }, "PORTFOLIO")), 



    React.createElement("li", null, 
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT")
    )), 


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
    React.createElement("header", { id: "welcome-section" }, 
    React.createElement("div", { className: "forest" }), 
    React.createElement("div", { className: "silhouette" }), 
    React.createElement("div", { className: "moon" }), 
    React.createElement("div", { className: "container" }, 
    React.createElement("h1", null, 
    React.createElement("span", { className: "line" }, "I do"), 
    React.createElement("span", { className: "line" }, "frontend design"), 
    React.createElement("span", { className: "line" }, 
    React.createElement("span", { className: "color" }, "&"), " code.")), 


    React.createElement("div", { className: "buttons" }, 
    React.createElement("a", { href: "projects.html" }, "my portfolio"), 
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
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
      title: "Hotdog - Not Hotdog",
      img: 'projects/img/hotdog.png',
      tech: "py html css",
      link: 'http://kiaravong.pythonanywhere.com/',
      repo: "projects/hotdog-code.html" }, 

    React.createElement("small", null, "Built using Python, HTML, and CSS."), 


    React.createElement("p", null, "Inspired by HBO's Silicon Valley. Uses a VGG16 neural network to predict whether an image is a hotdog or not.")), 




    React.createElement(Project, {
      title: "Hotdog - Not Hotdog",
      img: 'projects/img/hotdog.png',
      tech: "py html css",
      link: 'http://kiaravong.pythonanywhere.com/',
      repo: "projects/hotdog-code.html" }, 

    React.createElement("small", null, "Built using Python, HTML, and CSS."), 


    React.createElement("p", null, "Inspired by HBO's Silicon Valley. Uses a VGG16 neural network to predict whether an image is a hotdog or not.")), 


))));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" }, 
    React.createElement("div", { className: "container" }, 
    React.createElement("div", { className: "heading-wrapper" }, 
    React.createElement("div", { className: "heading" }, 
    React.createElement("p", { className: "title" }, "Want to ", 
    React.createElement("br", null), "contact me?"), 


    React.createElement("p", { className: "separator" }), 
    React.createElement("p", { className: "subtitle" }, "Please, send an email to ",
    '', 
    React.createElement("span", { className: "mail" }, "kiara_vong", 

    React.createElement("i", { className: "fas fa-at at" }), "brown.edu"), ":")), 



    React.createElement(SocialLinks, null)),
    React.createElement("div", { className: "buttons" }, 
    React.createElement("a", { href: "mailto:kiara_vong@brown.edu", className: "cta" }, "click here to email"))
    // React.createElement("form", { id: "contact-form", action: "#" }, 
    // React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), 
    // React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), 
    // React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), 
    // React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" }))
  )));




};




/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null, 
    React.createElement("div", { className: "wrapper" }, 
    React.createElement("h3", null, "THANKS FOR VISITING"), 
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Kiara Vong."), 
    React.createElement(SocialLinks, null))));



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
      React.createElement(About, null), 
      // React.createElement(Projects, null), 
      React.createElement(Contact, null), 
      React.createElement(Footer, null)
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