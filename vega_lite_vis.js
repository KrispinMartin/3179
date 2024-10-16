var vg_1 = "scatterplot/scatterplot.vg.json";

vegaEmbed("#scatter_plot", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_2 = "resilience_factors/radarplot1.vg.json";

vegaEmbed("#radar_plot1", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }
    ).catch(console.error);

var vg_3 = "criminality_factors/radarplot2.vg.json";

vegaEmbed("#radar_plot2", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }
    ).catch(console.error);

var vg_4 = "ausmap/prisonersausmap.vg.json";

vegaEmbed("#prisoners_aus_map", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }
    ).catch(console.error);

var vg_5 = "viccrime/treemap.vg.json";

vegaEmbed("#vic_crime", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }
    ).catch(console.error);

var vg_6 = "worldmap/criminalityworldmap.vg.json";

vegaEmbed("#world_map", vg_6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }
    ).catch(console.error);
