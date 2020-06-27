
$(function(){

	var tl = anime.timeline({
		easing:'linear',
		duration: 2000,
		autoplay:false,
    })
    
	tl.add({
		targets:'',
		translateY:[0,'-100%']
    })
    
	tl.add({
		targets:'',
		translateX:[0,'100%']
    })
    
	tl.add({
		targets:'',
		translateX:['-100%',0]
    })
    
	tl.add({
		targets:'',
		translateY:[0,'-100%']
    })
    
	tl.add({
		targets:'',
		translateY:['100%',0]
    })
    
	tl.add({
		targets:'',
		translateY:['100%',0],
		rotateZ:['180deg',0]
    })
    
	tl.add({
		targets:'',
		translateX:[0,'100%']
	})

    tl.playTo = playTo
    


	//--- main programe
	var steps = [0,20,40,60,80,100]
	var current = 0

	$('.section1 span').on('click',function(){
		current = 1
		tl.playTo(steps[current])
		
	})
	
	$('.section2 .next').on('click',function(){
		current++
		tl.playTo(steps[current])
	})


})