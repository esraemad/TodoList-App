import React , {Component} from 'react';


class AddItem extends Component
{
    state={
        name:"",
        age:""
    }
    handelChange =(e) =>
    {
    this.setState(
        {
            [e.target.id]:e.target.value
        }
    )
    }

    hadelSubmit =(e) =>
    {
        e.preventDefault()
        if (e.target.name.value === '')
        {
          return false
        }
        else 
        {
            this.props.addItem(this.state)
        this.setState({
            name:'',
            age:''
        })

        }
        
    }

    render()
    {
        return(
            <form onSubmit={this.hadelSubmit}>
                <input type="text" placeholder="Enter Name..." id="name" onChange={this.handelChange} value={this.state.name}/>
                <input type="number" placeholder="Enter Age..." id="age" onChange={this.handelChange} value={this.state.age}/>
                <input type="submit" value="Add"/>
            </form>
        )
    }
}
export default AddItem 