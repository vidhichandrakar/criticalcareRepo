// import React from "react";
// import "../../CSS/Testimonial.css"

// const Testimonial = () =>{
//     return(
//         <div class="container-lg">
// 	<div class="row">
// 		<div class="col-sm-12">			
// 			<div id="myCarousel" class="carousel slide" data-ride="carousel">
// 				<h2>Testimonials</h2>
			
// 				{/* <ol class="carousel-indicators">
// 					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
// 					<li data-target="#myCarousel" data-slide-to="1"></li>
// 					<li data-target="#myCarousel" data-slide-to="2"></li>
// 				</ol>        */}
//                 <h3 className="secondHeading">
//          <span className="hereItFrom">Hear It From </span>
//          <span className="theMasters"> The Masters</span>
//         </h3>
// 				<div class="carousel-inner">
// 					<div class="carousel-item active">
// 						<div class="row">   
// 							<div class="col-sm-6 borderblack">
// 								<div >
// 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
// 								</div>
// 								<div class="media">
// 									<div class="media-body">
// 										<div class="overview">
// 											<div class="name"><b>Paula Wilson</b></div>
// 											<div class="details">Media Analyst / SkyNet</div>
// 											<div class="star-rating">
												
// 											</div>
// 										</div>										
// 									</div>
// 								</div>
// 							</div>
// 							<div class="col-sm-6 borderblack">
// 								<div>
// 									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
// 								</div>
								
// 							</div>
// 						</div>			
// 					</div>
// 					{/* <div class="carousel-item">
// 						<div class="row">
// 							<div class="col-sm-6">
// 								<div class="testimonial">
// 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
// 								</div>
// 								<div class="media">
// 									<img src="/examples/images/clients/3.jpg" class="mr-3" alt="" />
// 									<div class="media-body">
// 										<div class="overview">
// 											<div class="name"><b>Michael Holz</b></div>
// 											<div class="details">Web Developer / DevCorp</div>											
// 											<div class="star-rating">
// 												<ul class="list-inline">
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 												</ul>
// 											</div>
// 										</div>										
// 									</div>
// 								</div>
// 							</div>
// 							<div class="col-sm-6">
// 								<div class="testimonial">
// 									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
// 								</div>
// 								<div class="media">
// 									<img src="/examples/images/clients/4.jpg" class="mr-3" alt="" />
// 									<div class="media-body">
// 										<div class="overview">
// 											<div class="name"><b>Mary Saveley</b></div>
// 											<div class="details">Graphic Designer / MarsMedia</div>
// 											<div class="star-rating">
// 												<ul class="list-inline">
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 												</ul>
// 											</div>
// 										</div>										
// 									</div>
// 								</div>
// 							</div>
// 						</div>			
// 					</div>
// 					<div class="carousel-item">
// 						<div class="row">
// 							<div class="col-sm-6">
// 								<div class="testimonial">
// 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
// 								</div>
// 								<div class="media">
// 									<img src="/examples/images/clients/5.jpg" class="mr-3" alt="" />
// 									<div class="media-body">
// 										<div class="overview">
// 											<div class="name"><b>Martin Sommer</b></div>
// 											<div class="details">SEO Analyst / RealSearch</div>
// 											<div class="star-rating">
// 												<ul class="list-inline">
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 												</ul>
// 											</div>
// 										</div>										
// 									</div>
// 								</div>
// 							</div>
// 							<div class="col-sm-6">
// 								<div class="testimonial">
// 									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
// 								</div>
// 								<div class="media">
// 									<div class="media-left d-flex mr-3">
// 										<img src="/examples/images/clients/6.jpg" alt="" />										
// 									</div>
// 									<div class="media-body">
// 										<div class="overview">
// 											<div class="name"><b>John Williams</b></div>
// 											<div class="details">Web Designer / UniqueDesign</div>
// 											<div class="star-rating">
// 												<ul class="list-inline">
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 												</ul>
// 											</div>
// 										</div>										
// 									</div>
// 								</div>
// 							</div>
// 						</div>			
// 					</div> */}
                     
// 				</div>
				
// 			</div>
//             <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
// 					<i class="fa fa-chevron-left"></i>
// 				</a>
// 				<a class="carousel-control-next" href="#myCarousel" data-slide="next">
// 					<i class="fa fa-chevron-right"></i>
// 				</a>
// 		</div>
       
// 	</div>
//         </div>
//     )
// }

// export default Testimonial;