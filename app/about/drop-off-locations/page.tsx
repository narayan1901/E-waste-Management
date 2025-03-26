import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react"

export default function DropOffLocationsPage() {
  // Sample data for drop-off locations
  const locations = [
    {
      id: 1,
      name: "EcoDispose Main Center",
      address: "123 Green Street, Eco City, EC 12345",
      phone: "(123) 456-7890",
      hours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm",
      acceptedItems: ["Computers", "Phones", "TVs", "Appliances", "Batteries"],
      distance: "0.8 miles",
    },
    {
      id: 2,
      name: "City Recycling Facility",
      address: "456 Recycle Avenue, Eco City, EC 12346",
      phone: "(123) 456-7891",
      hours: "Mon-Sat: 8am-5pm",
      acceptedItems: ["Computers", "Printers", "Batteries"],
      distance: "1.2 miles",
    },
    {
      id: 3,
      name: "Tech Store Recycling Program",
      address: "789 Tech Blvd, Eco City, EC 12347",
      phone: "(123) 456-7892",
      hours: "Mon-Sun: 10am-8pm",
      acceptedItems: ["Phones", "Tablets", "Laptops", "Accessories"],
      distance: "2.5 miles",
    },
    {
      id: 4,
      name: "Community E-Waste Center",
      address: "101 Community Lane, Eco City, EC 12348",
      phone: "(123) 456-7893",
      hours: "Wed-Sun: 9am-4pm",
      acceptedItems: ["All Electronics", "Batteries", "Light Bulbs"],
      distance: "3.1 miles",
    },
    {
      id: 5,
      name: "County Environmental Services",
      address: "202 County Road, Eco City, EC 12349",
      phone: "(123) 456-7894",
      hours: "Mon-Fri: 8am-4pm",
      acceptedItems: ["Large Appliances", "TVs", "Computers", "Hazardous Waste"],
      distance: "5.7 miles",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">E-Waste Drop-Off Locations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find convenient locations near you to drop off your electronic waste for responsible recycling.
          </p>
        </div>

        <div className="mb-8">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Find a Location Near You</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Enter your ZIP code or address" className="flex-1" />
              <Button className="bg-green-600 hover:bg-green-700">Search</Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {locations.map((location) => (
            <Card key={location.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{location.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {location.address}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {location.distance}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-sm text-muted-foreground">{location.hours}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">{location.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Accepted Items</p>
                    <div className="flex flex-wrap gap-2">
                      {location.acceptedItems.map((item, index) => (
                        <Badge key={index} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Important Information</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-green-600 text-white h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">
                1
              </div>
              <p>Some locations may have restrictions on the types or quantities of e-waste they accept.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-green-600 text-white h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">
                2
              </div>
              <p>Please remove all personal data from devices before dropping them off.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-green-600 text-white h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">
                3
              </div>
              <p>Some locations may charge fees for certain items like TVs or monitors.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-green-600 text-white h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">
                4
              </div>
              <p>For large quantities or business e-waste, please contact the location in advance.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

