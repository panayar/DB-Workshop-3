import React from 'react'

export default function Login() {
return (

<div className="container">
  <div className='form-registro'>
    <form action="">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu nombre"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
        <input type="text" class="form-control" id="exampleFormControlInput1"
          placeholder="Ingresa tus apellidos"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input type="text" class="form-control" id="exampleFormControlInput1"
          placeholder="Ingresa tus username"></input>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword"></input>
        </div>
      </div>

    </form> 
  </div>
</div>

)
}