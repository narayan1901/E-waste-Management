import Link from "next/link"
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Recycle className="h-6 w-6 text-green-600" />
              <span className="font-bold text-lg">EcoDispose</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Responsible e-waste management solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/request-pickup" className="text-muted-foreground hover:text-primary text-sm">
                  Request Pickup
                </Link>
              </li>
              <li>
                <Link href="/drop-off-locations" className="text-muted-foreground hover:text-primary text-sm">
                  Drop-off Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-primary text-sm">
                  E-Waste Education
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">123 Green Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-sm text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-sm text-muted-foreground">info@ecodispose.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoDispose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

