# 🚀 SpaceX Launch Explorer

A modern web application that retrieves and displays real-time launch data from the **SpaceX Public API** using **HTML**, **Tailwind CSS**, and **JavaScript (Fetch API)**.  
Developed as part of the **Integrasi Aplikasi Enterprise** assignment.

---

## 📖 Project Overview

**SpaceX Launch Explorer** is a client-side web app that allows users to explore SpaceX rocket launches dynamically.  
The application displays detailed information about each mission, including mission name, launch date, success status, and a link to the YouTube launch video.

Data is fetched directly from the [SpaceX API (v4)](https://api.spacexdata.com/v4/launches) and displayed interactively on the webpage with features like search, filters, and sorting.

---

## ✨ Features Implemented

- 🔍 **Search** missions by name in real-time  
- 🗓️ **Filter** launches by year (auto-generated from API data)  
- 🚀 **Filter** by success or failed missions  
- ↕️ **Sort** launches by newest or oldest  
- 🎥 **Modal Detail View** showing mission info and embedded YouTube video  
- 💻 **Responsive UI** built with TailwindCSS and a futuristic dark theme  

---

## ⚙️ Technologies Used

- **HTML5** – Structure and layout of the webpage  
- **Tailwind CSS** – Utility-first CSS framework for modern, responsive styling  
- **JavaScript (ES6)** – Logic for fetching, filtering, sorting, and modal handling  
- **SpaceX Public API** – Primary data source for rocket launches  

---

## 📂 Project Structure

**index.html**  
Defines the main structure of the app, including the hero section, search bar, dropdown filters, dynamic card container, modal, and footer.  
Tailwind CSS is loaded via CDN, and `script.js` is linked at the bottom of the file.  

**script.js**  
Contains all JavaScript logic, including:
- Fetching data from SpaceX API  
- Generating the year filter dynamically  
- Handling search, filter, and sort interactions  
- Displaying mission cards and modal details  

**style.css** 
Holds minor custom animations, hover effects, or extra style adjustments that complement TailwindCSS.

---

## 🔁 Data Flow Overview

1. **Fetch Data:** Retrieve launch data from the SpaceX API endpoint (`/v4/launches`).  
2. **Populate Filters:** Extract unique years for the dropdown filter.  
3. **Apply Filters & Sorting:** Users can refine results by name, year, or status.  
4. **Render Cards:** Display filtered results dynamically in responsive grid layout.  
5. **Show Details:** Clicking “View Details” opens a modal with mission information and an embedded YouTube video.

---

## 🧠 Learning Outcomes

This project demonstrates the ability to:
- Retrieve and handle public API data using `fetch()` and `async/await`  
- Implement client-side data manipulation (search, filter, sort)  
- Use **TailwindCSS** for building a clean and responsive interface  
- Manage user interactions through dynamic DOM manipulation  
- Apply modular and readable JavaScript structure  

---

## 🚀 How to Run

1. Download or clone this repository  
   ```bash
   git clone https://github.com/fachrifthrhmn-ctrl/assignment1-IAE.git
2. Buka folder projectnya
   ```bash
   cd spacex-launch-explorer
3. Buka file index.html

## 📜 License

This project is created for educational purposes only.
API Source: https://api.spacexdata.com/v4/launches 

# Kontributor

Muhammad Fachri Fathurrahman - 102022580012