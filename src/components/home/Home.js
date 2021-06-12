import Notice from './Notice';
import Table from './Table';
import Showcase from './Showcase';
import Contact from './Contact';
import Trade from './Trade';
import '../../css/basic.css';

function home() {
    return (
        <section>
            <Notice />
            <Table />
            <Showcase />
            <Contact />
            <Trade />
        </section>
    );
}

export default home;