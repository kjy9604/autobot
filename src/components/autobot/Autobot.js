import '../../css/autobot.css';

function Autobot() {
    return (
        <div className="content">
            <div className="container">
                <div className="line_1">
                    <div className="content_title">오토로봇 프로세스 메뉴</div>
                    <div>
                        <div class="tooltip">
                            <button className="main_button help_tip">
                                <a>로봇결제방법</a>
                            </button>
                            <div className="tooltip-content">
                                <p>
                                    나의 자산을 가동시킬 양 만큼의 로봇을 구매하시기 바랍니다.<br/>
                                    나의 자산이 50,000$인데 30,000$ 로봇(80$)을 결재하면 30,000$까지만 로봇 가동가능<br/>
                                    나의 자산이 100,000$인데 30,000$로봇(80$)*4개를 결재하면 30,000$ * 4개의 로봇을 가동가능<br/>
                                    로봇1당 1개의 통화만 사용이 가능함.
                                </p>
                            </div>
                        </div>
                        <button className="main_button">자동연장결재</button>
                    </div>
                </div>
                <form>
                    <div>
                        <div>
                            <table className="m_text">
                                <thead>
                                    <tr>
                                        <th>선택</th>
                                        <th>로봇설정요금(월)</th>
                                        <th>1로봇</th>
                                        <th>2로봇</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" value="5000"/></td>
                                        <td>5000$ 이하</td>
                                        <td>30$</td>
                                        <td>54$</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" value="10000"/></td>
                                        <td>10000$ 이하</td>
                                        <td>50$</td>
                                        <td>90$</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" value="30000"/></td>
                                        <td>30000$ 이하</td>
                                        <td>80$</td>
                                        <td>144$</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" value="30000"/></td>
                                        <td>30000$ 이하</td>
                                        <td>100$</td>
                                        <td>180$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="line_4">
                        <div></div>
                        <div>
                            <h2>
                                피라미딩 세팅 : 
                                <input name="pyramiding" type="radio" value="Y" id="Y" /> <label for="Y">ON</label> / 
                                <input name="pyramiding" type="radio" value="N" id="N" /> <label for="N">OFF</label>
                            </h2>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Autobot;