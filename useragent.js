$("body").ready(function() {
	var apname = window.navigator.appCodeName;
	var a = window.navigator.appName;
	var language = window.navigator.language;
	var cpu = window.navigator.oscpu;
	var platform = window.navigator.platform;
	var windows = window.navigator.userAgent;
	$("button").click(function (){
		$(".info").html(apname);
		$(".app").html(a);
		$(".lang").html(language);
		$(".oscpu").html(cpu);
		$(".platform").html(platform);
		$(".userAgent").html(windows);
	});
});
