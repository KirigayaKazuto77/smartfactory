<template>
  <Navbar/>
  <div class="mothercontainer">

    <div class="container1">
      <div>
        <img src="@/assets/logo.png" alt="Company Logo" width="150" style="margin-left: 10px; margin-right:100px">
      </div>
      <div class="compname">
        <h1>Smart and Sense Infotech</h1>
      </div>
    </div>

    <div class="container2">

      <div class="announcement">
        <h1>Announcement</h1>
        <h2>Accordion with symbols</h2>
        <p>In this example we have added a "plus" sign to each button. When the user clicks on the button, the "plus" sign is replaced with a "minus" sign.</p>
        <button class="accordion">Section 1</button>
        <div class="panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button class="accordion">Section 2</button>
        <div class="panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button class="accordion">Section 3</button>
        <div class="panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
      </div>

      <div class="schedule">
        <h1>Today's Schedule</h1>
      </div>

    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'MainScreen',
  components: {
    Navbar
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

</script>

<style scoped>

.mothercontainer{
  height: 100%;
  background-color: white;
}

.container1 {
  display: grid;
  grid-template-columns: 150px 30% 25% 25%;
  background-color: white;
  padding: 0px;
}

.container2 {
  height: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  background-color: white;
  padding: 0px;
}

.compname{
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}

.announcement{
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.8);
}

.schedule{
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.8);
}

.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.accordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

</style>
