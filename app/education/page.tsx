import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">E-Waste Education</h1>
          <p className="text-muted-foreground">
            Learn about electronic waste, its impact on the environment, and how proper recycling helps.
          </p>
        </div>

        <Tabs defaultValue="basics" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basics">E-Waste Basics</TabsTrigger>
            <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
            <TabsTrigger value="recycling">Recycling Process</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is E-Waste?</CardTitle>
                <CardDescription>Understanding electronic waste and its components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Electronic waste, or e-waste, refers to discarded electrical or electronic devices. Used electronics
                  which are destined for reuse, resale, salvage, recycling, or disposal are also considered e-waste.
                </p>
                <div className="relative h-[550px] rounded-lg overflow-hidden my-6">
                  <Image
                    src="/e-waste-basic.jpg"
                    alt="Various electronic waste items"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>Common e-waste items include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Computers, laptops, and tablets</li>
                  <li>Smartphones and other mobile devices</li>
                  <li>Televisions and monitors</li>
                  <li>Printers and scanners</li>
                  <li>Keyboards, mice, and other peripherals</li>
                  <li>Gaming consoles</li>
                  <li>Digital cameras</li>
                  <li>Small household appliances</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why is E-Waste a Problem?</CardTitle>
                <CardDescription>The growing challenge of electronic waste</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  E-waste is one of the fastest-growing waste streams globally, with millions of tons generated each
                  year. This rapid growth is driven by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Increasing consumption of electronic devices</li>
                  <li>Shorter product lifecycles and planned obsolescence</li>
                  <li>Rapid technological advancements</li>
                  <li>Decreasing prices making electronics more accessible</li>
                </ul>
                <p>
                  When improperly disposed of, e-waste can release harmful substances into the environment, including
                  lead, mercury, cadmium, and flame retardants, which can contaminate soil, water, and air, posing
                  serious health risks.
                </p>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What materials are in e-waste?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">E-waste contains a complex mix of materials, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Precious metals (gold, silver, platinum)</li>
                    <li>Base metals (copper, aluminum)</li>
                    <li>Rare earth elements</li>
                    <li>Plastics (often with flame retardants)</li>
                    <li>Glass</li>
                    <li>Hazardous materials (lead, mercury, cadmium, beryllium)</li>
                  </ul>
                  <p className="mt-4">
                    Many of these materials can be recovered and reused, which is why proper e-waste recycling is so
                    important.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much e-waste is generated globally?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    According to global estimates, approximately 50-60 million metric tons of e-waste are generated
                    worldwide each year. This amount is growing by about 2 million tons annually. Unfortunately, only
                    about 20% of this e-waste is formally recycled, with the rest ending up in landfills or being
                    informally processed in developing countries.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What happens to e-waste in landfills?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    When e-waste ends up in landfills, hazardous substances can leach into the soil and groundwater.
                    Over time, toxic elements like lead, mercury, and cadmium can contaminate the surrounding
                    environment. Additionally, valuable resources that could be recovered and reused are lost. Some
                    electronic components can take hundreds of years to decompose, contributing to long-term
                    environmental problems.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Consequences</CardTitle>
                <CardDescription>How e-waste affects our planet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Improper e-waste disposal has significant environmental consequences:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Soil Contamination:</strong> Heavy metals and chemicals leach into soil, affecting plant
                    growth and entering the food chain.
                  </li>
                  <li>
                    <strong>Water Pollution:</strong> Toxic substances can reach groundwater and surface water, harming
                    aquatic ecosystems and potentially affecting drinking water.
                  </li>
                  <li>
                    <strong>Air Pollution:</strong> Burning e-waste (often done in informal recycling) releases toxic
                    fumes and contributes to air pollution.
                  </li>
                  <li>
                    <strong>Resource Depletion:</strong> Discarding electronics wastes valuable materials that could be
                    recovered and reused.
                  </li>
                </ul>
                <div className="relative h-[550px] rounded-lg overflow-hidden my-6">
                  <Image
                    src="/environmental impact of e-waste.jpg"
                    alt="Environmental impact of e-waste"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Impacts</CardTitle>
                <CardDescription>How e-waste affects human health</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>E-waste contains numerous toxic substances that can impact human health:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Lead:</strong> Damages the nervous system, affects brain development in children.
                  </li>
                  <li>
                    <strong>Mercury:</strong> Harms the brain, kidneys, and developing fetuses.
                  </li>
                  <li>
                    <strong>Cadmium:</strong> Toxic to kidneys and can cause bone demineralization.
                  </li>
                  <li>
                    <strong>Brominated Flame Retardants:</strong> Disrupt endocrine system and may affect
                    neurodevelopment.
                  </li>
                  <li>
                    <strong>Beryllium:</strong> Can cause lung disease when dust is inhaled.
                  </li>
                </ul>
                <p className="mt-4">
                  These health risks are particularly severe for workers in informal e-waste recycling operations in
                  developing countries, where proper safety measures are often lacking. Communities near e-waste dumping
                  or processing sites also face increased exposure to these harmful substances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Climate Change Connection</CardTitle>
                <CardDescription>How e-waste contributes to climate change</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>E-waste contributes to climate change in several ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Manufacturing Impact:</strong> Producing new electronics instead of recycling existing ones
                    requires more energy and resources.
                  </li>
                  <li>
                    <strong>Refrigerants:</strong> Some appliances contain refrigerants that are powerful greenhouse
                    gases when released.
                  </li>
                  <li>
                    <strong>Landfill Emissions:</strong> E-waste in landfills can release methane as components degrade.
                  </li>
                  <li>
                    <strong>Transportation:</strong> Moving e-waste across regions or countries contributes to carbon
                    emissions.
                  </li>
                </ul>
                <p className="mt-4">
                  Proper e-waste recycling can significantly reduce these climate impacts by conserving resources and
                  reducing the need for new raw material extraction.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recycling" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The E-Waste Recycling Process</CardTitle>
                <CardDescription>How electronic waste is properly recycled</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Proper e-waste recycling involves several key steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Collection:</strong> E-waste is gathered through drop-off centers, pickup services, or
                    collection events.
                  </li>
                  <li>
                    <strong>Sorting:</strong> Items are categorized by type and condition to determine if they can be
                    refurbished or need to be recycled.
                  </li>
                  <li>
                    <strong>Data Destruction:</strong> For devices with storage capabilities, data is securely wiped or
                    storage components are physically destroyed.
                  </li>
                  <li>
                    <strong>Disassembly:</strong> Devices are manually taken apart to separate components and remove
                    hazardous materials.
                  </li>
                  <li>
                    <strong>Shredding:</strong> Remaining materials are mechanically shredded into small pieces.
                  </li>
                  <li>
                    <strong>Separation:</strong> Different materials (metals, plastics, glass) are separated using
                    various techniques like magnetic separation, eddy current separation, and optical sorting.
                  </li>
                  <li>
                    <strong>Refinement:</strong> Recovered materials are processed to meet quality standards for reuse
                    in manufacturing.
                  </li>
                </ol>
                <div className="relative h-[550px] rounded-lg overflow-hidden my-6">
                  <Image
                  src="/recycling-process.jpg"
                    // src="/placeholder.svg?height"
                    alt="E-waste recycling process"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits of Proper E-Waste Recycling</CardTitle>
                <CardDescription>Why recycling electronic waste matters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Recycling e-waste properly offers numerous benefits:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Resource Conservation:</strong> Recovers valuable materials like gold, silver, copper, and
                    rare earth elements.
                  </li>
                  <li>
                    <strong>Energy Savings:</strong> Recycling materials requires less energy than extracting and
                    processing new raw materials.
                  </li>
                  <li>
                    <strong>Pollution Prevention:</strong> Keeps hazardous materials out of landfills and the
                    environment.
                  </li>
                  <li>
                    <strong>Job Creation:</strong> The e-waste recycling industry creates green jobs in collection,
                    processing, and manufacturing.
                  </li>
                  <li>
                    <strong>Circular Economy:</strong> Supports a more sustainable economic model where materials are
                    reused rather than discarded.
                  </li>
                </ul>
                <p className="mt-4">
                  For example, recycling one million laptops saves energy equivalent to the electricity used by 3,500
                  homes in a year. And one metric ton of circuit boards can contain 40-800 times the amount of gold
                  found in ore mined from the ground.
                </p>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What can be recovered from e-waste?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">E-waste contains many valuable materials that can be recovered:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Precious metals: Gold, silver, platinum, palladium</li>
                    <li>Base metals: Copper, aluminum, iron, tin, zinc</li>
                    <li>Rare earth elements: Neodymium, dysprosium, praseodymium</li>
                    <li>Other materials: Glass, plastics, ceramics</li>
                  </ul>
                  <p className="mt-4">
                    For example, a typical mobile phone contains about 0.034g of gold, 0.35g of silver, 0.015g of
                    palladium, and 15g of copper, all of which can be recovered and reused.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How is data security handled during recycling?</AccordionTrigger>
                <AccordionContent>
                  <p>Responsible e-waste recyclers follow strict data security protocols:</p>
                  <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li>Data wiping using certified software that meets Department of Defense standards</li>
                    <li>Physical destruction of storage devices (hard drives, SSDs, memory cards)</li>
                    <li>Degaussing (demagnetizing) of magnetic storage media</li>
                    <li>Chain of custody documentation</li>
                    <li>Certificates of destruction provided to customers</li>
                  </ol>
                  <p className="mt-4">
                    Always ensure your recycler has proper certifications like R2 (Responsible Recycling) or e-Stewards,
                    which include requirements for data security.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What happens to batteries during recycling?</AccordionTrigger>
                <AccordionContent>
                  <p>Batteries require special handling during the recycling process:</p>
                  <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li>Batteries are removed from devices during disassembly</li>
                    <li>They are sorted by chemistry type (lithium-ion, nickel-cadmium, lead-acid, etc.)</li>
                    <li>Each type undergoes a specific recycling process</li>
                    <li>
                      For lithium-ion batteries (common in electronics), the process typically involves:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Mechanical shredding in a controlled environment</li>
                        <li>Separation of components (plastics, metals, electrolytes)</li>
                        <li>Recovery of valuable metals like cobalt, nickel, and lithium</li>
                      </ul>
                    </li>
                  </ol>
                  <p className="mt-4">
                    Proper battery recycling is crucial as batteries can cause fires if damaged and contain hazardous
                    materials that can harm the environment.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

