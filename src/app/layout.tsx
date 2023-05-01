import './css/animate.css';
import './css/bootstrap.min.css';
import './css/custom-animation.css';
import './css/flaticon.css';
import './css/font-awesome-pro.css';
import './css/magnific-popup.css';
import './css/meanmenu.css';
import './css/slick.css';
import './css/spacing.css';
import './css/style.css';
import './css/swiper-bundle.css';

import { DM_Sans } from 'next/font/google';

const dmFont = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'OuiCan',
  description: 'Meta description here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmFont.className}>{children}</body>
    </html>
  );
}
