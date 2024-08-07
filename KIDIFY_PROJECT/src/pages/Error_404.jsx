import React from 'react'
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";




const Error_404 = () => {
	return (

		// <section className='flex items-center justify-center'>

		// 	<div className=" h-[700px] w-[1400px] bg-pink-100  ">
		// 		<div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 ">

		// 			<div className="">
						

		// 				<div className=" ">
		// 					<div className="text-5xl  font-bold mb-10 text-nowrap ">Page not available</div>
		// 					<div className="text-xl  font-bold mb-14 leading-7 ">
		// 						Sorry, but the page you were looking for could not be found.
		// 					</div>
		// 					<div className="text-md	">
		// 						You can return to our <a href="http://fy.local/"><u>home page</u></a>, or drop us a line  if you can't find what you're looking for.						</div>
		// 				</div>


		// 			</div>
		// 			<div className="w-full ml-96  my-12 -mx-20  hover:-translate-x-6 hover:scale-100">
		// 				<img src="./src/assets/error_404.webp" className="" alt="Page not found" />
		// 			</div>

		// 		</div>

		// 		<div class="row flex justify-evenly my-14 mt-40">
		// 			<div class="col-lg-3 col-md-6 mb-15">
		// 				<div class="cardContact cardChat">
		// 					<div class="cardInfo">
		// 						<strong class="d-block mb-5 font-xl-bold">Chat to sales</strong>
		// 						<p class="font-md">
		// 							Speak to our teamcom
		// 							<a href="mailto:sales@kidify.com">sales@kidify.com</a>										</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class="col-lg-3 col-md-6 mb-15">
		// 				<div class="cardContact cardChat">
		// 					<div class="cardInfo">
		// 						<strong class="d-block mb-5 font-xl-bold">Call us</strong>
		// 						<p class="font-md">
		// 							<a href="tel:+01 568 253">+01 568 253</a>
		// 							<a href="tel:+01 568 253">+01 568 253</a>										</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class="col-lg-3 col-md-6 mb-15">
		// 				<div class="cardContact cardChat">
		// 					<div class="cardInfo">
		// 						<strong class="d-block mb-5 font-xl-bold">Postal mail</strong>
		// 						<p class="font-md">
		// 							456 Park Avenue South, Apt 7B
		// 							New York, NY 10016										</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class="col-lg-3 col-md-6 mb-15">
		// 				<div class="cardContact cardChat">
		// 					<div class="cardInfo">
		// 						<strong class="d-block mb-5 font-xl-bold">Social Network</strong>
		// 						<p class="font-md">
		// 							456 Park Avenue South, Apt 7B
		// 							New York, NY 10016										</p>-+
		
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>




		<section className='container-lg flex items-center justify-center mt-12'>

			<div className=" h-[510px]  bg-pink-100  ">
				<div className="container  flex flex-col  md:flex-row items-center  justify-between px-5 text-gray-700 ">
					<div className="ml-10">
						<div className=" pr-20   w-9/12">
							<div className="text-5xl  font-bold -mb-2.5  text-nowrap ">Page not available</div>
							<div className="text-md   font-bold -mb-4 mt-4 leading-7 ">
								Sorry, but the page you were looking for could not be found.
							</div>
							<div className="text-sm -mb-8 mt-8">
								You can return to our <a href="http://fy.local/"><u>home page</u></a>, or drop us a line  if you can't find what you're looking for.						</div>
						</div>
					</div>
					<div className="w-full  ml-52 mt-10 items-end basis-auto hover:-translate-x-6 hover:scale-100">
						<img src="./src/assets/error_404.webp" className="h-[430px]" alt="Page not found" />
					</div>
				</div>
				<div class="row flex justify-evenly my-14 pt-3">
					<div class="col-lg-3 col-md-6 mb-15">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-2 text-lg font-bold">Chat to sales</strong>
								<p class="text-sm">
									Speak to our teamcom<br />
									<a href="mailto:sales@kidify.com">sales@kidify.com</a>										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 ">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-2 text-lg font-bold">Call us</strong>
								<p class="text-sm ">
									<a href="tel:+01 568 253">+01 568 253</a><br />
									<a href="tel:+01 568 253">+01 568 253</a>										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 ">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-2 text-lg font-bold">Postal mail</strong>
								<p class="text-sm">
									456 Park Avenue South, Apt 7B<br />
									New York, NY 10016										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 ">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="block mb-2 text-lg font-bold">Social Network</strong>
								<p class="text-sm">
									456 Park Avenue South, Apt 7B<br />
									New York, NY 10016										</p>
							</div>
						</div>
					</div>
				
				</div>
					
					<div className='pb-10 border-b-2  border-b-zinc-200'> 
					</div> 
					
					<div className='flex pt-10'>
						<div className='mb-16 '>
							<div className='m-0 p-0'>
								<section>
									<div className='mt-28'>
										<div className='bg-cover border-2 border-red-600 border-dashed '>
											<img src="./src/assets/error_bg.png" alt="" />
											<div className='flex flex-wrap  '>
												<div className=' w-1/12'></div>
												<div class="col-lg-5 w-5/12 -mt-44 ">
													<h4 class="heading-4 brand-2 mb-4 text-3xl font-bold newsletter-title text-yellow-600 font-['Lobster Two']">
														Sing up and get up to <span class="brand-3 text-red-600">25% </span>off your first purchase</h4>
													<p class="  mb-4 text-base newsletter-subtitle text-neutral-500">Receive offter, product alerts, styling inspiration and more. By signing up, you agree to our Privace Policy
														<span className='text-red-500'>
															asb
														</span>
													</p>
												</div>
												
											</div>
										</div>
									</div>
								</section>

							</div>
						</div>
					</div>
			</div>








		</section>


	)
}

export default Error_404


