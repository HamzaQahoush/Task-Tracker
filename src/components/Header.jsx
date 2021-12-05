import React  from "react";
import Button from "./Button";

const Header =({showAdd,title ,showForm})=>{

    return(
        <header className="header">
        <h1 > {title} </h1>
            <Button color= {showForm? 'red' : 'green'} onClick={showAdd}  text={showForm ? "Close": "add"}/>

        </header>

    )
}
Header.defaultProps={
    title : "Task Tracker props"
}
// //css in jsx
// const HeaderStyle= {
//     color : 'red' ,
//     backgroundColor : 'black'
// }
export default Header