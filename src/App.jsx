import logo from './logo.png';
import ProblemSolveChart from './component/ProblemSolveChart';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-box fade-in">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>2021. 6. 23 ~ 8. 31</p>
                    <p className="App-body">더운 여름에도 끝까지 함께한 TCP 여러분, 고생하셨습니다!</p>
                    <p className="App-body">우리가 걸어왔던 두 달간의 기록들을 돌아봅시다.</p>
                </div>
            </header>
            <section id="page-1">
                <header className="App-header-dark fade-in bg-solved">
                    <h1 className="White-title">70 Days</h1>
                    <div className="App-box">
                        <p className="App-body">스터디가 진행되는 70일간 <strong>719개</strong>의 문제를 해결하였습니다.</p>
                        <p className="App-body">1인당 하루 평균 <strong>1.28문제</strong>를 해결하였습니다.</p>
                        <br/>
                        <p className="App-body">BOJ, Programmers, Codeground 에서 공부했습니다.</p>
                        <br/>
                    </div>
                </header>
            </section>
            <section>
                <header className="App-header-dark">
                    <h1 className="White-title">Best Player : Problem Solve</h1>
                    <div className="App-box left-align">
                        <p className="App-body">가장 많은 문제를 푼 사람은 <strong>이재원</strong>이고, <strong>132 문제</strong>를 해결하였습니다.</p>
                        <br/>
                        <ProblemSolveChart/>
                    </div>
                </header>
            </section>
            <section>
                <header className="App-header-dark">
                    <h1 className="White-title">Competition 1 : UCPC</h1>
                    <div className="App-box left-align">
                        <p className="App-body">"세문제만푸는팀" 으로 UCPC에 참가하여 <strong>2 solve, 예선 193th</strong>의 성적을 거두었습니다.</p>
                        <p className="small-body">세문제만푸는팀 / A번담당(김도은), B번담당(김동원), C번담당(김용래)</p>

                        <img width="100%" src="https://user-images.githubusercontent.com/28296575/128635084-79ce37e4-2cb0-4fc4-b263-f19018d7a2cb.png" alt="rank"/>

                    </div>
                </header>
            </section>
            <section>
                <header className="App-header-dark">
                    <h1 className="White-title">Competition 2 : SCPC</h1>
                    <div className="App-box left-align">
                        <p className="App-body">2명이 개인으로 참여하여 <strong>Round 2</strong> 까지 진출하였습니다.</p>
                        <p className="small-body">김도은(Round 2), 김용래(Round 2)</p>
                        <img width="100%" src="https://user-images.githubusercontent.com/28296575/130798926-9e62f944-8a3f-472a-abd8-905569c7df74.png" alt="rank"/>

                    </div>
                </header>
            </section>
            <section>
                <header className="App-header-dark bg-company">
                    <h1 className="White-title">Coding Test</h1>
                    <div className="App-box left-align">
                        <p className="App-body">기업에서 주관하는 다양한 <strong>코딩 테스트</strong>에 참여하였습니다.</p>
                        <p className="App-body">좋은 성적으로 코딩 테스트를 통과하신 모든 분들 축하드립니다!</p>
                        <p className="small-body">- 네이버웹툰, 토스, 와디즈, 올리브영 등</p>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default App;
