const form = document.getElementById("registerForm")

function showError(id,message){
document.getElementById(id+"Error").innerText = message
}

function clearError(id){
document.getElementById(id+"Error").innerText = ""
}

function validateFullname(){

const value = fullname.value.trim()
const regex = /^[A-Za-zÀ-ỹ\s]+$/

if(value.length < 3){
showError("fullname","Tên phải ≥ 3 ký tự")
return false
}

if(!regex.test(value)){
showError("fullname","Tên chỉ chứa chữ")
return false
}

clearError("fullname")
return true

}

function validateEmail(){

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regex.test(email.value)){
showError("email","Email không hợp lệ")
return false
}

clearError("email")
return true

}

function validatePhone(){

const regex = /^0\d{9}$/

if(!regex.test(phone.value)){
showError("phone","SĐT phải 10 số và bắt đầu bằng 0")
return false
}

clearError("phone")
return true

}

function validatePassword(){

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(!regex.test(password.value)){
showError("password","≥8 ký tự có hoa, thường và số")
return false
}

clearError("password")
return true

}

function validateConfirm(){

const confirmValue = document
.getElementById("confirmPassword").value

const passwordValue = document
.getElementById("password").value

if(confirmValue !== passwordValue){
showError("confirmPassword","Mật khẩu không khớp")
return false
}

clearError("confirmPassword")
return true

}

function validateGender(){

const gender = document.querySelector('input[name="gender"]:checked')

if(!gender){
showError("gender","Phải chọn giới tính")
return false
}

clearError("gender")
return true

}

function validateTerms(){

if(!terms.checked){
showError("terms","Phải đồng ý điều khoản")
return false
}

clearError("terms")
return true

}

form.addEventListener("submit",function(e){

e.preventDefault()

const valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateTerms()

if(valid){

form.style.display="none"

successBox.innerHTML =
"Đăng ký thành công 🎉<br>Xin chào "+fullname.value

}

})

fullname.addEventListener("blur",validateFullname)
email.addEventListener("blur",validateEmail)
phone.addEventListener("blur",validatePhone)
password.addEventListener("blur",validatePassword)
confirm.addEventListener("blur",validateConfirm)

fullname.addEventListener("input",()=>clearError("fullname"))
email.addEventListener("input",()=>clearError("email"))
phone.addEventListener("input",()=>clearError("phone"))
password.addEventListener("input",()=>clearError("password"))
confirm.addEventListener("input",()=>clearError("confirm"))