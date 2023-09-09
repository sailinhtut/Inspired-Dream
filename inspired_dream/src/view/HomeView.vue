<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar
    :active="0"
    border-color="transperant"
    color="transparent"
    textColor="#f1f1f1"
    activeColor="white"
  />
  <div class="container-fluid" id="section-one">
    <div class="row h-100 justify-content-end">
      <div class="col-sm-6">
        <div class="container h-100 d-flex flex-column justify-content-center">
          <div id="graph-box" class="ms-lg-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/404/404621.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-6">
        <div
          class="container h-100 d-flex flex-column justify-content-center align-items-end text-white"
        >
          <div id="welcome-text-box">
            <h1 class="me-lg-5">Start Your Journey</h1>
            <p>
              <bold class="fs-5 fw-medium">Inspired Dream</bold> is a technology content sharing
              blogs website. Create your account and start finding your passion and inspiration to
              publish your indea to the World.
            </p>
            <button class="btn btn-light">Create account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#section-one {
  height: 100vh;
  background-image: url('https://www.hippovideo.io/blog/wp-content/uploads/2018/03/blog_technology-in-education-1138x493.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}

#welcome-text-box {
  width: 400px;
}

#graph-box {
  width: 300px;
  height: 300px;
  transition:0.5s;
}
#graph-box:hover{
  transform: scale(1.1);
}
</style>
