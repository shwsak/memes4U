function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid meme-header">
                <img className="meme-logo" src={props.logo}/>
            </div>
        </nav>
    );
}

export default NavBar;