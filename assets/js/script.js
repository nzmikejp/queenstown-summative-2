

$(function(){


	var iNumPax = 1
	var iNumNights = 0
	var iNumTotal = 0
	var iRateNight = 0
	var iCurrent = 1
	var isOpen = false
	
	//--- menu button effect
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

	$('.back-btn').on('click',function(){

		if(iCurrent == 2){
			$('.header-bg').removeClass('neon-box')
			progressTl5.play()
			
			$('.section-1').addClass('animate__backInDown').removeClass('animate__backOutUp')
			$('.section-2').addClass('animate__backOutDown').removeClass('animate__backInUp animate__backInDown')
			$('.header').removeClass('animate__slideInDown').addClass('animate__slideOutUp')

			$('.section-2').one('animationend',function(){

				$('.footer').addClass('slide').removeClass('slide-d-100')
		
			})

			iCurrent--

		}else if(iCurrent == 3){

			progressTl6.play()
			$('.section-2').addClass('animate__backInDown').removeClass('animate__backOutUp')
			
			if(iRateNight == 157){
				$('.section-3').addClass('animate__backOutDown').removeClass('animate__backInUp animate__backInDown').one('animationend',function(){
					$('.section-3').removeClass('animate__backOutDown')
				})
				
			}else if(iRateNight == 30){
				$('.section-4').addClass('animate__backOutDown').removeClass('animate__backInUp animate__backInDown').one('animationend',function(){
					$('.section-4').removeClass('animate__backOutDown')
				})
				
			}else if(iRateNight == 90){
				$('.section-5').addClass('animate__backOutDown').removeClass('animate__backInUp animate__backInDown').one('animationend',function(){
					$('.section-5').removeClass('animate__backOutDown')
				})

			}else if(iRateNight == 240){
				$('.section-6').addClass('animate__backOutDown').removeClass('animate__backInUp animate__backInDown').one('animationend',function(){
					$('.section-6').removeClass('animate__backOutDown')
				})
			}

			iCurrent--


		}else if(iCurrent == 4){

			progressTl7.play()

			if(iRateNight == 157){
				$('.section-3').addClass('animate__backInDown').removeClass('animate__backOutUp')
				
			}else if(iRateNight == 30){
				$('.section-4').addClass('animate__backInDown').removeClass('animate__backOutUp')
				
			}else if(iRateNight == 90){
				$('.section-5').addClass('animate__backInDown').removeClass('animate__backOutUp')

			}else if(iRateNight == 240){
				$('.section-6').addClass('animate__backInDown').removeClass('animate__backOutUp')
				
			}

			$('.section-7').addClass('animate__backOutDown').removeClass('animate__backInUp animate__backInDown').one('animationend',function(){
				$('.section-7').removeClass('animate__backOutDown')
			})

			iCurrent--

		}else if(iCurrent == 5){

			$('.section-7').addClass('animate__backInDown').removeClass('animate__backOutUp')

			$('.section-8').addClass('animate__backOutDown').removeClass('animate__backInUp').one('animationend',function(){
				$('.section-8').removeClass('animate__backOutDown')
			})

			iCurrent--

		}
	})


	

	var hasFooterAnimPlayed = false

	var tl = anime.timeline({
		easing: 'linear',
		duration: 3000,
		autoplay: false,
		update: function(anim) {

			if(anim.progress > 80 && hasFooterAnimPlayed == false){
				footer.play()
				hasFooterAnimPlayed = true
			}
		}
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

	

	//--- Pax Number Catch
	$('.less').on('click',function(){

		var iNum = parseInt($(this).next().val())
		iNum--

		if(iNum < 1){
			iNum = 1
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
	$('#unit-nights').on('focus',function(){
		$('.footer').addClass('slide').one('transitionend',function(){

			var lightpick = new Lightpick({
		
				field: document.querySelector('#unit-nights'),
				singleDate: false,
				numberOfMonths: 1,
				minDate: moment(),
				onSelect: function(start, end){

					if(end == null){
				
						this.reloadOptions({
							maxDate: start.add(15,'day')
						})

						$('.footer .cta').removeClass('neon-btn').addClass('deactive')
					}
		
					if(end != null){
						var iDays = end.diff(start, 'days')
						$('.dash-nights').find('.dash-amount').html(iDays)
						iNumNights = iDays

						this.reloadOptions({
							maxDate: start.add(15,'day')
						})

						$('.footer .cta').addClass('neon-btn').removeClass('deactive')
							
					}
				}
			})

			lightpick.show()

		})
	})

	//--- Footer Animation
	var footer = anime({
		targets: '.footer',
		translateY: ['100vh', '32vh'],
		duration: 500,
		complete: function(anim){
			$('.footer-bg').addClass('neon-box')
			$('.counter-wrapper .cta-round').addClass('neon-btn')
		},
		autoplay: false
	})
	

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

	var progressTl5 = anime({
		targets: '.progress',
		easing: 'easeOutQuad',
		duration: 1000,
		width: [0],
		autoplay: false
	})

	var progressTl6 = anime({
		targets: '.progress',
		easing: 'linear',
		duration: 1000,
		width: ['25%'],
		autoplay: false
	})

	var progressTl7 = anime({
		targets: '.progress',
		easing: 'linear',
		duration: 1000,
		width: ['50%'],
		autoplay: false
	})




	

	//--- main programe
	$('.first-content .cta').on('click',function(){
		tl.play()
	})


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

		}else if(iNumPax == 2 && iNumNights == 2){

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

			$('.section-1').addClass('animate__animated animate__backOutUp').removeClass('animate__backInDown')
			$('.section-2').addClass('animate__animated animate__backInUp').removeClass('animate__backOutDown')
			$('.header').addClass('animate__animated animate__slideInDown').removeClass('animate__slideOutUp').one('animationend',function(){

				$('.header-bg').addClass('neon-box')
				progressTl1.play()
	
			})

		})

		iCurrent++


	})

	//--- Select your stay
	$('[data-rate]').on('click',function(){

		var iRate = $(this).data('rate')
		iNumTotal = iRate * iNumNights

		$('.dash-rate').find('.dash-amount').addClass('neon-el-blue')
		$('.dash-total').find('.dash-amount').addClass('neon-el-blue')

		$('.dash-rate').find('span').html(iRate)
		$('.dash-total').find('span').html(iNumTotal)

		var thisRate = $('.dash-rate').find('span')
		var thisTotal = $('.dash-total').find('span')

		
		
		$({Counter: 0}).animate({Counter: thisRate.text()}, {
			duration: 2000,
			step: function () {
				thisRate.text(Math.ceil(this.Counter).toFixed(0));
			}
		})
		
		$({Counter: 0}).animate({Counter: thisTotal.text()}, {
			duration: 2000,
			step: function () {
				thisTotal.text(Math.ceil(this.Counter).toFixed(0));
			}
		})

		$('.section-2').addClass('animate__backOutUp').removeClass('animate__backInDown')
		progressTl2.play()
		
		if(iRate == 157){
			$('.section-3').addClass('animate__animated animate__backInUp')

		}else if(iRate == 30){
			$('.section-4').addClass('animate__animated animate__backInUp')

			
		}else if(iRate == 90){
			$('.section-5').addClass('animate__animated animate__backInUp')

			
		}else if(iRate == 240){
			$('.section-6').addClass('animate__animated animate__backInUp')

		}

		iRateNight = iRate

		iCurrent++


	})
	
	//--- Check selected
	$('.card [type=radio]').on('click',function(){
		$('.section-3 .cta').addClass('neon-btn').removeClass('deactive')
		$('.section-4 .cta').addClass('neon-btn').removeClass('deactive')
		$('.section-5 .cta').addClass('neon-btn').removeClass('deactive')
		$('.section-6 .cta').addClass('neon-btn').removeClass('deactive')
	})

	//--- Section Review
	$('.section-3 .cta').on('click',function(){

		$('.section-3').addClass('animate__backOutUp').removeClass('animate__backInDown')
		$('.section-7').addClass('animate__animated animate__backInUp')

		progressTl3.play()
		iCurrent++

	})
	
	$('.section-4 .cta').on('click',function(){

		$('.section-4').addClass('animate__backOutUp').removeClass('animate__backInDown')
		$('.section-7').addClass('animate__animated animate__backInUp')

		progressTl3.play()
		iCurrent++

	})
	
	$('.section-5 .cta').on('click',function(){

		$('.section-5').addClass('animate__backOutUp').removeClass('animate__backInDown')
		$('.section-7').addClass('animate__animated animate__backInUp')

		progressTl3.play()
		iCurrent++

	})
	
	$('.section-6 .cta').on('click',function(){

		$('.section-6').addClass('animate__backOutUp').removeClass('animate__backInDown')
		$('.section-7').addClass('animate__animated animate__backInUp')

		progressTl3.play()
		iCurrent++

	})

	$('.section-3 .cta,.section-4 .cta,.section-5 .cta,.section-6 .cta').on('click',function(){

		$('.select-clone').empty()
		$(this).parent().find(':checked').next().clone().appendTo('.select-clone')

	})


	//--- Upgrade you stay
	$('.section-7 [type=checkbox]').on('change',function(){

		var fExtraCost = parseFloat($(this).val())

		var exstingTotal = iNumTotal

		if(this.id == 'breakfast'){

			if(this.checked){
				iNumTotal += fExtraCost*iNumPax*iNumNights
			}else{
				iNumTotal -= fExtraCost*iNumPax*iNumNights
			}

		}else{

			if(this.checked){
				iNumTotal += fExtraCost*iNumPax
			}else{
				iNumTotal -= fExtraCost*iNumPax
			}

		}


		$('.dash-total').find('span').html(iNumTotal)

		var thisTotal = $('.dash-total').find('span')
		
		$({Counter: exstingTotal}).animate({Counter: thisTotal.text()}, {
			duration: 3000,
			step: function () {
				thisTotal.text(Math.ceil(this.Counter).toFixed(0));
			}
		})
	})

	$('.section-7 .cta').on('click',function(){

		$('.section-7').addClass('animate__backOutUp').removeClass('animate__backInDown')
		$('.section-8').addClass('animate__animated animate__backInUp')

		progressTl4.play()
		iCurrent++

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