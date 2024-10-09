
# GetMeAChai - Crowdfunding Platform

This is a **Next.js** project inspired by GetMeAChai, designed to help creators receive financial support from their fans. The project integrates secure payment gateways and customizable campaign pages to allow creators to raise funds for their projects.

## Features
- Secure payment processing via Razorpay
- Customizable campaign pages for creators
- Real-time analytics for tracking contributions
- Smooth animations using **GSAP**
- Responsive design using **Tailwind CSS**

## Tools & Technologies Used
- **[Next.js](https://nextjs.org/)**: For server-side rendering and building a robust frontend.
- **[GSAP](https://greensock.com/gsap/)**: For creating smooth, high-performance animations.
- **[Tailwind CSS](https://tailwindcss.com/)**: For responsive and customizable design elements.

---

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-repository-url.git
cd your-repository-folder
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the project by modifying files in the `app/` directory. The page auto-updates as you edit.

### Environment Variables
To run this project, you will need to add the following environment variables to your `.env.local` file:

```bash
NEXT_PUBLIC_URL=http://localhost:3000
MONGODB_URI="your-mongodb-uri"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="your-nextauth-secret"
RAZORPAY_ID="your-razorpay-id"
RAZORPAY_SECRET="your-razorpay-secret"
```

---

## Learn More

To learn more about the tools used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [GSAP Documentation](https://greensock.com/docs/) - learn how to create animations with GSAP.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - explore how to build responsive designs with Tailwind.

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check out [Next.js deployment documentation](https://nextjs.org/docs/deployment).
