 $(document).ready(function(){
    var name = decodeURI(getUrlVar("name"));
    if (name == "undefined") {
    	name = "Happy!";
    } else {
    	name = "祝" + name + "童鞋 Happy!"
    }
    $("#nameSpan").html(name);
});