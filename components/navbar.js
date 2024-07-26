export default function Navbar({ mapShown, fullReset, playingMultiplayer }) {
  return (
    <div className={`top ${mapShown ? 'hideOnMobile' : ''}`}>
      <div className="topItem navbar">
        <div>
          <a id="logo" alt="worldguessr logo" onClick={() => { }} style={{ cursor: "pointer" }}>
            <img id="icon" src="/logo.png" alt="WorldGuessr logo" />
          </a>
          {playingMultiplayer ? <p style={{ color: 'white' }}></p> : (
            <button className="navButton" onClick={() => { if (!playingMultiplayer) fullReset(); }}>New drop</button>
          )}
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
