d3.csv("../WebScraping/CSVs/rcdb_w_years_dtformat.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Design);
        console.log(data[i].Status);
    }
});