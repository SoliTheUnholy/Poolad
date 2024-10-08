import { Card } from "@/components/ui/card";
import LatticeAddForm from "@/components/latticeAddForm";
import LatticeTable from "@/components/latticeTable";
import { availability } from "@/actions/availability";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function LatticePage() {
  return (
    <Card>
      <LatticeAddForm />
      <Table className="m-8 grid w-auto lg:mt-0">
        <TableHeader className="lg:hidden">
          <TableRow className="flex justify-around items-center">
            <TableHead>ارتفاع</TableHead>
            <TableHead>راس</TableHead>
            <TableHead>قائده</TableHead>
            <TableHead>قیمت</TableHead>
            <TableHead>حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {availability(1,[{},{}]).then((data:any) =>
            data.map((product: any) => (
              <TableRow
                className="grid grid-cols-5 items-center"
                key={product._id}
              >
                <LatticeTable
                  id={product._id.toString()}
                  height={product.height}
                  top={product.top}
                  bottom={product.bottom}
                  price={product.price}
                ></LatticeTable>
              </TableRow>
            )),
          )}
        </TableBody>
        <TableCaption>محصولات قابل سفارش</TableCaption>
      </Table>
    </Card>
  );
}
