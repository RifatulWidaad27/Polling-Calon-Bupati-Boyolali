this["JST"] = this["JST"] || {};

this["JST"]["ResultsList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"#\">Home</a></li>\n	<li class=\"active\">Results</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Results View</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});

this["JST"]["VoteForm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"#\">Home</a></li>\n	<li class=\"active\">Vote</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Vote View</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});

this["JST"]["Welcome"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"#\">Home</a></li>\n	<li class=\"active\">Welcome</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Welcome to the Kineo Technical Task!</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});;;var IndexView = Backbone.View.extend({
	template: JST.Welcome,
	
	initialize: function() {		
		console.log(this.$el);
	},
	
	render: function() {
		//this.$el.html(this.template());
		$('#app').html(this.template());
		
		this.delegateEvents({
			'click document': 'testEvent'
		});
		
		return this;
	},
	
	testEvent: function() {
		alert('Hello, World!');
	}
});;var ResultsView = Backbone.View.extend({
	template: JST.ResultsList,
	
	initialize: function() {
		console.log('foo');
	},
	
	render: function() {
		//this.$el.html(this.template);
		$('#app').html(this.template());
		
		this.delegateEvents({
			'click document': 'testEvent'
		});
		
		return this;
	},
	
	testEvent: function() {
		alert('Hello, World!');
	}
});;var VoteView = Backbone.View.extend({
	template: JST.VoteForm,
	
	initialize: function() {
		console.log('foo');
	},
	
	render: function() {
		//this.$el.html(this.template);
		$('#app').html(this.template());
		
		this.delegateEvents({
			'click .navbar-brand': 'testEvent'
		});
		
		return this;
	},
	
	testEvent: function() {
		alert('Hello, World!');
	}
});;var AppRouter = Backbone.Router.extend({
	root: '/',
	
	appElement: $('#app'),
	
	routes: {
		"": "index",
		"vote": "vote",
		"results/{constituency}": "results",
		"*notFound": "index"
	},
	
	currentView: false,
	showView: function(view) {
		if(this.currentView) this.currentView.close();
		this.currentView = view;
		this.appElement.html(this.currentView.render().el);
	},
	
	index: function() {
		var indexView = new IndexView();
		
		this.showView(indexView);
	},

	vote: function() {
		var voteView = new VoteView();	

		this.showView(voteView);
	},
	
	results: function(constituency) {
		var resultsView = new ResultsView();
		
		this.showView(resultsView);
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start({ 
		pushState: true, 
		root: app.root 
	});
});

// Bypass router for anchors with data-bypass="true" data attribute
$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
	var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
	var root = location.protocol + "//" + location.host + app.root;

	if (href.prop.slice(0, root.length) === root) {
		evt.preventDefault();
		Backbone.history.navigate(href.attr, true);
	}
});
//# sourceMappingURL=app.js.map