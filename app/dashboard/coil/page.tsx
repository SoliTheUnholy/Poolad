import { Card } from "@/components/ui/card";
import CoilAddForm from "@/components/coilAddForm";
import CoilTable from "@/components/coilTable";
import { availability } from "@/actions/availability";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function coilPage() {
  return (
    <Card>
      <CoilAddForm />
      <Table className="m-8 grid w-auto lg:mt-0">
        <TableHeader className="lg:hidden">
          <TableRow className="flex items-center justify-around">
            <TableHead>قطر</TableHead>
            <TableHead>نوع</TableHead>
            <TableHead>آجدار</TableHead>
            <TableHead>تولیدی</TableHead>
            <TableHead>قیمت</TableHead>
            <TableHead>حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {availability(2, [{}, {}]).then((data: any) =>
            data.map((product: any) => (
              <TableRow
                className="grid grid-cols-6 items-center"
                key={product._id}
              >
                <CoilTable
                  id={product._id.toString()}
                  diameter={product.diameter}
                  type={product.type}
                  ribbed={product.ribbed}
                  producer={product.producer}
                  price={product.price}
                ></CoilTable>
              </TableRow>
            )),
          )}
        </TableBody>
        <TableCaption>محصولات قابل سفارش</TableCaption>
      </Table>
    </Card>
  );
}
