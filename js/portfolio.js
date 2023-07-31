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
    React.createElement("a", { href: "", onClick: props.toggleMenu }, "HOME")), 

    React.createElement("li", null, 
    React.createElement("a", { href: "resume", onClick: props.toggleMenu }, "RESUME")), 

    React.createElement("li", null, 
    React.createElement("a", { href: "portfolio", onClick: props.toggleMenu }, "PORTFOLIO")), 

    // React.createElement("li", null, 
    // React.createElement("a", { href: "surprise", onClick: props.toggleMenu }, "SURPRISE")), 
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
    React.createElement("a", { href: "/", width: '10px', height: '10px'}, "kiaravong",
    ),

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
    py: 'fab fa-python' ,
    java: 'fab fa-java',};


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
      title: "Pacman",
      img: 'https://store-images.s-microsoft.com/image/apps.62763.14199964686811663.f257cbf1-42a5-4d4a-9087-aa31c6a47068.08239ffb-0d9a-4cb1-8fd0-c3b414a9b26c?mode=scale&q=90&h=270&w=270&background=%230078D7',
      tech: "java",
      link: 'projects/pacman',
      repo: "projects/pacman-code" }, 

    React.createElement("small", null, "Built using JavaFx."), 
    React.createElement("p", null, "This is a recreation of the class game Pacman.")), 


    React.createElement(Project, {
      title: "Tetris",
      img: 'https://img.freepik.com/premium-vector/game-tetris-square-template_6343-27.jpg',
      tech: "java",
      link: 'projects/tetris',
      repo: "projects/tetris-code" }, 

    React.createElement("small", null, "Built using JavaFx."), 
    React.createElement("p", null, "This is a recreation of the class game Tetris.")), 



    React.createElement(Project, {
      title: "Hotdog or Not",
      img: 'projects/img/hotdog.png',
      tech: "py html css",
      link: 'http://kiaravong.pythonanywhere.com/',
      repo: "projects/hotdog-code" }, 

    React.createElement("small", null, "Built using Python, HTML, and CSS."), 
    React.createElement("p", null, "Uses VGG16 to predict whether an image is a hotdog or not.")), 



    React.createElement(Project, {
      title: "Dinosaur Game",
      img: 'projects/img/dinosaur.jpg',
      tech: "js css html",
      link: 'projects/dinosaur',
      repo: "projects/dinosaur-code" }, 

    React.createElement("small", null, "Built using HTML, CSS, and JavaScript."), 
    React.createElement("p", null, "This is a recreation of the no internet dinosaur game by google.")), 




    React.createElement(Project, {
      title: "Tarot Cards",
      img: 'https://cdn.shopify.com/s/files/1/2636/1058/files/mini-rider-waite-tarot-activity-gifts-cards-deck-friends-herthem-card-887.jpg',
      tech: "js html css",
      link: 'projects/tarot',
      repo: "projects/tarot-code" }, 

    React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
    React.createElement("p", null, "Randomly picks a tarot card for you.")), 


	React.createElement(Project, {
		title: "PI Game",
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI-RzdK1BRIjh-lZKXqjD3Bl195kF85Vu6w&usqp=CAU',
		tech: "js html css",
		link: 'projects/pi',
		repo: "projects/pi-code" }, 
  
	  React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
	  React.createElement("p", null, "Randomly picks a tarot card for you.")), 


    React.createElement(Project, {
      title: "Stick Hero",
      img: 'projects/img/stick.png',
      tech: "js html css",
      link: 'projects/stick',
      repo: "projects/stick-code" }, 
    
      React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
      React.createElement("p", null, "Recreation of the IOS Stick Hero game.")), 

      React.createElement(Project, {
        title: "(bad) AI Chess",
        img: 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png',
        tech: "js css html",
        link: 'projects/chess',
        repo: "projects/chess-code" }, 
  
      React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
      React.createElement("p", null, "This is a single-player chess game against a (not so great) AI.")), 

      React.createElement(Project, {
        title: "Platform Game",
        img: 'https://www.google.com/search?q=javascript+platform+game&tbm=isch&ved=2ahUKEwi7qI3AybmAAxWPI1kFHfOLAAYQ2-cCegQIABAA&oq=javascript+platform+game&gs_lcp=CgNpbWcQAzIHCAAQGBCABDoHCAAQigUQQzoFCAAQgAQ6BggAEAcQHjoICAAQCBAHEB5Q8AFY3RpgvxtoAHAAeACAAYYBiAHaB5IBBDExLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=P_3HZPuMI4_H5NoP85eCMA&rlz=1C1VDKB_enUS929US929#imgrc=CSUSWWjkUd0jRM',
        tech: "js css html",
        link: 'projects/platform',
        repo: "projects/platform-code" }, 
  
      React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
      React.createElement("p", null, "This is a simple platform game, using arrow keys to move.")), 


      React.createElement(Project, {
        title: "Copycat",
        img: 'https://www.google.com/search?q=javascript+platform+game&tbm=isch&ved=2ahUKEwi7qI3AybmAAxWPI1kFHfOLAAYQ2-cCegQIABAA&oq=javascript+platform+game&gs_lcp=CgNpbWcQAzIHCAAQGBCABDoHCAAQigUQQzoFCAAQgAQ6BggAEAcQHjoICAAQCBAHEB5Q8AFY3RpgvxtoAHAAeACAAYYBiAHaB5IBBDExLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=P_3HZPuMI4_H5NoP85eCMA&rlz=1C1VDKB_enUS929US929#imgrc=CSUSWWjkUd0jRM',
        tech: "js css html",
        link: 'projects/copycat',
        repo: "projects/copycat-code" }, 
  
      React.createElement("small", null, "Built using JavaScript, HTML, and CSS."), 
      React.createElement("p", null, "Recreation of the Copycat game on Steam.")), 

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
      React.createElement(Projects, null)
      ));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

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