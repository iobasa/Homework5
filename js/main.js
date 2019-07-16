(() => {
  console.log("fired!");

  // set up your variable stack ->
  let mobileNav = document.querySelector(".nav"),
      navPanel = document.querySelector("#burgerCon"),

      // select ALL of the nav panel anchor tags (the a element)
      navLinks = navPanel.querySelectorAll('a');

  function toggleNav(e) {
    // e is the event object, by default, anchor tags try to navigate somewhere (this is built-in functionality)
    // we don't want that to happen to prevent the default behaviour and with your
    e.preventDefault();

    // console.log is just testing purposes... remove this when you have things working
    console.log('should show nav dropdown');

    // this should only
    if (this.nodeName == "A") {
      debugger;
      // //we clicked on an anchor tag, o do some navigation
      // window.scrollTo ({
      //   // we can ask all the window to scroll to an element on the page => smoothscroll effect
      //   top: this.offsetTop,
      //   behavior: 'smooth'
      // })
    }

    // make the mobile nav show up when you click on the new link at the top right
    // and make it go away again in a second click (so - toggle)
    navPanel.classList.toggle("show-mobile-nav");
  }

  // these are the triggers that fire off our functionality (when user clicks on something)
  mobileNav.addEventListener('click', toggleNav);

  // loop thru the links and add event handling for each one
  navLinks.forEach(link => link.addEventListener('click', toggleNav));
})();
