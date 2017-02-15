$(".navbar-nav li a").click(event => {
	const toggle = $(".navbar-toggle").is(":visible");
  if (toggle) $(".navbar-collapse").collapse('hide');
});

$('a').smoothScroll();
