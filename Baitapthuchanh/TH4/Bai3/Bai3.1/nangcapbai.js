$(document).ready(function(){

// Đếm ký tự họ tên

$("#fullname").on("input",function(){

let len = $(this).val().length

$("#nameCount").text(len + "/50")

})

// Hiện / ẩn mật khẩu

$("#togglePassword").click(function(){

let type = $("#password").attr("type")

if(type==="password"){
$("#password").attr("type","text")
}else{
$("#password").attr("type","password")
}

})

// Password strength

$("#password").on("input",function(){

let pass = $(this).val()

let strength = 0

if(pass.length >= 8) strength++
if(/[A-Z]/.test(pass)) strength++
if(/[0-9]/.test(pass)) strength++

if(strength==1){

$("#strength").css({
width:"33%",
background:"red"
})

}

else if(strength==2){

$("#strength").css({
width:"66%",
background:"orange"
})

}

else if(strength>=3){

$("#strength").css({
width:"100%",
background:"green"
})

}

})

})