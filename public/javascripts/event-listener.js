document.addEventListener('WebComponentsReady', function() {

  var eventListener = document.querySelector('#eventListener');

  eventListener.addLocationToMap = function(event) {
    var map = document.querySelector("interactive-map");
    map.addLocationToMap(event.detail.location);
  };

  eventListener.navigationbarScrollHandler = function(event) {
    var scroller = event.detail.target;
    if (scroller.scrollTop !== 0) {
      _colapseHeader();
      document.querySelector("#scrollToTop").style.display = "block";
    } else {
      var headerPanel = document.querySelector("#headerPanel");
      if ((headerPanel.scroller.scrollHeight + headerPanel.header.clientHeight) > document.body.clientHeight) {
        _expandHeader();
        document.querySelector("#scrollToTop").style.display = "none";
      }
    }
  };

  eventListener.scrollToTop = function() {
    if ((headerPanel.scroller.scrollHeight + headerPanel.header.clientHeight) <= document.body.clientHeight) {
      _expandHeader();
      document.querySelector("#scrollToTop").style.display = "none";
    } else {
      var scroller = document.querySelector("#headerPanel").scroller;
      $(scroller).animate({scrollTop: 0}, "slow");
    }
  };

  eventListener.setContacts = function(event) {
    var contactInfo = document.querySelector("#contactInfo");
    contactInfo.contacts = event.detail.contacts;
    contactInfo.setBackgroundColor("#263238");
  };

  eventListener.reroute = function(event) {
    _scrollToSection(event.target.parentNode.getAttribute("hash"));
  };

  eventListener.reroutePanel = function(event) {
    document.querySelector("#mainDrawerPanel").closeDrawer();
    _scrollToSection(event.target.getAttribute("hash"));
  };

  $(document).click(function(loc) {
    _logClicks(loc.clientX, loc.clientY);
  });

});

function _colapseHeader() {
  document.querySelector("#headerNavigation").classList.remove("tallHeader");
}

function _expandHeader() {
  if (!window.matchMedia("only screen and (max-width:" + headerResponsiveScreenSize + ")").matches) {
    document.querySelector("#headerNavigation").classList.add("tallHeader");
  }
}

function _logClicks(x, y) {
  console.log('x location: ' + x + '; y location: ' + y);
}

function _scrollToSection(section) {
  _colapseHeader();
  var scroller = document.querySelector("#headerPanel").scroller;
  var currentScroll = $(String(section)).position().top;
  var firstScroll = $("#bumper").position().top;
  var scrollVal = currentScroll - firstScroll;
  $(scroller).animate({scrollTop: scrollVal}, {
    easing: "swing",
    done: function() {
      window.location.hash = section;
    }
  });
}
