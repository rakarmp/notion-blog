# Notion Blog with Next.js 13

## Contents
- [Introduction](#-introduction)
- [Demo](#-demo)
- [Features](#-features)
- [Major Dependencies](#-major-dependencies)
- [Getting Started](#-getting-started)
- [Screenshots](#screenshots)
- [TODO](#-todo)

## 🚀 Introduction
This is a blog template that uses Notion as CMS.<br>
Upload posts in Notion, share them through your blog!<br>


## 🌟 Features
- Simple to sync Notion and blog
- Search posts by name
- Filter posts by categories
- Related posts
- Dark mode
- Responsive design
- Sitemap

## 📦 Major Package Dependencies
- [react-notion-x](https://www.npmjs.com/package/react-notion-x): Renderer for notion pages
- [notion-client](https://www.npmjs.com/package/notion-client): Unofficial Notion API which is much faster than official Notion API

## 🏁 Getting Started
1. Duplicate [this](https://melodious-frog-e88.notion.site/Blog-9fe8e2ac0db34477abc5c4a6de745744?pvs=4) notion blog template to your notion workspace. (Make your notion page public.)
 
   <img alt="duplicate template" src="./public/readme/getting-started/duplicate-template.png" style="width: 60%; margin-top:10px"/>
2. Visit your notion page with **browser**.
3. Check your database id in the url. (needed as an environment variable)
 
   <img alt="check database id" src="./public/readme/getting-started/check-database-id.png" style="width: 60%;margin-top: 10px"/>
4. Check your auth token in the cookie. (needed as an environment variable)
 
   <img alt="check auth token" src="./public/readme/getting-started/check-auth-token.png" style="width: 60%;margin-top: 10px"/>
 
5. Now you can run on local or deploy to [Vercel](https://vercel.com/dashboard) with environment variables listed [below](#environment-variables).

**Slug should be unique because it's used as url of the post page**

### Environment Variables
`NOTION_DATABASE_ID`: getting started step 3<br>
`NOTION_AUTH_TOKEN`: getting started step 4<br>
`SITE_URL`: URL of your site (http://localhost:3000 in local environment)<br>
`API_KEY`: Choose your own password for route handler

## 📝 TODO
- [ ] Light mode for code block
