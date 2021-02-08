import React, { Component } from 'react';

import "./style.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    render() { 
        return ( 
            <div className="form">
                <form className="data">
                    <div className="baris">
                        <div className="col-25">
                            <label>Nama</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="nama" className="input" placeholder="Masukkan nama Anda.."/>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <label>Tempat</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="tempat" className="input"  placeholder="Masukkan tempat lahir Anda.."/>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <label>Tanggal</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="tanggal" className="input"/>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <label>Jenis Kelamin</label>
                        </div>
                        <div className="col-75">
                            <input className="jk" id="jk1" type='radio' name='jenis_kelamin' value='Laki-laki' />Laki-laki
                        </div>
                        <div>
                            <input className="jk" id="jk2" type='radio' name='jenis_kelamin' value='Perempuan' />Perempuan
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <label className="label">Hobby</label>
                        </div>
                        <div className="col-75">
                            <input className="hobby" id="berenang" type='checkbox' value='Berenang' />Berenang
                            <input className="hobby" id="jogging" type='checkbox' value='Jogging' />Jogging
                        </div>
                        <div>
                            <input className="hobby" id="bersepeda" type='checkbox' value='Bersepeda' />Bersepeda
                            <input className="hobby" id="futsal" type='checkbox' value='Futsal' />Futsal
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <label>Agama</label>
                        </div>
                        <div className="col-75">
                            <select id="agama" name="agama">
                                <option value="0">Pilih agama yang tersedia</option>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Budha">Budha</option>
                                <option value="Katolik">Katolik</option>
                            </select>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <label >Alamat</label>
                        </div>
                        <div className="col-75">
                            <textarea id="alamat" className="input" name="alamat" placeholder="Masukkan Alamat.."
                                style={{height:100}}></textarea>
                                {/* 100 disini berarti 100px */}
                        </div>
                    </div>
                    <div className="baris">
                        <button id="button1" value="Submit" type="submit" className="button1"
                            >Submit</button>
                    </div>
                </form> 
            </div>
         );
    }
}
 
export {Form};
