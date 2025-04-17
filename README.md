# QA Dashboard

A lightweight QA project management dashboard built with Nuxt 3, PrimeVue, Prisma, and Pinia.  
Manage team members, roles, projects, and assignments with ease.

## 🚀 Features

- ✅ Manage team members with role assignments and annual Person Days (PD)
- ✅ Define and assign roles (e.g., Test Manager, QA Engineer)
- ✅ Track projects with start/end dates and QA durations by role
- ✅ Assign team members to projects (including their role and time window)
- ✅ Real-time UI with PrimeVue DataTables and modals
- ✅ File-based SQLite database with Prisma ORM
- ✅ Clean state management via Pinia
- ✅ Future-ready with Nuxt Islands and partial hydration

---

## 📦 Stack

- [Nuxt 3](https://nuxt.com/)
- [PrimeVue](https://primevue.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite (file-based)](https://www.sqlite.org/index.html)
- [TailwindCSS](https://tailwindcss.com/)

---

## 🛠 Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up database
npx prisma generate
npx prisma migrate dev --name init
npm run seed  # seeds roles, projects, team members

# 3. Start development server
npm run dev

