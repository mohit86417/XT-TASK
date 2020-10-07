// Global
app = {
    init: function(){ // Load all global functions here
		this.initVariables();
        this.initEvents();
        this.initAjax();

        // Toggle button
        $('section a').click(function(e) {
        	$(this).closest('.content').find('a').removeClass('active');
	        $(this).addClass('active');    
        });
        
    },
    initVariables: function() {
    	cache = {
			$document : $(document),
			$launchanchor: $('.launch'),
			$landinganchor: $('.landing'),
			$allanchor: $('.allanchor')
		}
    },

    initEvents: function() {
		cache.$launchanchor.on('click',"a", app.launchFunc);
		cache.$landinganchor.on('click',"a", app.landFunc);
		cache.$allanchor.on('click',"a", app.allanchorFunc);
	},

    ajaxCommon: function(data) {
			var newData = "";
			newData += '<section class="content">';
			newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
			newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
			if(data[i].mission_id[1]) {
					newData += '<h6>Missions Ids: </h6>';
					newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
				}
			newData += '<h6>Launch Year"</h6>';
			newData += '<span>'+data[i].launch_year+'</span>';
			newData += '<h6>Successful Launch:</h6>';
			newData += '<span>'+data[i].launch_success+'</span>';
			newData += '<h6>Successful Landing:</h6>';
			newData += '<span>{xdsf}</span>';
			newData += '</section>';
			$('.right-panel').append(newData);
    },

    initAjax: function() {
    	var url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        $.ajax({
            url: url,
            type: "GET",
            dataType: "JSON",
            success: function (data) {
            	$.each(data, function(i) {
					var newData = "";
					newData += '<section class="content">';
					newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
					newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
					if(data[i].mission_id[1]) {
							newData += '<h6>Missions Ids: </h6>';
							newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
						}
					newData += '<h6>Launch Year"</h6>';
					newData += '<span>'+data[i].launch_year+'</span>';
					newData += '<h6>Successful Launch:</h6>';
					newData += '<span>'+data[i].launch_success+'</span>';
					newData += '<h6>Successful Landing:</h6>';
					newData += '<span>{xdsf}</span>';
					newData += '</section>';
					$('.right-panel').append(newData);
				});
				
            }
        });
    },

	launchFunc: function(e) {
		e.preventDefault();
		var url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=';
		$(".right-panel").empty();
		if($(this).html() === 'True') {
	        $.ajax({
	            url: url+'true',
	            type: "GET",
	            dataType: "JSON",
	            success: function (data) {
					$.each(data, function(i) {
						if(data[i].launch_success === true) {
							var newData = "";
							newData += '<section class="content">';
							newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
							newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
							if(data[i].mission_id[1]) {
									newData += '<h6>Missions Ids: </h6>';
									newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
								}
							newData += '<h6>Launch Year"</h6>';
							newData += '<span>'+data[i].launch_year+'</span>';
							newData += '<h6>Successful Launch:</h6>';
							newData += '<span>'+data[i].launch_success+'</span>';
							newData += '<h6>Successful Landing:</h6>';
							newData += '<span>{xdsf}</span>';
							newData += '</section>';
							$('.right-panel').append(newData);
						}
					});
	            }
	        });

		} else {
			$.ajax({
	            url: url+'false',
	            type: "GET",
	            dataType: "JSON",
	            success: function (data) {
					$.each(data, function(i) {
						if(data[i].launch_success === false) {

							var newData = "";
							newData += '<section class="content">';
							newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
							newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
							if(data[i].mission_id[1]) {
									newData += '<h6>Missions Ids: </h6>';
									newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
								}
							newData += '<h6>Launch Year"</h6>';
							newData += '<span>'+data[i].launch_year+'</span>';
							newData += '<h6>Successful Launch:</h6>';
							newData += '<span>'+data[i].launch_success+'</span>';
							newData += '<h6>Successful Landing:</h6>';
							newData += '<span>{xdsf}</span>';
							newData += '</section>';
							$('.right-panel').append(newData);
						}
					});
	            }
	        });
		}
	},


	landFunc: function(e) {
		e.preventDefault();
		var url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=';
		$(".right-panel").empty();
		if($(this).html() === 'True') {
	        $.ajax({
	            url: url+'true',
	            type: "GET",
	            dataType: "JSON",
	            success: function (data) {
					$.each(data, function(i) {
						if(data[i].launch_success === true) {
							var newData = "";
							newData += '<section class="content">';
							newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
							newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
							if(data[i].mission_id[1]) {
									newData += '<h6>Missions Ids: </h6>';
									newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
								}
							newData += '<h6>Launch Year"</h6>';
							newData += '<span>'+data[i].launch_year+'</span>';
							newData += '<h6>Successful Launch:</h6>';
							newData += '<span>'+data[i].launch_success+'</span>';
							newData += '<h6>Successful Landing:</h6>';
							newData += '<span>{xdsf}</span>';
							newData += '</section>';
							$('.right-panel').append(newData);
						}
					});
	            }
	        });

		} else {
			$.ajax({
	            url: url+'false',
	            type: "GET",
	            dataType: "JSON",
	            success: function (data) {
					$.each(data, function(i) {
						if(data[i].launch_success === false) {

							var newData = "";
							newData += '<section class="content">';
							newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
							newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
							if(data[i].mission_id[1]) {
									newData += '<h6>Missions Ids: </h6>';
									newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
								}
							newData += '<h6>Launch Year"</h6>';
							newData += '<span>'+data[i].launch_year+'</span>';
							newData += '<h6>Successful Launch:</h6>';
							newData += '<span>'+data[i].launch_success+'</span>';
							newData += '<h6>Successful Landing:</h6>';
							newData += '<span>{xdsf}</span>';
							newData += '</section>';
							$('.right-panel').append(newData);
						}
					});
	            }
	        });
		}
	},


	allanchorFunc: function(e) {
		e.preventDefault();
		var url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014',
		currentYear = $(this).html();
		$(".right-panel").empty();

        $.ajax({
            url: url,
            type: "GET",
            dataType: "JSON",
            success: function (data) {
				$.each(data, function(i) {
					if(data[i].launch_year === currentYear) {
						var newData = "";
						newData += '<section class="content">';
						newData += '<img src="'+data[i].links.mission_patch_small+'" alt="" width="100%">';
						newData += '<h5>'+data[i].mission_name+' #'+data[i].flight_number+'</h5>';
						if(data[i].mission_id[1]) {
								newData += '<h6>Missions Ids: </h6>';
								newData +='<ol><li>{'+data[i].mission_id[0]+'}</li></ol>';
							}
						newData += '<h6>Launch Year"</h6>';
						newData += '<span>'+data[i].launch_year+'</span>';
						newData += '<h6>Successful Launch:</h6>';
						newData += '<span>'+data[i].launch_success+'</span>';
						newData += '<h6>Successful Landing:</h6>';
						newData += '<span>{xdsf}</span>';
						newData += '</section>';
						$('.right-panel').append(newData);
					}
				});
            }
        });
	}


}

app.init();