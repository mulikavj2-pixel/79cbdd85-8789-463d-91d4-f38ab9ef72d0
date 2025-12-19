"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="glass-outline"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Black Coffee"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "Blog", id: "blog" },
            { name: "Media", id: "media" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155610460-110f44b8.jpg"
          logoAlt="Black Coffee Logo"
          bottomLeftText="Coffee Paradise"
          bottomRightText="hello@blackcoffee.com"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Freshly Roasted COFFEE"
          description="Experience the finest hand-picked coffee beans roasted to perfection"
          tag="Premium Quality"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155611907-wulny9d1.jpg"
          imageAlt="Freshly roasted coffee beans in a white cup"
          frameStyle="card"
          buttons={[{ text: "Shop Now", href: "#menu" }]}
          metricsLabel="Trusted by coffee lovers worldwide"
          metrics={[
            { id: "1", value: "500+", label: "Coffee Varieties" },
            { id: "2", value: "10k+", label: "Happy Customers" },
            { id: "3", value: "15", label: "Years Experience" }
          ]}
        />
      </div>
      
      <div id="categories" data-section="categories">
        <ProductCardSix
          title="TOP CATEGORIES"
          description="Explore The Recent Most Bought Drinks This Week"
          products={[
            {
              id: "1",
              name: "Hot Chocolate",
              price: "$5.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155613598-zhx11c89.jpg",
              imageAlt: "Hot Chocolate with whipped cream"
            },
            {
              id: "2",
              name: "Espresso Coffee",
              price: "$4.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155614760-iewz9f2i.jpg",
              imageAlt: "Classic Espresso in a cup"
            },
            {
              id: "3",
              name: "Mocha Coffee",
              price: "$6.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155615915-j2icvvrl.jpg",
              imageAlt: "Mocha Coffee with art"
            },
            {
              id: "4",
              name: "Lata Coffee",
              price: "$5.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155617038-fmw4h8ja.jpg",
              imageAlt: "Latte Coffee with latte art"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="milkshakes" data-section="milkshakes">
        <ProductCardSix
          title="TOP Milk Shakes"
          description="Explore The Recent Most Bought Shakes This Week"
          products={[
            {
              id: "1",
              name: "Biscoff Milkshakes",
              price: "$7.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155618123-0wagl48x.jpg",
              imageAlt: "Biscoff Milkshake"
            },
            {
              id: "2",
              name: "Salted Caramel Milkshakes",
              price: "$8.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155619081-oum3ni1u.jpg",
              imageAlt: "Salted Caramel Milkshake"
            },
            {
              id: "3",
              name: "Decadent Chocolate Milkshakes",
              price: "$8.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155620092-ni8ll2qz.jpg",
              imageAlt: "Decadent Chocolate Milkshake"
            },
            {
              id: "4",
              name: "Chocolate Milkshakes",
              price: "$7.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155621028-495ohdox.jpg",
              imageAlt: "Chocolate Milkshake"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get In Touch"
          ctaDescription="Have questions about our coffee? We'd love to hear from you. Reach out anytime."
          ctaButton={{ text: "Contact Us", href: "#contact" }}
          ctaIcon={Mail}
          faqs={[
            {
              id: "1",
              title: "Where do you source your coffee beans?",
              content: "We source our premium coffee beans from sustainable farms across Africa, South America, and Asia. Each bean is carefully selected and roasted to perfection in our facility."
            },
            {
              id: "2",
              title: "Do you offer subscription services?",
              content: "Yes! We offer monthly coffee subscriptions with freshly roasted beans delivered to your door. Choose from various blends and enjoy discounted pricing."
            },
            {
              id: "3",
              title: "What's your return policy?",
              content: "We offer a 100% satisfaction guarantee. If you're not happy with your purchase, return it within 30 days for a full refund."
            },
            {
              id: "4",
              title: "Do you have a physical location?",
              content: "Yes! Visit our flagship coffee shop located in downtown. We also offer online ordering with local delivery and shipping nationwide."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766155610460-110f44b8.jpg"
          logoText="Black Coffee"
          description="Premium coffee delivered fresh to your door. Handpicked, freshly roasted, and crafted for the perfect cup."
          copyrightText="© 2025 Black Coffee. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Mocha Coffee", href: "#menu" },
                { label: "Espresso Coffee", href: "#menu" },
                { label: "Lata Coffee", href: "#menu" },
                { label: "Milk Shakes", href: "#menu" }
              ]
            },
            {
              title: "Category",
              items: [
                { label: "Hot Beverages", href: "#menu" },
                { label: "Cold Drinks", href: "#menu" },
                { label: "Shakes", href: "#menu" },
                { label: "Seasonal", href: "#menu" }
              ]
            },
            {
              title: "Company Info",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact Us", href: "#contact" },
                { label: "Support", href: "#contact" },
                { label: "Careers", href: "#contact" }
              ]
            },
            {
              title: "Follow Us",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "YouTube", href: "https://youtube.com" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/blackcoffee", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com/blackcoffee", ariaLabel: "Facebook" },
            { icon: Youtube, href: "https://youtube.com/@blackcoffee", ariaLabel: "YouTube" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}