"use client";
import { useState } from "react";
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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function Page() {
  const [openSelect, setOpenSelect] = useState("");
  console.log(openSelect);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>File a Complaint</CardTitle>
          <CardDescription>
            Please fill out the form to submit your complaint.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Complainant's Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="defendant-name">Defendant's Name</Label>
                <Input
                  id="defendant-name"
                  placeholder="Enter the defendant's name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="your-address">Complainant's Address</Label>
                <Textarea
                  id="your-address"
                  placeholder="Enter your address"
                  className="min-h-[80px]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="defendant-address">Defendant's Address</Label>
                <Textarea
                  id="defendant-address"
                  placeholder="Enter the defendant's address"
                  className="min-h-[80px]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Complainant's Email</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2 col-span-1">
                <Label htmlFor="complaint-type">Complaint Type</Label>
                <Select
                  id="complaint-type"
                  onValueChange={(value) => {
                    if (value === "other") {
                      setOpenSelect("case");
                    } else {
                      setOpenSelect("");
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select complaint type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unjust-vexation">
                      Unjust Vexation
                    </SelectItem>
                    <SelectItem value="assault">Assault</SelectItem>
                    <SelectItem value="theft">Theft</SelectItem>
                    <SelectItem value="drug">Drug</SelectItem>
                    <SelectItem value="fraud">Fraud</SelectItem>
                    <SelectItem value="criminal">Criminal</SelectItem>
                    <SelectItem value="cybercrime">Cybercrime</SelectItem>
                    <SelectItem value="damage-to-property">
                      Damage To Property
                    </SelectItem>
                    <SelectItem value="dispute">Dispute</SelectItem>

                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {openSelect === "case" && (
                <div className="grid gap-2">
                  <Label htmlFor="defendant-name">Other complaint type</Label>
                  <Input
                    id="defendant-name"
                    placeholder="Enter the complaint type"
                  />
                </div>
              )}
              <div className="grid gap-2 col-span-1">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="col-span-1">
                {" "}
                {/* This empty div acts as a spacer */}{" "}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="details">Details</Label>
              <Textarea
                id="details"
                placeholder="Describe your complaint"
                className="min-h-[120px]"
              />
            </div>
            <Button type="submit">Submit Complaint</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
