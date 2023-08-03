new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Genius ft. Sia, Diplo, Labrinth",
          artist: "LSD",
          cover: "https://i.scdn.co/image/ab67616d0000b2733f159ae07dd556323f39f47b",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
          url: "https://youtu.be/HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "Nonsense",
          artist: "Sabrina Carpenter",
          cover: "https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf",
          source: "mp3/nonsense.mp3",
          url: "https://youtu.be/YcSP1ZUf1eQ",
          favorited: false
        },
        {
          name: "lovememore.",
          artist: "dosii",
          cover: "https://i.scdn.co/image/ab67616d0000b2732f122f5f25a1c8d12ba06e05",
          source: "mp3/lovememore.mp3",
          url: "https://youtu.be/9TSPbfbJUkQ",
          favorited: false
        },
        {
          name: "Love Affair",
          artist: "UMI",
          cover: "https://images.genius.com/52a039175cf3acb474466a53c792331e.1000x1000x1.png",
          source: "mp3/loveaffair.mp3",
          url: "https://youtu.be/hmsyIT8OVZk",
          favorited: false
        },
        {
          name: "telepatía",
          artist: "Kali Uchis",
          cover: "https://i.scdn.co/image/ab67616d0000b273044a5466dac00f7b3c570b99",
          source: "mp3/telepatia.mp3",
          url: "https://youtu.be/Dwzk-XZxZ4k",
          favorited: false
        },
        {
          name: "Mona Lisa",
          artist: "VALNTN, Peter Fenn & Tray Haggerty",
          cover: "https://i.scdn.co/image/ab67616d0000b273714e0438195b368665f3edac",
          source: "mp3/monalisa.mp3",
          url: "https://youtu.be/DzR4hlTzMHY",
          favorited: false
        },
        {
          name: "Honey",
          artist: "Johnny Balik",
          cover: "https://i.scdn.co/image/ab67616d0000b2739b4f3635a63d977996d54d04",
          source: "mp3/honey.mp3",
          url: "https://youtu.be/8z-27EJcMxc",
          favorited: false
        },
        {
          name: "Moonlight",
          artist: "Chase Atlantic",
          cover: "https://i.scdn.co/image/ab67616d0000b273da513d25e8b3cdd4f43f7512",
          source: "mp3/moonlight.mp3",
          url: "https://youtu.be/ztls1OGU408",
          favorited: false
        },
        {
          name: "Washing Machine Heart",
          artist: "Mitski",
          cover: "https://i.scdn.co/image/ab67616d0000b273c428f67b4a9b7e1114dfc117",
          source: "mp3/washing.mp3",
          url: "https://youtu.be/3vjkh-acmTE",
          favorited: false
        },
        {
          name: "OMG",
          artist: "NewJeans",
          cover: "https://i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01",
          source: "mp3/omg.mp3",
          url: "https://youtu.be/sVTy_wmn5SU",
          favorited: false
        },
        {
          name: "LILAC",
          artist: "IU",
          cover: "https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff",
          source: "mp3/lilac.mp3",
          url: "https://youtu.be/v7bnOxV4jAc",
          favorited: false
        },
        {
          name: "Nxde",
          artist: "(G)I-DLE",
          cover: "https://i.scdn.co/image/ab67616d0000b273ac815bdd584468a7aa0216e1",
          source: "mp3/nxde.mp3",
          url: "https://youtu.be/fCO7f0SmrDc",
          favorited: false
        },
        {
          name: "Take A Slice",
          artist: "Glass Animals",
          cover: "https://i.scdn.co/image/ab67616d0000b273ec3d15eab5bd77027abc4b23",
          source: "mp3/slice.mp3",
          url: "https://youtu.be/9DySfgEj1hY",
          favorited: false
        },
        {
          name: "KAZINO",
          artist: "BIBI",
          cover: "https://i.scdn.co/image/ab67616d0000b273ba84f2821a0c0ff527121229",
          source: "mp3/kazino.mp3",
          url: "https://youtu.be/ObzvA8tx9aA",
          favorited: false
        },
        {
          name: "BABYDOLL",
          artist: "Ari Abdul",
          cover: "https://i.scdn.co/image/ab67616d0000b27383ca211e5073458c3d5ea09a",
          source: "mp3/babydoll.mp3",
          url: "https://youtu.be/vnthp1ZgWiU",
          favorited: false
        },
        {
          name: "Go F*ck Yourself",
          artist: "Two Feet",
          cover: "https://i.scdn.co/image/ab67616d0000b273488f7916bcb14082e1acb101",
          source: "mp3/fuck.mp3",
          url: "https://youtu.be/T7K0pZ9tGi4",
          favorited: false
        },
        {
          name: "Mind Games",
          artist: "Sickick",
          cover: "https://i.scdn.co/image/ab67616d0000b27373862007fbff72fcdddcf6bc",
          source: "mp3/mindgames.mp3",
          url: "https://youtu.be/QjQliDFIsnk",
          favorited: false
        },
        {
          name: "Cyber Sex",
          artist: "Doja Cat",
          cover: "https://i.scdn.co/image/ab67616d0000b273dd0316b194097528348c8eb0",
          source: "mp3/cybersex.mp3",
          url: "https://youtu.be/uDr9hRJqPX4",
          favorited: false
        },
        {
          name: "Rules",
          artist: "Doja Cat",
          cover: "https://static.wikia.nocookie.net/dojacat/images/8/87/Hot_Pink_ALT.jpeg/revision/latest?cb=20211117230207",
          source: "mp3/rules.mp3",
          url: "https://youtu.be/UVadfCxNnoY",
          favorited: false
        },
        {
          name: "Girls Need Love",
          artist: "Summer Walker",
          cover: "https://i.scdn.co/image/ab67616d0000b273fb023e6073e38a52082cc7b6",
          source: "mp3/girls.mp3",
          url: "https://youtu.be/1l8vIAvAerE",
          favorited: false
        },
        {
          name: "The Big Bang",
          artist: "Rock Mafia",
          cover: "https://i.scdn.co/image/ab67616d0000b273d0ad666ba23ad027f5a0bfa0",
          source: "mp3/bigbang.mp3",
          url: "https://youtu.be/5etLRgwXmh0",
          favorited: false
        },
        {
          name: "FEVER",
          artist: "ENHYPEN",
          cover: "https://i.scdn.co/image/ab67616d00001e021c1ea5bfa5680ac877acdd55",
          source: "mp3/fever.mp3",
          url: "https://youtu.be/X7d6Dt17yHk",
          favorited: false
        },
        {
          name: "Muddy Water",
          artist: "Stray Kids",
          cover: "https://i.scdn.co/image/ab67616d0000b2733613e1e0d35867a0814005a9",
          source: "mp3/muddy.mp3",
          url: "https://youtu.be/WVPd9dZqo8Y",
          favorited: false
        },
        {
          name: "The Weekend",
          artist: "BIBI",
          cover: "https://i.scdn.co/image/ab67616d0000b273d373d58ad02ede9bfba2dbb5",
          source: "mp3/weekend.mp3",
          url: "https://youtu.be/K19M4o6vRL8",
          favorited: false
        },
        {
          name: "Day 1 ◑",
          artist: "HONNE",
          cover: "https://i.scdn.co/image/ab67616d0000b273210933bff4e6e68dc23472b0",
          source: "mp3/day.mp3",
          url: "https://youtu.be/hWOB5QYcmh0",
          favorited: false
        },
        {
          name: "Venus",
          artist: "DPR LIVE",
          cover: "https://i.scdn.co/image/ab67616d0000b273fd20d9671c8a3bdb6dd99e3c",
          source: "mp3/venus.mp3",
          url: "https://youtu.be/mlSR4lNn0Jc",
          favorited: false
        },
        {
          name: "Flower",
          artist: "Johnny Stimson",
          cover: "https://i.scdn.co/image/ab67616d0000b273d080007dee6d6d60e859f7bc",
          source: "mp3/flower.mp3",
          url: "https://youtu.be/sgNkCrAhTGc",
          favorited: false
        },
        {
          name: "Heartbreak Anniversary",
          artist: "Giveon",
          cover: "https://i.scdn.co/image/ab67616d0000b2733317fc12f8b9a9a0b8459766",
          source: "mp3/heartbreak.mp3",
          url: "https://youtu.be/uWRlisQu4fo",
          favorited: false
        },
        {
          name: "Sunflower",
          artist: "Post Malone, Swae Lee",
          cover: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
          source: "mp3/sunflower.mp3",
          url: "https://youtu.be/cKMQz1Rf2ow",
          favorited: false
        },
        {
          name: "Any Song",
          artist: "ZICO",
          cover: "https://i.scdn.co/image/ab67616d0000b2735f9608114e13bb4e5e6b0399",
          source: "mp3/anysong.mp3",
          url: "https://youtu.be/UuV2BmJ1p_I",
          favorited: false
        },
        {
          name: "Cruel Summer",
          artist: "Taylor Swift",
          cover: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
          source: "mp3/cruelsummer.mp3",
          url: "https://youtu.be/PgM3FlW8n_s",
          favorited: false
        },
        {
          name: "God's Menu",
          artist: "Stray Kids",
          cover: "https://i.scdn.co/image/ab67616d0000b273fad8c4176e8df7173479f959",
          source: "mp3/godsmenu.mp3",
          url: "https://youtu.be/TQTlCHxyuu8",
          favorited: false
        },
        {
          name: "Not Mine",
          artist: "DAY6",
          cover: "https://i.scdn.co/image/ab67616d0000b273a41b630cd072cf4815f02ebf",
          source: "mp3/notmine.mp3",
          url: "https://youtu.be/crecrLp0iCE",
          favorited: false
        },
        {
          name: "LEFT RIGHT",
          artist: "XG",
          cover: "https://i.scdn.co/image/ab67616d0000b2733f40fd20e67b865fca5391a3",
          source: "mp3/leftright.mp3",
          url: "https://youtu.be/T6YVgEpRU6Q",
          favorited: false
        },
        {
          name: "Need To Know",
          artist: "Doja Cat",
          cover: "https://i.scdn.co/image/ab67616d0000b273174432abda9e81db097f4046",
          source: "mp3/needtoknow.mp3",
          url: "https://youtu.be/dI3xkL7qUAc",
          favorited: false
        },
        {
          name: "The Feels",
          artist: "TWICE",
          cover: "https://i.scdn.co/image/ab67616d0000b273557395cc096cb7b22eff310e",
          source: "mp3/feels.mp3",
          url: "https://youtu.be/f5_wn8mexmM",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});