<template>
  <div>
    <div class="main-view" :class="{ hidden: scrolledDown }">
      <div class="sider sidebar">
        <div class="holder">
          <div class="xx" role="navigation" aria-labelledby="main-nav-heading">
            <div class="title" id="main-nav-heading">Contents</div>
            <a class="listit" href="#intro">Intro</a>
            <a class="listit" href="#Intro">About me</a>
            <a class="listit" href="#Project">Projects</a>
            <!---<a class="listit" href="#CV">Experience</a>-->
            <a class="listit" href="#Contact">Extra Information</a>
            <a class="listit" href="#Contact1">Contact</a>
            <br />
            <div class="contact">

              <a href='/pdf/Your One-stop shop with Nick and Daria through Industrial Alliance.pdf' target="_blank">Your One-stop shop with Nick and Daria through Industrial Alliance</a>
              <a href='/pdf/Battery Tray.pdf' target="_blank">Battery Tray</a>
              <a href='/pdf/Text Clustering (Graduate Project).pdf' target="_blank">Text Clustering</a>
              <a href='/pdf/Machined Train.pdf' target="_blank">Machined Train</a>

              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <section id="intro">
          <div class="txt">
            <h1>
              Hello! We are Nicholas Sabry and Daria Fedorvoa
              <br />
              Canadian financial advisors
            </h1>
            <br />
            <a href="#Intro">About me <Fa fa="arrow-down" /></a>
          </div>
        </section>
        <section id="Intro" aria-labelledby="intro-heading">
          <h2 id="intro-heading">About me</h2>

          <p>Hello! We are Nicholas Sabry and Daria Fedorvoa</p>

          <p>Currently, a Ph.D. candidate in Mechanical Engineering at The University of British Columbia, I specialize in enhancing friction stir welding (FSW) processes with a focus on residual stress research.</p>

          <p>Here's a snapshot of my impact and experience:</p>

          <ul>
            <li>At <a href="https://www.ansto.gov.au/our-facilities/australian-centre-for-neutron-scattering/neutron-scattering-instruments/kowari" target="_blank" style="color: #007BFF;">ANSTO</a> Nuclear Research Experiments, I've deepened understanding of FSW by investigating weld sequences and aluminum alloys using neutron diffraction.</li>
            <li>Presented twice at the <a href="https://www.tms.org/portal/ABOUT/News___Media/Fact_Sheet/portal/About/News___Media/Fact_Sheet.aspx?hkey=7cb69927-ccd4-4564-82bb-dde9f97eda39" target="_blank" style="color: #007BFF;">TMS</a> Annual Meeting & Exhibition on FSW and residual stress, engaging with over 50 senior engineers and expanding my professional network.</li>
            <li>In collaboration with <a href="https://www.nemak.com/products-and-technologies/?sc=0" target="_blank" style="color: #007BFF;">Nemak</a> R&D and <a href="https://neutrons.ornl.gov/hidra" target="_blank" style="color: #007BFF;">ORNL</a>, streamlined international communication and data sharing, optimizing manufacturing to reduce welding distortions in hybrid vehicle trays.</li>
            <li>Improved <a href="https://tolko.com/divisions/canada/lake-country-bc/" target="_blank" style="color: #007BFF;">Tolko</a> Industries' production processes, leading to a threefold increase in annual fruit bin production.</li>
            <li>Completed aluminum alloy characterization at <a href="https://www.material.lth.se/" target="_blank" style="color: #007BFF;">Lund</a> Institute, advancing IC engine material knowledge through accostic emission tests, tensile tests, and fatigue tests.</li>
          </ul>

          <p>My technical skillset includes MATLAB, SolidWorks, SEM/EBSD Analysis, and proficiency in diverse machining techniques, coupled with strong presentation skills.</p>

          <p>For more about my projects continue scrolling below! Alternatively, connect with me on LinkedIn or reach out via email.</p>


        </section>
        <section id="Project" aria-labelledby="project-heading">
          <h2 id="project-heading">Projects</h2>
          <div class="cards">
            <div class="card-col">
              <!-- Left Side -->
              <Card :item="projects[5]" :txt="select" /> <!-- Casting Project -->
              <Card :item="projects[1]" :txt="select" /> <!-- Text Clustering -->
              <Card :item="projects[0]" :txt="select" /> <!-- Sweden-->
              <Card :item="projects[6]" :txt="select" /> <!-- MicroFab-->
              <Card :item="projects[8]" :txt="select" /> <!-- Office-->
            </div>
            <div class="card-col">
              <!-- Right Side -->
              <Card :item="projects[4]" :txt="select" />  <!-- Capstone -->
              <Card :item="projects[2]" :txt="select" />  <!-- Motor -->
              <Card :item="projects[3]" :txt="select" />  <!-- Hover Craft -->
              <Card :item="projects[7]" :txt="select" />  <!-- Train -->
            </div>
          </div>
        </section>
        <!--<section id="Experience"></section>
        <section id="CV" aria-labelledby="CV-heading">
          <h2 id="CV-heading">Experience</h2>
          <div class="CV">
            <h3>Experience</h3> 
            <div class="cont" v-for="i in Experience" :key="i.location">
              <span>{{ i.date }}</span>
              <span>{{ i.extra }}</span>
              <span>{{ i.title }}</span>
              <span>{{ i.location }}</span>
              <span>{{ i.txt }}</span>
            </div>
          </div>
          -->
          <div class="Education">
            <h3>Education</h3>
            <div class="cont" v-for="i in school" :key="i.title">
              <span>{{ i.date }}</span>
              <span>{{ i.extra }}</span>
              <span>{{ i.title }}</span>
              <span>{{ i.location }}</span>
              <span>{{ i.txt }}</span>
            </div>
          </div>
          <br />
          <!-- <a href='/pdf/Curriculum-Vitae.pdf' target="_blank">Click to View PDF</a> -->
       

        <section id="Contact" aria-labelledby="Contact-heading">
          <h2 id="Contact-heading">Extra Information</h2>

          <br />
          <a href='/pdf/Resume_NS.pdf' target="_blank">PDF Resume</a>
          <br />

          <br />
          <a href='/pdf/Curriculum-Vitae_NS.pdf' target="_blank">PDF Curriculum Vitae</a>
          <br />

          <br />
          <a href="https://drive.google.com/file/d/1T5q5BMrjqCnMz0mhPWYR-Q88w3G0euek/view?usp=sharing" target="_blank">Transcript</a>
          <br />

          <br />
          <a href="https://www.linkedin.com/in/nicholas-sabry/" target="_blank">LinkedIn</a>
          <br />

          <br />
          <a href="https://github.com/leonthelionman" target="_blank">GitHub</a>
          <br />

          <br />
          <a href="https://www.youtube.com/@nicksabry6116/videos" target="_blank">YouTube</a>
          <br />
        </section>
        
        <section id="Contact1" aria-labelledby="Contact-heading">
          <h2 id="Contact-heading">Contact</h2>
          
           nicholas@sabry-engineering.com
          <br />
          <a href="mailto:nicholas@sabry-engineering.com">
            <Fa fa="envelope-o" /> Write e-mail
          </a>
          <br />
          <br />
          (778) 581-6075
          <br />
          <a href="tel:(778) 581-6075"> <Fa fa="phone" /> Call</a>
          <br />
        </section>
       
      </div>
    </div>
    <PopOver :selected="selected" :closeWindow="closePopOver" />
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
    Experience: [
        { 
        date: 'September / 2020 – Present',
        extra: '',
        title: 'Engineering and Materials Researcher',
        location: 'The University of British Columbia, Canada',
        txt: "The battery tray is an essential component that protects and controls battery-cell temperatures in electric and plug-in hybrid vehicles.  The functional stress limit of the battery tray heavily depends on the residual stress acquired from the manufacturing process. Consequently, exceeding the stress limit of the battery tray during operation could compromise the battery cells and may risk the vehicle's safety. Hence, understanding residual stress formation is vital for design and safety concerns. In the current study, Al 6061-plates are friction-stir-welded (FSW) to an A365 high-pressure die-cast battery tray to create a sealed coolant channel with a high cooling capacity to maximize battery cell efficiency and prevent damage due to unregulated temperature. Consequently, this multi-material FSW lap weld introduces residual stress into the battery tray, leading to distortion in the tray. Burnishing and coining are post-FSW straightening techniques that correct the distortion; however, straightening the battery tray has unknown effects on the residual stress. Therefore, neutron diffraction is utilized to characterize residual stresses after straightening.",
      },
        { 
        date: 'September / 2020 – December / 2021',
        extra: '',
        title: 'Graduate Teaching Assistantships',
        location: 'The University of British Columbia, Canada',
        txt: "The responsibilities of this position included teaching undergraduate groups of 30-45 students on topics related to the machining process essential to the production of any engineered product. The topics and equations taught included casting, forming, welding, meteorology, and all the aspects of traditional machining. Further responsibilities include assisting with the student's evaluation, motivating students to enhance their learning experience, and answering any questions from the students.",
      },
      { 
        date: 'September / 2019 – June / 2020',
        extra: '',
        title: 'Production Enhancement Internship',
        location: 'Tolko Industries, Canada',
        txt: 'Tolko Industries Ltd. Lake Country Division is a forest product manufacturing company. They specifically make fruit harvest bins used for the local agriculture in the Okanagan and other parts of Western Canada and the USA. Unfortunately, Tolko currently is not producing enough bins to generate adequate company revenue.This project designed manufacturing processes and production layouts for equipment installation, assembly, machining, and material handling, focusing on improved production efficiency. The redesigned layouts utilized 5S+1 systems, preventive maintenance schedules, and PLC upgrades to increase bin production efficiency.',
      },
      {
        date: 'May / 2019 – July / 2019',
        extra: '',
        title: 'Fitness-for-Service Characterization Internship',
        location: 'Lund University, Sweden',
        txt: "This internship focused on the fitness-for-service characterization of novel aluminum alloys for applications in next-generation IC engines utilizing additions of rare earth elements, such as Cerium (Ce), to Al alloys. The alloy's mechanical properties were characterized by tension, torsion, and fatigue loading. While the microstructure and resulting fracture surface were analyzed through an optical microscope and embedded analysis systems to quantify differences in brittle and ductile modes of fracture.",
      },
      {
        date: 'September / 2017 – January / 2018',
        extra: '',
        title: 'Battery Innovation Project Assistant',
        location: 'The University of British Columbia, Canada',
        txt: "Cycling Panasonic GA and Samsung 30Q battery cells to characterize performance loss for Grin Technology. Analyzing data, developing charging technology, and helping build testing protocols.",
      },
    ],
    school: [
      {
        date: 'May / 2020 – Present',
        extra: '',
        title: "Doctor of Philosophy - Mechanical Engineering",
        location: 'The University of British Columbia, Canada',
        txt: '',
      },
      {
        date: 'Sep / 2016 – April / 2020',
        extra: '',
        title: "Bachelor's degree - Mechanical Engineering",
        location: 'The University of British Columbia, Canada',
        txt: '',
      },
    ],
    projects: [
      {
        id: 0,
        images: [
          {
            img: '/images/sweden.gif',
          },
          {
            img: '/images/06.png',
          },
        ],
        title: 'Aluminum Alloys for IC Engines',
        tags: ['Aluminum Alloys for IC Engines'],
        demo: '',
        source: 'https://drive.google.com/file/d/1Ox8wlup8MmAspwzCUeQ9U9rgvHzStbDu/view?usp=sharing',
      },
      {
        id: 1,
        images: [
          {
            img: '/images/text-clustering.gif',
          },
          {
            img: '/images/01.png',
          },
        ],
        title: 'Text Clustering Algorithm',
        tags: ['Text Clustering Algorithm'],
        demo: '',
        source: 'https://drive.google.com/file/d/19ekfrIs3Vaaxkc7Rw1yru82nFmACA7a4/view?usp=sharing',
      },
      {
        id: 2,
        images: [
          {
            img: '/images/motor.gif',
          },
          {
            img: '/images/03h.png',
          },
        ],
        title: '3 Phase Motor',
        tags: ['3 Phase Motor'],
        demo: '',
        source: 'https://www.youtube.com/watch?v=KMNwfbTEBX0&list=PLy4XSJjDY25OjEj1yoCKhDZuhf_TmH_6w&index=5',
      },
      {
        id: 3,
        images: [
          {
            img: '/images/hovercraft.gif',
          },
          {
            img: '/images/02.png',
          },
        ],
        title: 'Hovercraft',
        tags: ['Hovercraft',],
        demo: '',
        source: 'https://www.youtube.com/watch?v=c19TbN9TUh0&list=PLy4XSJjDY25OjEj1yoCKhDZuhf_TmH_6w&index=3',
      },
      {
        id: 4,
        images: [
          {
            img: '/images/capstone.gif',
          },
          {
            img: '/images/04.png',
          },
        ],
        title: 'Production Enhancement',
        tags: ['Production Enhancement'],
        demo: '',
        source: 'https://www.youtube.com/watch?v=1etsTHkG9bg',
      },
      {
        id: 5,
        images: [
          {
            img: '/images/cast2.gif',
          },
          {
            img: '/images/05.png',
          },
        ],
        title: 'Plate Casting',
        tags: ['Plate Casting'],
        demo: '',
        source: 'https://hppm.ok.ubc.ca/research/residual-stress-characterization/#:~:text=Residual%20stress%20in%20friction%20stir%20welding',
      },
      {
        id: 6,
        images: [
          {
            img: '/images/MicroFab.gif',
          },
          {
            img: '/images/07.png',
          },
        ],
        title: 'Micro Fabrication',
        tags: ['Micro Fabrication'],
        demo: '',
        source: 'https://www.youtube.com/watch?v=Okvxo_dPgEc&feature=youtu.be',
      },
      {
        id: 7,
        images: [
          {
            img: '/images/Train.gif',
          },
          {
            img: '/images/08.png',
          },
        ],
        title: 'Manfucatred Train',
        tags: ['Manfucatred Train'],
        demo: '',
        source: '/pdf/Train_Project_Key_Learnings.pdf',
      },
      {
        id: 8,
        images: [
          {
            img: '/images/office.gif',
          },
          {
            img: '/images/09.png',
          },
        ],
        title: 'Office Container',
        tags: ['Office Container'],
        demo: '',
        source: 'https://www.youtube.com/watch?v=ZghKnVWzoo0',
      },
    ],
    selected: null,
      // Define the data properties for email and phoneNumber
      email: 'nicholas@sabry-engineering.com',
      phoneNumber: '(778) 581-6075',
  }),
  mounted() {
    window.onscroll = this.lodash.debounce(this.scrollcalc, 5);
    this.scrollcalc();
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    }
  },
  methods: {
  select: function (id) {
    this.selected = this.projects.find((x) => x.id === id);
  },
  closePopOver() {
    this.selected = null;
  },
  scrollcalc() {
    let mainNavLinks = document.querySelectorAll('.xx a');
    let fromTop = document.documentElement.scrollTop;
    let navbarHeight = 200;

    mainNavLinks.forEach((link) => {
      if (link.hash == '') return;

      let section = document.querySelector(link.hash);
      if (section == null) return;
      if (
        section.offsetTop <= fromTop + window.innerHeight &&
        section.offsetTop + section.offsetHeight > fromTop + navbarHeight
      ) {
        link.classList.add('current');
        let allCurrents = document.querySelectorAll('.current');
        let allFirsts = document.querySelector('.first');
        if (allFirsts != null) {
          allFirsts.classList.remove('first');
        }
        allCurrents[0].classList.add('first');
      } else {
        link.classList.remove('current');
      }
    });
  },
  copyToClipboard(text) {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = text;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
    },



    copyEmail() {
  const emailToCopy = "nicholas@sabry-engineering.com";
  this.copyToClipboard(emailToCopy);
  this.$swal.fire({
    position: 'center-end',
    icon: 'success',
    title: emailToCopy + "<br>"+ "<br>Email Copied!",
    showConfirmButton: false,
    timer: 1500,
    didOpen: () => {
      // Calculate the width of the scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Modal is open, allow scrolling on background
      document.body.style.overflow = 'auto';

      // Compensate for the scrollbar width to prevent shifting
      document.body.style.paddingRight = scrollbarWidth + 'px';
    },
    didClose: () => {
      // Modal is closed, reset the overflow property
      document.body.style.overflow = '';
    }
  });





},
    copyPhone() {
      const phoneToCopy = "(778) 581-6850";
      this.copyToClipboard(phoneToCopy);
      this.$swal.fire({
        position: 'center-end',
        icon: 'success',
        title: phoneToCopy + "<br>"+ "<br>Phone # Copied!", // New line added here
        showConfirmButton: false,
        timer: 1500,
        
    didOpen: () => {
      // Calculate the width of the scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Modal is open, allow scrolling on background
      document.body.style.overflow = 'auto';

      // Compensate for the scrollbar width to prevent shifting
      document.body.style.paddingRight = scrollbarWidth + 'px';
    },
    didClose: () => {
      // Modal is closed, reset the overflow property
      document.body.style.overflow = '';
    }

   });
 },
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
    color: white;
    i {
      font-size: 0.9rem;
    }
  }
  a:hover {
    color: hsl(0deg 0% 63%);
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
