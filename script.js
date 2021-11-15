var width = 100, 
    height = 100,
	snap = snap || 0.0001,
	
	x = d3.scaleLinear().domain([0, width]).range([0, width]),
    y = d3.scaleLinear().domain([0, height]).range([0, height]),
	
	//blue = d3.hsl(216, 0.92, 0.68),
	color = d3.scaleOrdinal()
		.range([
			d3.rgb('darkseagreen'), 
			d3.rgb('burlywood').darker([0.25]),
			d3.rgb('cadetblue').brighter([0.15]),
			d3.rgb('coral').darker([0.18]),
			d3.rgb('darkkhaki').darker([0.18]),
			d3.rgb('peru').darker([0.18]),
			d3.rgb('indianred').darker([0.18]),
			d3.rgb('tan').darker([0.18]),
		]),
		// .range(d3.schemeDark2
		// 	.map(function(c) { 
		// 		c = d3.rgb(c); 
		// 		//c.opacity = 0.5; 
		// 		return c; 
		// 	})
		// ),
	
	treemap = d3.treemap()
    	.size([width, height])
		// .tile(d3.treemapSquarify)
    	.paddingInner(0)
    	.round(true), //true



 
	data = {
		"name": "CB",
		"children": [
			{
				"name": "Health",
				"children": [
					{
						"name": "Oils",
						"children": [
							{ "name": "Sativa Δ9 (1:12)", "value": "cgi-1.jpg" },
							{ "name": "Balanced (1:1)", "value": "cgi-2.jpg" },
							{ "name": "CBD Rich (3:1)", "value": "cgi-3.jpg" },
							{ "name": "High CBD (9:1)", "value": "cgi-3.jpg" },
							{ "name": "Pure CBD", "value": "cgi-3.jpg" }
						]
					},
					{
						"name": "Salves",
						"children": [
							{ "name": "Canna Salve", "value": "photo-1.jpg" },
							{ "name": "Canna Salve XX", "value": "photo-2.jpg" },
							{ "name": "Canna Sensual", "value": "photo-3.jpg" },
							{ "name": "Canna Balm", "value": "photo-4.jpg" }
						]
					},
					{
						"name": "Herbs",
						"children": [
							{ 
								"name": "Powders", 
								"children": [
									{ "name": "Pine Pollen", "value": "photo-1.jpg" },
									{ "name": "Ashwagandha", "value": "photo-2.jpg" },
									{ "name": "Cats Claw", "value": "photo-3.jpg" },
									{ "name": "Astragalus", "value": "photo-4.jpg" },
									{ "name": "Liquorice Root", "value": "photo-1.jpg" },
									{ "name": "Pau D'Arco", "value": "photo-2.jpg" },
									{ "name": "Brahmi", "value": "photo-3.jpg" },
									{ "name": "Sea Bamboo", "value": "photo-4.jpg" },	
									{ "name": "Gokshura", "value": "photo-1.jpg" },
									{ "name": "Ginkgo", "value": "photo-2.jpg" },
									{ "name": "Eleuthero", "value": "photo-3.jpg" },
									{ "name": "Triphala", "value": "photo-4.jpg" },	
									{ "name": "Schisandra", "value": "photo-1.jpg" },
									{ "name": "Shatavari", "value": "photo-2.jpg" },
									{ "name": "Cancer Bush", "value": "photo-3.jpg" },
									{ "name": "Buchu", "value": "photo-4.jpg" },		
									{ "name": "African Potato", "value": "photo-2.jpg" },
									{ "name": "Devil's Claw", "value": "photo-3.jpg" },
									{ "name": "Maca", "value": "photo-4.jpg" },	
									{ "name": "Mucana", "value": "photo-4.jpg" },		
									{ "name": "Baobab", "value": "photo-2.jpg" },
									{ "name": "Camu Camu", "value": "photo-3.jpg" },
									{ "name": "Moringa", "value": "photo-4.jpg" },																																									
								]
							},
							{ 
								"name": "Tinctures", 
								"children": [
									{ "name": "Pine Pollen", "value": "photo-1.jpg" },
									{ "name": "Ashwagandha", "value": "photo-2.jpg" },
									{ "name": "Cats Claw", "value": "photo-3.jpg" },
									{ "name": "Astragalus", "value": "photo-4.jpg" },
									{ "name": "Liquorice Root", "value": "photo-1.jpg" },
									{ "name": "Pau D'Arco", "value": "photo-2.jpg" },
								] 
							}
						]
					},
					{
						"name": "Botanicals",
						"children": [
							{ "name": "Product 1", "value": "floorplan-1.jpg" },
							{ "name": "Product 2", "value": "floorplan-1.jpg" },
							{ "name": "Product 3", "value": "floorplan-1.jpg" },
							{ "name": "Product 4", "value": "floorplan-1.jpg" },
							{ "name": "Product 5", "value": "floorplan-1.jpg" },
							{ "name": "Product 6", "value": "floorplan-2.jpg" }
						]
					},
					{
						"name": "Skincare",
						"children": [
							{ "name": "Product 1", "value": "floorplan-1.jpg" },
							{ "name": "Product 2", "value": "floorplan-2.jpg" }
						]
					},
					{
						"name": "Teas",
						"children": [
							{ "name": "Product 1", "value": "floorplan-1.jpg" },
							{ "name": "Product 2", "value": "floorplan-2.jpg" }
						]
					},
					{
						"name": "Tinctures",
						"children": [
							{ "name": "Product 1", "value": "floorplan-1.jpg" },
							{ "name": "Product 2", "value": "floorplan-2.jpg" }
						]
					}
				]
			},
			{
				"name": "Home",
				"children": [
					{
						"name": "Zero Waste",
						"children": [
							{ "name": "Product 1", "value": "litho-1.jpg" },
							{ "name": "Product 2", "value": "litho-2.jpg" },
							{ "name": "Product 3", "value": "litho-3.jpg" },
							{ "name": "Product 4", "value": "litho-4.jpg" },
							{ "name": "Product 5", "value": "litho-5.jpg" },
							{ "name": "Product 6", "value": "litho-6.jpg" }
						]
					},
					{
						"name": "Books",
						"children": [
							{ "name": "Product 1", "value": "digital-1.jpg" },
							{ "name": "Product 2", "value": "digital-2.jpg" },
							{ "name": "Product 3", "value": "digital-3.jpg" },
							{ "name": "Product 4", "value": "digital-4.jpg" }
						]
					},
					{
						"name": "Incense",
						"children": [
							{ "name": "Product 1", "value": "digital-1.jpg" },
							{ "name": "Product 2", "value": "digital-2.jpg" },
							{ "name": "Product 3", "value": "digital-3.jpg" },
							{ "name": "Product 4", "value": "digital-4.jpg" }
						]
					},
					{
						"name": "Salt Lamps",
						"children": [
							{ "name": "Product 1", "value": "digital-1.jpg" },
							{ "name": "Product 2", "value": "digital-2.jpg" },
							{ "name": "Product 3", "value": "digital-3.jpg" },
							{ "name": "Product 4", "value": "digital-4.jpg" }
						]
					},		
					{
						"name": "Cleaning",
						"children": [
							{ "name": "Product 1", "value": "digital-1.jpg" },
							{ "name": "Product 2", "value": "digital-2.jpg" },
							{ "name": "Product 3", "value": "digital-3.jpg" },
							{ "name": "Product 4", "value": "digital-4.jpg" }
						]
					},			
					{
						"name": "Glass Jars",
						"children": [
							{ "name": "Product 1", "value": "digital-1.jpg" },
							{ "name": "Product 2", "value": "digital-2.jpg" },
							{ "name": "Product 3", "value": "digital-3.jpg" },
							{ "name": "Product 4", "value": "digital-4.jpg" }
						]
					},		
					{
						"name": "Wonderbags",
						"children": [
							{ "name": "Product 1", "value": "digital-1.jpg" },
							{ "name": "Product 2", "value": "digital-2.jpg" },
							{ "name": "Product 3", "value": "digital-3.jpg" },
							{ "name": "Product 4", "value": "digital-4.jpg" }
						]
					}										
				]
			}, 
			{
				"name": "Food",
				"children": [
					{
						"name": "Bulk",
						"children": [
							{ "name": "Product 1", "value": "folding-1.jpg" },
							{ "name": "Product 2", "value": "folding-2.jpg" },
							{ "name": "Product 3", "value": "folding-3.jpg" }
						]
					},
					{
						"name": "Snacks",
						"children": [
							{ "name": "Product 1", "value": "stitched-1.jpg" },
							{ "name": "Product 2", "value": "stitched-2.jpg" },
							{ "name": "Product 3", "value": "stitched-3.jpg" },
							{ "name": "Product 4", "value": "stitched-4.jpg" },
							{ "name": "Product 5", "value": "stitched-5.jpg" }
						]
					},
					{
						"name": "Superfoods",
						"children": [
							{ "name": "Product 1", "value": "sewn-1.jpg" },
							{ "name": "Product 2", "value": "sewn-2.jpg" },
							{ "name": "Product 3", "value": "sewn-3.jpg" }
						]
					},
					{
						"name": "Seeds & Nuts",
						"children": [
							{ "name": "Product 1", "value": "softback-1.jpg" },
							{ "name": "Product 3", "value": "softback-2.jpg" }
						]
					},
					{
						"name": "Grains & Legumes",
						"children": [
							{ "name": "Product 1", "value": "hardback-1.jpg" },
							{ "name": "Product 2", "value": "hardback-2.jpg" },
							{ "name": "Product 3", "value": "hardback-3.jpg" },
							{ "name": "Product 4", "value": "hardback-4.jpg" }
						]
					},
					{
						"name": "Sprouts & Microgreens",
						"children": [
							{ "name": "Product 1", "value": "folding-1.jpg" },
							{ "name": "Product 2", "value": "folding-2.jpg" },
							{ "name": "Product 3", "value": "folding-3.jpg" }
						]
					},
					{
						"name": " Dried Fruit",
						"children": [
							{ "name": "Product 1", "value": "stitched-1.jpg" },
							{ "name": "Product 2", "value": "stitched-2.jpg" },
							{ "name": "Product 3", "value": "stitched-3.jpg" },
							{ "name": "Product 4", "value": "stitched-4.jpg" },
							{ "name": "Product 5", "value": "stitched-5.jpg" }
						]
					},
					{
						"name": "Spices",
						"children": [
							{ "name": "Product 1", "value": "sewn-1.jpg" },
							{ "name": "Product 2", "value": "sewn-2.jpg" },
							{ "name": "Product 3", "value": "sewn-3.jpg" }
						]
					},		
					{
						"name": "Pasta",
						"children": [
							{ "name": "Product 1", "value": "softback-1.jpg" },
							{ "name": "Product 3", "value": "softback-2.jpg" }
						]
					},
					{
						"name": "Flour",
						"children": [
							{ "name": "Product 1", "value": "hardback-1.jpg" },
							{ "name": "Product 2", "value": "hardback-2.jpg" },
							{ "name": "Product 3", "value": "hardback-3.jpg" },
							{ "name": "Product 4", "value": "hardback-4.jpg" }
						]
					},
					{
						"name": "African",
						"children": [
							{ "name": "Product 1", "value": "folding-1.jpg" },
							{ "name": "Product 2", "value": "folding-2.jpg" },
							{ "name": "Product 3", "value": "folding-3.jpg" }
						]
					},
					{
						"name": "Organic",
						"children": [
							{ "name": "Product 1", "value": "stitched-1.jpg" },
							{ "name": "Product 2", "value": "stitched-2.jpg" },
							{ "name": "Product 3", "value": "stitched-3.jpg" },
							{ "name": "Product 4", "value": "stitched-4.jpg" },
							{ "name": "Product 5", "value": "stitched-5.jpg" }
						]
					},
					{
						"name": "Medibles",
						"children": [
							{ "name": "Product 1", "value": "sewn-1.jpg" },
							{ "name": "Product 2", "value": "sewn-2.jpg" },
							{ "name": "Product 3", "value": "sewn-3.jpg" }
						]
					},		
					{
						"name": "Sauces",
						"children": [
							{ "name": "Product 1", "value": "stitched-1.jpg" },
							{ "name": "Product 2", "value": "stitched-2.jpg" },
							{ "name": "Product 3", "value": "stitched-3.jpg" },
							{ "name": "Product 4", "value": "stitched-4.jpg" },
							{ "name": "Product 5", "value": "stitched-5.jpg" }
						]
					},
					{
						"name": "Fruit & Veg",
						"children": [
							{ "name": "Product 1", "value": "sewn-1.jpg" },
							{ "name": "Product 2", "value": "sewn-2.jpg" },
							{ "name": "Product 3", "value": "sewn-3.jpg" }
						]
					}							
				]
			},				
			{
				"name": "More",
				"children": [
							{
							"name": "SelfCare",
							"children": [
										{ "name": "Hygiene & Dental", "value": "digital-1.jpg" },
										{ "name": "Soap & Shampoo", "value": "digital-2.jpg" },
										{ "name": "Divine Feminine", "value": "digital-3.jpg" }
								]
							},	
							{
								"name": "Creations",
								"children": [
											{ "name": "Hand Crafted", "value": "digital-1.jpg" },
											{ "name": "Crystals", "value": "digital-2.jpg" },
											{ "name": "Stones", "value": "digital-3.jpg" },
											{ "name": "Necklaces", "value": "digital-3.jpg" },
											{ "name": "Braclets", "value": "digital-3.jpg" }
								]
							},	
							{
								"name": "Ceremonial",
								"children": [
											{ "name": "Esoteric", "value": "digital-1.jpg" },
											{ "name": "Smokes & Smudges", "value": "digital-2.jpg" },
											{ "name": "Candles", "value": "digital-3.jpg" },
											{ "name": "Cards", "value": "digital-3.jpg" },
											{ "name": "Divination", "value": "digital-3.jpg" }
								]
							},	
							{
								"name": "Info",
								"children": [
									{ "name": "Guides", "value": "digital-1.jpg" },
									{ "name": "Topics", "value": "digital-2.jpg" },
									{ "name": "Reviews", "value": "digital-3.jpg" },
									{ "name": "Zero Waste", "value": "digital-1.jpg" },
									{ "name": "Our Story", "value": "digital-2.jpg" },
									{ "name": "Stockists", "value": "digital-3.jpg" },							
									{ "name": "Contact", "value": "digital-4.jpg" },
									{ "name": "Legal", "value": "digital-4.jpg" }									
								]								
							}

				]
			}
		]
	},
	
	nodes = d3.hierarchy(data)
		.sum(function(d) { return d.value ? 1 : 0; }),
	
	resizeTimer, currentDepth;

treemap(nodes);

var chart = d3.select("#chart");
var cells = chart
	.selectAll(".node")
	.data(nodes.descendants())
	.enter()
	.append("div")
	.attr("class", function(d) { return "node level-" + d.depth; })
	.attr("title", function(d) { return d.data.name ? d.data.name : "null"; });

cells
	//.style("transform", function(d) { return "translateY(" + chart.node().clientHeight * y(d.y0) / 100 + ")"; })
	.style("left", function(d) { 
		//console.log( x(d.x0) + " => " + nearest(x(d.x0), snap) );
		return nearest(x(d.x0), snap) + "%"; 
	})
	.style("top", function(d) { 
		console.log( y(d.y0) + " => " + nearest(y(d.y0), snap) );
		return nearest(y(d.y0), snap) + "%"; 
	})
	.style("width", function(d) { return nearest(x(d.x1) - x(d.x0), snap) + "%"; })
	.style("height", function(d) { 
		console.log( (y(d.y1) - y(d.y0)) + " => " + nearest(y(d.y1) - y(d.y0), snap) );
		return nearest(y(d.y1) - y(d.y0), snap) + "%"; 
	})
	//.style("background-image", function(d) { return d.value ? imgUrl + d.value : ""; })
	.style("background-color", function(d) { 
		while (d.depth > 1) d = d.parent; 
		return color(d.data.name); 
	})
	.on("click", zoom);

cells
	.append("p")
	.attr("class", "label")
	.text(function(d) { return d.data.name ? d.data.name : "null"; });

var parent = d3.select(".logo")
	.datum(nodes)
	.on("click", zoom);

d3.select(window).on('resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(redraw, 250);
});

showPath(nodes.ancestors());

function zoom(d) { // http://jsfiddle.net/ramnathv/amszcymq/
	
	console.log('clicked: ' + d.data.name + ', depth: ' + d.depth);
	
	if ( d.data.name === 'Buchu') {
		console.log('activate slider...')
	}
	
	showPath(d.ancestors());
	
	currentDepth = d.depth;
	parent.datum(d.parent || nodes);
	
	x.domain([d.x0, d.x1]);
	y.domain([d.y0, d.y1]);
	
	var t = d3.transition()
    	.duration(800)
    	.ease(d3.easeCubicOut);
	
	cells
		.transition(t)
		.style("left", function(d) { return nearest(x(d.x0), snap) + "%"; })
		.style("top", function(d) { return nearest(y(d.y0), snap) + "%"; })
		.style("width", function(d) { return nearest(x(d.x1) - x(d.x0), snap) + "%"; })
		.style("height", function(d) { return nearest(y(d.y1) - y(d.y0), snap) + "%"; });
	
	cells // hide this depth and above
		.filter(function(d) { return d.ancestors(); })
		.classed("hide", function(d) { return d.children ? true : false });
	
	cells // show this depth + 1 and below
		.filter(function(d) { return d.depth > currentDepth; })
		.classed("hide", false);
	
	// if currentDepth == 3 show prev/next buttons

}

function redraw() {
	console.log("window resized");
	
	treemap(nodes); //?
	//cells
	//	.datum(nodes)
	//	.call(zoom);
}

function showPath(p) {
	
	var path = d3.select(".breadcrumb")
		.selectAll("a")
		.data(p.map(function(d) {return d;}).reverse());
	
	path
		.exit()
		.remove();
	
	path
		.enter()
		.append("a")
		.attr("href", "#")
		.html(function(d) { return d.data.name; })
		.on("click", zoom);
	
}

function nearest(x, n) {
	return n * Math.round(x / n);
}