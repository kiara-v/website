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
          React.createElement('a', { href: '#', className: 'filter active', 'data-filter': '*' }, 'All'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.drawings' }, 'Drawing'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.painting' }, 'Painting'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.photography' }, 'Photography'),
          React.createElement('a', { href: '#', className: 'filter', 'data-filter': '.design' }, 'Design')
        )
      )
    ),

    React.createElement('div', { className: 'wrapper' },
      React.createElement('div', { id: 'project-grid', className: 'grid-3_md-2_sm-1 project-grid' },

      
        React.createElement('div', { className: 'col project project--hover-2 drawings' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'graphics/img/cover.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'graphics' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'graphics' }, 'Graphics'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 drawings' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'sketches/img/stiles.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'sketches' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'sketches' }, 'Sketches'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 design' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'yearbook/img/full3.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'yearbook' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'yearbook' }, 'Yearbook'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'football/img/6.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'football' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'football' }, 'Football'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'cheer/img/4.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'cheer' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'cheer' }, 'Cheer'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'swim/img/6.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'swim' }, React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, React.createElement('a', { href: 'swim' }, 'Swim'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'flashcards/img/2.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'flashcards' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'flashcards' }, 'Flashcards'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'powderpuff/img/3.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'powderpuff' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'powderpuff' }, 'Powderpuff'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'fantasy/img/cover.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'fantasy' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'fantasy' }, 'Fantasy'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'nature/img/3.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'nature' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'nature' }, 'Nature'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 photography' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'still-life/img/5.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'still-life' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'still-life' }, 'Still Life'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 painting' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'canvas/img/cover.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'canvas' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'canvas' }, 'Canvas'))
            )
          )
        ),
        React.createElement('div', { className: 'col project project--hover-2 drawings' },
          React.createElement('div', { className: 'project__img-holder' },
            React.createElement('img', { src: 'hatch/img/cover.jpg', alt: '', className: 'project__img' }),
            React.createElement('div', { className: 'project__overlay' },
              React.createElement('div', { className: 'project__icons' },
                React.createElement('a', { href: 'hatch' }, 
                React.createElement('i', { className: 'fa fa-search' }))
              )
            ),
            React.createElement('div', { className: 'project__description' },
              React.createElement('span', { className: 'project__category' }, 
              React.createElement('a', { href: 'hatch' }, 'Hatching'))
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
