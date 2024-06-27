document.addEventListener("DOMContentLoaded", () => {
    const listaUsuarios = document.getElementById("listaUsuarios");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const edad = Math.floor(Math.random() * 60) + 20;
                const imgSrc = `assets/img/${usuario.id}.jpeg`;
                const usuarioHTML = `
                    <li>
                        <img src="${imgSrc}" alt="${usuario.name}" width="80" height="80">
                        <div>
                            <span><strong>Nombre:</strong> ${usuario.name}</span><br>
                            <span><strong>Edad:</strong> ${edad}</span><br>
                            <span><strong>Username:</strong> ${usuario.username}</span><br>
                            <span><strong>Teléfono:</strong> ${usuario.phone}</span><br>
                            <span><strong>Email:</strong> ${usuario.email}</span><br>
                            <span><strong>Compañía:</strong> ${usuario.company.name}</span><br>
                            <span><strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</span>
                        </div>
                    </li>
                `;
                listaUsuarios.insertAdjacentHTML("beforeend", usuarioHTML);
            });
        })
        .catch(error => console.error("Errooooooooor:", error));
});
