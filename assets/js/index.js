
(async () => {
const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
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
   alert('ten')
    // Swal.fire(JSON.stringify(formValues));
  } else{
    localStorage.setItem('usuarioRegistrado', JSON.stringify(formValues))
    let datos = localStorage.getItem('usuarioRegistrado')
    alert(datos[0],' Datos ingresados correctamente ')
  }

}) ()