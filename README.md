# 📌 Lead Management API

A **RESTful API** for managing leads efficiently, built with **Node.js, Express, and MongoDB**.  
This API allows you to **create, retrieve, update, and delete leads** with additional features like validation, duplicate prevention, and structured responses.

---

## 🚀 Features
- ➕ **Create Lead** – Add a new lead with details like name, email, phone, company, etc.  
- 📋 **Get All Leads** – Fetch a paginated list of all leads.  
- 🔍 **Get Single Lead** – Retrieve details of a specific lead by ID.  
- ✏️ **Update Lead** – Modify existing lead details.  
- ❌ **Delete Lead** – Remove a lead from the database.  
- 🛡 **Validation & Error Handling** – Proper validation messages and error responses.  
- ⚡ **Duplicate Check** – Prevents duplicate entries based on email or phone number.  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Testing Tool:** Postman  

---

## 📂 API Endpoints

### 1️⃣ Create Lead
**POST** `/api/leads`

**Request Body (JSON):**
```json
{
  "name": "Pihu Sharma",
  "email": "pihu123@example.com",
  "phone": "9876443210",
  "company": "Glam Beauty",
  "status": "New",
  "assignedTo": "Rohit Kumar",
  "source": "Website",
  "qualification": "Bachelor",
  "interestField": "Web Development",
  "state": "Maharashtra",
  "city": "Mumbai",
  "passoutYear": 2022
}
```

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "68baad641b4c04ddffb2a08c",
    "name": "Pihu Sharma",
    "email": "pihu123@example.com",
    "phone": "9876443210",
    "status": "New",
    "qualification": "Bachelor",
    "interestField": "Web Development",
    "source": "Website",
    "assignedTo": "Rohit Kumar",
    "createdAt": "2025-09-05T09:29:08.526Z",
    "updatedAt": "2025-09-05T09:30:56.141Z"
  }
}
```

---

### 2️⃣ Get All Leads
**GET** `/api/leads`

**Response (200):**
```json
{
  "success": true,
  "count": 7,
  "total": 7,
  "pagination": {
    "page": 1,
    "pages": 1
  },
  "data": [
    {
      "_id": "68bba0221d6ef3ea55279ea",
      "name": "Pihu Sharma",
      "email": "pihu123@example.com",
      "phone": "9876443210",
      "status": "New",
      "qualification": "Bachelor",
      "interestField": "Web Development",
      "source": "Website",
      "assignedTo": "Rohit Kumar"
    }
  ]
}
```

---

### 3️⃣ Get Single Lead
**GET** `/api/leads/:id`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "68baad641b4c04ddffb2a08c",
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "9876543210",
    "status": "Contacted",
    "qualification": "Bachelor",
    "interestField": "Web Development",
    "source": "Website",
    "assignedTo": "Rohit Kumar",
    "city": "Mumbai",
    "state": "Maharashtra",
    "createdAt": "2025-09-05T09:29:08.526Z",
    "updatedAt": "2025-09-05T09:30:56.141Z"
  }
}
```

---

### 4️⃣ Update Lead
**PUT** `/api/leads/:id`

**Request Body:**
```json
{
  "status": "Contacted",
  "company": "Glam Beauty Pvt Ltd"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "68baad641b4c04ddffb2a08c",
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "9876543210",
    "status": "Contacted",
    "company": "Glam Beauty Pvt Ltd"
  }
}
```

---

### 5️⃣ Delete Lead
**DELETE** `/api/leads/:id`

**Response (200):**
```json
{
  "success": true,
  "data": {}
}
```

---

## ⚡ Error Handling
- **400 Bad Request** → Validation errors (e.g., missing required fields).  
- **404 Not Found** → Lead not found.  
- **409 Conflict** → Duplicate entry (same email or phone).  
- **500 Server Error** → Internal server issues.  

---

## 📸 Postman Collection
A Postman collection with all API endpoints is included for easy testing.  
You can import it into Postman and start testing immediately.  

---

## 📝 License
This project is licensed under the **MIT License**.
