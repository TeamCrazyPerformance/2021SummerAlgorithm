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
        </div>
    );
}

export default App;
