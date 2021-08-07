import logo from './logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-box">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>2021. 6. 23 ~ 8. 31</p>
                    <p className="App-body">더운 여름에도 끝까지 함께한 TCP 여러분, 고생하셨습니다!</p>
                    <p className="App-body">우리가 걸어왔던 두 달간의 기록들을 돌아봅시다.</p>
                </div>
            </header>
            <section>
                <header className="App-header-dark">
                    <h1 className="White-title">70 Days</h1>
                    <div className="App-box">
                        <p className="App-body">스터디가 진행되는 70일간</p>
                        <br/>
                        <p className="App-body">2번의 코딩 테스트에 응시하였습니다.</p>
                        <p className="App-body">2개의 대회에 출전하였습니다.</p>
                        <p className="App-body">409개의 문제를 해결하였습니다.</p>
                        <p className="App-body">286개의 문제를 틀렸습니다.</p>
                        <p className="App-body">해결한 문제들의 평균 난이도는 실버5입니다.</p>
                        <p className="App-body">하루에 문제를 가장 많이 푼 날은 21문제입니다.</p>
                    </div>
                </header>
            </section>
            <section>
                <header className="App-header-dark">
                    <h1 className="White-title">Best Player : Problem Solve</h1>
                    <div className="App-box left-align">
                        <p className="App-body">가장 많은 문제를 푼 사람은 <strong>김도현</strong>이고, <strong>96 문제</strong>를 해결하였습니다.</p>
                        <br/>
                        <p className="App-body">[2] 임성국 : 81 문제</p>
                        <p className="App-body">[3] 김용래 : 78 문제</p>
                        <p className="App-body">[4] 이재원 : 75 문제</p>
                        <p className="App-body">[5] 김동원 : 65 문제</p>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default App;
