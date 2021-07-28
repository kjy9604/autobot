import React, { Component } from 'react';
import Title from '../common/Title';

class Purchase extends Component {
    render() {
        return (
            <>
                <Title header="메뉴 결제 프로세스" />
                <div className="purchase_wrapper">
                    <div className="purchase_process">
                        <div>
                            <div>1. AUTO 결재</div>
                            <div>2. AUTO 결재하기 누름</div>
                            <div>3. 시장가로 MTOP을 바로구매</div>
                            <div>4. 해당 MTOP는 거래소(특별) 지갑으로 이동</div>
                            <div>5. 로봇을 MTOP 결재량 만큼 이용가능</div>
                        </div>
                        <img src="#" />
                    </div>
                </div>
            </>
        )
    }
}

export default Purchase;