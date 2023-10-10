console.log('Funguju')
const nadpis = document.querySelector('h1')
const kameny = document.querySelectorAll('.kamen')

const prehrajTonNaKameni = (kamen) => {
	const ton = kamen.textContent
	nadpis.textContent = ton

	const zvuk = new Audio(`tony/${ton}.mp3`)
	zvuk.play()
}

const naStisknuti = (udalost) => {
	prehrajTonNaKameni(udalost.target)
}

kameny.forEach((kamen) => {
	kamen.addEventListener('click', naStisknuti)
})

// Bonus
const naKlavesu = (udalost) => {
	const { code } = udalost
	if (code.startsWith('Digit')) {
		const cislo = parseInt(code.substring(5))
		if (cislo >= 1 && cislo <= kameny.length) {
			prehrajTonNaKameni(kameny[cislo - 1])
		}
	}
}

document.addEventListener('keydown', naKlavesu)