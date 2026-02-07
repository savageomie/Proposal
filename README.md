Apology Flow — deployment guide

This folder contains a small static site under `apology_flow/` (and the preserved `006/` folder). Use the instructions below to deploy or share the site with your girlfriend.

Before you deploy
- Replace `apology_flow/milk-and.mp4` with the final MP4 you want the site to show. If the file is missing or empty the apology page won't show the video.
- Test locally by opening `apology_flow/index.html` in your browser or by running a local static server.

Quick local test
- Double-click `apology_flow/index.html` to open in your browser. This works for basic testing but some browsers restrict local media access — use a local server for best results.
- Local server (Python 3):

  ```powershell
  cd "c:\Users\ochau\OneDrive\Desktop\Prasha_ML\apology_flow"
  python -m http.server 8000
  # then open http://localhost:8000 in your browser
  ```

Deployment options

1) Netlify (drag & drop)
- Zip the `apology_flow` folder (see `zip_deploy.ps1`) and go to https://app.netlify.com/drop to drag-and-drop the ZIP or the folder. Netlify will host it on an HTTPS URL.

2) GitHub Pages (recommended if you have a GitHub account)
- Create a new repository and push the contents of `apology_flow` as the site root, or push to `gh-pages` branch.

  Minimal commands (replace <repo-url> with your GitHub repo HTTPS URL):

  ```powershell
  cd "c:\Users\ochau\OneDrive\Desktop\Prasha_ML"
  git init
  git add apology_flow/* 006/* README.md
  git commit -m "deploy apology_flow"
  git remote add origin <repo-url>
  git push -u origin main
  ```

- Then go to your repository Settings → Pages and set source to the main branch root (or `gh-pages` branch if you used that). GitHub Pages will give you a public HTTPS URL.

3) Vercel
- Install Vercel CLI or sign in to https://vercel.com and import a GitHub repo. Vercel will automatically detect a static site and deploy it.

4) Share a ZIP directly
- Use `zip_deploy.ps1` to create `apology_flow.zip` in the repository root. Attach and send that ZIP by email or messages. The recipient can unzip and open `index.html`.

How to use `zip_deploy.ps1`
- From PowerShell run:

  ```powershell
  cd "c:\Users\ochau\OneDrive\Desktop\Prasha_ML"
  .\zip_deploy.ps1
  ```

- This will create `apology_flow.zip` in the same folder.

Notes and tips
- For best mobile playback of the MP4, ensure `milk-and.mp4` is encoded with h.264 video and AAC audio, and that `muted` and `playsinline` attributes are present (already set in the apology page).
- If you want the flow to end on the animation page (so it doesn't auto-redirect back to the letter), edit `apology_flow/love_animation.js` and remove or adjust the redirect timeout near the bottom.
- If you'd like, I can prepare a GitHub repo for you, create the commit, and show exactly how to enable Pages — I cannot push to your GitHub account without your credentials or explicit permission to use a token. If you want me to prepare the repo content and commands to copy/paste, say so and I’ll add them.

Contact me with which option you prefer and I’ll do the next step (create the ZIP, craft the exact git commands, or prepare a Netlify-ready ZIP).