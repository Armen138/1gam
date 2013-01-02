var Month = function(element) {
	var month = {
		set: function(game) {
			element.style.opacity = 1.0;
			for(var p in game) {
				month[p] = game[p];
				console.log(month[p]);
			}
		}
	};
	Object.defineProperty(month, "name", {
		get: function() {
			return $(element).find(".name").html();
		},
		set: function(name) {
			$(element).find(".name").html(name);
		}
	});

	Object.defineProperty(month, "tech", {
		get: function() {
			return $(element).find(".tech").html();
		},
		set: function(name) {
			$(element).find(".tech").html(name);
		}
	});

	Object.defineProperty(month, "genre", {
		get: function() {
			return $(element).find(".genre").html();
		},
		set: function(name) {
			$(element).find(".genre").html(name);
		}
	});

	Object.defineProperty(month, "status", {
		get: function() {
			return $(element).find(".status").html();
		},
		set: function(name) {
			$(element).find(".status").html(name);
		}
	});

	Object.defineProperty(month, "description", {
		get: function() {
			return $(element).find(".description").html();
		},
		set: function(name) {
			$(element).find(".description").html(name);
		}
	});

	Object.defineProperty(month, "play", {
		get: function() {
			return $(element).find(".play").attr("href");
		},
		set: function(name) {
			$(element).find(".play").show();
			$(element).find(".play").attr("href", name);
		}
	});

	Object.defineProperty(month, "github", {
		get: function() {
			return $(element).find(".github").attr("href");
		},
		set: function(name) {
			$(element).find(".github").show();
			$(element).find(".github").attr("href", name);
		}
	});

	Object.defineProperty(month, "image", {
		get: function() {
			return $(element).find(".image").attr("src");
		},
		set: function(name) {
			$(element).find(".image").attr("src", name);
		}
	});
	return month;
};

var Months = function(m) {
	var months = {

	};

	$(".month").each(function(idx) {
		$(this).attr("month", m[idx]);
		var html = "<h2>" + m[idx] + "</h2>" +
					"<img src='img/placeholder.png' class='image' />" +
					"<b>name:</b><span class='name prop'></span><br/>" +
					"<b>tech:</b><span class='tech prop'></span><br/>" +
					"<b>genre:</b><span class='genre prop'></span><br/>" +
					"<b>status:</b><span class='status prop'></span><br style='clear: both' />" +
					"<span class='description'></span>" +
					"<p><a class='btn play prop' href='#''>Play &raquo;</a>" +
					"<a class='btn github prop' href='#''><img src='img/github.png' width=16 height=16 /></a>" +
					"</p>";
		$(this).html(html);
		months[m[idx]] = Month(this);
	});
	return months;
};

$(function() {
	$.get("json/games.json", function(games) {
		if(typeof(games) !== "object") {
			games = JSON.parse(games);
		}
		var months = Months(games.months);
		for(var i = 0; i < games.months.length; i++) {
			console.log(games.months[i]);
			if(games[games.months[i]]) {
				console.log(games.months[i]);
				months[games.months[i]].set(games[games.months[i]]);
			}
		}
	});
	$(".nav>li>a").click(function() {
		var page = $(this).attr("page");
		$(".page").hide();
		$("#" + page).show();
		$(".nav>li").removeClass("active");
		$(this).parent().addClass("active");
	});
});