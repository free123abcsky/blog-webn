<template>
  <header class="drawer-navbar" :class="{'drawer-navbar-fixed': fixed}" role="banner">
    <div class="drawer-container">
      <div class="drawer-navbar-header">
        <a class="drawer-brand" href="javascript:void(0)">爱知室</a>
        <button type="button" class="drawer-toggle drawer-hamburger" @click="toggle">
          <span class="sr-only">toggle navigation</span>
          <span class="drawer-hamburger-icon"></span>
        </button>
      </div>
      <nav class="drawer-nav" role="navigation">
        <ul class="drawer-menu">
          <li><a class="drawer-menu-item" href="./top.html">博文</a></li>
          <li><a class="drawer-menu-item" href="./index.html">实验室</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script type="text/javascript">

  export default{
    name: 'KDrawerNav',
    props: {
      type: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'left', 'right'].indexOf(value) !== -1;
        }
      },
      overlay: {
        type: Boolean,
        default: true
      },
      fixed: {
        type: Boolean,
        default: false
      },
      drawerClass: {
        type: Object,
        default () {
          return {
            nav: 'drawer-nav',
            toggle: 'drawer-toggle',
            overlay: 'drawer-overlay',
            open: 'drawer-open',
            close: 'drawer-close',
            content: 'content-container'
          }
        }
      }
    },
    data(){
      return {
        isMobile: window.ua.mobile,
        state: false
      }
    },
    computed: {
      bodyClass: function () {
        return ("drawer drawer-" + this.type) + (this.fixed ? ' drawer-navbarTopGutter' : '')
      }
    },
    methods: {
      addOverlay() {

        var div = document.createElement("div");
        div.className = this.drawerClass.overlay + ' ' + this.drawerClass.toggle;
        document.body.appendChild(div);
      },
      toggle() {

        if (this.state) {
          this.close();
        } else {
          this.open();
        }
      },
      open() {

        this.state = true;
        this.oUtils
          .removeClass(document.body, this.drawerClass.close)
          .addClass(document.body, this.drawerClass.open);

      },
      close() {

        this.state = false;
        this.oUtils
          .removeClass(document.body, this.drawerClass.open)
          .addClass(document.body, this.drawerClass.close);
      },
      init() {

        this.$wapper = document.body;

        if (this.overlay) {
          this.addOverlay();
        }

        window.onresize = () => {
          return (() => {
            if(this.state){
              this.close();
            }
          })()
        }
      }
    },
    created() {
      document.body.setAttribute("class", this.bodyClass);
    },
    mounted() {
      this.init()
    }
  }

</script>

<style lang="scss">

  .drawer-open {
    overflow: hidden !important;
  }

  .drawer-nav {
    position: fixed;
    z-index: 101;
    top: 0;
    overflow: hidden;
    width: 16.25rem;
    height: 100%;
    color: #222;
    background-color: #fff;
  }

  .drawer-brand {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 3.75rem;
    display: block;
    padding-right: .75rem;
    padding-left: .75rem;
    text-decoration: none;
    color: #5A5454;
  }

  .drawer-menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .drawer-menu-item {
    font-size: 1rem;
    display: block;
    padding: .75rem;
    text-decoration: none;
    color: #222;
  }

  .drawer-menu-item:hover {
    text-decoration: underline;
    color: #555;
    background-color: transparent;
  }

  /*! overlay */

  .drawer-overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
  }

  .drawer-open .drawer-overlay {
    display: block;
  }

  /*!------------------------------------*\
      Top
  \*!------------------------------------*/

  .drawer-top .drawer-nav {
    top: -100%;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 100%;
    -webkit-transition: top .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: top .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }

  .drawer-top.drawer-open .drawer-nav {
    top: 0;
  }

  .drawer-top .drawer-hamburger,
  .drawer-top.drawer-open .drawer-hamburger {
    right: 0;
  }

  /*!------------------------------------*\
      Left
  \*!------------------------------------*/

  .drawer-left .drawer-nav {
    left: -16.25rem;
    -webkit-transition: left .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: left .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }

  .drawer-left .drawer-navbar-header {
    left: 0;
    -webkit-transition: left .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: left .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }

  .drawer-left.drawer-open .drawer-nav,
  .drawer-left .drawer-hamburger,
  .drawer-left.drawer-open .drawer-navbar .drawer-hamburger {
    left: 0;
  }

  .drawer-left.drawer-open .drawer-navbar-header {
    left: 16.25rem;
  }


  /*!------------------------------------*\
      Right
  \*!------------------------------------*/

  .drawer-right .drawer-nav {
    right: -16.25rem;
    -webkit-transition: right .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: right .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }

  .drawer-right .drawer-navbar-header {
    right: 0;
    -webkit-transition: right .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: right .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }

  .drawer-right.drawer-open .drawer-nav,
  .drawer-right .drawer-hamburger,
  .drawer-right.drawer-open .drawer-navbar .drawer-hamburger {
    right: 0;
  }

  .drawer-right.drawer-open .drawer-navbar-header {
    right: 16.25rem;
  }

  /*!------------------------------------*\
      Hamburger
  \*!------------------------------------*/

  .drawer-hamburger {
    position: absolute;
    z-index: 104;
    top: 0;
    display: block;
    box-sizing: content-box;
    width: 2rem;
    padding: 0;
    padding-top: 18px;
    padding-right: .75rem;
    padding-bottom: 30px;
    padding-left: .75rem;
    -webkit-transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    border: 0;
    outline: 0;
    background-color: transparent;
  }

  .drawer-hamburger:hover {
    cursor: pointer;
    background-color: transparent;
  }

  .drawer-hamburger-icon {
    position: relative;
    display: block;
    margin-top: 10px;
  }

  .drawer-hamburger-icon,
  .drawer-hamburger-icon:before,
  .drawer-hamburger-icon:after {
    width: 100%;
    height: 2px;
    -webkit-transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    background-color: #222;
  }

  .drawer-hamburger-icon:before,
  .drawer-hamburger-icon:after {
    position: absolute;
    top: -10px;
    left: 0;
    content: ' ';
  }

  .drawer-hamburger-icon:after {
    top: 10px;
  }

  .drawer-open .drawer-hamburger-icon {
    background-color: transparent;
  }

  .drawer-open .drawer-hamburger-icon:before,
  .drawer-open .drawer-hamburger-icon:after {
    top: 0;
  }

  .drawer-open .drawer-hamburger-icon:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .drawer-open .drawer-hamburger-icon:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  /*!------------------------------------*\
      accessibility
  \*!------------------------------------*/

  /*!
   * Only display content to screen readers
   * See: http://a11yproject.com/posts/how-to-hide-content
   */

  .sr-only {
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  /*!
   * Use in conjunction with .sr-only to only display content when it's focused.
   * Useful for "Skip to main content" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
   * Credit: HTML5 Boilerplate
   */

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    overflow: visible;
    clip: auto;
    width: auto;
    height: auto;
    margin: 0;
  }

  /*!------------------------------------*\
      Sidebar
  \*!------------------------------------*/

  .drawer-sidebar {
    background-color: #fff;
  }

  .drawer-sidebar .drawer-contents {
    background-color: #fff;
  }

  @media (min-width: 640px) {
    .drawer-sidebar .drawer-hamburger {
      display: none;
      visibility: hidden;
    }

    .drawer-sidebar .drawer-nav {
      display: block;
      -webkit-transform: none;
      transform: none;
      position: fixed;
      width: 12.5rem;
      height: 100%;
    }

    /*! Left */
    .drawer-sidebar.drawer-left .drawer-nav {
      left: 0;
      border-right: 1px solid #ddd;
    }

    .drawer-sidebar.drawer-left .drawer-contents {
      margin-left: 12.5rem;
    }

    /*! Right */
    .drawer-sidebar.drawer-right .drawer-nav {
      right: 0;
      border-left: 1px solid #ddd;
    }

    .drawer-sidebar.drawer-right .drawer-contents {
      margin-right: 12.5rem;
    }

    /*! container */
    .drawer-sidebar .drawer-container {
      max-width: 48rem;
    }
  }

  @media (min-width: 750px) {
    .drawer-sidebar .drawer-nav {
      width: 16.25rem;
    }

    .drawer-sidebar.drawer-left .drawer-contents {
      margin-left: 16.25rem;
    }

    .drawer-sidebar.drawer-right .drawer-contents {
      margin-right: 16.25rem;
    }

    /*! container */
    .drawer-sidebar .drawer-container {
      max-width: 60rem;
    }
  }

  /*!------------------------------------*\
      Navbar
  \*!------------------------------------*/

  .drawer-navbarTopGutter {
    padding-top: 3.75rem;
  }

  .drawer-navbar .drawer-navbar-header {
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }

  .drawer-navbar {
    z-index: 102;
    top: 0;
    width: 100%;
  }

  /*! .drawer-navbar modifier */

  .drawer-navbar-fixed{
    position: fixed;
  }

  .drawer-navbar-header {
    position: relative;
    z-index: 102;
    box-sizing: border-box;
    width: 100%;
    height: 3.75rem;
    padding: 0 .75rem;
    text-align: center;
  }

  .drawer-navbar .drawer-brand {
    line-height: 3.75rem;
    display: inline-block;
    padding-top: 0;
    padding-bottom: 0;
    text-decoration: none;
  }

  .drawer-navbar .drawer-brand:hover {
    background-color: transparent;
  }

  .drawer-navbar .drawer-nav {
    padding-top: 3.75rem;
  }

  .drawer-navbar .drawer-menu {
    padding-bottom: 7.5rem;
  }

  @media screen and (max-width: 640px) {

  }

  @media (min-width: 640px) {
    .drawer-navbar {
      height: 3.75rem;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
    }

    .drawer-navbar .drawer-navbar-header {
      position: relative;
      display: block;
      float: left;
      width: auto;
      padding: 0;
      border: 0;
    }

    .drawer-navbar .drawer-menu--right {
      float: right;
    }

    .drawer-navbar .drawer-menu li {
      float: left;
    }

    .drawer-navbar .drawer-menu-item {
      line-height: 3.75rem;
      padding-top: 0;
      padding-bottom: 0;
    }

    .drawer-navbar .drawer-hamburger {
      display: none;
    }

    .drawer-navbar .drawer-nav {
      position: relative;
      left: 0;
      overflow: visible;
      width: auto;
      height: 3.75rem;
      padding-top: 0;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .drawer-navbar .drawer-menu {
      padding: 0;
    }

    /*! dropdown */
    .drawer-navbar .drawer-dropdown-menu {
      position: absolute;
      width: 16.25rem;
      border: 1px solid #ddd;
    }

    .drawer-navbar .drawer-dropdown-menu-item {
      padding-left: .75rem;
    }
  }

  /*!------------------------------------*\
      Dropdown
  \*!------------------------------------*/

  .drawer-dropdown-menu {
    display: none;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

  .drawer-dropdown-menu > li {
    width: 100%;
    list-style: none;
  }

  .drawer-dropdown-menu-item {
    line-height: 3.75rem;
    display: block;
    padding: 0;
    padding-right: .75rem;
    padding-left: 1.5rem;
    text-decoration: none;
    color: #222;
  }

  .drawer-dropdown-menu-item:hover {
    text-decoration: underline;
    color: #555;
    background-color: transparent;
  }

  /*! open */

  .drawer-dropdown.open > .drawer-dropdown-menu {
    display: block;
  }

  /*! drawer-caret */

  .drawer-dropdown .drawer-caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 4px;
    -webkit-transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: transform .2s ease, opacity .2s ease;
    transition: transform .2s ease, opacity .2s ease, -webkit-transform .2s ease;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  /*! open */

  .drawer-dropdown.open .drawer-caret {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  /*!------------------------------------*\
      Container
  \*!------------------------------------*/

  .drawer-container {
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .drawer-container {
      max-width: 60rem;
    }
  }

  @media (min-width: 750px) {
    .drawer-container {
      max-width: 70rem;
    }
  }
</style>
