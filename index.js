var github;
var token;
var repo;

jQuery(document).ready(function(){
	$('#search_button').click(function(){
		github = new Github({
  		token: $('#token_input').val(),
  		auth: "oauth"
		});
		repo = github.getRepo($('#repoUser').val(), $('#repoName').val());
		var name = document.createElement('p');
		var description = document.createElement('p');
		var forks = document.createElement('p');

		repo.show(function(err, repo) {
			if(err){
				name.innerHTML = "Error: " + err.Error;
				document.getElementById('repo_data').appendChild(name);
			}else{
				name.innerHTML = repo.full_name;
				document.getElementById('repo_data').appendChild(name);
				description.innerHTML = repo.description;
				document.getElementById('repo_data').appendChild(description);
				forks.innerHTML = "Forks: " + repo.forks;
				document.getElementById('repo_data').appendChild(forks);
			}
		});
	});
	$('#commit_button').click(function(){
		var result = document.createElement('h');
		repo.write('master', 'datafile', $('#content').val(), 'Upload text', function(err) {
		 	if(err){
		 		result.innerHTML = "Error:" + err.Error;
		 	}else{
				result.innerHTML = "OK!";
		 	}
		});
		document.getElementById('result').appendChild(result);
		
	});
	
});
