
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
		easing: 'linear',
		duration: 3000,
		autoplay:false,
    })
    
	tl.add({
		targets: '.first-content-logo',
		opacity: [1 , 0],
		duration: 1500,
    })
    
	tl.add({
		targets: '.first-content .cta',
		opacity: [1 , 0],
		duration: 1500,

    },0)
    
	tl.add({
		targets: '.layer-2',
		opacity: [1,0],
		translateX: [0, '50%'],
		scale: [2]
    })
	
	tl.add({
		targets: '.layer-3',
		opacity: [1,0],
		translateX: [0, '-50%'],
		scale: [2]
    },'-=3000')
    
	tl.add({
		targets: '.layer-4',
		opacity: [1,0],
		translateX: [0, '50%'],
		scale: [2]
	},'-=3000')
	
	tl.add({
		targets: '.layer-5',
		opacity: [1,0],
		translateX: [0, '-30%'],
		scale: [4]
	},'-=3000')
	
	tl.add({
		targets: '.layer-6',
		opacity: [1,0],
		translateX: [0, '30%'],
		scale: [4]
	},'-=3000')

	tl.add({
		targets: '.layer-1',
		translateY: ['36%']
	},1600)

	tl.add({
		targets: '.layer-0',
		scale: [4],
		translateY: ['-19.5vh'],
	},1200)
	
	tl.add({
		targets: '.second-content',
		scale: [4,1],
		opacity: [0,1],
		duration: 1000,
	},'-=1200')
	
	tl.add({
		targets: '.footer',
		translateY: ['100vh', '32vh'],
		duration: 500,
		complete: function(anim){
			$('.footer-bg').addClass('neon-box')
			$('.counter-wrapper .cta-round').addClass('neon-btn')
		}
	},'-=1000')
	

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
		$('.footer').addClass('slide').one('transitionend',function(){

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


	

	//--- main programe
	$('.first-content .cta').on('click',function(){
		tl.play()
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



	//--- Main programe
	$('.footer .cta').on('click',function(){

		if(iNumPax == 1 && iNumNights == 1){

			$('.select-hotel').addClass('active')
			$('.select-hostel').addClass('active')

		}else if(iNumPax == 1 && iNumNights >= 2 && iNumNights <= 5){

			$('.select-hotel').addClass('active')
			$('.select-hostel').addClass('active')
			$('.select-house').addClass('active')

		}else if(iNumPax == 1 && iNumNights >= 6 && iNumNights <= 10){

			$('.select-hostel').addClass('active')
			$('.select-house').addClass('active')

		}else if(iNumPax == 1 && iNumNights >= 11 && iNumNights <= 15){

			$('.select-house').addClass('active')

		}else if(iNumPax == 2 && iNumNights == 1){

			$('.select-hotel').addClass('active')

		}else if(iNumPax == 2 && iNumNights >= 2 && iNumNights <= 3){

			$('.select-hotel').addClass('active')
			$('.select-house').addClass('active')
			
		}else if(iNumPax == 2 && iNumNights >= 3 && iNumNights <= 5){

			$('.select-hotel').addClass('active')
			$('.select-house').addClass('active')
			$('.select-motel').addClass('active')
			
		}else if(iNumPax == 2 && iNumNights >= 6 && iNumNights <= 10){

			$('.select-house').addClass('active')
			$('.select-motel').addClass('active')
			
		}else if(iNumPax == 2 && iNumNights >= 11 && iNumNights <= 15){

			$('.select-house').addClass('active')

		}else if(iNumPax >= 3 && iNumNights == 2){

			$('.select-house').addClass('active')

		}else if(iNumPax >= 3 && iNumNights >= 3 && iNumNights <= 10){

			$('.select-house').addClass('active')
			$('.select-motel').addClass('active')

		}else if(iNumPax >= 3 && iNumNights >= 11 && iNumNights <= 15){

			$('.select-house').addClass('active')

		}

		$('.footer').removeClass('slide').addClass('slide-d-100').one('transitionend',function(){

			$('.section-1').addClass('animate__animated animate__backOutUp')
			$('.section-2').addClass('animate__animated animate__backInUp')
			$('.header').addClass('animate__animated animate__slideInDown').one('animationend',function(){

				$('.header-bg').addClass('neon-box')
				progressTl1.play()
	
			})

		})

	})

	//--- Select your stay
	var iNumRate = 0

	$('[data-rate]').on('click',function(){

		var iRate = $(this).data('rate')

		$('.dash-rate').find('.dash-amount').addClass('neon-el-blue')

		$('.dash-rate').find('span').html(iRate)
		$this = $('.dash-rate').find('span')

		console.log($this)


		$({ Counter: 0 }).animate({ Counter: $this.text()}, {
			duration: 2300,
			easing: 'swing',
			step: function () {
				$this.text(Math.ceil(this.Counter));
			}
		})

		iNumRate = iRate

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