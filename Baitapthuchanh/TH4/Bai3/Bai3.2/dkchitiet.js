$(document).ready(function(){

let step = 0
const steps = $(".step")

function showStep(i){

steps.removeClass("active")
$(steps[i]).addClass("active")

let percent = (i+1)/steps.length*100
$("#progressBar").css("width",percent+"%")

}

function validateStep1(){

if($("#fullname").val()=="" ||
$("#dob").val()=="" ||
$("#gender").val()==""){

alert("Vui lòng nhập đầy đủ thông tin")
return false

}

return true

}

function validateStep2(){

let pass = $("#password").val()
let confirm = $("#confirm").val()

if($("#email").val()=="" || pass=="" || confirm==""){

alert("Vui lòng nhập đầy đủ thông tin")
return false

}

if(pass !== confirm){

alert("Mật khẩu không khớp")
return false

}

return true

}

$(".next").click(function(){

if(step==0 && !validateStep1()) return
if(step==1 && !validateStep2()) return

step++

if(step==2){

$("#summary").html(`
<p><b>Họ tên:</b> ${$("#fullname").val()}</p>
<p><b>Ngày sinh:</b> ${$("#dob").val()}</p>
<p><b>Giới tính:</b> ${$("#gender").val()}</p>
<p><b>Email:</b> ${$("#email").val()}</p>
`)

}

showStep(step)

})

$(".back").click(function(){

step--
showStep(step)

})

showStep(step)

})