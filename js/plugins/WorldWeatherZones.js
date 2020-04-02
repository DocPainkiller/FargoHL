
/*:
* @plugindesc Defines weather zone behavior for your world; for use with the WorldWeather plugin. (See "Help...")
* @author You!
* @help
* So you've been told to edit this file, but you don't know any JavaScript!
*
* INTIMIDATED??
*
* Don't be!
*
* Open up this file for editing, and follow the instructions inside! I'll walk you
* through everything!
*/

var $worldWeatherZones =
{
// this next line may look like 50% garbage to you. that's fine. what matters is the "Forest" bit. this tells
// WorldWeather what to do for your rooms with a <WorldWeather.Zone:Forest> tag. if you're not using "Forest",
// replace it with something else, like "Tundra", or "Candy Space", or "Brussels Field", or whatever.
"Forest": function() {

// "return [" means we're going to build a whole list of weather possibilities. don't worry about it; just
// leave it alone.
return ; // this closes the "return [" above. don't worry about it. just leave it.

}, // it's been a while, but this closes the "Forest": function() { above! we'll now start defining a new zone!

// (did you notice the comma on the previous line? a comma between each zone definition!)
"Desert": function() {

// half the time there's dust blowing around Deserts; the other half, there's no weather
return ;
} // no comma. last zone definition.

// add as many zones as you want!

// if you know JavaScript, don't be afraid to put more-clever code inside of each zone function(). just remember
// that you always gotta' return a list of possibilities (even if there's only one item in the list).
};
