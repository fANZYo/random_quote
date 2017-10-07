$(function(){
	let json = [
		{
			"quote":"Great minds discuss ideas; average minds discuss events; small minds discuss people.",
			"cite":"Eleanor Roosevelt"
		},
		{
			"quote":"Don’t wish it was easier, wish you were better. Don’t wish for less problems, wish for more skills. Don’t wish for less challenge, wish for more wisdom.",
			"cite":"Jim Rohn"
		},
		{
			"quote":"Formal education will make you a living; self-education will make you a fortune.",
			"cite":"Jim Rohn"
		},
		{
			"quote":"If you always do what you’ve always done, you always get what you’ve always gotten.",
			"cite":"Anthony Robbins"
		},
		{
			"quote":"Strive not to be a success, but rather to be of value.",
			"cite":"Albert Einstein"
		},
		{
			"quote":"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
			"cite":"Mark Twain"
		},
		{
			"quote":"It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.",
			"cite":"Mark Twain"
		},
		{
			"quote":"Life isn't about finding yourlsef. Life is about creating yourself.",
			"cite":"George Bernard Shaw"
		},
		{
			"quote":"But those Woulda-Coulda-Shouldas all ran away and hid from on little Did.",
			"cite":"Shel Silverstein"
		},
		{
			"quote": "Alice: Would you tell me, please, which way I ought to go from here?<br /><br />The Cheshire Cat: That depends a good deal on where you want to get to.<br /><br />Alice: I don't much care where.<br /><br />The Cheshire Cat: Then it doesn't much matter which way you go.",
			"cite": "Lewis Carroll, Alice in Wonderland"
		},
		{
			"quote": "Efficiency is doing the thing right. Effectiveness is doing the right thing.",
			"cite": "Peter Drucker"
		},
		{
			"quote":"Planning is bringing the future into the present so that you can do something about it now.",
			"cite":"Alan Lakein"
		},
		{
			"quote":"We are kept from our goal, not by obstacles but by a clear path to a lesser goal.",
			"cite":"Robert Brault"
		},
		{
			"quote":"People do not decide their futures, they decide their habits and their habits decide their futures.",
			"cite":"F. M. Alexander"
		},
		{
			"quote":"Money is like a mischievous cat; if you chase it, it eludes you. However, if you focus on what attracts the cat, it comes sit in your lap.",
			"cite":"MJ Demarco"
		}
	]

	let background = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

	let $quote = $(".quote");
	let $cite = $(".cite");
	let $new = $(".new");
	let $tweet = $(".tweet");
	let hashtags = "quotes";
	let cur = Math.floor(Math.random() * json.length);

	let rndNm = () => {
		n = Math.floor(Math.random() * json.length);

		if(n !== cur){
			cur = n;
			return n;
		}else {
			return rndNm();
		}
	}

	$new.on("click", () => {
		cur = rndNm();
		$("body").css("background-color", background[Math.floor(Math.random() * background.length)]);
		$quote.html(json[cur].quote);
		$cite.html(json[cur].cite)
		$tweet.attr("href", "https://twitter.com/intent/tweet?hashtags=" + hashtags + "&text=" + encodeURIComponent(json[cur].quote));
	});


	$("body").css("background-color", background[Math.floor(Math.random() * background.length)]);
	$quote.html(json[cur].quote);
	$cite.html(json[cur].cite);
	$tweet.attr("href", "https://twitter.com/intent/tweet?hashtags=" + hashtags + "&text=" + encodeURIComponent(json[cur].quote));

});
