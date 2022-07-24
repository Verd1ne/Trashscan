import React from "react";


export default function Card(props) {
  return (
    <div className="column">
      <div class="card GreyCard rounded-3xl" style={{background:"black"}}>
      <div class="card-image">
          <figure>{props.profilepicture}</figure>
      </div>
        <div class="card-content card-height">
          <div class="media">
            <div class="media-content has-text-centered has-text-white">
              <h2 class="is-size-5 has-text-weight-normal">{props.name}</h2>
              <br/>
              <u class="is-size-7 has-text-weight-normal is-link">{props.email}</u>
              <h3 class="is-size-7 has-text-weight-normal">{props.number}</h3>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h3 class="is-size-6 has-text-weight-normal">ID:{props.idnumber}</h3>
              <br/>
              <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
