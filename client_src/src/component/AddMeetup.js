import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddMeetup extends Component{

  onSubmit(e){
    const newMeetup={
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();

  }

  addMeetup(newMeetup){
    console.log("handle ",newMeetup);
    axios.request({
      method: "post",
      url:'http://localhost:3001/api/meetups',
      data: newMeetup
    }).then(res=>{
      this.props.history.push('/');
    }).catch((err=>console.log(err)));
  }

  render() {
    return(
      <div>
        <br/>
        <Link className="btn grey" to="/" >Back</Link>
        <h1>Add meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)} >
          <div className="input-field" >
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" ref="name"/>
          </div>

          <div className="input-field" >
            <label htmlFor="city" >City</label>
            <input type="text" name="city" ref="city"/>
          </div>

          <div className="input-field" >
            <label htmlFor="address" >Address</label>
            <input type="text" name="address" ref="address"/>
          </div>

          <input type="submit" value="Save" className="save" />

        </form>
      </div>
      )
  }

}

export default AddMeetup;
