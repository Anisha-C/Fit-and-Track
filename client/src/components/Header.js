// import '../semantic/dist/components/segment.css';
// import '../semantic/dist/components/header.css';
// import '../semantic/dist/components/grid.css';

function Header(props){


    return (
        <div class="ui inverted segment">
            <div class="ui two column centered grid">
                <div className='sixteen wide column'>
                    <h1 class="ui blue inverted header centered">{props.title}</h1>
                </div>
                <div>
                    <h4>{props.subtitle}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header