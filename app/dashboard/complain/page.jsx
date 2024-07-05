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

async function submitComplaint(selectedValue, otherValue) {
  const formData = new FormData();
  const name = document.querySelector("#name").value;
  const defendantName = document.querySelector("#defendant-name").value;
  const yourAddress = document.querySelector("#your-address").value;
  const defendantAddress = document.querySelector("#defendant-address").value;
  const email = document.querySelector("#email").value;
  const date = document.querySelector("#date").value;
  const details = document.querySelector("#details").value;

  formData.append("name", name);
  formData.append("defendantName", defendantName);
  formData.append("yourAddress", yourAddress);
  formData.append("defendantAddress", defendantAddress);
  formData.append("email", email);
  formData.append("complaintType", selectedValue);
  formData.append("otherComplaintType", otherValue);
  formData.append("date", date);
  formData.append("details", details);

  if (validateFormFields()) {
    try {
      const response = await fetch("api/submit-complaint.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Complaint submitted successfully");
      } else {
        console.error("Failed to submit complaint");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }
}
export default function Page() {
  const [selectedValue, setSelectedValue] = useState(""); // Step 2: Initialize state
  const [otherValue, setOtherValue] = useState(""); // Step 2: Initialize state
  const [openSelect, setOpenSelect] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    await submitComplaint(selectedValue, otherValue); // Call the async function to submit the form
  };
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
          <form className="grid gap-4" onSubmit={handleSubmit}>
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
                <Label htmlFor="email">Complainant's Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2 col-span-1">
                <Label htmlFor="complaint-type">Complaint Type</Label>
                <Select
                  id="complaint-type"
                  onValueChange={(value) => {
                    setSelectedValue(value); // Update the selected value state
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
                {/* Displaying the selected value for demonstration */}
              </div>
              {openSelect === "case" && (
                <div className="grid gap-2">
                  <Label htmlFor="other-complaint-type">
                    Other complaint type
                  </Label>
                  <Input
                    id="other-complaint-type"
                    placeholder="Enter the complaint type"
                    onChange={(e) => setOtherValue(e.target.value)} // Step 3: Update the state on change
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
