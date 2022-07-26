export default function NavBar(props){

    return(
        <div style={{display:"flex"}}>
            <p onClick={() => props.changePage('exercise')}>Exercise</p>
            <p onClick={() => props.changePage('food')}>Food</p>
            <p onClick={() => props.changePage('water')}>Water</p>
        </div>
    )
}
