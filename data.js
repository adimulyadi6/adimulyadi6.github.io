const nama = "Adi Mulyadi";
let usia = 23;
// const.document = get


function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        console.log="generasi masadepan";
    }
    else if (usia > 18 && usia <30){
        console.log('anda dewasa')
    }
    else if(usia > 30 && usia < 50){
        console.log('anda rada tua')
    }
    else if(usia > 2 && usia <10){
        console.log('bocil ff')
    }
    else {
        // jika tidak terpenuhi
        console.log('balita gemoy')
    }
    return generateBiodata.innerHTML = "generasi"
}

console.log(nama);
console.log(usia);

generateBiodata();