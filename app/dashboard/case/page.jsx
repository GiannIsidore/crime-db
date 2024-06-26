import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export default function ComplainantsPage() {
  return (
    <Drawer>
      <Card>
        <CardHeader>
          <CardTitle>Complainants</CardTitle>
          <CardDescription>
            Manage complaints and view their resolution status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Complaint ID</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Middle Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Birth date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Dummy data for complainants */}

              <TableRow>
                {" "}
                <TableCell>
                  <Badge variant="outline">12345</Badge>
                </TableCell>
                <TableCell>Giann</TableCell>
                <TableCell>Isidore</TableCell>
                <TableCell> Legaspi</TableCell>
                <TableCell> Dq9fG@example.com</TableCell>
                <TableCell>CDO</TableCell>
                <TableCell>2023-07-12</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DrawerTrigger>
                        {" "}
                        <DropdownMenuItem>View</DropdownMenuItem>
                      </DrawerTrigger>
                      <DropdownMenuItem>Close</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>50</strong> complaints
          </div>
        </CardFooter>
      </Card>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold">
            Giann Isidore Legaspi
          </DrawerTitle>
          <DrawerDescription className="text-lg">ID: 12345</DrawerDescription>
          <div className="flex gap-10">
            <div className="grid gap-2">
              <div className="text-sm font-medium text-muted-foreground">
                Address
              </div>
              <div className="text-lg font-medium">CDO</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium text-muted-foreground">
                Email
              </div>
              <div className="text-lg font-medium">sample@gmail.com</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium text-muted-foreground">
                Birth Date
              </div>
              <div className="text-lg font-medium">2023-07-12</div>
            </div>
          </div>
          <br />
          <Separator />
          <br />
          <div className="text-2xl">Complaints</div>
        </DrawerHeader>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Complain ID</TableHead>
              <TableHead>Complaint Title</TableHead>
              <TableHead>Complain</TableHead>
              <TableHead>Status</TableHead>
              <TableHead> Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {" "}
              <TableCell>
                <Badge variant="outline">12345</Badge>
              </TableCell>
              <TableCell>Murder Case</TableCell>
              <TableCell>
                {" "}
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Badge>****</Badge>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="px-4 py-8 md:px-6 lg:py-12">
                      <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
                        <div className="space-y-2 not-prose">
                          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                            The Murder
                          </h1>
                          <h2 className="underline">Murder no.1</h2>
                          <p className="text-muted-foreground">
                            Complained on June 25, 2024
                          </p>
                          <br />
                        </div>
                        <p>
                          In a world that can often feel harsh and unforgiving,
                          the simple act of kindness can have a profound impact.
                          Kindness is the glue that binds us together as a
                          society, fostering empathy, compassion, and a sense of
                          community. It is a universal language that transcends
                          barriers and brings out the best in one another.
                        </p>
                        <p>
                          When we choose to be kind, we not only brighten the
                          day of those around us, but we also nourish our own
                          well-being. Studies have shown that acts of kindness
                          release endorphins, reducing stress and promoting
                          feelings of happiness and fulfillment. By cultivating
                          a habit of kindness, we can create a ripple effect
                          that touches the lives of countless individuals,
                          making the world a little bit brighter one gesture at
                          a time.
                        </p>
                        <p>
                          In a world that can often feel divided, kindness
                          serves as a unifying force, reminding us of our shared
                          humanity. It is a powerful antidote to the negativity
                          and cynicism that can sometimes permeate our daily
                          lives. By embracing kindness, we can build bridges,
                          foster understanding, and create a more inclusive and
                          compassionate society.
                        </p>
                      </article>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>
                <Badge variant="outline">resolved</Badge>
              </TableCell>
              <TableCell>2023-07-12</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>{" "}
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Close</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
