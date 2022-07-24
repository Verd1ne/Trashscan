import React from "react";
import CardTemplate from "../images/card-template.png";

export default function Card(props) {
  return (
    <div className="column">
      <div class="card is-rounded GreyCard rounded-3xl">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-left has-text-black">
              <h2 class="is-size-4 has-text-weight-normal">IDR:</h2>
              <h2 class="is-size-4 has-text-weight-semibold">{props.money}</h2>
              <h2 class="is-size-4 has-text-weight-normal">Points:</h2>
              <h2 class="is-size-4 has-text-weight-semibold">{props.points}</h2>
              <h2 class="is-size-4 has-text-weight-normal">User:</h2>
              <h2 class="is-size-4 has-text-weight-semibold">{props.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
