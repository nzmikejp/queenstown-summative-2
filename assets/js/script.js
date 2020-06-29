
$(function(){

	var tl = anime.timeline({
		autoplay:false,
		update:function(anim){
			console.log(anim)
		}
    })
    
	tl.add({

		targets: '.first-content-logo',
		duration: 1500,
		easing:'linear',
		opacity: [1 , 0]

    })
    
	tl.add({

		targets: '.first-content .cta',
		duration: 1500,
		easing: 'linear',
		opacity: [1 , 0]

    },0)
    
	tl.add({
		targets: '.layer-2',
		easing: 'linear',
		duration: 5000,
		opacity: [1,0],
		translateX: [0, '150%'],
		scale: [2]
    },1500)
	
	tl.add({
		targets: '.layer-3',
		easing: 'linear',
		duration: 6000,
		opacity: [1,0],
		translateX: [0, '-150%'],
		scale: [2]
    },1500)
    
	tl.add({
		targets: '.layer-4',
		easing: 'linear',
		duration: 7000,
		opacity: [1,0],
		translateX: [0, '150%'],
		scale: [2]
	},1500)
	
	tl.add({
		targets: '.layer-5',
		easing: 'linear',
		duration: 8000,
		opacity: [1,0],
		translateX: [0, '-150%'],
		scale: [4]
	},1500)
	
	tl.add({
		targets: '.layer-6',
		easing: 'linear',
		duration: 3000,
		opacity: [1,0],
		translateX: [0, '150%'],
		scale: [4]
	},1500)

	tl.add({
		targets: '.layer-1',
		easing: 'linear',
		duration: 19000,
		translateY: [0, '100%']
	},1500)

	tl.add({
		targets: '.layer-0',
		easing: 'linear',
		duration: 7000,
		scale: [4],
		translateY: [0, '-18%'],
	},1000)

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