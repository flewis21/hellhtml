var nodegit = require("nodegit");
var path = require("path");
var dir = require('./dev-hellhtml_env.json')


// var repoDir = "dir.repoDir";

// This code shows working directory changes similar to git status

nodegit.Repository.open(path.resolve(__dirname))
  .then(function(repo) {
    repo.getStatus().then(function(statuses) {
      function statusToText(status) {
        var words = [];
        if (status.isNew()) { words.push("NEW"); }
        if (status.isModified()) { words.push("MODIFIED"); }
        if (status.isTypechange()) { words.push("TYPECHANGE"); }
        if (status.isRenamed()) { words.push("RENAMED"); }
        if (status.isIgnored()) { words.push("IGNORED"); }

        return words.join(" ");
      }

      statuses.forEach(function(file) {
        console.log(file.path() + " " + statusToText(file));
      });
    });
});


var repository;

// Open a repository that needs to be fetched and fast-forwarded
// nodegit.Repository.open(path.resolve(__dirname))
//  .then(function(repo) {
//    repository = repo;

//    return repository.fetchAll({
//      callbacks: {
//        credentials: function(url, userName) {
//          return nodegit.Cred.sshKeyFromAgent(username(dir.gitUsername));
//        }, 
//        certificateCheck: function() {
//          return 0;
//        }
//      }
//    });
//  })
  // Now that we're finished fetching, go ahead and merge our local branch
  // with the new one
//  .then(function() {
//    return repository.mergeBranches("master", "origin/master");
//  })
//  .done(function() {
//    console.log("Done!");
//  });
