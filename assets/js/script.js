
$(function(){

	var tl = anime.timeline({
		autoplay:false,
		update:function(anim){
			console.log(anim)
		}
    })
    
	tl.add({

		targets: '.first-content-logo',
		duration: 2000,
		easing:'easeInOutElastic',
		opacity: [1 , 0],
		translateY: [0, '10vh']

    })
    
	tl.add({

		targets: '.first-content .cta',
		duration: 2000,
		easing:'easeInOutElastic',
		opacity: [1 , 0],
		translateY: [0, '10vh']

    },400)
    
	tl.add({
		targets: '.layer-2',
		easing: 'easeInOutCubic',
		duration: 5000,
		opacity: [1,0],
		translateX: [0, '150%'],
		scale: [2]
    },1500)
	
	tl.add({
		targets: '.layer-3',
		easing: 'easeInOutCubic',
		duration: 6000,
		opacity: [1,0],
		translateX: [0, '-150%'],
		scale: [2]
    },1500)
    
	tl.add({
		targets: '.layer-4',
		easing: 'easeInOutCubic',
		duration: 7000,
		opacity: [1,0],
		translateX: [0, '150%'],
		scale: [2]
	},1500)
	
	tl.add({
		targets: '.layer-5',
		easing: 'easeInOutCubic',
		duration: 8000,
		opacity: [1,0],
		translateX: [0, '-150%'],
		scale: [4]
	},1500)
	
	tl.add({
		targets: '.layer-6',
		easing: 'easeInOutCubic',
		duration: 6000,
		opacity: [1,0],
		translateX: [0, '150%'],
		scale: [4]
	},1500)

	tl.add({
		targets: '.layer-1',
		easing: 'linear',
		duration: 18000,
		translateY: [0, '100%']
	},1500)

	tl.add({
		targets: '.layer-0',
		easing: 'linear',
		duration: 6000,
		scale: [4],
		translateY: [0, '-19.5%'],
	},1000)
	
	tl.add({
		targets: '.second-content',
		easing: 'easeInOutCubic',
		duration: 1000,
		opacity: [0,1]
	},6800)
	

    tl.playTo = playTo
    


	//--- main programe
	var steps = [0,20,40,60,80,100]
	var current = 0

	$('.first-content .cta').on('click',function(){
		current = 100
		tl.playTo(steps[current])
		
	})
	
	$('.section2 .next').on('click',function(){
		current++
		tl.playTo(steps[current])
    })
    

    //--- menu button effect
    var isOpen = false
    
    $('.menu-btn').on('click',function(){

        if(isOpen == false){
			$(this).addClass('open')
			$('.menu').addClass('open')
        
            isOpen = true

        }else {
			$('.menu-btn').removeClass('open')
			$('.menu').removeClass('open')
                        
            isOpen = false
        }

    })


})