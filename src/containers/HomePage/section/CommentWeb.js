import React from "react";
import '../../../scss/CommentWeb.scss';

const CommentWeb = () =>{

    return(

        <div className="CommentWeb">
            <div className="CommentWeb-Container">
                <div className="CommentWeb-Title">
                    <h3>Truyền Thông nói gì về  trang web</h3>
                    <div className="commentWeb-video">
                        <iframe width="723" height="450"
                        src="https://www.youtube.com/embed/yIE13WVpfcQ"
                        title="video youtube"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen></iframe>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentWeb