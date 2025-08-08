# 🎬 BookMyMovie - Movie Ticket Booking Website (MERN Stack)

## Overview

This is a Full Stack Movie Ticket Booking Website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). 

It allows users to:

- Sign up and log in using **Clerk** authentication.
- Create and switch between multiple profiles/sessions without signing out.
- Explore available movies.
- Book tickets for movies with seat selection.
- Receive booking confirmation and reminder emails.

An **Admin Dashboard** is provided for admins to:

- Add new movies.
- Manage bookings.
- Send notifications to users.

### Background Jobs & Scheduling

We use **Inngest** to handle background tasks such as:

- Sending email notifications to all users when a new movie is added.
- Sending booking confirmation emails immediately after booking.
- Sending reminder emails a few hours before the movie start time.

---

## Features

### User Features
- Signup/Login via Clerk with multiple methods.
- Multi-session support: create and switch between multiple user profiles.
- Movie browsing with detailed information.
- Book tickets and select preferred seats.
- Receive booking confirmation and reminder emails.

### Admin Features
- Secure admin login.
- Add, edit, and delete movies.
- View and manage all bookings.
- Trigger email notifications to users.

---

## Tech Stack

| Layer              | Technology            |
|--------------------|-----------------------|
| Frontend           | React.js              |
| Backend API        | Node.js, Express.js   |
| Database           | MongoDB               |
| Authentication     | Clerk                 |
| Background Jobs    | Inngest               |
| Email Service      | (e.g., SendGrid, SES) |
| Styling            | CSS / Tailwind (optional) |

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB database (local or cloud)
- Clerk account (for authentication)
- Inngest account (for background jobs)
- Email service account (SendGrid, SES, or similar)

---

### Installation

**Clone the repo**

```bash
git clone https://github.com/yourusername/BookMyMovie.git
cd BookMyMovie
