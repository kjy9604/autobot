import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar">
            <div className="nav_logo">
                {/*<i className="fas fa-bahai"></i>*/}<Link to="/"><img src="/img/logo.png"/>&nbsp;Penta Plant</Link>
            </div>
            <ul className="nav_menu">
                <li><Link to="#">MTOP</Link></li>
                <li>|</li>
                <li><Link to="#">추천인 수익</Link></li>
                <li>|</li>
                <li><Link to="/autobot">AUTO 로봇</Link></li>
                <li>|</li>
                <li><Link to="#">특별기능</Link></li>
                <li>|</li>
                <li><Link to="#">제휴</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;