const email = document.getElementById('email')
const notifBtn = document.getElementById('notifBtn')

notifBtn.addEventListener('click', validateInput)


function validateInput() {
    validateEmail()

   if(false) { 
       event.preventDefault() 
    } else if (validateEmail() === true){
        location.reload()
    }
}

class Error {
    constructor (classErr, textErr){
        this.classErr = classErr
        this.textErr = textErr
    }

    static createErrorElement(text) {
        let p = document.createElement('p')
        p.textContent = text
        p.classList.add('errorTxt')

        return p 
    }

    update() {
        this.classErr.classList.add('errorInput')
        this.classErr.parentElement.after(Error.createErrorElement(this.textErr))
    }

    remove() {
        this.classErr.classList.remove('errorInput')
        
        console.log(this.classErr.nextElementSibling)
        this.classErr.nextElementSibling.remove()
    }

}

function validateEmail() {
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    let errEmail = new Error(email, "Please enter a valid email");

    if (!checkEmail) { 
        if (email.classList != "errorInput") {   
            errEmail.update()
            
            return false
        }
        return false
    } else {
        if(errEmail.classList == "errorInput"){
            errEmail.remove()

            return true
        }
        
        return true 
    }
}