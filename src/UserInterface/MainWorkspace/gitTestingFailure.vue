<script setup>
import git from "isomorphic-git";
import http from "isomorphic-git/http/web";
import { configure, BFSRequire } from "browserfs";
import Buffer from "buffer";
//const fs = new LightningFS("my-app");

var fs;

// Initialize isomorphic-git with a file system
configure({ fs: "LocalStorage", options: {} }, function (err) {
  if (err) return console.log(err);
  fs = BFSRequire("fs");
  const files = git.listFiles({ fs, dir: "/", onMessage: console.log });
  console.log(files);
});

async function newProject() {
  await git.init({ fs, dir: "/tutorial", onMessage: console.log });
  console.log("done");

  // Now it should not be empty...
  fs.readdir("/", console.log);
  fs.readdir("/tutorial", console.log);
}
async function logsfogs() {
  fs.writeFile(`/tutorial/newfile.txt`, "Hello dsadsadsadsadsadsadddd", "utf8");
}
async function logsfogsadsadsa() {
  // All the files in the previous commit
  git
    .listFiles({ fs, dir: "/tutorial" })
    .catch(console.log)
    .finally((d) => console.log(Buffer.from(d).toString("utf8")));

  // All the files in the current staging area
  git
    .listFiles({ fs, dir: "/tutorial" })
    .catch(console.log)
    .finally((d) => console.log(Buffer.from(d).toString("utf8")));
}

const projectCity = {
  library: [],
  opened: null,
};
</script>

<template>
  <button @click="newProject">new project</button>
  <button @click="logsfogs">dsadsadsa</button>
  <button @click="logsfogs">dsadsadsa</button>
  <button @click="logsfogsadsadsa">dsadsadsa</button>
</template>
