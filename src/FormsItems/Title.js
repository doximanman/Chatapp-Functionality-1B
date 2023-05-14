
import logo from '../Pictures/logo.png';
function Title({ title }) {
    return (
        <div id="open" class="col-12">
            <img id="logo" src={logo}></img>
            <h1 class="col-10">{title}</h1>
        </div>
    );
}

export default Title;