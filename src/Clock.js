import './Clock.css'

function Clock(){
    return(
        <div id="time-string" className="clock-container">
            {setInterval(() => {
                const today = new Date();
                document.getElementById('time-string').innerHTML = today.toLocaleTimeString('en-US');
            }, 10)}
        </div>
    );
}

export default Clock;