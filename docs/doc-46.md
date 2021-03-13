## Global & Local npm Packages

In the last lecture, we added <code>nodemon</code> as a local dependency to our project.

The good thing about local dependencies is that you can share projects <strong>without the node_modules</strong> folder (where they are stored) and you can run <code>npm install</code> in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.
<p>The attached course code snippets also are shared in that way, hence you need to run <code>npm install</code> in the extracted packages to be able to run my code!</p>
<p>I showed that <code>nodemon app.js</code> would <strong>not work</strong> in the terminal or command line because we don't use local dependencies there but global packages.</p>
<p>You could install <code>nodemon</code> globally if you wanted (this is NOT&nbsp;required though - because we can just run it locally):&nbsp;<code>npm install -g nodemon</code> would do the trick. Specifically the <code>-g</code> flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.</p>