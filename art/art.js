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
    React.createElement("a", { href: "/", onClick: props.toggleMenu }, "HOME")), 

    React.createElement("li", null, 
    React.createElement("a", { href: "/resume", onClick: props.toggleMenu }, "RESUME")), 

    React.createElement("li", null, 
    React.createElement("a", { href: "/projects", onClick: props.toggleMenu }, "PROJECTS")), 

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
  Art Component
 ***********************/

const Art = props => {
  return (
    React.createElement("section", { id: "art" },
    React.createElement("div", { className: "art-container" }, 
    React.createElement("div", { className: "heading" }, 
    React.createElement("h3", { className: "title" }, "Art"), 
    React.createElement("p", { className: "separator" })), 

    React.createElement('section', { className: '' },
    React.createElement('div', { className: 'wrapper grid-1 text-center' },
      React.createElement('div', { className: 'col' },
        React.createElement('div', { className: 'project-filter' },
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '*' }, 'All'),
          React.createElement('a', { href: '#', className: 'filter active', 'data-filter': '.drawings' }, 'Drawing'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.painting' }, 'Painting'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.photography' }, 'Photography'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.design' }, 'Design')
        )
      )
    ),

    React.createElement('div', { className: 'wrapper' },
      React.createElement('div', { id: 'project-grid', className: 'grid-4_md-2_sm-1 project-grid small-gutter' },

      
        React.createElement('div', { className: 'col project project--hover-2 drawings' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'arts/graphics/chan.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'arts/graphics' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'arts/graphics' }, 'Graphics'))
            )
          )
        ),
        // other project items go here ...
      )
    ),

    React.createElement('div', { className: 'wrapper grid' },
      React.createElement('div', { className: 'col-6_xs-12' }),
      React.createElement('div', { className: 'col-6_xs-12' })
    ),

    React.createElement('div', { className: 'wrapper grid-3 text-center' },
      React.createElement('div', { className: 'col' }),
      React.createElement('div', { className: 'col' })
    )
  
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
      React.createElement(Art, null)
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
