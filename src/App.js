import './App.css';
import React, { Component } from 'react';
import {Header, Form, Search, Table} from './template';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users:[]

    }
  }

  umur =(age)=>{
    var today   = new Date();
    var umur    = new Date(age);
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
    return age
  }

  hapus=(idx)=>{
    let newUsers = this.state.users
    newUsers.splice(idx,1)
    this.setState({
      users:newUsers
  })
  alert("Data Berhasil dihapus")
  }
  
  save = (data) =>{
    console.log(data);
    const { nama, tempat,tanggal,jenisKelamin,hobby,agama,alamat} = data
    
    let newUsers = this.state.users
    newUsers.push({
        nama,tempat,tanggal,jenisKelamin,hobby,agama,alamat,umur:this.umur(tanggal)
    })
    console.log(newUsers);
    this.setState({
        users:newUsers
    })

    this.state.hobby=[];

    
}


  render() {
    return (
      <div className="container">
        <Header />
        <Form save={this.save}/>
        <Search/>
        <Table idx={this.hapus} users={this.state.users}/>
      </div>
    );
  }
}

export default App;