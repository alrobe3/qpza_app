function get_front_page_posts(page){

	//Mozilla Version
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest
	}
	//IE Version
	else if (window.ActiveXObject){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	page = encodeURIComponent(page)
	
	xhr.open("POST",  "http://qpza.com/dev/api/get_recent_posts");
	
	xhr.setRequestHeader(
		'Content-Type',
		'application/x-www-form-urlencoded; charset=UTF-8' );
	xhr.send(page);
	
	
	xhr.onreadystatechange= function(){
		if (xhr.readyState < 4){
		
		
			
			}
		if (xhr.readyState == 4){
			var page_content = xhr.responseText;
			$("#content").append(page_content);
		}
		
		return false;
	}
}
