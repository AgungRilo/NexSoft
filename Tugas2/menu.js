var personId=1;
const nama          = document.querySelector('#nama');
const tempat        = document.querySelector('#tempat');
const tanggal       = document.querySelector('#tanggal');

const jk1           = document.querySelector('#jk1');
const jk2           = document.querySelector('#jk2');

const hobby         = document.querySelectorAll('.hobby');
const h1            = document.querySelector('#berenang');
const h2            = document.querySelector('#jogging');
const h3            = document.querySelector('#bersepeda');
const h4            = document.querySelector('#futsal');

const agama         = document.querySelector('#agama');
const alamat        = document.querySelector('#alamat');

const button        = document.querySelector('#button1');
const hasil         = document.querySelector('#bodyTable');
const form          = document.querySelector('#form-input');
const btn           = document.querySelector('.button');
const cari          = document.querySelector('#cari');

var cariBerdasarkan = document.getElementById('cariBerdasarkan');
var inputCari       = document.getElementById('inputCari');

const page          = document.querySelector('#page');

let limit           = 4;
let pageNow         = 1;

function pagination(){
    let totalPage   = Math.ceil(people.length/limit);
    page.innerHTML = ``
    for(var i=1;i<=totalPage;i++){
        if(i == pageNow){
            page.innerHTML+=`<button onclick="">${i}</button>`            
        }else if(i < pageNow ){
            page.innerHTML+=`<button onclick="clickPage(${i})">${i}</button>`            
        }else if(i > pageNow){
            page.innerHTML+=`<button onclick="clickPage(${i})">${i}</button>`            
        }
    }
}

function clickPage(hal){
    pageNow = hal
    showData();
}

var updatedId    = -1;

let people=[];

dataDummy();

showData();

function hobbyValidation(){
 var checked=false;
     var elements = document.querySelectorAll(".hobby");
     for(var i=0; i < elements.length; i++){
         if(elements[i].checked) {
             checked = true;
         }
    }
    if (!checked) {
        alert('Pilih Hobby!');
    }
    return checked;
}

function dataDummy(){
    for(let i =0; i<10;i++){
        let person ={
            "id"     : personId++,
            "nama"   : "Agung",
            "tempat" : "Jakarta",
            "tanggal": "1998-02-11",
            "result" : 22,
            "jk"     : "Laki-laki",
            "hobby"  : ["Berenang","Jogging"],
            "agama"  : "Islam",
            "alamat" : "Bekasi"
        };
        people.push(person);
        
    }
    showData();
    console.log(personId);
}

function validation(){

   
    if(nama.value == ""){
        window.alert("Masukkan Nama !")
    } else if(tempat.value == ""){
        window.alert("Masukkan Tanggal Lahir !")
    } else if(tanggal.value == ""){
        window.alert("Masukkan Tanggal Lahir !")
    } else if(jk1.checked == false && jk2.checked == false ){
        window.alert("Pilih Jenis Kelamin !")
    } else if(h1.checked ==  false && h2.checked == false && h3.checked == false && h4.checked == false){
        window.alert("Pilih Hobby")
    } else if(agama.value == 0){
        window.alert("Pilih Agama !")
    } else if(alamat.value == 0){
        window.alert("Masukkan Alamat")
    } else {
        if(button.innerHTML == "Submit"){
            console.log("Submit")
            inputPerson();
        } else{
            console.log("Update")
            proseEdit();
        }
    }
}

function umur(){
    var today   = new Date();
    var umur    = new Date(tanggal.value);
    var tahun   = 0;
    if (today.getMonth() < umur.getMonth()) {
        tahun   = 1;
    } else if ((today.getMonth() == umur.getMonth()) && today.getDate() < umur.getDate()) {
        tahun   = 1;
    }
    var age     = today.getFullYear() - umur.getFullYear() - tahun;

    if(age < 0){
        age = 0;
    }
    return age;
}


function inputPerson(){
    console.log("INPUT")
    
    let age = umur();

    let gender="";
    if(jk1.checked==true){
        gender="Laki-laki"
    }else if(jk2.checked==true){
        gender="Perempuan"
    }

    let hobbyArray=[];
    hobby.forEach(element => {
        if(element.checked==true){
            hobbyArray.push(element.value)
        }
    });

	let person ={
        "id"        : personId++,
        "nama"      : nama.value,
        "tempat"    : tempat.value,
        "tanggal"   : tanggal.value,
        "result"    : age,
        "jk"        : gender,
        "hobby"     : hobbyArray,
        "agama"     : agama.value,
		"alamat"    : alamat.value,
	};
	people.push(person);
    

	showData();
    clear();
}

function clear(){
    nama.value      ="";
    tempat.value    ="";
    tanggal.value   ="";
    agama.value     ="";
    jk1.checked     =false;
    jk2.checked     =false;
    alamat.value    =""; 
    hobby.forEach(element => {
        element.checked=false
    });
}

function showData(){
    let pageAkhir = pageNow * limit;
    let offset    = pageAkhir - limit;
    if (people.length > 0) {
	hasil.innerHTML=''
	// people.forEach(person=>{
		for(var i=offset;i<pageAkhir;i++){
            hasil.innerHTML +=` 
            <tr>
                <td class="tNumber"><b>${i+1}</b></td>
                <td class="tText"style="padding.left:5%">${people[i].nama}</td>
                <td class="tTanggal">${people[i].tempat},${people[i].tanggal}</td>
                <td class="tTanggal">${people[i].result} tahun</td>
                <td class="tJk">${people[i].jk}</td>
                <td class="tHobby">${people[i].hobby}</td> 
                <td class="tAgama">${people[i].agama}</td> 
                <td class="tAlamat">${people[i].alamat}</td>
                <td class="tAction">
                <button class="button" type="button" onclick="editClicked(${people[i].id})">Sunting</button>
                <button class="button" type="button" onclick="deleteClicked(${people[i].id  })">Hapus</button>
                </td>
                </td>
            </tr>`
        }
        pagination();
	// })
    }else{
        console.log("Data Tidak Ada")
    }
}

function deleteClicked(id){
	const person = people.find(function(person){
		return person.id === id;
	})
	if(confirm(`Apakah anda ingin menghapus data yang bernama ${person.nama} dan yang berumur ${person.result} tahun ?`)){
		people =people.filter(function(person){
			return person.id !=id
		})
        alert("Berhasil Menghapus Data !!");
	}
	showData();
}


inputCari.addEventListener("keyup", (el) => {
	let keyword = el.target.value
	if (cariBerdasarkan.value == "cariNama") {
		if (keyword == "") {
			showData();
		}else{
			let searchItem = people.filter((person) => {
				return person.nama == keyword;
			});

			search(searchItem);
		}
	}else if (cariBerdasarkan.value == "cariKode") {
		if (keyword == "") {
			showData();
		}else{
			let searchItem = people.filter((person) => {
				return person.id == keyword;
			});

			search(searchItem);
		}
	
	}else if (cariBerdasarkan.value == "cariAlamat") {
		if (keyword == "") {
			showData();
		}else{
			let searchItem = people.filter((person) => {
				return person.alamat == keyword;
			});

			search(searchItem);
		}
	}else{
		if (keyword == "") {
			showData();
		}else{
			let searchItem = people.filter((person) => {
				return person.nama.equals(keyword);
			});

			search(searchItem);
		}
	}
});

let search = (person) => {
	hasil.innerHTML = "";
	if (person.length > 0) {
		for (var i = 0; i < person.length; i++) {
			hasil.innerHTML +=`
				<tr>
                <td class="tNumber"><b>${i+1}</b></td>
                <td class="tText"style="padding.left:5%">${person[i].nama}</td>
                <td class="tTanggal">${people[i].tempat},${people[i].tanggal}</td>
                <td class="tTanggal">${person[i].result} tahun</td>
                <td class="tJk">${person[i].jk}</td>
                <td class="tHobby">${person[i].hobby}</td> 
                <td class="tAgama">${person[i].agama}</td> 
                <td class="tAlamat">${person[i].alamat}</td>
                <td class="tAction">
                <button class="button" type="button" onclick="editClicked(${person[i].id})">Sunting</button>
                <button class="button" type="button" onclick="deleteClicked(${person[i].id  })">Hapus</button>
                </td>
                </td>
            </tr>`;
		}
	}else{
		hasil.innerHTML = `
		<tr>
			<td style="text-align: center" colspan="9">Tidak Ada Data </td>
		</tr>`;
	}
}



function editClicked(id){
	const person    = people.find(function(person){
		return person.id === id;
	});
    updatedId  = person.id;
    nama.value      = person.nama;
    tempat.value    = person.tempat;
    tanggal.value   = person.tanggal;
    agama.value     = person.agama;
    alamat.value    = person.alamat;
    jk1.value       = person.jk;
    if(person.jk == "Laki-laki"){
        jk1.checked = true;
    }else{
        jk2.checked = true;
    }
    
    button.innerHTML = "Update";

    person.hobby.forEach(hobby=>{
        if(hobby === "Berenang"){
            h1.checked = true
        } else if(hobby === "Jogging"){
            h2.checked = true
        } else if(hobby === "Bersepeda"){
            h3.checked = true
        } else if(hobby === "Futsal"){
            h4.checked = true
        } else{
            console.log("tidak sesuai")
        }
    })
    
    let age = umur();

    let gender="";
    if(jk1.checked==true){
        gender="Laki-laki"
    }else if(jk2.checked==true){
        gender="Perempuan"
    }

    let hobbyArray=[];
    hobby.forEach(element => {
        if(element.checked==true){
            hobbyArray.push(element.value)
        }
    });

    button.setAttribute("data-type", person.id);
    button.innerHTML ="Update";
	
}

function proseEdit(){
    const person    = people.findIndex(function(person){
		return person.id === updatedId;
	});
    let age = umur();

    let gender="";
    if(jk1.checked == true){
        gender="Laki-laki"
    }else if(jk2.checked == true){
        gender="Perempuan"
    }

    let hobbyArray=[];
    hobby.forEach(element => {
        if(element.checked == true){
            hobbyArray.push(element.value)
        }
    });

	let updatePerson ={
        "id"        : updatedId,
        "nama"      : nama.value,
        "tempat"    : tempat.value,
        "tanggal"   : tanggal.value,
        "result"    : age,
        "jk"        : gender,
        "hobby"     : hobbyArray,
        "agama"     : agama.value,
		"alamat"    : alamat.value,
	};
    console.log(updatePerson)
    people.splice(person, 1, updatePerson);
	button.innerHTML    = "Submit";
    updatedId           = -1;
	clear();
	showData();
	alert("Data berhasil di update !!");
}

