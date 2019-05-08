import React from 'react'

const TodoItem = (props) =>
{
    const {items,delteItem}=props;
    let length = items.length;

    const listitems = length ? (
        items.map (item => {
            return (
                <div key={item.id}>
                 <span className="name">{item.name}</span>
                 <span className="age">{item.age}</span>
                 <span className="action icon" onClick={ () => delteItem (item.id)}>&times;</span>
                
                
                </div>
            )
       }) 
    ) : (
        <p>There is no Items to show</p>
    )

    return(
        <div className="Listitems">
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
        {listitems}
        </div>
    )
   
}
export default TodoItem;
