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
    React.createElement("a", { href: "index", onClick: props.toggleMenu }, "HOME")), 

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
    React.createElement("a", { href: "index", width: '10px', height: '10px'}, "kiaravong",
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
  Resume Component
 ***********************/

const Resume = props => {
  return (
    React.createElement("section", { id: "resume" },
    React.createElement("div", { className: "resume-container" }, 
    React.createElement("div", { className: "heading" }, 
    React.createElement("h3", { className: "title" }, "Resume"), 
    React.createElement("p", { className: "separator" })), 

    React.createElement('div', { className: 'resume-wrapper' },
    React.createElement('div', { className: 'detail' },
      React.createElement('div', { className: 'detail-section edu' },
        React.createElement('div', { className: 'detail-title' },
          React.createElement('div', { className: 'title-icon' },
            React.createElement('i', { className: 'fas fa-user-graduate' })
          ),
          React.createElement('span', null, 'Education')
        ),
        React.createElement('div', { className: 'detail-content' },
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'Brown University'),
            React.createElement('p', null, 'Bs. Computer Science and Bs. Applied Mathematics'),
            React.createElement('time', null, 'Sept 2020 - May 2024')
          ),
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'Yonsei University'),
            React.createElement('p', null, 'Study Abroad'),
            React.createElement('time', null, 'Feb 2023 - June 2023')
          )
        )
      ),
      React.createElement('div', { className: 'detail-section experience' },
        React.createElement('div', { className: 'detail-title' },
          React.createElement('div', { className: 'title-icon' },
            React.createElement('i', { className: 'fa fa-id-badge' })
          ),
          React.createElement('span', null, 'Experience')
        ),
        React.createElement('div', { className: 'detail-content' },
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'Capital One'),
            React.createElement('p', null, 'Software Engineer Intern'),
            React.createElement('time', null, 'June 2023 - Aug 2023')
          ),
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'Colgate-Palmolive'),
            React.createElement('p', null, 'UI/UX Intern'),
            React.createElement('time', null, 'Sep 2022 - Dec 2022')
          ),
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'BlackLine'),
            React.createElement('p', null, 'Software Engineer Intern'),
            React.createElement('time', null, 'June 2022 - Aug 2022')
          ),
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'Colgate-Palmolive'),
            React.createElement('p', null, 'Software Development Intern'),
            React.createElement('time', null, 'Jan 2022 - May 2022')
          ),
          React.createElement('div', { className: 'timeline-block' },
            React.createElement('h1', null, 'RippleMatch'),
            React.createElement('p', null, 'Leadership Development Intern'),
            React.createElement('time', null, 'Jan 2022 - May 2022')
          )
        )
      ),
      React.createElement('div', { className: 'detail-section pg-skill' },
        React.createElement('div', { className: 'detail-title' },
          React.createElement('div', { className: 'title-icon' },
            React.createElement('i', { className: 'fas fa-laptop-code' })
          ),
          React.createElement('span', null, 'Programming Skills')
        ),
        React.createElement('div', { className: 'detail-content' },
          React.createElement('ul', { className: 'pg-list' },
            React.createElement('li', null,
              React.createElement('span', null, 'HTML5'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '95%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'CSS3'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '85%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'React.js'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '80%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'Python'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '90%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'Java'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '85%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'JavaScript'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '70%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'C/C++/C#'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '75%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'YAML'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '95%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'AWS'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '65%' } })
              )
            ),
            React.createElement('li', null,
              React.createElement('span', null, 'Git'),
              React.createElement('div', { className: 'sb-skeleton' },
                React.createElement('div', { className: 'skillbar', style: { '--pgbar-length': '85%' } })
              )
            )
          )
        )
      ),
      React.createElement('div', { className: 'detail-section tool-skill' },
        React.createElement('div', { className: 'detail-title' },
          React.createElement('div', { className: 'title-icon' },
            React.createElement('i', { className: 'fa fa-wrench' })
          ),
          React.createElement('span', null, 'Development Tools')
        ),
        React.createElement('div', { className: 'detail-content' },
          React.createElement('ul', { className: 'tool-list' },
            React.createElement('li', null,
              React.createElement('svg', { viewBox: '0 0 100 100' },
                React.createElement('circle', { cx: '50', cy: '50', r: '45' }),
                React.createElement('circle', { className: 'cbar', cx: '50', cy: '50', r: '45', style: { '--percent': '0.85' } })
              ),
              React.createElement('span', { className: 'tl-name' }, 'Photoshop'),
              React.createElement('span', { className: 'tl-exp' }, '85%')
            ),
            React.createElement('li', null,
              React.createElement('svg', { viewBox: '0 0 100 100' },
                React.createElement('circle', { cx: '50', cy: '50', r: '45' }),
                React.createElement('circle', { className: 'cbar', cx: '50', cy: '50', r: '45', style: { '--percent': '0.9' } })
              ),
              React.createElement('span', { className: 'tl-name' }, 'PPT'),
              React.createElement('span', { className: 'tl-exp' }, '90%')
            ),
            React.createElement('li', null,
              React.createElement('svg', { viewBox: '0 0 100 100' },
                React.createElement('circle', { cx: '50', cy: '50', r: '45' }),
                React.createElement('circle', { className: 'cbar', cx: '50', cy: '50', r: '45', style: { '--percent': '0.7' } })
              ),
              React.createElement('span', { className: 'tl-name' }, 'Git'),
              React.createElement('span', { className: 'tl-exp' }, '70%')
            ),
            React.createElement('li', null,
              React.createElement('svg', { viewBox: '0 0 100 100' },
                React.createElement('circle', { cx: '50', cy: '50', r: '45' }),
                React.createElement('circle', { className: 'cbar', cx: '50', cy: '50', r: '45', style: { '--percent': '0.74' } })
              ),
              React.createElement('span', { className: 'tl-name' }, 'NPM'),
              React.createElement('span', { className: 'tl-exp' }, '74%')
            )
          )
        )
      ),
      React.createElement('div', { className: 'detail-section interests' },
        React.createElement('div', { className: 'detail-title' },
          React.createElement('div', { className: 'title-icon' },
            React.createElement('i', { className: 'fas fa-heart' })
          ),
          React.createElement('span', null, 'Interests')
        ),
        React.createElement('div', { className: 'detail-content' },
          React.createElement('div', { className: 'outer-frame' },
            React.createElement('ul', { className: 'favor-list' },
              React.createElement('li', null,
                React.createElement('i', { className: 'fa fa-paw' }),
                React.createElement('span', null, 'Cats')
              ),
              React.createElement('li', null,
                React.createElement('i', { className: 'fa fa-film' }),
                React.createElement('span', null, 'Marvel')
              ),
              React.createElement('li', null,
                React.createElement('i', { className: 'fa fa-music' }),
                React.createElement('span', null, 'K-Pop')
              ),
              React.createElement('li', null,
                React.createElement('i', { className: 'fas fa-gamepad' }),
                React.createElement('span', null, 'Stardew Valley')
              ),
              React.createElement('li', null,
                React.createElement('i', { className: 'fa fa-paint-brush' }),
                React.createElement('span', null, 'Drawing')
              )
            )
          )
        )
      )
    )
  )
)));
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
      React.createElement(Resume, null)
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