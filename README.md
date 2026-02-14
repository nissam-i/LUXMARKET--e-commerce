# LUX MARKET - Premium E-Commerce Experience

**[Live Demo](https://luxmarket-e-commerce-twv9.vercel.app/)**

LuxMarket is a modern, high-performance e-commerce platform built with Next.js and Tailwind CSS. It features a sleek, premium design aesthetic ("Neo-Brutalism" meets "Luxury"), focusing on user experience, smooth animations, and robust functionality.

![LuxMarket Preview](https://github.com/nissam-i/LUXMARKET--e-commerce/raw/main/public/og-image.jpg) 
*(Note: Preview image will appear once added to the repo)*

## 🚀 Key Features

*   **Premium UI/UX**: Custom-designed interface with Framer Motion animations and a distinctive dark/luxury theme.
*   **Product Management**: Browse products by category, filter by price, and search functionality.
*   **Shopping Cart**: Fully functional cart with persistent state (via LocalStorage Context).
*   **User Authentication**: Secure sign-up and login flow (using NextAuth.js / custom JWT implementation).
*   **Responsive Design**: Optimized for all devices, from mobile phones to large desktop screens.
*   **Performance First**: Built on Next.js 14 App Router for server-side rendering and static optimization.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **State Management**: React Context API
*   **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/nissam-i/LUXMARKET--e-commerce.git
    cd LUXMARKET--e-commerce
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
lux-market/
├── app/                  # Next.js App Router pages
│   ├── cart/             # Shopping cart page
│   ├── shop/             # Product listing page
│   ├── login/            # Authentication pages
│   └── layout.tsx        # Root layout with providers
├── components/           # Reusable UI components
│   ├── ui/               # Generic UI elements (Buttons, Inputs)
│   └── layout/           # Layout components (Header, Footer)
├── context/              # React Context (Auth, Cart state)
├── lib/                  # Utilities and helper functions
├── public/               # Static assets (images, fonts)
└── styles/               # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Developed by [Nissam I](https://github.com/nissam-i)**
