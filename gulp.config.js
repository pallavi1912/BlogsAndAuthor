module.exports={
	env:process.env.NODE_ENV || 'development',
	jsSourceDir:'./app/scripts',
	outputClientDir:"./build",
	sass:{
		src:"./app/resources/sass/app.scss",
		watch:"./app/resources/sass/**/*.scss",
		dest:"/css"
	},
	vendorCss:{
		src:[
		'app/resources/css/app.css',
		'bower_components/bootstrap/dist/css/bootstrap.css'],
		dest:"/css",
		output:"vendor.min.css"

	},
	 vendorJs: {
        src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            //'bower_components/datatables/media/js/jquery.dataTables.js',
            //'bower_components/datatables/media/js/dataTables.bootstrap.js',
            //'bower_components/angular-datatables/dist/angular-datatables.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            // 'scripts/common/libJs/position.js',
            // 'scripts/common/libJs/timepicker.js',
            // 'scripts/common/libJs/timepicker-tpls.js'

        ],
        dest: "/js",
        output: "vendor.min.js"
    },
	template:{
		src:"./app/**/*.html",
		watch:"./app/scripts/**/*.html"
	},
	indexHtml:{
		src:"./app/index.html",
		watch:"./app/index.html"
	},
	images:{
		src:'./app/resources/images/*',
		watch:'./app/resources/images',
		dest:'/images'
	}
};