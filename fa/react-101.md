# React 101

Links to code demos:

- Day 2 (components): https://codesandbox.io/s/hva-demo-dag2-t23wi
- Day 3 (combining with D3): https://codesandbox.io/s/hva-demo-dag3-tnn6g
- Day 4 (states & routes): https://codesandbox.io/s/hva-demo-dag4-sc8l4
- Day 5 (common bugs & Typescript): https://codesandbox.io/s/8sfey
- Day 6 (linting & deploying): https://prettier.io + https://github.com/vijnv/react-build + see section below

## Deploying your react app

### 1. The old-school way

In your project folder, use the `npm run build` command to build your React app. The output will be by default in the 'build' folder. You can upload these files to the Oege server or your own webhosting account.

### 2. Automated way

Use a service like Vercel or Netlify to do the work for you. Every time you commit new code to your GitHub repo, they'll do the build for you automatically and host your app on their servers. Both have generous free plans, although that could changy any time of course.

When you setup a new project, you can give them access to your GitHub repo and configure your project to use the React build steps. 

### 3. The GitHub way

You can do the same within GitHub but it takes a few extra steps to set this up. On the plus side you'll have more control over the build steps and you've all your project stuff in one place.

- Create a new branch called 'gh-pages'. 
- GitHub should automatically setup a hosting service for your repo on GitHub Pages. You can verify this by going to Settings and then open the Pages tab. You should have a website now on `https://username.github.io/name-of-your-repo/`
- Now let's create the automagic build action. You can enable actions on the Actions tab in the settings of your repo.
- Setup a new empty action and copy/paste the script from: https://github.com/tanwanimohit/deploy-react-to-ghpages
- Adjust branch name in script above from 'master' to 'main'. By default your first branch should be called 'main' on GitHub, so most likely you'll have to make this change.

#### Hosting in a subfolder

If you're hosting your app in a folder, you'll need to do an extra step. The build process expects you're running your app in the root folder,  so on `example.com/` or `subdomain.example.com/`. If it's hosted on `example.com/myapp/` or `example.com/~username/myapp/` instead you'll notice that your app doesn't load. This is the case for if you're using the Oege server or GitHub Pages for example. You'll need to configure your React app and tell it in which folder your app will be running.

In your `package.json` file, add a new line in the upper section:
`"homepage": "https://example.com/myapp",` <- don't forget the comma at the end of the line!

If you're building manually, you'll need to run `npm run build` again and upload your app. If you've setup an Action on GitHub, your app will update in a minute or so automatically. You can see this on the Actions tab in your repo.

Are you using routing in your app? You'll need to tell your Router as well that you're using a subfolder.

You can change `<Router>` in your JSX to `<Router basename={process.env.PUBLIC_URL}>`. This is the way for the most popular router extension in React, if you're using a different one you'll have to look into the documentation to see how to mak this change.
