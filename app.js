let num1 = prompt("1-sonni kiriting")

let arifmetik = prompt("Arifmetik amalni kiriting")

let num3 = prompt("Ikkinchi sonni kiriting")

let result = arifmetik == "+" ? parseInt(num1) + parseInt(num3) : arifmetik == "-" ? num1 - num3 : arifmetik == "*" ? num1 * num3 :
    arifmetik == "/" ? num1 / num3 : "Xatolik yuz berdi qaytatdan urinib ko'ring"

console.log(result)

let resultglav = alert(result)


// let malumot = "Bozorov Karimxon Javlonbekovich 2010-yilning 3-noyabrida tug'ilganman. /n   Hozirgacha 52-maktabda o'qiyman. Bugun 2024-yil iyul oyining 3-sanasi"




