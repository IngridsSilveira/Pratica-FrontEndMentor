const inputs = [...document.querySelectorAll('.inputs')]

const btn = document.querySelector('#btn')

btn.addEventListener("click", () => {
    inputs.map((el) => {
        //vazio
        if(el.value == ''){
            el.classList.add("input-red")
            if(el.id === 'name'){
                document.querySelector("#span-name").innerHTML = "First Name cannot be empty"
                el.placeholder = ''
            }
            if(el.id === 'lastName'){
                document.querySelector("#span-lastName").innerHTML = "Last Name cannot be empty"
                el.placeholder = ''
            }
            if(el.id === 'email'){
                document.querySelector("#span-email").innerHTML = "Looks like this is not an email"
                el.placeholder = 'email@example.com'
                el.classList.add("email-red")
            }
            if(el.id === 'password'){
                document.querySelector("#span-password").innerHTML = "Password cannot be empty"
                el.placeholder = ''
            }
        } else {
            document.querySelector("#span-name").innerHTML = ""
            document.querySelector("#span-lastName").innerHTML = ""
            document.querySelector("#span-email").innerHTML = ""
            document.querySelector("#span-password").innerHTML = ""

            el.classList.remove('input-red')
            el.classList.remove("email-red")
        }
    })
})
