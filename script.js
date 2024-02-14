function checkLove() {
    var esinizinAdi = document.getElementById("esinizin_adi").value;
    var evlilikTarihi = new Date(document.getElementById("evlilik_tarihi").value);
    var currentDate = new Date();

    var loveDisplay = document.getElementById("love_display");

    if (currentDate.getMonth() === evlilikTarihi.getMonth() && currentDate.getDate() === evlilikTarihi.getDate()) {
        loveDisplay.innerHTML = `<img src="img.jpg" alt="Heart"> </br> ${esinizinAdi} seni çok seviyor!`;
    } else {
        loveDisplay.innerHTML = "CANIM bilgileri kontrol edermisin";
    }
}
