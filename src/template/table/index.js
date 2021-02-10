import React, { Component } from 'react'; 
import "./style.css"

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    hapusFunc=(e)=>{
        e.preventDefault()
        this.props.idx("1")
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
                    {
                        this.props.users.map((user, idx) => {
                            return (
                                
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.nama}</td>
                                    <td>{user.tempat},{user.tanggal}</td>
                                    <td>{user.umur}</td>
                                    <td>{user.jenisKelamin}</td>
                                    <td>{user.hobby.join(", ")}</td>
                                    <td>{user.agama}</td>
                                    <td>{user.alamat}</td>
                                    <td>
                                        <button >Sunting</button>
                                        <button onClick={() =>{ this.props.idx({ idx })} }>Hapus</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            </>
         );
    }
}



export {Table};


