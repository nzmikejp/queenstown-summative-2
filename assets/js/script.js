
$(function(){

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


	//--- Section 1

	
	var tl = anime.timeline({
		autoplay:false,
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


	//--- main programe

	$('.first-content .cta').on('click',function(){

		tl.play()
		
	})

	//--- Pax Number Catch
	var iNumPax = 0

	$('.less').on('click',function(){

		var iNum = parseInt($(this).next().val())
		iNum--

		if(iNum < 0){
			iNum = 0
		}

		$(this).next().val(iNum)
		$('.dash-pax').find('.dash-amount').html(iNum)
		iNumPax = iNum

	})
	
	$('.more').on('click',function(){

		var iNum = parseInt($(this).prev().val())
		iNum++

		if(iNum > 4){
			iNum = 4
		}

		$(this).prev().val(iNum)
		$('.dash-pax').find('.dash-amount').html(iNum)
		iNumPax = iNum
		
	})

	//--- Lightpick
	var iNumNights = 0

	$('#unit-nights').on('focus',function(){

		$('.footer').addClass('slide-u-0').one('transitionend',function(){

			var lightpick = new Lightpick({
		
				field: document.querySelector('#unit-nights'),
				singleDate: false,
				numberOfMonths: 1,
				minDate: moment(),
				maxDate: moment().add(365, 'day'),
				onSelect: function(start, end){
		
					if(end != null){
						var iDays = end.diff(start, 'days')
						$('.dash-nights').find('.dash-amount').html(iDays)
						iNumNights = iDays
						
					}
				}
			
			})

		})	

	})


	//--- Section 2	

	var iNumTotal = iNumNights + iNumRate

	//--- Progress Bar
	var progressTl1 = anime({
		targets: '.progress',
		easing: 'easeOutQuad',
		duration: 1000,
		width: [0, '25%'],
		autoplay: false
	})
	
	var progressTl2 = anime({
		targets: '.progress',
		easing: 'linear',
		duration: 1000,
		width: ['50%'],
		autoplay: false
	})
	
	var progressTl3 = anime({
		targets: '.progress',
		easing: 'linear',
		duration: 1000,
		width: ['75%'],
		autoplay: false
	})
	
	var progressTl4 = anime({
		targets: '.progress',
		easing: 'linear',
		duration: 1000,
		width: ['100%'],
		autoplay: false
	})

	

	//--- Select your stay
	var iNumRate = 0

	$('[data-rate]').on('click',function(){

		var iRate = $(this).data('rate')

		$('.dash-rate').find('.dash-amount').addClass('neon-el-blue')

		$('.dash-rate').find('span').html(iRate)
		iNumRate = iRate

	})


	//--- Main programe

	

	$('.footer .cta').on('click',function(){

		progressTl1.play()

	})
	

	//--- Credit Card
	function checkCardName(){
		var sValue = this.value
	
		var isValid = false
	
		if(sValue == ''){
			this.nextElementSibling.className = 'message-error'
		}else {
			var oAlphabeticExp = /^[a-zA-Z]*\s?([a-zA-Z\-\']+\s)+[a-zA-Z\-\']+$/
			var bResult = oAlphabeticExp.test(sValue)
			
			if(bResult == false){
				this.nextElementSibling.className = 'message-error'
			}else {
				this.nextElementSibling.className = 'message-sucess'
				isValid = true
			}
		}
	
		return isValid
	}

	function checkCardNum(){
		var sValue = this.value
		var iValueNum = parseInt(sValue.charAt(0))
	
		var isValid = false
	
		if(sValue == ''){
			this.nextElementSibling.className = 'message-error'
		}else {
			var oNumExp = /^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2})|(?:30[012345]\d))[ -]?(\d{4})[ -]?(\d{4})[ -]?(\d{4}|3[4,7]\d{13})$/
			var bResult = oNumExp.test(sValue)
	
			if(bResult == false){
				this.nextElementSibling.className = 'message-error'
			}else {
				var oCardBg = document.querySelector('.credit-card-image')
	
				if(iValueNum == 4){

					oCardBg.classList.remove('mc')
					oCardBg.classList.add('visa')

				}else if(iValueNum == 5){

					oCardBg.classList.remove('visa')
					oCardBg.classList.add('mc')
					
				}
	
				this.nextElementSibling.className = 'message-sucess'
				isValid = true
			}
		}
	
		return isValid
	}

	function checkCardExp(){
		var sValue = this.value
	
		var isValid = false
	
		if(sValue == ''){
			this.nextElementSibling.className = 'message-error'
		}else {
			var oDateExp = /^((0[1-9])|(1[0-2]))\/(\d{2})$/
			var bResult = oDateExp.test(sValue)
	
			if(bResult == false){
				this.nextElementSibling.className = 'message-error'
			}else {
				this.nextElementSibling.className = 'message-sucess'
				isValid = true
			}
		}
	
		return isValid
	}

	function checkCvvNum(){
		var sValue = this.value
	
		var isValid = false
	
		if(sValue == ''){
			this.nextElementSibling.className = 'message-error'
		}else {
			var oCvvExp = /^([0-9]{3,4})$/
			var bResult = oCvvExp.test(sValue)
	
			if(bResult == false){
				this.nextElementSibling.className = 'message-error'
			}else {
				this.nextElementSibling.className = 'message-sucess'
				isValid = true
			}
		}
	
		return isValid
	}

	function checkAll(e){
		var isNameValid = checkCardName.call(oName)
		var isCardNumValid = checkCardNum.call(oNumber)
		var isCardExpValid = checkCardExp.call(oExpiry)
		var isCardCvvValid = checkCvvNum.call(oCvv)
	
		var isAllValid = isNameValid && isCardNumValid && isCardExpValid && isCardCvvValid
	
		if(isAllValid == false){
			e.preventDefault()
		}
	}

	function changeName(){	
		var oCardName = document.querySelector('.cc-name')
		oCardName.innerHTML = this.value
	}
	
	function changeNumber(){
		var oCardNumber = document.querySelector('.cc-number')
		oCardNumber.innerHTML = this.value
	}


	var oName = document.querySelector('#c-name')
	oName.addEventListener('blur', checkCardName)

	var oNumber = document.querySelector('#c-number')
	oNumber.addEventListener('blur', checkCardNum)

	var oExpiry = document.querySelector('#c-exp')
	oExpiry.addEventListener('blur', checkCardExp)

	var oCvv = document.querySelector('#c-cvv')
	oCvv.addEventListener('blur', checkCvvNum)

	var oForm = document.querySelector('#form')
	oForm.addEventListener('submit', checkAll)

	var oCardName = document.querySelector('#c-name')
	oCardName.addEventListener('keyup', changeName)

	var oCardNumber = document.querySelector('#c-number')
	oCardNumber.addEventListener('keyup', changeNumber)

})