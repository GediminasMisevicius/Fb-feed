// jshint multistr:true
$(document).ready(function() {

	var postai = [{
			avatar: 'img/deer.jpg',
			name: 'Name Surname',
			time: '5 hours',
			text: 'Labas',
			image: ['img/deer.jpg']
		},

		{
			avatar: 'img/deer.jpg',
			name: 'Name Surname',
			time: '5 hours',
			text: 'adsgsdagsadgdsagasdg',
			image: ['img/deer.jpg', 'img/deer.jpg']
		},

		{
			avatar: 'img/deer.jpg',
			name: 'Name Surname',
			time: '5 hours',
			text: 'aaaaaaaaaabtjuyllllllllllllllllllllllll',
			image: []
		},

		{
			avatar: 'img/deer.jpg',
			name: 'Name Surname',
			time: '5 hours',
			text: '',
			image: ['img/deer.jpg', 'img/deer.jpg', 'img/deer.jpg']
		},
        
        {
			avatar: 'img/deer.jpg',
			name: 'Name Surname',
			time: '5 hours',
			text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa4nuotraukos',
			image: ['img/deer.jpg', 'img/deer.jpg', 'img/deer.jpg', 'img/deer.jpg']
		}
	];

    postFeed(postai);
	function postFeed(postai) {
		var HTML = '',
			plen = postai.length,
            image_html = '';
		for (var i = 0; i < plen; i++) {
            switch(postai[i].image.length){
                case 1:
                    image_html = '<img src="' + postai[i].image[0] + '" alt="one_image" />';
                    break;
                case 2:
                    image_html = '<div class = "double-image"><img src="' +  postai[i].image[0] + '" alt ="image_one"></div>\
                    <div class = "double-image"><img src="' +  postai[i].image[1] + '" alt ="image_two"></div>';
                    break;
                case 3:
                    image_html = '<div class = "two-main-image"><img src="' +  postai[i].image[0] + '" alt ="main_image"></div>\
                    <div class = "two-images"><img src="' +  postai[i].image[1] + '" alt ="side_image_one"></div>\
                    <div class = "two-images"><img src="' +  postai[i].image[2] + '" alt ="side_image_two"></div>';
                    break;
                case 4:
                    image_html = '<div class = "three-main-image"><img src="' +  postai[i].image[0] + '" alt ="main_image"></div>\
                    <div class = "three-images"><img src="' +  postai[i].image[1] + '" alt ="image_one"></div>\
                    <div class = "three-images"><img src="' +  postai[i].image[2] + '" alt ="image_two"></div>\
                    <div class = "three-images"><img src="' +  postai[i].image[3] + '" alt ="image_three"></div>';
                    break;
                default:
                   image_html = '';
            }
            
			HTML += '<div class ="postas">\
            <div class = "avatar"><img src="' + postai[i].avatar + '" alt="avataras" /></div>\
			<div class = "name">' + postai[i].name + '</div>\
            <div class = "time">' + postai[i].time + '</div>\
            <div class = "text"><p>' + postai[i].text + '</p></div>\
            <div class = "image">' + image_html + '</div>\
            <div class = "like"><button><i class="fa fa-thumbs-up"></i>Like</button><button><i class="fa fa-comment"></i>Comment</button></div>\
            <hr />\
            <div class = "comment">\
            <div class = "avatar"><img src="' + postai[i].avatar + '" alt="avataras" /></div>\
            <textarea>Write a comment...</textarea>\
            <div class="comment-bar">\
            <div><i class="fa fa-camera"></i></div>\
            <div><i class="fa fa-camera"></i></div>\
            <div><i class="fa fa-camera"></i></div>\
            <div><i class="fa fa-camera"></i></div>\
            </div></div>\
            </div>';
		}
		$('.main-col').html(HTML);
	}




});