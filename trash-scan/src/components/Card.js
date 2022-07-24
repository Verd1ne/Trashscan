import React from "react";
import CardTemplate from "../images/card-template.png";

export default function Card(props) {
  return (
    <div className="column">
      <div class="card GreyCard rounded-3xl" style={{background:`url(${CardTemplate})`}}>
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-left has-text-white">
                  <div className="columns">
                    <div className="column">
                      <h2 class="is-size-4 has-text-weight-light">IDR:</h2>
                      <h2 class="is-size-4 has-text-weight-normal">{props.money}</h2>
                    </div>
                    <div className="column">
                      <h2 class="is-size-4 has-text-weight-light">Points:</h2>
                      <h2 class="is-size-4 has-text-weight-normal">{props.points}</h2>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <h3 class="is-size-4 has-text-weight-light">User:</h3>
                    </div>
                    <div className="column">
                      <h3 class="is-size-4 has-text-weight-normal">{props.name}</h3>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
