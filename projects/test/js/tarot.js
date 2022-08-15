import sheet, { mount } from 'https://cdn.corset.dev/v2';

mount(document.documentElement, class {
  // <-- use code folding to skip the big array of cards
  cards = [
    // https://imgur.com/gallery/Tm7u6HH
    // https://game-maps.com/C77/Cyberpunk-2077-Tarot-Cards.asp
    // https://cyberpunk.fandom.com/wiki/Tarot_Cards
    { num: "0",     title: "The Fool",           url: "https://i.imgur.com/ihZ6qn6.png",
      description: "The Fool is everyone - including you and me. Each step he takes on his journey feels like stepping into a brave new world. Ultimately, the journey will change him. But as the card shows, he's a trustworthy lad whose tireless hope drives him toward his goal."
    },
    { num: "I",     title: "The Magician",       url: "https://i.imgur.com/DEmo74L.png",
      description: "The Magician is the card of self-confidence and adapting to situations through intellect and sheer will. The Magician is a schemer who always has one last trick up his sleeve, who despite everything manages to stay afloat and remain in control of his own destiny."
    },
    { num: "II",    title: "The High Priestess", url: "https://i.imgur.com/s3aqFKV.png",
      description: "The High Priestess is a card of mystery. It shows how all our secrets hang by a delicate thread and the struggle between common sense and intuition. The High Priestess symbolizes the cold, calm waters as well as the mysteries hidden in their depths."
    },
    { num: "III",   title: "The Empress",        url: "https://i.imgur.com/GR18z0I.png",
      description: "The Empress is a card of femininity and motherhood. She is authoritative, knows what she wants, and exhibits refinement and sensuousness. The Empress symbolizes creativity and growth, and instructs us not to dismiss our unconscious impulses, but to trust our intuition."
    },
    { num: "IV",    title: "The Emperor",        url: "https://i.imgur.com/tWAQU8P.png",
      description: "The Emperor represents patriarchal control and is pleased with the authority and power he possesses to shape the future. The Emperor makes the rules and enforces them for the common good. But prestige has its dark sides - the Emperor is dominating and ruthless and will climb over a mountain of bodies to achieve his aim."
    },
    { num: "V",     title: "The Hierophant",     url: "https://i.imgur.com/ETM0hIP.png",
      description: "The Hierophant symbolizes a respect for tradition. It represents one who tries to maintain the established order, even though their very character is shaped by it. The Hierophant places his faith in institutions - for the alternative is pure chaos. Only by placing his faith in order can he draw strength."
    },
    { num: "VI",    title: "The Lovers",         url: "https://i.imgur.com/32TmpDz.png",
      description: "The Lovers is the card of dichotomies. It points to the contradictions that clash within each of us and of the challenge of striking a balance between extremes. The Lovers is also the card of dilemmas, like The Fool who stands at the crossroads, unable to make his choice."
    },
    { num: "VII",   title: "The Chariot",        url: "https://i.imgur.com/alEarqI.png",
      description: "The Chariot is always charging ahead despite being pulled by its steeds in opposite directions. The rider who steers it constantly reins in the light and dark sides of the soul with the help of Reason. To ride in The Chariot is to experience highs and lows - ups and downs."
    },
    { num: "VIII",  title: "Strength",           url: "https://i.imgur.com/DPOd8uQ.png",
      description: "Strength is the card of resilience. It is associated with determination, bravery and internal struggle. One must have dedication in order to overcome obstacles and reach one's goal. Strength is about physical prowess and spiritual fortitude - the power that must be unleashed to achieve the impossible."
    },
    { num: "IX",    title: "The Hermit",         url: "https://i.imgur.com/RXgLXFt.png",
      description: "The Hermit is a card of self-imposed isolation. It represents an escape from the hustle and bustle of the city, a turning away from constant newness toward Ye Olde ways. For the hermit, solitude is the road to the sublime - a road that is taken not with great bounds and strides, but with small, concentrated steps."
    },
    { num: "X",     title: "Wheel of Fortune",   url: "https://i.imgur.com/Wj9twMd.png",
      description: "The Wheel of Fortune means that change is coming. One's destiny could turn out for the better or the worse, yet it is also bears the promise of new possibilities. The Wheel reminds us that nobody remains at the top forever, but also that not every situation is hopeless."
    },
    { num: "XI",    title: "Justice",            url: "https://i.imgur.com/DI1pjbK.png",
      description: "Justice is the card of conflict resolution. It proclaims the need for order, to see through lies and deceit, and a return to the natural state of affairs. Justice implies a just sentence, but also due process."
    },
    { num: "XII",   title: "The Hanged Man",     url: "https://i.imgur.com/e9E5yjX.png",
      description: "The Hanged Man is the card of sacrifice. It says that a price must be paid in order to achieve enlightenment. The Hanged Man's forsakenness opens the path for rebirth into a new life, though this path is wrought with pain suspended in time and ultimately ends in Death."
    },
    { num: "XIII",  title: "Death",              url: "https://i.imgur.com/2HYLRGo.png",
      description: "Death is the card of becoming. It signifies an imminent and difficult transition - the conclusion of one phase of life and the beginning of another. Inevitably, something gets lost during the transformation, but something else will rise to take its place."
    },
    { num: "XIV",   title: "Temperance",         url: "https://i.imgur.com/SRXdRjp.png",
      description: "Temperance is the card of balance. It may symbolize self-restraint or the gradual shift toward a more mature state of equilibrium. Temperance is associated with being in control of oneself as well as the desire to achieve inner peace."
    },
    { num: "XV",    title: "The Devil",          url: "https://i.imgur.com/hxP9moP.png",
      description: "The Devil is addiction, craving and passion. He brings fame and fortune, but at the price of losing oneself to a world of material distractions. The Devil lures unsuspecting souls into traps, but always grants them a choice. One can try their luck and take him up on his offer, but one should always know when to call quits."
    },
    { num: "XVI",   title: "The Tower",          url: "https://i.imgur.com/bJhlJuo.png",
      description: "The Tower is an omen of radical change, chaos and destruction. The lightning striking The Tower signifies a return to the old order that lies buried under the ruins, and a new order that will rise from it. It is a symbol of tragedy, apocalypse and self-destruction."
    },
    { num: "XVII",  title: "The Star",           url: "https://i.imgur.com/oe4eFNz.png",
      description: "The Star is the card of hope. In the darkest of nights there is a light that shines the path to home. The Star is inspiration, motivation and gives us strength to move forward."
    },
    { num: "XVIII", title: "The Moon",           url: "https://i.imgur.com/JGs6zE6.png",
      description: "The Moon reminds us that reality is not always what it seems at first glance. In a world of appearances and illusions, the best course is often charted by one's own intuition. The Moon is also the card of dreams, desires, and of course, sleep - Death's nightly ritual."
    },
    { num: "XIX",   title: "The Sun",            url: "https://i.imgur.com/DX7cJ5e.png",
      description: "The Sun symbolizes success. It is a card of freedom, renewal and a bright future that lies ahead. The Sun also represents truth, for its light will always pull back the curtain of shadow that hides the world's secrets. It is also represents greatness and splendor."
    },
    { num: "XX",    title: "Judgement",          url: "https://i.imgur.com/x0bQRdr.png",
      description: "Judgment is the card of renewal. The angel blowing into the horn heralds resurrection and liberation. This card foretells an important change that will result in healing or fulfillment. It is also a symbol of self-worth."
    },
    { num: "XXI",   title: "The World",          url: "https://i.imgur.com/FsDKrCB.png",
      description: "The World lies at the end of The Fool's long and winding journey. Wiser and more world-weary than he started out, the Fool faces a moment of reckoning. Some of us accept where our journey has led us to, while others embark on a new challenge. One thing in this World is certain - you can't have it all."
    },
    { num: "23",   title: "Corset",          url: "https://i.imgur.com/OBesuy9.png",
      description: "Reactive UI and declarative data bindings in a CSS-like language syntax without the complexity of SPA frameworks.<br><br><a href='https://corset.dev/' target='_blank'>corset.dev</a><br><br>Created by <a href='https://twitter.com/matthewcp' target='_blank'>Matthew Phillips</a><br><br>Personally, I LOVE the DX of Corset and it's super easy to use on codepen! Please do check it out!"
    },
    { num: "24",   title: "augmented-ui",          url: "https://i.imgur.com/OBesuy9.png",
      description: "Reshape the web with augmented-ui - a scalable, zero-JS all-CSS library compatible with practically every JS and CSS framework on the web as long as you can add an attribute to the element.<br><a href='http://augmented-ui.com/' target='_blank'>Get augmented</a>.<br><br>(The only images in this <a href='https://codepen.io/challenges/2022/july/3' target='_blank'>Weekly CodePen Challenge</a> entry are the card faces!)<br><br><a href='https://codepen.io/propjockey/pen/LYOpmQM' target='_blank'>augmented-ui consulting available!</a>"
    }
  ]
  removedCardEntry = {
    num: "23",
    title: "Tarot Cards",
    url: "https://i.imgur.com/OBesuy9.png",
    description: "The 22 Tarot cards of Cyberpunk 2077 are derived from the Major Arcana (trump cards) of the Rider-Waite-Smith deck; which swapped the position of traditional Justice and Strength cards. Full Tarot decks total 78 cards. The lower 56 (Minor Arcana) consist of: Ace, 1 to 10, Page, Knight, Queen, and King - each duplicated across 4 suits."
  }
  selected = this.cards[
    ~~(Math.random() * 22)
  ]
  
  selectCard (card) {
    this.selected = card
  }
  
  buttonGroupKeyEvent (selCB, ev) {
    const bttn = ev.target.closest("[role='radio']")
    const group = bttn.closest("[role='group']")
    const bttns = [...group.querySelectorAll("[role='radio']")]
    const index = bttns.indexOf(bttn)

    switch (ev.keyCode) {
      case 37: // left
      case 38: { // up
        const newFocusBttn = bttns[(index + bttns.length - 1) % bttns.length]
        bttn.setAttribute("tabindex", "-1")
        newFocusBttn.setAttribute("tabindex", "0")
        newFocusBttn.focus()
        ev.preventDefault()
        break
      }
      case 39: // right
      case 40: { // down
        const newFocusBttn = bttns[(index + 1) % bttns.length]
        bttn.setAttribute("tabindex", "-1")
        newFocusBttn.setAttribute("tabindex", "0")
        newFocusBttn.focus()
        ev.preventDefault()
        break
      }
      case 13: // enter
      case 32: { // space
        const oldSelBttn = group.querySelector("[aria-checked='true']")
        if (oldSelBttn) {
          oldSelBttn.setAttribute("tabindex", "-1")
          oldSelBttn.setAttribute("aria-checked", "false")
        }
        bttn.setAttribute("tabindex", "0")
        bttn.setAttribute("aria-checked", "true")
        bttn.focus()
        selCB && selCB(index)
        ev.preventDefault()
        break
      }
      case 9: { // tab
        if (ev.shiftKey) {
          group.setAttribute("tabindex", "-1")
          setTimeout(() => group.setAttribute("tabindex", "0"))
        }
      }
    }
  }

  bttnGroupPointerDownEvent (selCB, ev) {
    const bttn = ev.target.closest("[role='radio']")
    if (bttn) {
      const group = bttn.closest("[role='group']")
      const bttns = [...group.querySelectorAll("[role='radio']")]
      bttns.forEach(b => {
        b.setAttribute("tabindex", "-1")
        b.setAttribute("aria-checked", "false")
      })
      bttn.setAttribute("tabindex", "0")
      bttn.setAttribute("aria-checked", "true")
      bttn.focus()
      selCB && selCB(bttns.indexOf(bttn))
    }
  }

  bttnGroupFocusedEvent (ev) {
    if (ev.target === ev.target.closest("[role='group']")) {
      const bttns = [...ev.target.querySelectorAll("[role='radio']")]
      const bttn = ev.target.querySelector("[role='radio'][aria-checked='true']") || bttns[0]
      bttns.forEach(b => {
        b.setAttribute("tabindex", "-1")
        b.setAttribute("aria-checked", "false")
      })
      bttn.setAttribute("tabindex", "0")
      bttn.setAttribute("aria-checked", "true")
      bttn.focus()
    }
  }
  
  themes = ["V's Theme", "Johnny's Theme", "Jane's Theme"]
  themeIndex = 0
  setTheme (x) {
    this.themeIndex = x
  }

  bind () {
    const { cards, selected } = this;

    return sheet`
      [role="group"] {
        --on-selected: ${this.setTheme.bind(this)};
        event: pointerdown bind(
          ${this.bttnGroupPointerDownEvent},
          var(--on-selected, false)
        );
        event: keydown bind(
          ${this.buttonGroupKeyEvent},
          var(--on-selected, false)
        );
        event: focus ${this.bttnGroupFocusedEvent};
      }
      body {
        attr: data-theme-id ${this.themeIndex};
      }
      #major-arcana-2077 {
        --concat: ${(...args) => args.join('')};
        --select-card: ${card => selected = card};
        each-items: ${cards};
        each-template: select(#card-template);
        each-key: title;
      }
      .card {
        --card-data: item();
        --title: get(var(--card-data), title);
        --src: get(var(--card-data), url);
        event: click bind(
          ${this.selectCard},
          var(--card-data)
        );
      }
      [role="dialog"] {
        --concat: ${(...args) => args.join('')};
        --card-data: ${selected || cards[0]};
        --title: get(var(--card-data), title);
        --src: get(var(--card-data), url);
        --description: get(var(--card-data), description);
      }
      .card img,
      [role="dialog"][aria-hidden="false"] .img-frame img {
        attr: id --concat("card-", get(var(--card-data), num));
        attr: src var(--src);
        attr: alt --concat(
          var(--title),
          " - Major Arcana Tarot Card from CyberPunk 2077"
        );
      }
      .card figcaption,
      #modal-title {
        text: var(--title);
      }
      #modal-desc {
        prop: innerHTML var(--description);
      }
      #modalbg,
      #window-pane {
        attr: aria-hidden ${!selected};
      }
      #window-pane button,
      #modalbg {
        event: click bind(${this.selectCard}, false);
      }
    `
  }
})