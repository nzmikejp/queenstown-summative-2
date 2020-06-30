
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
		translateY: [0, '-19.5vh'],
	},1000)
	
	tl.add({
		targets: '.second-content',
		easing: 'easeInOutCubic',
		duration: 2500,
		scale: [4,1],
		opacity: [0,1],
		complete: function(anim){
			$('.footer').addClass('slide-u-50').one('transitionend',function(){
				$('.footer-bg').addClass('neon-box')
				$('.counter-wrapper .cta-round').addClass('neon-btn')
			})

		}
	},4800)
	

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

	
	
	//--- Pax Number Catch
	$('.less').on('click',function(){

		var iNumPax = parseInt($(this).next().val())
		iNumPax--

		if(iNumPax < 0){
			iNumPax = 0
		}

		$(this).next().val(iNumPax)
		$('.dash-pax').find('.dash-amount').html(iNumPax)

	})
	
	$('.more').on('click',function(){

		var iNumPax = parseInt($(this).prev().val())
		iNumPax++

		if(iNumPax > 4){
			iNumPax = 4
		}

		$(this).prev().val(iNumPax)
		$('.dash-pax').find('.dash-amount').html(iNumPax)
		
	})


	//--- Lightpick
	$('#unit-nights').on('focus',function(){

		$('.footer').addClass('slide-u-0').one('transitionend',function(){

			var lightpick = new Lightpick({
		
				field: document.querySelector('#unit-nights'),
				singleDate: false,
				numberOfMonths: 1,
				minDate: moment(),
				maxDate: moment().add(15, 'day'),
				onSelect: function(start, end){
		
					if(end != null){
						var iDays = end.diff(start, 'days')
						$('.dash-nights').find('.dash-amount').html(iDays)
					}
				}
			
			})

		})	

	})


	//--- Section 2 Select your stay
	$('[data-rate]').on('click',function(){

		var sRate = $(this).data('rate')

		$('.dash-rate').find('.dash-amount').addClass('neon-el-blue')

		$('.dash-rate').find('span').html(sRate)

	})


	
	


})