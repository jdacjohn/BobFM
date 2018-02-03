function songsList() {
	var songs =  
		"Jimmy Buffet" 							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Margaritaville" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Kansas" 										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Carry On Wayward Son" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Electric Light Orchestra" 	+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Don't Bring Me Down" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Hollies"  									+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Long Cool Woman (In A Black Dress)" 	+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Cars"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Just What I Needed</i>" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"War"  											+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Low Rider</i>" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Cheap Trick"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"I Want You To Want Me (Live)" 				+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Grand Funk"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Some Kind of Wonderful" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Steve Miller Band"  				+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Take The Money And Run" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Grand Funk"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"The Locomotion" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Eddie Money"								+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Baby Hold On" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Queen"											+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Bohemian Rhapsody" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Chicago"  									+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Saturday In The Park" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Doobie Brothers"  					+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Black Water" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Firefall"  								+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"You Are The Woman" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Free"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"All Right Now" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Steve Miller Band"					+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"The Joker" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Toto"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Hold The Line" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Lynyrd Skynyrd"  					+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Sweet Home Alabama" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Bachman-Turner Overdrive"  + "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"You Ain't Seen Nothing Yet" 					+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Van Morrison"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Brown Eyed Girl" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Johnny Nash"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"I Can See Clearly Now" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Robert Palmer"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Bad Case Of Loving You" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Little River Band"  				+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Lonesome Loser" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"John Mellencamp"  					+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"I Need A Lover" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Queen"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"We Will Rock You/We Are The Champions" + "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Supertramp"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Goodbye Stranger" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Bad Company"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Can't Get Enough" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Bad Company"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Rock And Roll Fantasy" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Boston"  									+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"More Than A Feeling" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Cars"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Let's Go" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Foreigner"  								+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Feels Like The First Time" 					+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Gloria Gaynor"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"I Will Survive" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Joan Jett & The Blackhearts" + "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"I Love Rock 'N Roll" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"38 Special"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Hold On Loosely" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Greg Kihn Band"  					+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Break Up Song" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Kenny Loggins"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"I'm Alright" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Simple Minds"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Don't You (Forget About Me)" 				+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Pat Benatar"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Hit Me With Your Best Shot" 					+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Blondie"  									+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Call Me" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Bon Jovi"  								+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Livin' On A Prayer" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"J. Geils Band"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Centerfold" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Police"  									+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Every Little Thing She Does" 				+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Pretenders"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Brass In Pocket" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Tommy Tutone"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"867-5309/Jenny" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Whitesnake"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Here I Go Again" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Madonna"  									+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Into The Groove" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"John Mellencamp"  					+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Small Town" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Robert Palmer"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Addicted To Love" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Soft Cell"  								+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Tainted Love/Where Did Our Love Go" 	+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"AC/DC"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"You Shook Me All Night Long" 				+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Cyndi Lauper"  						+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Girls Just Wanna Have Fun" 					+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"38 Special"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Caught Up In You" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Bryan Adams"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Summer of 69" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"B-52s"  										+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Love Shack" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Eddie Money"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Two Tickets to Paradise" 						+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Fixx"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"One Thing Leads To Another" 					+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Men At Work"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Down Under" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Robert Palmer"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Simply Irresistable" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Queen"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"Another One Bites The Dust" 					+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Rick Springfield"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Jessie's Girl" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Kenny Loggins"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Footloose" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Maroon 5"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"This Love" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Night Ranger"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Sister Christian" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Journey"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 			+ 		"Anyway You Want It" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"John Mellencamp"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Hurt So Good" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"U2"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 					+ 		"Still Haven't Found What I'm Looking For" + "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Human League"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Don't You Want Me" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Modern English"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"I Melt With You" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Romantics"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"What I Like About You" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Tubes"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"She's A Beauty" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"ZZ Top"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 			+ 		"Gimme All Your Lovin'" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Tal Bachman"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"She's So High" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Blind Melon"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"No Rain" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Third Eye Blind"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Semi-Charmed Life" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Goo Goo Dolls"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>"	+ 		"Slide" 															+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Savage Garden"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Truly, Madly Deeply" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Sister Hazel"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"All For You" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Fastball"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"Out Of My Head" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Greenday"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"When I Come Around" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Lenny Kravitz"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Fly Away" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"No Doubt"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"Don't Speak" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Duncan Sheik"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Barely Breathing" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Sixpence None the Richer"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Kiss Me" 							+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Sugar Ray"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"Someday" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Eagle Eyed Cherry"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Save Tonight" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Matchbox 20"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"3 AM" 																+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Semisonic"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"Closing Time" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Barenaked Ladies"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"One Week" 											+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Creed"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"Higher" 															+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Smash Mouth"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"All Star" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Spin Doctors"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Two Princes" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Nickelback"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"How You Remind Me" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Maroon 5"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"She Will Be Loved" 									+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Uncle Kracker"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Follow Me" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"3 Doors Down"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Here Without You" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Calling"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 			+ 		"Wherever You Will Go" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Nine Days"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"Absolutely (Story Of A Girl)" 				+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Lifehouse"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"Hanging By A Moment" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Avril Lavigne"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Complicated" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Matchbox 20"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Bent" 																+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Train"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"With Arms Wide Open" 								+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Creed"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"Two Tickets to Paradise" 						+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Jimmy Eat World"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"The Middle" 												+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Christina Aguilera"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Beautiful" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Evanescence"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"Bring Me To Life" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Los Lonely Boys"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"Heaven" 														+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Jason Mraz"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"The Remedy" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Gavin DeGraw"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" + 		"I Don't Wanna Be" 										+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Hoobastank"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 	+ 		"The Reason" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Lifehouse"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 		+ 		"You And Me" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;" +
		"Corrs"  							+ "&nbsp;&nbsp;<span style='text-decoration: underline;'><i>" 				+ 		"Breathless" 													+ "</i></span>&nbsp;&nbsp;<span style='color:#fef400'>&bull;</span>&nbsp;&nbsp;"; 

	return songs;
}