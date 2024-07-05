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
import { useState, useEffect } from "react";
async function getComplainants() {
  const response = await fetch(
    "http://localhost/crime-db/app/api/get-complaints.php"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch complainants");
  }
  return response.json();
}

export default function ComplainantsPage() {
  const [complainants, setComplainants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getComplainants();
        // Step 4: Store the fetched data in state
        setComplainants(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);
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

                <TableHead>Email</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Birth date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complainants.map((complainant) => (
                <TableRow key={complainant.id}>
                  {" "}
                  <TableCell>
                    <Badge variant="outline">{complainant.id}</Badge>
                  </TableCell>
                  <TableCell>{complainant.name}</TableCell>
                  <TableCell> {complainant.email}</TableCell>
                  <TableCell> {complainant.complainant_address}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>50</strong> complaints
          </div>
        </CardFooter>
      </Card>
      {complainants.map((complainant) => (
        <DrawerContent key={complainant.id}>
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold">
              {complainant.name}
            </DrawerTitle>
            <DrawerDescription className="text-lg">
              ID: {complainant.id}
            </DrawerDescription>
            <div className="flex gap-10">
              <div className="grid gap-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Address
                </div>
                <div className="text-lg font-medium">
                  {" "}
                  {complainant.complainant_address}
                </div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Email
                </div>
                <div className="text-lg font-medium">{complainant.email}</div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Birth Date
                </div>
                <div className="text-lg font-medium"></div>
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
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {" "}
                <TableCell>
                  <Badge variant="outline">{complainant.complain_id}</Badge>
                </TableCell>
                <TableCell>{complainant.complaint_type}</TableCell>
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
                            <h2 className="underline">
                              case no. {complainant.complain_id}
                            </h2>
                            <p className="text-muted-foreground">
                              Complained on {complainant.date}
                            </p>
                            <br />
                          </div>
                          <p>{complainant.details}</p>
                        </article>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">resolved</Badge>
                </TableCell>
                <TableCell>{complainant.date}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      ))}
    </Drawer>
  );
}
