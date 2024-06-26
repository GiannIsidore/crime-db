import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Crime Statistics Dashboard</h1>
        <p className="text-muted-foreground">
          This dashboard provides an overview of the top types of crimes and
          their frequencies in the local area.
        </p>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Top Crimes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crime Type</TableHead>
                <TableHead className="text-right">Occurrences</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Theft</TableCell>
                <TableCell className="text-right">1,234</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Assault</TableCell>
                <TableCell className="text-right">789</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Burglary</TableCell>
                <TableCell className="text-right">567</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vandalism</TableCell>
                <TableCell className="text-right">345</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Drug Possession</TableCell>
                <TableCell className="text-right">234</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
