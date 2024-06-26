"use client";

import { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  const [complaints, setComplaints] = useState([
    {
      id: "COMP001",
      complainantId: "C001",
      type: "Burglary",
      description: "Burglary in progress",
      date: "2023-05-15",
      status: "Pending",
      resolutionNotes: "",
    },
    {
      id: "COMP002",
      complainantId: "C002",
      type: "Assault",
      description: "Assault and battery incident",
      date: "2023-06-01",
      status: "Resolved",
      resolutionNotes: "Suspect apprehended and charges filed.",
    },
    {
      id: "COMP003",
      complainantId: "C003",
      type: "Vandalism",
      description: "Vandalism to property",
      date: "2023-06-10",
      status: "Unresolved",
      resolutionNotes: "",
    },
    {
      id: "COMP004",
      complainantId: "C004",
      type: "Domestic",
      description: "Domestic disturbance",
      date: "2023-06-20",
      status: "Pending",
      resolutionNotes: "",
    },
    {
      id: "COMP005",
      complainantId: "C005",
      type: "Theft",
      description: "Theft from vehicle",
      date: "2023-06-22",
      status: "Resolved",
      resolutionNotes: "Suspect identified and property returned.",
    },
  ]);
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const filteredComplaints = useMemo(() => {
    let filtered = complaints;
    if (filter === "pending") {
      filtered = filtered.filter((complaint) => complaint.status === "Pending");
    } else if (filter === "resolved") {
      filtered = filtered.filter(
        (complaint) => complaint.status === "Resolved"
      );
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((complaint) => complaint.type === typeFilter);
    }
    return filtered;
  }, [filter, typeFilter, complaints]);
  const handleStatusChange = (id, newStatus) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: newStatus } : complaint
      )
    );
  };
  const handleResolutionNotesChange = (id, newNotes) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id
          ? { ...complaint, resolutionNotes: newNotes }
          : complaint
      )
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crime Complaint Management</h1>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="pending">
                  Pending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="resolved">
                  Resolved
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="w-4 h-4 mr-2" />
                Complaint Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuRadioGroup
                value={typeFilter}
                onValueChange={setTypeFilter}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Burglary">
                  Burglary
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Assault">
                  Assault
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Vandalism">
                  Vandalism
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Domestic">
                  Domestic
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Theft">
                  Theft
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Complaint ID</TableHead>
            <TableHead>Complainant ID</TableHead>
            <TableHead>Complaint Type</TableHead>
            <TableHead>Complaint Description</TableHead>
            <TableHead>Complaint Date</TableHead>
            <TableHead>Complaint Status</TableHead>
            <TableHead>Resolution Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredComplaints
            .slice()
            .reverse()
            .map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.id}</TableCell>
                <TableCell>{complaint.complainantId}</TableCell>
                <TableCell>{complaint.type}</TableCell>
                <TableCell>{complaint.description}</TableCell>
                <TableCell>{complaint.date}</TableCell>
                <TableCell>
                  <Select
                    defaultValue={complaint.status}
                    onValueChange={(newStatus) =>
                      handleStatusChange(complaint.id, newStatus)
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                      <SelectItem value="Unresolved">Unresolved</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Textarea
                    value={complaint.resolutionNotes}
                    onChange={(e) =>
                      handleResolutionNotesChange(complaint.id, e.target.value)
                    }
                    className="w-full"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
