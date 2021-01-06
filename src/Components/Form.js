import React,{Component} from 'react'

class Form extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
             firstName: "",
            lastName  : "",
                 gmail: "",
              password: "",
                mobile: "" ,
                gender: "",
               
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    gmailhandler = (event) => {
        this.setState({
            gmail: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    mobilehandler = (event) => {
        this.setState({
            mobile: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(' Registered Successfully!!!')
        console.log(this.state);
        this.setState({
            firstName: "",
             lastName: "",
                gmail: "",
             password: "",
             mobile  : "",
               gender: "",
        })
        event.preventDefault()
    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1> Registration</h1>
                    <br/>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} required></input><br />
                    <br />
                    
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} required></input><br />
                    <br />
                    <label>gmail :</label> <input type="email" value={this.state.gmail} onChange={this.gmailhandler} required></input><br />
                    <br />
                    <label>Password :</label> <input type="text" value={this.state.password} onChange={this.passwordhandler} required></input><br />
                    <br />
                    <label>mobile :</label> <input type="number" value={this.state.mobile} onChange={this.mobilehandler} required></input><br />
                    <br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue= "Select" >
                        <option defaultValue>Select </option> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <br />
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }

}

export default Form