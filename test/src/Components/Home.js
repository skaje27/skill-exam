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
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="319px" height="213px" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Explore</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="319px" height="213px" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Plan</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="319px" height="213px" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Execute</p>
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
<div class="card text-center">
  <div class="card-header" style={{backgroundColor:"offwhite"}}>
    Trip-a-holic
  </div>
  <div class="card-body" style={{backgroundColor:"pink"}}>
    <h5 class="card-title">Want to travel but lazy to plan the trip? Here we are, to help you explore, plan and travel around the world! </h5>
    <p class="card-text">A ship is safe in the harbor, but that's not what ships are built for.</p>
    <p class="card-text">Better to see something once than hear about it a thousand times.</p>
    <a href="#" class="btn btn-primary">Plan your trip now!</a>
  </div>
</div>

<br></br>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Destination</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Destination</a></li>
    <li class="breadcrumb-item active" aria-current="page">Place</li>
  </ol>
</nav>
<br></br>
<footer className="footer">
        <div className="container">
          <div className="row" style={{backgroundColor:"cyan"}}>
            
              <h3>Contact Us</h3>
              <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
           
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                
                 
              </div>
              
            </div>
          </div>
        </div>
      </footer>
<Outlet />
</>

     );
}
 
export default Home;