<template>
  <div class="row">
    <div class="col-lg-4 mx-auto">
      <div class="card">
        <div class="card-body p-0 auth-header-box">
          <div class="text-center p-3">
            <a href="index.html" class="logo logo-admin">
              <img
                src="../assets/images/logo-sm.png"
                height="50"
                alt="logo"
                class="auth-logo"
              />
            </a>
            <h4 class="mt-3 mb-1 fw-semibold text-white font-18">
              Вход на админка
            </h4>
            <p class="text-muted mb-0">Вводите данные что бы продолжить.</p>
          </div>
        </div>
        <div class="card-body pt-0">
          <form class="my-4" action="index.html">
            <div class="form-group mb-2">
              <label class="form-label" for="username">Телефон:</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                placeholder="Вводите телефон номер"
              />
            </div>
            <!--end form-group-->

            <div class="form-group">
              <label class="form-label" for="userpassword">Пароль</label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="userpassword"
                placeholder="Вводите пароль"
              />
            </div>
            <!--end form-group-->

            <div class="form-group row mt-3">
              <div class="col-sm-6">
                <div class="form-check form-switch form-switch-success">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="customSwitchSuccess"
                  />
                  <label class="form-check-label" for="customSwitchSuccess"
                    >Запомнить меня</label
                  >
                </div>
              </div>
              <!--end col-->
              <div class="col-sm-6 text-end">
                <router-link to="/recover" class="text-muted font-13"
                  ><i class="dripicons-lock"></i> Забыли пароль?</router-link
                >
              </div>
              <!--end col-->
            </div>
            <!--end form-group-->

            <div class="form-group mb-0 row">
              <div class="col-12">
                <div class="d-grid mt-3">
                  <button class="btn btn-primary" type="button">
                    Вход <i class="fas fa-sign-in-alt ms-1"></i>
                  </button>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end form-group-->
          </form>
          <!--end form-->
        </div>
        <!--end card-body-->
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </div>
</template>