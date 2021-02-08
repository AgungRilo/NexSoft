import React, { Component } from 'react';

import "./style.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="daftar">
                <div className="baris">
                    <div className="col-75">
                        <select id="cariBerdasarkan">
                            <option value="">Cari Berdasarkan</option>
                            <option value="cariNama">Nama</option>
                            <option value="cariAlamat">Alamat</option>
                        </select>
                        <input type="text" id="inputCari" className="cari" name="cari" placeholder="Ketikkan Sesuatu.."/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export {Search};