import React , {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class EditMeetup extends Component{

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      city: '',
      address: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getMeetupDetails();
  }

  getMeetupDetails(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3001/api/meetups/${meetupId}`)
      .then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          address: res.data.address,
          city: res.data.city
        }, ()=>{
          console.log(this.state);
        })
      }).catch(err=> console.log(err))
  }

  editMeetup(newMeetup){
    axios.request({
      method:'put',
      url:`http://localhost:3001/api/meetups/${this.state.id}`,
      data: newMeetup
    }).then(res=>{
      this.props.history.push('/')
    }).catch(err=>console.log(err));
  }

  onSubmit(e){
    const newMeetup={
      name: this.refs.name.value,
      city: this.refs.name.value,
      address: this.refs.address.value,
    }
    this.editMeetup(newMeetup);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

  }

  render() {
    return(
      <div>
        <br/>
        <Link className="btn grey" to="/" >Back</Link>
        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)} >
          <div className="input-field" >
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" ref="name"
                   value={this.state.name}
                   onChange={this.handleInputChange.bind(this)} />
          </div>

          <div className="input-field" >
            <label htmlFor="city" >City</label>
            <input type="text" name="city" ref="city"
                   value={this.state.city}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>

          <div className="input-field" >
            <label htmlFor="address" >Adress</label>
            <input type="text" name="address" ref="address"
                   value={this.state.address}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>

          <input type="submit" value="Edit" className="edit" />

        </form>
      </div>
    )
  }
}

export default EditMeetup;
