import React, { Component } from 'react'; 
import "./style.css"



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="tabel">
                <table className="table1">
                    <thead>
                            <tr>
                                <th id="tNo">No</th>
                                <th id="tNama">Nama</th>
                                <th id="ttl">Tempat Tanggal Lahir</th>
                                <th id="tUsia">Usia</th>
                                <th id="tJk">Jenis Kelamin</th>
                                <th id="tHobby">Hobby</th>
                                <th id="tAgama">Agama</th>
                                <th id="tAlamat">Alamat</th>
                                <th id="Action">Action</th>
                            </tr>
                    </thead>
                    <tbody id="bodyTable">
                    </tbody>
                </table>
            </div>
            </>
         );
    }
}



export {Table};


