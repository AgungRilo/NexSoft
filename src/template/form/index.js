import React, { Component } from 'react';
import {Input,Label} from '../../component'

import "./style.css";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // users:[],
            nama:"",
            tempat:"",
            tanggal:"",
            jenisKelamin:"",
            hobby:[],
            agama:"",
            alamat:""
            
        }
    }

    
    setCheckbox = el =>{
        let indexx = -1
        console.log(el.target.checked);
        if(el.target.checked === true){
           indexx = this.state.hobby.findIndex(elmnt => elmnt === el.target.value);
            if(indexx < 0){
                this.state.hobby.push(el.target.value)
                console.log(this.state.hobby);
            }
        }else {
            // this.state.splice(el.target.value,1)
            indexx = this.state.hobby.findIndex(elmnt => elmnt === el.target.value);
            if(indexx < 0){
                this.state.hobby.splice(el.target.value,1)
            }
            this.state.hobby.splice(el.target.value,1)
        }
        // this.state.filter(this.state.hobby)
        console.log(this.state.hobby);
    }

    setValue = el =>{
        this.setState({
           [el.target.name] : el.target.value
           
        })
        
    }


    
    validation = (e) => {
        e.preventDefault()
        console.log(e);
        const { nama, tempat, tanggal, jenisKelamin, hobby, agama,alamat} = this.state

        
        if(nama === ""){
            alert("Masukkan Nama")
        }else if(tempat === ""){
            alert("Masukkan Tempat Lahir")
        }else if(tanggal ===""){
            alert("Masukkan Tanggal Lahir")
        }else if(jenisKelamin ===""){
            alert("Masukkan Jenis Kelamin")
        }else if(hobby===""){
            alert("Masukkan Hobby")
        }else if(agama ===""){
            alert("Masukkan Agama")
        }else if(alamat===""){
            alert("Masukkan Alamat")
        }
        else{
            alert("Data Berhasil")
            this.props.save({ nama, tempat, tanggal, jenisKelamin, alamat,hobby, agama })
        }
    }

    render() { 
        const { nama, tempat, tanggal,alamat,hobby, jenisKelamin } = this.state
        return ( 
            <div className="form">
                <form className="data" >
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Nama"/>
                        </div>
                        <div className="col-75">
                            <Input type="text" name="nama" id="nama" className="input" placeholder="Masukkan Nama Anda" onChange={this.setValue}  />
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                        <Label label="Tempat"/>
                        </div>
                        <div className="col-75">
                        <Input type="text" name="tempat" id="tempat" className="input" placeholder="Masukkan Tempat Lahir" onChange={this.setValue}  />
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Tanggal"/>
                        </div>
                        <div className="col-75">
                            <Input type="date" name="tanggal" id="tanggal" className="input" onChange={this.setValue}/>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Jenis Kelamin" />
                        </div>
                        <div className="col-75">
                            
                            <input className="jk" name="jenisKelamin" id="jk1" type='radio' value='Laki-laki' onChange={this.setValue}/>Laki-laki
                        </div>
                        <div>
                            <input className="jk" name="jenisKelamin" id="jk2" type='radio' value='Perempuan' onChange={this.setValue}/>Perempuan
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Hobby"/>
                        </div>
                        <div className="col-75">
                            <input className="hobby" name="hobby" id="berenang" type='checkbox' value='Berenang'onChange={this.setCheckbox} />Berenang
                            <input className="hobby" name="hobby" id="jogging" type='checkbox' value='Jogging' onChange={this.setCheckbox}/>Jogging
                        </div>
                        <div>
                            <input className="hobby" name="hobby" id="bersepeda" type='checkbox' value='Bersepeda'onChange={this.setCheckbox} />Bersepeda
                            <input className="hobby" name="hobby" id="futsal" type='checkbox' value='Futsal' onChange={this.setCheckbox}/>Futsal
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Agama" />
                        </div>
                        <div className="col-75">
                            <select id="agama" name="agama" onChange={this.setValue}>
                                <option value="0">Pilih agama yang tersedia</option>
                                <option value="Islam" >Islam</option>
                                <option value="Kristen" >Kristen</option>
                                <option value="Budha">Budha</option>
                                <option value="Katolik">Katolik</option>
                            </select>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Alamat"/>
                        </div>
                        <div className="col-75">
                            <textarea id="alamat" className="input" name="alamat" placeholder="Masukkan Alamat.."
                                style={{height:100}} onChange={this.setValue}></textarea>
                                {/* 100 disini berarti 100px */}
                        </div>
                    </div>
                    <div className="baris">
                        <button id="button1" value="Submit" type="submit" className="button1"
                            onClick={this.validation}>Submit</button>
                    </div>
                </form> 
                {/* onClick={(e) =>{e.preventDefault(); this.props.save({ nama, tempat, tanggal, jenisKelamin, alamat,hobby })} } */}
            </div>
         );
    }
}
 
export {Form};
