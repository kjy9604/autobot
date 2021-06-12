function Menu() {
    return (
        <nav className="navbar">
            <div className="nav_logo">
                <i className="fas fa-bahai"></i><a href="#">AutoMain</a>
            </div>
            <ul className="nav_menu">
                <li><a href="javascript:void(0);">MTOP</a><div> |</div></li>
                <li><a href="javascript:void(0);">추천인 수익</a><div> |</div></li>
                <li><a href="javascript:void(0);">AUTO 로봇</a><div> |</div></li>
                <li><a href="javascript:void(0);">특별기능</a><div> |</div></li>
                <li><a href="javascript:void(0);">제휴</a></li>
            </ul>
        </nav>
    );
}

export default Menu;