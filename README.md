# LinkedIn Assignment Backend

## 🚀 Deploy Anywhere

You can deploy this backend on any free hosting platform such as **Render**, **Vercel**, or **Netlify**.

---

## 📝 Submission Checklist

- **GitHub Repo Links:**
  - Frontend: [https://github.com/Ritikshroff/Linedin-Assingment.git](https://github.com/Ritikshroff/Linedin-Assingment.git)
  - Backend: [https://github.com/Ritikshroff/linkedinbackend.git](https://github.com/Ritikshroff/linkedinbackend.git)
- **Live Demo:**  
  [https://linedin-assingment.vercel.app/](https://linedin-assingment.vercel.app/)
- **README includes:**
  - Stack used
  - Setup instructions
  - Admin/demo user logins
  - Any extra features (optional)

---

## 🛠️ Stack Used

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Tailwind CSS, Axios, React Router

---

## ⚡ Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Ritikshroff/linkedinbackend.git
   cd linkedinbackend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file with:
     ```
     PORT=3000
     MONGO_URI=your_mongodb_connection_string
     ```
4. **Run the server locally:**
   ```bash
   npm run dev
   # or
   node server.js
   ```
5. **API Base URL:**  
   `http://localhost:3000/api`

---

## 🔐 Demo/Admin Login

- **Email:** rr824566@gmail.com
- **Password:** hbhjbk

---

## 🌐 Endpoints

| Endpoint     | Description         |
| ------------ | ------------------- |
| `/api/auth`  | Auth routes         |
| `/api/posts` | Post CRUD routes    |
| `/api/users` | User profile routes |
| `/`          | Test route          |

---

## 🔗 CORS Configuration

Ensure your frontend URL is allowed in `server.js`:

```js
app.use(
  cors({
    origin: [
      "https://linedin-assingment.vercel.app", // Frontend domain
      "http://localhost:5173", // Local development
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
```

---

## 🚢 Deploying on Render

1. Go to [Render](https://render.com/)
2. Create a new Web Service
3. Connect your GitHub repo
4. Use `server.js` as the start script
5. Set environment variables: `PORT`, `MONGO_URI`
6. Click Deploy

---

## 📞 Health Check

- **Endpoint:** `GET /`
- **Response:** `Hello World!`

---

## ✨ Extra Features

- JWT-based authentication
- Protected routes
- User profile and posts
- Responsive UI

---

## 🧾 Sample .gitignore

```
node_modules
.env
```

---

## ✍️ Author

**Ritik Shroff**  
[LinkedIn](#)  
[GitHub](#)

---
