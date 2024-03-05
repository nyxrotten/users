const listaUsuarios = document.getElementById('listaUsuarios')

let edadRandom = function getRandomInt(x) {
    return Math.floor(Math.random() * 90);
}
let edad = edadRandom();

let leanne = {}


getUsersinfo1()
function getUsersinfo1(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/1.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo2()
function getUsersinfo2(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/2`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/2.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo3()
function getUsersinfo3(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/3`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/3.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo4()
function getUsersinfo4(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/4`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/4.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo5()
function getUsersinfo5(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/5`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/5.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo6()
function getUsersinfo6(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/6`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/6.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo7()
function getUsersinfo7(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/7`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/7.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo8()
function getUsersinfo8(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/8`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/8.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};

getUsersinfo9()
function getUsersinfo9(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/9`)
    .then((res)=> res.json())
    .then((data) => {
        let {name, address, phone, company, username, email} = data
        data = {...data, edad}

        listaUsuarios.innerHTML += `
            <section class="card_user">
            <section class="data_img">
                <article class="user_data">
                    <h2 class="nombre"><span>Name:</span> ${name}</h2>
                    <p class="edad"><span>Age:</span> ${edad}</p>
                    <p clas="usernane"><span>Username:</span> ${username}</p>
                    <p class="phone"><span>Phone:</span> ${phone}</p>
                    <p class="email"><span>Email:</span> ${email}</p>
                </article>
                <img class="user_img" src=./assets/img/9.jpeg>
            </section>
            <footer class="footer">
            <p class="company"><span>Company:</span> ${company.name}</p>
            <p class="address"><span>Address:</span> ${address.street}, ${address.suite}, ${address.city}</p>
            </footer>
            </section>`
    })
};