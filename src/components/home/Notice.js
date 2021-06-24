import React from "react";
import $ from 'jquery';
import NoticeContent from './NoticeContent';
class Notice extends React.Component {
    
    
    componentDidMount() {
        let height = $("#noticeTitle").height();
        let num = $("#rolling li").length;
        let max = height * num;
        let move = 0;

        const rolling = () => {
            move += height;
            $("#rolling").animate({"top": -move}, 600, function() {
                if(move >= max) {
                    $(this).css("top", 0);
                    move = 0;
                }
            })
        }
        setInterval(rolling, 2000);
    }



    render() {
        return (
            <section className="section2">
                <div className="notice">
                    <ul className="rolling">
                        <NoticeContent />
                        <NoticeContent />
                    </ul>
                </div>
            </section>
        )
    }
}

export default Notice;