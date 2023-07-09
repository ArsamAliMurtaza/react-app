import "./Video.css"

function Video({title,channel,views,time}) {
    return( 
    <div>
        <img src="https://loremflickr.com/160/90" alt="Katherine Johnson" />
    <div className="title">{title}</div>
    <div className="channel">{channel}</div>
    <div className="views">{views} views <span>.</span> {time} </div>
    </div>
    );
}

export default Video;