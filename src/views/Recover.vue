<template>
        <div class="row vh-100 d-flex justify-content-center">
            <div class="col-12 align-self-center">
                <div class="row">
                    <div class="col-lg-5 mx-auto">
                        <div class="card">
                            <div class="card-body p-0 auth-header-box">
                                <div class="text-center p-3">
                                    <a href="index.html" class="logo logo-admin">
                                        <img src="../assets/images/logo-sm.png" height="50" alt="logo" class="auth-logo">
                                    </a>
                                    <h4 class="mt-3 mb-1 fw-semibold text-white font-18">Востановить пароль 1/3</h4>   
                                    <p class="text-muted  mb-0">Вводите номер телефона что бы восстановить пароль</p>  
                                </div>
                            </div>
                            <div class="card-body pt-0">
                                <form class="my-4" action="index.html">
                                    <div class="form-group mb-3">
                                        <label class="form-label" for="username">Телефон</label>
                                        <input type="text" class="form-control" id="userEmail" name="Email" placeholder="Вводите телефон номер">                               
                                    </div><!--end form-group--> 

                                    <div class="form-group mb-0 row">
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="button">Отправить проверичный код <i class="fas fa-sign-in-alt ms-1"></i></button>
                                        </div><!--end col--> 
                                    </div> <!--end form-group-->                           
                                </form><!--end form-->
                                <div class="text-center text-muted">
                                    <p class="mb-1">Вход ?  <router-link to="/login" class="text-primary ms-2">Туда</router-link></p>
                                </div>
                            </div><!--end card-body-->
                        </div><!--end card-->
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end col-->
        </div>
</template>