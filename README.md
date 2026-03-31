# 🛍️ HugyShopy - Modern E-Commerce Platform

HugyShopy is a high-performance, responsive e-commerce web application built with **Next.js**, **Tailwind CSS**, and **Firebase**. It features a real-time product catalog, robust authentication, and a seamless shopping cart experience.

## ✨ Key Features

- **🚀 Live Firestore Catalog**: Products are fetched directly from a Firebase Firestore database with animated skeleton loading states.
- **🔐 Secure Authentication**: Full Login and Signup flow using Firebase Auth (Email/Password).
- **🛒 Dynamic Shopping Cart**: 
  - Real-time quantity tracking (preventing duplicate rows).
  - Individual item subtotals.
  - Automatic total sum calculation.
- **🔥 Premium UI/UX**:
  - Sticky glassmorphism Navbar with a live cart badge.
  - Interactive "Added!" feedback on product cards.
  - Custom "Order Placed" success modal with confetti-style feedback.
  - Mobile-responsive design using Tailwind CSS.
- **Clean Codebase**: Fully modularized components and context-based state management.

---

## 🏗️ Project Architecture & Flow

### 1. Data Flow (Firestore)
The application fetches product data from a Firestore collection named `products`. 
- **Fetch**: `app/page.js` uses `getDocs` to retrieve product details.
- **Skeleton State**: While fetching, users see shimmering placeholder cards to improve perceived performance.

### 2. State Management (Context API)
- **`AuthContext`**: Manages the user's login state across the entire application.
- **`CartContext`**: Handles cart operations (Add, Remove, Clear) and persists quantity logic.

### 3. User Journey
1. **Explore**: User lands on the home page and browses products (fetched from Firebase).
2. **Interact**: User adds items to the cart. The Navbar badge updates instantly.
3. **Manage**: User reviews the cart, adjusts items, and sees the live total.
4. **Order**: User clicks "Place Order", triggering a success popup and clearing the cart state.

---

## 🛠️ Built With

- **Next.js 15+** (App Router)
- **Tailwind CSS** (Styling)
- **Firebase 11** (Auth & Firestore)
- **Lucide React / Emojis** (Icons)

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <repository-url>
cd ecommerce
npm install
```

### 2. Firebase Configuration
Ensure your `firebase/config.js` is set up with your project keys:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};
```

### 3. Firestore Setup
Create a collection named `products` in your Firestore Database with the following fields:
- `name` (string)
- `price` (number)
- `description` (string)
- `image` (string - URL)

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📂 Folder Structure

```
ecommerce/
├── app/
│   ├── Cart/         # Shopping Cart Page
│   ├── Login/        # User Login Page
│   ├── signin/       # User Signup Page
│   ├── components/   # Reusable UI Components (Navbar, Cards, etc.)
│   ├── context/      # Auth & Cart State Management
│   └── page.js       # Home Page (Product Listing)
├── firebase/
│   └── config.js     # Firebase SDK Initialization
└── public/           # Static Assets
```

---

Thank you
