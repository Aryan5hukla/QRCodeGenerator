
console.log("hello")
let content = document.getElementById("input")
let btn = document.getElementById("btn")
let qrcode ;
let downloadBtn = document.getElementById("download")
let qrcodediv = document.getElementById("qr-code")

function generateQR(qrContent) {
    return new QRCode("qr-code", {
        text : qrContent ,
        width : 256  ,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    })
}

function downloadQR() {
    let canvas = qrcodediv.querySelector("canvas")
    if (canvas) {
        let imageURL = canvas.toDataURL("image/png")
        let link = document.createElement("a")
        link.href = imageURL
        link.download = "qr-code.png"
        link.click()
    }
}


btn.addEventListener("click" , function(event) {
    event.preventDefault()
    let elem = document.createElement("span")
    let qrContent = content.value
    document.getElementById("qr-code").appendChild(elem)

    if (!qrContent) {
        document.querySelector("span").innerHTML = "<p>ERROR</p>"
    }
    else {
        if (qrcode == null)  {

            qrcode = generateQR(qrContent)
        }
        else {
            qrcode.clear()
            qrcode.makeCode(qrContent)
        }
    }
    
})

downloadBtn.addEventListener("click" , downloadQR)

        