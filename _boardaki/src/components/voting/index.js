import React, { useState } from "react";

import "./Voting.css";

function Voting(props) {
    const [voteCount, setVoteCount] = useState(props.initialVoteCount);

    const counterModifierClass = voteCount < 0
        ? "has-text-danger" : "has-text-success";

    return (
        <p className="Voting">
            <strong className={"Voting__Counter " + counterModifierClass}>
            </strong>

            <button className="button" onClick={() => setVoteCount(voteCount + 1)}>
                <span className="icon is-small">
                    <i className="far fa-thumbs-up"></i>
                </span>
            </button>

            <button className="button" onClick={() => setVoteCount(voteCount - 1)}>
                <span className="icon is-small">
                    <i className="far fa-thumbs-down"></i>
                </span>
            </button>
        </p>
    );
}

export default Voting;
