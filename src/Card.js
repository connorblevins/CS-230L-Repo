import React from "react";

function Card() {
return (
  <div class="row">

  <div class="col-sm-4">

<div class="card text-white bg-primary mx-lg-2">

  <div class="card-header h3">Card 01</div>

  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col-sm-4">
<div class="card text-white bg-danger">
  <div class="card-header h3">Card 02</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col-sm-4">
<div class="card text-white bg-success mx-lg-2">
  <div class="card-header h3">Card 03</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>
)
}
export default Card;