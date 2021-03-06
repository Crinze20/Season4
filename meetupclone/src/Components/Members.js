import React from 'react'

const Members = () => 

<div>
    <div className="container is-fluid">
        <p className="title is-4">Members</p>
        <p/>
    </div>
    <div className="container is-fluid">            
        <div className="notification">
            <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child box">
                <div className="content">
                <figure className="image is-128x128">
                    <img className="is-rounded" src="data:image/png;base64,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"></img>
                </figure>
                </div>
                </article>
            </div>
            <div className="tile is-parent is-9">
                <article className="tile is-child box">
                <div className="columns">
                    <div className="column is-one-fifth">
                        <br/>
                        <p className="title is-5">Organizers</p>
                        <p className="subtitle">Christ Natalius</p>                         
                    </div>
                    <div className="column">
                        <br/><br/>
                        <p className="subtitle">6 Others</p>
                    </div>
                </div>
                </article>
            </div>
            </div>
        </div>  
    </div>  
</div>


 export default Members