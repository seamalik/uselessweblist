function uselessWebButton(button, popup) {
	var buttonElement = button
	var popupElement = popup
	var initialClick = false
	var randomRange = 7

	var sitesList = [
		"https://teleroll.at/",
		"https://longdogechallenge.com/",
		"https://onesquareminesweeper.com/",
		"http://heeeeeeeey.com/",
		"http://corndog.io/",
		"https://binarypiano.com/",
		"https://puginarug.com",
		"http://floatingqrcode.com/",
		"https://cursoreffects.com",
		"https://smashthewalls.com/",
		"https://jacksonpollock.org/",
		"http://endless.horse/",
		"http://drawing.garden/",
		"https://www.trypap.com/",
		"http://www.republiquedesmangues.fr/",
		"http://www.movenowthinklater.com/",
		"http://www.rrrgggbbb.com/",
		"http://randomcolour.com/",
		"http://cat-bounce.com/",
		"http://chrismckenzie.com/",
		"https://thezen.zone/",
		"http://ninjaflex.com/",
		"http://www.yesnoif.com/",
		"http://potatoortomato.com/",
		"http://thisisnotajumpscare.com/",
		"http://corgiorgy.com/",
		"http://www.crossdivisions.com/",
		"https://boringboringboring.com/",
		"http://pixelsfighting.com/",
		"http://onemillionlols.com/",
		"http://www.blankwindows.com/",
		"http://spaceis.cool/",
		"http://www.doublepressure.com/",
		"http://yeahlemons.com/",
		"https://thepigeon.org/",
		"http://notdayoftheweek.com/",
		"https://greatbignothing.com/",
		"https://zoomquilt.org/",
		"https://www.bouncingdvdlogo.com/"

	]

	var sites = null

	// Prepares and binds the button
	var init = function () {
		button.onclick = onButtonClick

		// Initial set sites
		sites = sitesList.slice()

		if (localStorage["currentSiteList"]) {
			// They have storage, filter out any not in the base list, that could be spam now
			var currentSites = JSON.parse(localStorage["currentSiteList"])
			var filteredSites = currentSites.filter(
				(site) => sitesList.indexOf(site) !== -1
			)
			if (filteredSites.length > 0) {
				sites = filteredSites
			}
		}
	}

	// Selects and removes the next website from the list
	var selectWebsite = function () {
		var site, range, index

		range = randomRange > sites.length ? sites.length : randomRange
		index = Math.floor(Math.random() * range)

		site = sites[index]
		sites.splice(index, 1)

		return site
	}

	var openSite = function (url) {
		window.open(url)
	}

	var onButtonClick = function () {
		if (window.gtag) {
			gtag("event", "click", { event_category: "button" })
		}

		if (initialClick === false) {
			// Change text from "TO A"
			document.getElementById("joint").innerHTML = "TO ANOTHER"
			initialClick = true
		}

		var url = selectWebsite()
		openSite(url)

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			sites = sitesList.slice()
		}

		localStorage["currentSiteList"] = JSON.stringify(sites)
	}

	init()
}

var uselessWebButton = new uselessWebButton(document.getElementById("button"))
;
