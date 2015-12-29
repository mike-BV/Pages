$.get('json_cross_domain.php', function(data){
    var respondcompile = jQuery.parseJSON(data);
    var cp = respondcompile.fix;
    for (var index = 0; index < cp.length; index++) {
        var link = cp[index].icon;
        var alt = cp[index].title;
        document.getElementById('imgage').innerHTML +='<img src="'+link+'"'+'alt="'+alt+'"/>';
    }
});