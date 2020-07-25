
/*first question*/
	const writeBox = document.getElementById('writeBox')
	const send = document.getElementById('send')
	const greet = document.getElementById('greet')
	const age = document.getElementById('age')

	function saludar(){
		greet.innerHTML = 'Hi ' + writeBox.value + '!! 😁'
		age.style.display = "block"
		document.getElementById('write-box').style.display = 'none'
		document.getElementById('write-box2').style.display = 'flex'
		document.getElementById('reply').style.display = 'block'
		document.getElementById('reply').innerHTML = writeBox.value
	}

/*second question*/
	const ageReply = document.getElementById('ageReply')
	const writeBox2 = document.getElementById('writeBox2')
	const search = document.getElementById('search')

	function ageQuestion(){
		ageReply.innerHTML = writeBox2.value + ', Cool!!'
		search.style.display = 'block'
		document.getElementById('write-box2').style.display = 'none'
		document.getElementById('write-box3').style.display = 'flex'
		document.getElementById('reply2').style.display = 'block'
		document.getElementById('reply2').innerHTML = writeBox2.value
	}

/*third question*/
	const writeBox3 = document.getElementById('writeBox3')
	const searchURL = "https://www.google.com/search?q="

	function searchInGoogle(){
		window.open(searchURL + writeBox3.value)
	}

send.addEventListener('click', saludar)
send2.addEventListener('click', ageQuestion)
send3.addEventListener('click', searchInGoogle)