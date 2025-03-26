import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Recycle, Truck, Users } from "lucide-react"
import Image from "next/image"
import StatsCounter from "@/components/stats-counter"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Responsible E-Waste Management for a Greener Future
              </h1>
              <p className="text-muted-foreground text-lg max-w-[600px]">
                Properly dispose of your electronic waste with our convenient collection services. Help protect the
                environment and recover valuable resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/request-pickup">
                    Request Pickup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[390px] rounded-lg overflow-hidden">
              <Image
                src="/e-waste.jpg"
                alt="E-waste recycling"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Together, we're making a difference in reducing electronic waste and protecting our environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCounter value={5420} label="Devices Recycled" icon={<Recycle />} />
            <StatsCounter value={1250} label="Pickups Completed" icon={<Truck />} />
            <StatsCounter value={3800} label="Happy Customers" icon={<Users />} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive e-waste management solutions for individuals and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Residential Pickup</CardTitle>
                <CardDescription>For individuals and households</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Schedule convenient pickup services for your home electronics, computers, and appliances.</p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href="/services/residential">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business Solutions</CardTitle>
                <CardDescription>For companies and organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Custom e-waste management programs for businesses of all sizes, including secure data destruction.
                </p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href="/services/business">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Drop-off Centers</CardTitle>
                <CardDescription>Convenient locations near you</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Find the nearest e-waste drop-off center in your area for small electronics and batteries.</p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href="/drop-off-locations">Find locations</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Recycle Your E-Waste?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Schedule a pickup today and take the first step towards responsible e-waste disposal.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/request-pickup">Schedule Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

