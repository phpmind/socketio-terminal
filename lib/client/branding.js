"use strict";

function Branding(){
    return this;
}

Branding.prototype.log = function(server){
    var cli = server.ncli; 
	var s = "";
/*
	s += "                     __           __  .__                   __                       .__              .__   \n";
	s += "  __________   ____ |  | __ _____/  |_|__| ____           _/  |_  ___________  _____ |__| ____ _____  |  |  \n";
	s += " /  ___/  _ \\_/ ___\\|  |/ // __ \\   __\\  |/  _ \\   ______ \\   __\\/ __ \\_  __ \\/     \\|  |/    \\\\__  \\ |  |  \n";
	s += " \\___ (  <_> )  \\___|    <\\  ___/|  | |  (  <_> ) /_____/  |  | \\  ___/|  | \\/  Y Y  \\  |   |  \\/ __ \\|  |__\n";
	s += "/____  >____/ \\___  >__|_ \\\\___  >__| |__|\\____/           |__|  \\___  >__|  |__|_|  /__|___|  (____  /____/\n";
	s += "     \\/           \\/     \\/    \\/                                    \\/            \\/        \\/     \\/      \n";
*/
	cli.stdout(s);
 
};

module.exports = Branding;