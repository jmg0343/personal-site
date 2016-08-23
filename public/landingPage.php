
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">

    <title>Joey Garcia</title> 

    <!-- Bootstrap Core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Sree+Krushnadevaraya' rel='stylesheet' type='text/css'>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Phone and Mail Icons -->
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">

    <!-- Custom CSS -->
    <link href="/css/one-page-wonder.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" id="affix1" data-spy="affix" data-offset-top="100" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="navigation-button hvr-float-shadow">
                        <a href="#about">About</a>
                    </li>
                    <li class="navigation-button hvr-float-shadow">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="navigation-button hvr-float-shadow">
                        <a href="/resume.php">Resume</a>
                    </li>
                     <li class="navigation-button hvr-float-shadow">
                        <a href="#conactForm">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Full Width Image Header -->
    <header class="header-image">
        <div class="headline">
            <div class="container">
                <h1>Joey Garcia</h1>
                <h2>Full Stack Developer</h2>
            </div><br>
            <!-- <a href="https://www.linkedin.com/in/joey-garcia-74161b7b" target="_blank"><button><i class="fa fa-linkedin" style="font-size:36px"></i></button></a> -->
        </div>
    </header>

    <!-- Page Content -->
    <div class="container">
    
        <hr class="featurette-divider" id="about">

        <!-- First Featurette -->
        <div class="featurette">
            <img class="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500">
            <h2 class="featurette-heading">Title of Project 1
                <span class="text-muted">Description</span>
            </h2>
            <p class="lead">This paragraph will describe the project and its practical applications. The picture to the right will be a clickable screenshot that links directly to the project </p>
        </div>

        <hr class="featurette-divider">

        <!-- Second Featurette -->
        <div class="featurette" id="services">
            <img class="featurette-image img-circle img-responsive pull-left" src="http://placehold.it/500x500">
            <h2 class="featurette-heading">Title of Project 2
                <span class="text-muted">Description</span>
            </h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>

        <hr class="featurette-divider">

        <!-- Third Featurette -->
        <div class="featurette" id="contact">
            <img class="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500">
            <h2 class="featurette-heading">Title of Project 3
                <span class="text-muted">Description</span>
            </h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>

        <hr class="featurette-divider">

        <form id="contactForm">
            <div class="row" >
                <div class="col-sm-6">
                    <label>
                        <input type="text" required/>
                        <div class="label-text">First name</div>
                    </label>
                    <label>
                        <input type="text" required/>
                        <div class="label-text">Email</div>
                    </label>
                </div>
                <div class="col-sm-6">
                     <label>
                        <input type="text" required/>
                        <div class="label-text">Last name</div>
                    </label>
                     <label>
                        <input type="text" required/>
                        <div class="label-text">Website URL</div>
                    </label>
                </div>
            </div>
            <button id="formSubmit">Submit</button>
        </form>
        
    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
              $('input').blur(function(event) {
                  var inputVal = this.value;
                  
                  if (inputVal) {
                    this.classList.add('value-exists');
                  } else {
                    this.classList.remove('value-exists');
                  }
            });
        });
    </script>

</body>

</html>
