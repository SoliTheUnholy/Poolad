import { Card } from "@/components/ui/card";
import DrawnAddForm from "@/components/drawnAddForm";
import DrawnTable from "@/components/drawnTable";
import { availability } from "@/actions/availability";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function drawnPage() {
  return (
    <Card>
      <DrawnAddForm />
      <Table className="m-8 grid w-auto lg:mt-0">
        <TableHeader className="lg:hidden">
          <TableRow className="flex items-center justify-around">
            <TableHead>قطر</TableHead>
            <TableHead>آجدار</TableHead>
            <TableHead>قیمت</TableHead>
            <TableHead>حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {availability(3, [{}, {}]).then((data: any) =>
            data.map((product: any) => (
              <TableRow
                className="grid grid-cols-4 items-center"
                key={product._id}
              >
                <DrawnTable
                  id={product._id.toString()}
                  diameter={product.diameter}
                  ribbed={product.ribbed}
                  price={product.price}
                ></DrawnTable>
              </TableRow>
            )),
          )}
        </TableBody>
        <TableCaption>محصولات قابل سفارش</TableCaption>
      </Table>
    </Card>
  );
}
