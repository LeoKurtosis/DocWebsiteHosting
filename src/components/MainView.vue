<template>
  <div>
    <div class="main-view" :class="{ hidden: scrolledDown }">
      <div class="sider sidebar">
        <div class="holder">
          <div class="xx" role="navigation" aria-labelledby="main-nav-heading">
            <br />
          </div>
        </div>
      </div>
      <div class="main">
        <section id="Contact" aria-labelledby="Contact-heading">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
          <a href='/pdf/Your One-stop shop with Nick and Daria through Industrial Alliance.pdf' target="_blank">.</a>
          <br />

          <br />
          <a href='/pdf/Battery Tray.pdf' target="_blank">.</a>
          <br />

          <br />
          <a href='/pdf/Text Clustering (Graduate Project).pdf' target="_blank">.</a>
          <br />

          <br />
          <a href='/pdf/Machined Train.pdf' target="_blank">.</a>
          <br />

          <br />
          <a href='/pdf/Resume.pdf' target="_blank">.</a>
          <br />

          <br />
          <a href='/pdf/Academic Curriculum Vitae.pdf' target="_blank">.</a>
          <br />
          
          <br />
          <a href='/pdf/Paper_1.pdf' target="_blank">.</a>
          <br />

          <br />
          <a href='/pdf/Paper_2.pdf' target="_blank">.</a>
          <br />
        </section>
      </div>
    </div>

  </div>
</template>

<script>
import Card from './globals/Card.vue';
import Fa from './globals/Fa.vue';
import PopOver from './PopOver.vue';
import VueClipboard from 'vue-clipboard2';



export default {
  components: {
    Card,
    Fa,
    PopOver,
    VueClipboard,
  },
  data: () => ({

  }),
  mounted() {

  },

  methods: {

},
  props: {
    scrolledDown: Boolean,
  },
};

</script>

<style>
.swal2-icon.swal2-success {
  border-color: red !important;
}

.swal2-icon.swal2-success .swal2-success-ring {
  border-color: red !important;
}

.swal2-icon.swal2-success .swal2-success-line-tip,
.swal2-icon.swal2-success .swal2-success-line-long {
  background-color: red !important;
  border-color: red !important;
}

/* Make the SweetAlert2 container transparent */
.swal2-container {
  background-color: transparent !important;
}

/* Optional: If you want to make the popup box transparent as well */
.swal2-popup {
  background-color: transparent !important;
  box-shadow: none !important; /* Remove shadow if desired */
}

/* Change the title color to white */
.swal2-title {
  color: white !important;
  font-family: 'Your Font Family', sans-serif !important; /* Replace with your actual font family */
  font-size: 1rem !important;
}


</style>


<style lang="scss" scoped>
#intro {
  .txt {
    a {
      display: none;
      text-decoration: none;
      color: white;
    }
  }
}
@media screen and (max-width: 680px) {
  .cards {
    display: block !important;
  }
  .card {
    width: 100% !important;
    height: 33rem !important;
  }
  #intro {
    .txt {
      a {
        display: hidden;
      }
    }
  }
  .hidden {
    #intro {
      .txt {
        a {
          display: block;
        }
      }
    }
  }
  .cont {
    grid-template-areas:
      'date'
      'extra'
      'title'
      'location'
      'txt' !important;
    grid-template-columns: 100% !important;
  }
  .txt h1 {
    font-size: 7vw !important;
  }
}
#Contact,
#CV {
  a {
    color: rgb(29, 30, 33);
    i {
      font-size: 0.9rem;
    }
  }
  a:hover {
    color: hsl(0, 0%, 63%);
  }
}
#Contact1,
#CV {
  a {
    color: white;
    i {
      font-size: 0.9rem;
    }
  }
  a:hover {
    color: hsl(0deg 0% 63%);
  }
}
.Education,
.CV {
  h3 {
    font-size: 0.9rem;
  }
  cursor: default;
}
.cont {
  display: grid;
  grid-template-areas:
    'date title'
    'extra location'
    '. txt';
  grid-template-columns: 11rem 370px;
  gap: 0rem 1rem;
  margin-bottom: 1.3rem;
  span:nth-child(1) {
    grid-area: date;
    font-weight: 600;
    font-size: 0.9rem;
    color: hsl(0deg 0% 63%);
    letter-spacing: -0.02rem;
  }
  span:nth-child(2) {
    grid-area: extra;
    font-size: 0.87rem;
    color: hsl(0deg 0% 63%);
    letter-spacing: -0.02rem;
  }
  span:nth-child(3) {
    grid-area: title;
  }
  span:nth-child(4) {
    grid-area: location;
    font-size: 0.9rem;
    color: hsl(0deg 0% 63%);
  }
  span:nth-child(5) {
    grid-area: txt;
    font-size: 0.9rem;
    color: hsl(0deg 0% 63%);
  }
}

.contact {
  // margin: 2rem 0rem;
  display: flex;
  flex-flow: column;
  gap: 0.7rem;
  width: 100%;
  transition: opacity 0.3s;
  a {
    text-decoration: none;
    color: var(--txt-med);
    padding: 0rem 1.5rem;
  }
}
.contact {
  a:hover {
    color: white;
  }
}
#Intro {
  a {
    color: var(--accent-1);
    text-decoration: none;
    i {
      margin-left: 0.4rem;
    }
  }
}
section {
  padding: 6rem 0rem;
  &:empty {
    display: none;
  }
  span {
    display: block;
    max-width: 550px;
  }
}
.mainitem-active {
  border-radius: 6px;
  background: hsl(220 100% 71% / 0.11);
  color: hsl(220 100% 53% / 1) !important;
  margin-bottom: 0.3rem;
}
.title {
  font-size: 12px !important;
  font-weight: 700 !important;
  margin: 0.2em 0em 1rem 0rem;
  text-transform: capitalize;
  color: #b2b2b2;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  width: 100%;
  text-align: center;
}
.xx {
  display: flex;
  flex-flow: column;
  align-items: self-end;
  gap: 0.7rem;
  a {
    transition: min-width 0.3s, border 0.3s, padding 0.3s, box-shadow 0.3s,
      background 0.15s;
    width: fit-content;
    min-width: 210px;
    max-width: -webkit-fill-available;
  }
}
// This is where we change the colors for the down bar
.listit:nth-child(2).first {
  background: rgb(220, 20, 60);
}
.listit:nth-child(3).first {
  background: rgb(255, 49, 49);
}
.listit:nth-child(4).first {
  background: rgb(255, 36, 0);
}
.listit:nth-child(5).first {
  background: rgb(128, 0, 32);
}
.listit:nth-child(6).first {
  background: rgb(170, 74, 68);
}
.listit:nth-child(7).first {
  background: rgb(128, 0, 32);
}
.listit:hover {
  background-color: hsla(0, 0%, 80%, 0.15);
}
.listit {
  
  text-decoration: none;
  display: block;
  padding: 0.75rem 1.8rem;
  margin-right: 1rem;
  color: white;
  font-size: 0.95em;
  cursor: pointer;
  transition: border 0.3s, padding 0.3s, box-shadow 0.3s, background 0.15s;
  border-left: 2px solid transparent;
  font-weight: 500;
  border-radius: 0.4rem;
  float: left;
}
.mainitem {
  padding: 0.5rem 0.5rem;
}
.current {
  border-left: 6px solid #ffffff1c;
  // box-shadow: 0px 0px 0px 0px black;
}
.first {
  color: black;
  color: black !important;
  padding-left: 2rem;
  font-weight: 600;
  transform-origin: left;
  animation: pop 0.25s ease-out;
}
@keyframes pop {
  35% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="scss" scoped>
.card-col:nth-child(2) {
  margin-top: 5rem;
}
.cards {
  display: flex;
  gap: 1.7rem;
}
.card-col {
  display: flex;
  flex-flow: column;
  gap: 1.7rem;
}

.sidebar,
.sideoptions {
  transition: width 0.3s;
}
@media screen and (max-width: 1300px) {
  .main-view {
    grid-template: 'siderbar main main';
  }
  .sideoptions {
    display: none;
  }
}
@media screen and (max-width: 1023px) {
  .main-view {
    grid-template: 'main main main' !important;
    grid-template-columns: 1fr !important;
    width: auto !important;
  }
  .sidebar {
    display: none;
  }
}

.holder {
  scrollbar-color: #bebebe transparent;
  scrollbar-width: thin;
}
.holder:hover {
  scrollbar-color: #bebebe #f2f2f2;

  scrollbar-width: revert !important;
}

.holder::-webkit-scrollbar {
  width: 15px;
  padding: 10px;
}

.holder::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 5px solid transparent;
  background-clip: content-box;
}

.sider:hover .holder::-webkit-scrollbar {
  width: 15px;
}

.sider:hover .holder::-webkit-scrollbar-track {
  border-radius: 10px;
}

.sider:hover .holder::-webkit-scrollbar-thumb {
  border: 0;
  border-radius: 10px;
}

.sider:hover .holder::-webkit-scrollbar-thumb:hover {
  background: #818b99;
}
.sider {
  height: 100%;
  width: 310px;
}
.holder {
  padding: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  height: calc(100vh - 90px);
  overflow-y: auto;
}
.sidebar {
  justify-self: right;
}

.link .fas {
  font-size: 0.8rem;
}

.filters > .text {
  padding: 0.5em 0em;
  display: block;
}
.filters > .text > input {
  width: 125px;
  border: 0;
  background: 0;
  margin: 0rem 0.3rem;
  border-bottom: 1px solid gray;
}
.filters {
  margin: 2rem 0rem;
}

h2 {
  font-size: 1rem;
  color: var(--txt-med);
  margin-bottom: 2rem;
  cursor: default;
}
.main-view {
  display: grid;
  grid-template: 'siderbar main';
  grid-template-columns: 1fr minmax(600px, 770px);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
}
div > .main {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  box-sizing: border-box;
  line-height: 1.6;
  color: var(--txt);
  padding: 1.5rem 1.5rem 80vh 1.5rem;
  width: 100%;
  z-index: 100;
}
</style>
<style scoped lang="scss">
.txt h1 {
  font-size: 3rem;
  margin: 0.2rem 0;
  line-height: 1.3;
  max-width: 600px;
}
.main-view {
  transition: background 0.3s;
  section {
    transition: opacity 0.3s;
  }
}

.main-view,
.main-view {
  .main .holder,
  .sider {
    transition: background 0.3s;
  }
}
.hidden {
  .xx {
    a {
      transition: min-width 0.3s;
      min-width: 0px;
      width: fit-content;
    }

    .title {
      opacity: 0;
    }
    .listit {
      border: 0;
      color: black;
    }
    .listit:nth-child(2) {
      background: rgb(220, 20, 60);
    }
    .listit:nth-child(3) {
      background: 	rgb(255, 49, 49);
    }
    .listit:nth-child(4) {
      background: rgb(255, 36, 0);
    }
    .listit:nth-child(5) {
      background: rgb(128, 0, 32);
    }
    .listit:nth-child(6) {
      background: rgb(170, 74, 68);
    }
    .listit:nth-child(7) {
      background: rgb(128, 0, 32);
    }
    .listit:hover {
      background: #fbfbfb;
    }
  }
  .contact,
  section {
    opacity: 0;
  }
  .main,
  .holder,
  .sider {
    background: transparent !important;
  }
  background: transparent !important;
  box-shadow: unset !important;
}
#intro {
  opacity: 100;
}

</style>
