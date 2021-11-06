import React from 'react';

const Toppanel = (props) => {
    let {title, body} = props;
    return(
        <div className="card">
           <div className="card-tite">
                {title}
           </div>
           <div className="card-body">
                {body}
           </div>
        </div>
    )
}