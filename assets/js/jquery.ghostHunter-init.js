$("#search-field").ghostHunter({
    results : "#search-results",
    onKeyUp : true,
    info_template   : "<p>Found {{amount}} posts</p>",
    result_template : "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{pubDate}}</h4>{{description}}</p></a>"
});