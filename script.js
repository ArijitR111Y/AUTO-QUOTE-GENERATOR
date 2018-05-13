var quotes=["they say you die twice . One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time.","Only I can change my life. No one can do it for me","It always seems impossible until it's done."
,"No Matter how u feel,GET UP,DRESS UP,SHOW UP ,and never GIVE UP"
,"Ther is always that one summer that changes you","Try to learn something about everything,and everything about something.",
"All that we see or seem is but a dream within a dream.","She wasn't looking for a knight ,she was looking for a sword"]

function autoquote()
{
	var randomNum=Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML=quotes[randomNum]; 

}
