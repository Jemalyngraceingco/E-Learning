<template>
    <body>
        <!-- Top Bar -->
        <div class="container-fluid bg-dark text-light px-0 py-2">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <a href="mailto:minscatccclibrary.2017@gmail.com">
                        <div class="h-100 d-inline-flex align-items-center" style="color:white">
                            <span class="far fa-envelope me-2"></span>
                            <span>studentportal.2023@gmail.com</span>
                        </div>
                    </a>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <div class="h-100 d-inline-flex align-items-center mx-n2">
                        <span>Follow Us:</span>
                        <a class="btn btn-link text-light" href="https://facebook.com/minsucclib" target="_blank"> <i
                                class="fab fa-facebook-f"></i>
                        </a>
                        <a class="btn btn-link text-light" href="404.php" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-link text-light" href="404.php" target="_blank"><i
                                class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-link text-light" href="404.php" target="_blank"><i
                                class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- TopBar End -->
        <!-- Navbar Start -->

        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a href="index.php" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h1 class="m-0">Colegio De Puerto</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.php" class="nav-item nav-link active">Home</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
                        <div class="dropdown-menu fade-down m-0">
                            <a href="team.html" class="dropdown-item">VMGO</a>
                            <a href="testimonial.html" class="dropdown-item">Core Values</a>
                            <a href="404.html" class="dropdown-item">History</a>
                        </div>
                    </div>
                    <a href="contact.php" class="nav-item nav-link">Contact</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Offices</a>
                        <div class="dropdown-menu fade-down m-0">
                            <a href="team.html" class="dropdown-item">Guidance Councilor </a>
                            <a href="testimonial.html" class="dropdown-item">Registrar Offiice</a>
                            <a href="404.html" class="dropdown-item">Tracher and Facilities</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Academics</a>
                        <div class="dropdown-menu fade-down m-0">
                            <a href="team.html" class="dropdown-item">Enrollment</a>
                            <a href="testimonial.html" class="dropdown-item">Creditentials</a>
                            <a href="404.html" class="dropdown-item">Course</a>
                            <a href="404.html" class="dropdown-item">Grade</a>
                        </div>
                    </div>
                    <a href="logout.php" class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Logout<i
                            class="fa fa-arrow-right ms-3"></i>
                    </a>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
        <!-- Carousel Start  -->
        <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" :src="require('@/assets/img/carousel-1.jpg')">
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <h1 class="display-1 text-white mb-5 animated slideInDown">Inspire Your Mind, Expand
                                            Your Horizon</h1>
                                        <a href="" class="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" :src="require('@/assets/img/carousel-2.jpg')">
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-7">
                                        <h1 class="display-1 text-white mb-5 animated slideInDown">Connect. Collaborate.
                                            Create.</h1>
                                        <a href="" class="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- Carousel End -->
        <!-- Service Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item text-center pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                                <h5 class="mb-3">Skilled Instructors</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item text-center pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                                <h5 class="mb-3">Online Classes</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service-item text-center pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-home text-primary mb-4"></i>
                                <h5 class="mb-3">Home Projects</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service-item text-center pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                                <h5 class="mb-3">Book Library</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service End -->
       <!-- Cpount Start -->
     <section class="section db">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="stat-count">
                            <h4 class="stat-timer">1230</h4>
                            <h3><i class="flaticon-black-graduation-cap-tool-of-university-student-for-head"></i> Happy Students</h3>
                            <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. </p>
                        </div><!-- stat-count -->
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-4">
                        <div class="stat-count">
                            <h4 class="stat-timer">331</h4>
                            <h3><i class="flaticon-online-course"></i> Course Done</h3>
                            <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. </p>
                        </div><!-- stat-count -->
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-4">
                        <div class="stat-count">
                            <h4 class="stat-timer">8901</h4>
                            <h3><i class="flaticon-coffee-cup"></i> Ordered Coffe's</h3>
                            <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <!-- Count End -->

        <!-- About Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style="min-height: 400px;">
                        <div class="position-relative h-100">
                            <img class="img-fluid position-absolute w-100 h-100" :src="require('@/assets/img/about.jpg')">
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                        <h1 class="mb-4">Welcome to eLEARNING</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <div class="row gy-2 gx-4 mb-4">
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate
                                </p>
                            </div>
                        </div>
                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
        <!-- Courses Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <h1 class="mb-5">Popular Courses</h1>
                </div>
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/course-1.jpg')">
                            </div>
                            <div class="text-center p-4 pb-0">

                                <h5 class="mb-4">Tourism </h5>
                            </div>
                            <div class="d-flex border-top">
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-user-tie text-primary me-2"></i> Details</small>
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-clock text-primary me-2"></i>Enroll Now</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/course-2.jpg')">
                            </div>
                            <div class="text-center p-4 pb-0">
                                <h5 class="mb-4">Criminology</h5>
                            </div>
                            <div class="d-flex border-top">
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-user-tie text-primary me-2"></i> Details</small>
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-clock text-primary me-2"></i>Enroll Now</small>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/course-3.jpg')">
                            </div>
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h5 class="mb-4">BSIT</h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i
                                    class="fa fa-user-tie text-primary me-2"></i>Details</small>
                            <small class="flex-fill text-center border-end py-2"><i
                                    class="fa fa-clock text-primary me-2"></i> Enroll Now</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Courses End -->
        <!-- Team Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title bg-white text-center text-primary px-3">Instructors</h6>
                    <h1 class="mb-5">Expert Instructors</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light">
                            <div class="overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/team-1.jpg')">
                            </div>
                            <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                            class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                            class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light">
                            <div class="overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/team-2.jpg')">
                                <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                                    <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-twitter"></i></a>
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light">
                            <div class="overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/team-3.jpg')">
                                <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                                    <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-twitter"></i></a>
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light">
                            <div class="overflow-hidden">
                                <img class="img-fluid" :src="require('@/assets/img/team-2.jpg')">
                                <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                                    <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-twitter"></i></a>
                                        <a class="btn btn-sm-square btn-primary mx-1" href=""><i
                                                class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Team End -->
        <!-- Testimonial Start -->
        <div class="container-fluid bg-light bg-icon py-6 mb-5">
            <div class="container">
                <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                    style="max-width: 500px;">
                    <h1 class="display-5 mb-3">Customer Review</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div class="testimonial-item position-relative bg-white p-5 mt-4">
                        <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                            Clita erat ipsum et lorem et sit.</p>
                        <div class="d-flex align-items-center">
                            <img class="flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="">
                            <div class="ms-3">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item position-relative bg-white p-5 mt-4">
                        <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                            Clita erat ipsum et lorem et sit.</p>
                        <div class="d-flex align-items-center">
                            <img class="flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="">
                            <div class="ms-3">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item position-relative bg-white p-5 mt-4">
                        <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                            Clita erat ipsum et lorem et sit.</p>
                        <div class="d-flex align-items-center">
                            <img class="flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt="">
                            <div class="ms-3">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item position-relative bg-white p-5 mt-4">
                        <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                            Clita erat ipsum et lorem et sit.</p>
                        <div class="d-flex align-items-center">
                            <img class="flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt="">
                            <div class="ms-3">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
    </body>
</template>

