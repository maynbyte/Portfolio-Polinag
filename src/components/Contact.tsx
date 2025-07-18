import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          Let’s Work Together
        </h2>
        <p
          className="mb-10 text-gray-600 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Whether you're hiring, looking to collaborate, or just want to chat —
          feel free to reach out.
        </p>

        {/* 🔐 Uses formsubmit.co for no-backend submission */}
        <form
          action="https://formsubmit.co/joshpolinag17@gmail.com"
          method="POST"
          className="space-y-6 text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Disable CAPTCHA on formsubmit's side if already using hCaptcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Redirect after success */}
          <input
            type="hidden"
            name="_next"
            value="https://arwill-joshua.vercel.app/thanks" // Replace with your thank you page URL
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              required
            />
          </div>

          {/* hCaptcha Widget */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="250">
            <div
              className="h-captcha"
              data-sitekey="ES_f3c4f0894911447880ad70ed24af99d4"
            ></div>
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        {/* Alternative Contact Info */}
        <div
          className="mt-10 text-sm text-gray-500 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Or email me at{" "}
          <a
            href="mailto:joshpolinag17@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            joshpolinag17@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
