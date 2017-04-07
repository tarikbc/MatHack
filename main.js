var i = 0;
while(i < 666){
	switch (document.getElementById('task_op').innerText){
		case "+":
			if(parseInt(document.getElementById('task_x').innerText)+parseInt(document.getElementById('task_y').innerText)==parseInt(document.getElementById('task_res').innerText)){
				$("#button_correct .icon").click();
			}else{
				$("#button_wrong .icon").click();
			}
			break;
		case "–":
			if(parseInt(document.getElementById('task_x').innerText)-parseInt(document.getElementById('task_y').innerText)==parseInt(document.getElementById('task_res').innerText)){
				$("#button_correct .icon").click();
			}else{
				$("#button_wrong .icon").click();
			}
			break;
		case "/":
			if(parseInt(document.getElementById('task_x').innerText)/parseInt(document.getElementById('task_y').innerText)==parseInt(document.getElementById('task_res').innerText)){
				$("#button_correct .icon").click();
			}else{
				$("#button_wrong .icon").click();
			}
			break;
		case "×":
			if(parseInt(document.getElementById('task_x').innerText)*parseInt(document.getElementById('task_y').innerText)==parseInt(document.getElementById('task_res').innerText)){
				$("#button_correct .icon").click();
			}else{
				$("#button_wrong .icon").click();
			}
			break;

	}
	i++;
}