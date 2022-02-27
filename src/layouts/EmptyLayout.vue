<template>
  <div
    id="body"
    class="auth-page"
    style=""
  >
    <!-- Log In page -->
    <div class="container-md">
      <div class="row vh-100 d-flex justify-content-center">
        <div class="col-12 align-self-center">
          <div class="card-body">
            <router-view />
            <!--end row-->
          </div>
          <!--end card-body-->
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <!-- App js -->
    <!-- <script src="assets/js/app.js"></script> -->
  </div>
</template>


<style lang="css">
.auth-page{
      background-image: url('../assets/images/p-1.png');
      background-size: cover;
      background-position: center center;
}
</style>