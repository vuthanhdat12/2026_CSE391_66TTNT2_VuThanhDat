const prices = {
ao:150000,
quan:200000,
giay:500000
}

const product = document.getElementById("product")
const quantity = document.getElementById("quantity")
const delivery = document.getElementById("delivery")
const address = document.getElementById("address")
const note = document.getElementById("note")

function showError(id,msg){
document.getElementById(id+"Error").innerText = msg
}

function clearError(id){
document.getElementById(id+"Error").innerText = ""
}

function validateProduct(){

if(product.value===""){
showError("product","Hãy chọn sản phẩm")
return false
}

clearError("product")
return true

}

function validateQuantity(){

const q = Number(quantity.value)

if(!Number.isInteger(q) || q<1 || q>99){
showError("quantity","Số lượng 1-99")
return false
}

clearError("quantity")
return true

}

function validateDelivery(){

const today = new Date()
const max = new Date()

max.setDate(today.getDate()+30)

const d = new Date(delivery.value)

if(d < today){
showError("delivery","Không chọn ngày quá khứ")
return false
}

if(d > max){
showError("delivery","Không quá 30 ngày")
return false
}

clearError("delivery")
return true

}

function validateAddress(){

if(address.value.trim().length < 10){
showError("address","Địa chỉ ≥10 ký tự")
return false
}

clearError("address")
return true

}

function validatePayment(){

const pay = document.querySelector('input[name="payment"]:checked')

if(!pay){
showError("payment","Chọn phương thức thanh toán")
return false
}

clearError("payment")
return true

}

function updateTotal(){

const p = product.value
const q = Number(quantity.value)

if(prices[p] && q){

const total = prices[p]*q

document.getElementById("totalPrice").innerText =
total.toLocaleString("vi-VN")

}

}

product.addEventListener("change",updateTotal)
quantity.addEventListener("input",updateTotal)

note.addEventListener("input",function(){

const len = note.value.length

noteCount.innerText = len+"/200"

if(len>200){
noteCount.style.color="red"
}else{
noteCount.style.color="black"
}

})

orderForm.addEventListener("submit",function(e){

e.preventDefault()

const valid =
validateProduct() &
validateQuantity() &
validateDelivery() &
validateAddress() &
validatePayment()

if(valid){

const total = document.getElementById("totalPrice").innerText

confirmBox.innerHTML =
`
<h3>Xác nhận đặt hàng?</h3>
<p>Sản phẩm: ${product.value}</p>
<p>Số lượng: ${quantity.value}</p>
<p>Tổng tiền: ${total} đ</p>
<p>Ngày giao: ${delivery.value}</p>

<button onclick="confirmOrder()" class="confirm-btn">Xác nhận</button>
<button onclick="cancelOrder()" class="confirm-btn">Hủy</button>
`

}

})

function confirmOrder(){

orderForm.style.display="none"

confirmBox.innerHTML =
"<h2>Đặt hàng thành công 🎉</h2>"

}

function cancelOrder(){

confirmBox.innerHTML=""

}

product.addEventListener("blur",validateProduct)
quantity.addEventListener("blur",validateQuantity)
delivery.addEventListener("blur",validateDelivery)
address.addEventListener("blur",validateAddress)