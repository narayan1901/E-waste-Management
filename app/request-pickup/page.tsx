import { RequestPickupForm } from "@/components/request-pickup-form"

export default function RequestPickupPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Request E-Waste Pickup</h1>
          <p className="text-muted-foreground">
            Fill out the form below to schedule a pickup for your electronic waste. Our team will contact you to confirm
            the details.
          </p>
        </div>

        <RequestPickupForm />
      </div>
    </div>
  )
}

