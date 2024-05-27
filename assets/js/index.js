let UserForm = localStorage.getItem('userForm')

if(!UserForm){
(async () => {
const { value: formValues } = await Swal.fire({
    title: "Login",
    html: `
      <input id="swal-input1" class="swal2-input" type="text" placeholder="Ingrese su nombre" >
      <input id="swal-input2" class="swal2-input" type="password" placeholder="Ingrese su contraseña">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value
      ];
    }
  });
  if (formValues[0] == '' && formValues[1] == '') {
   console.error('no se permiten usuarios empty')
   Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Ingrese su usuario y contraseña por favor",
    footer: '<a href="http://127.0.0.1:5500/index.html">Intente otra vez</a>'
    });
    // Swal.fire(JSON.stringify(formValues));
  } else{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logiado correctamente",
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.setItem('userForm', JSON.stringify(formValues))

    location.reload();
  }

}) ()
}

function cerrarSession() {
  localStorage.removeItem('userForm')

  location.reload()
}


let spanUser = document.getElementById('nombre')
let nombreUs = JSON.parse(UserForm)

spanUser.textContent = nombreUs[0]

