// createAdmin.js
function createAdmin() {
    const adminUsername = 'admin'; // Nombre de usuario del administrador
    const adminPassword = 'admin123'; // Contraseña del administrador

    // Verificar si el usuario ya existe
    if (!localStorage.getItem('adminUsername') && !localStorage.getItem('adminPassword')) {
        // Guardar el usuario y la contraseña en el almacenamiento local
        localStorage.setItem('adminUsername', adminUsername);
        localStorage.setItem('adminPassword', adminPassword);
        alert('Usuario administrador creado con éxito.'); // Mensaje de éxito
    } else {
        alert('El usuario administrador ya existe.'); // Mensaje si el usuario ya fue creado
    }
}

// Llama a la función cuando la página se carga
window.onload = function () {
    createAdmin();
};
