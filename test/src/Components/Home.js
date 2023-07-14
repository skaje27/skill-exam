import { Outlet} from "react-router-dom";
const Home = () => {
    return ( 
        <>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3BpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60/800x400" alt="myimage" width="319px" height="213px" />
      {/* <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3BpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60/800x400" height="400px" class="d-block w-100" alt="..."> */}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwc3BpY2VzfGVufDB8fDB8fHww" alt="myimage" width="319px" height="213px" />
      {/* <img src="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwc3BpY2VzfGVufDB8fDB8fHww" height="400px" class="d-block w-100" alt="..."> */}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1622042914684-6a6288b14078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D" alt="myimage" width="319px" height="213px" />
      {/* <img src="https://images.unsplash.com/photo-1622042914684-6a6288b14078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D" width="400px" height="400px"  class="d-block w-100" alt="..."> */}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<div class="container">
  <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60/100px180/" alt="myimage" width="319px" height="213px" />
        {/* <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60/100px180/" class="card-img-top" alt="..."> */}
        <div class="card-body">
          <h5 class="card-title">Breakfast</h5>
          <p class="card-text">There are times where breakfast seems the one thing worth getting up for.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=ais" alt="myimage" width="319px" height="213px" />
        {/* <img src="https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=ais" class="card-img-top" alt="..."> */}
        <div class="card-body">
          <h5 class="card-title">Lunch</h5>
          <p class="card-text">Lunch description</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://img.freepik.com/premium-photo/veg-samosa-is-indian-popular-snack-junk-food-served-with-fried-green-chilly-onion-chutney-ketchup_466689-13445.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=sph" alt="myimage" width="319px" height="213px" />
        {/* <img src="https://img.freepik.com/premium-photo/veg-samosa-is-indian-popular-snack-junk-food-served-with-fried-green-chilly-onion-chutney-ketchup_466689-13445.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=sph" class="card-img-top" alt="..."> */}
        <div class="card-body">
          <h5 class="card-title">Snacks</h5>
          <p class="card-text">Snacks Description</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://img.freepik.com/premium-photo/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes_52137-30827.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=sph" alt="myimage" width="319px" height="213px" />
        {/* <img src="https://img.freepik.com/premium-photo/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes_52137-30827.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=sph" class="card-img-top" alt="..."> */}
        <div class="card-body">
          <h5 class="card-title">Diner</h5>
          <p class="card-text">Dinner Description.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
<Outlet />
</>

     );
}
 
export default Home;