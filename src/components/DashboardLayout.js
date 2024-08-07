import {
  FileChartColumnIncreasing,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  ListFilter,
  MoreVertical,
  PanelLeft,
  Search,
  Truck,
  Users2,
  Wallet,
  CircleUser,
  LogOut,
  Mail,
  Settings,
  BellDot,
} from "lucide-react";

import { Badge } from "./ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Pagination, PaginationContent, PaginationItem } from "./ui/pagination";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import { Link } from "react-router-dom";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import ActivityChart from "./chart/ActivityChart";
import OrderTable from "./table/OrderTable";
import Analysis from "./analysis/Analysis";
import NetProfit from "./chart/Users";
import RecentSales from "./recentData/RecentSales";
import CustomerFeedback from "./review/CustomerFeedback";

export default function DashboardLayout() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:pb-4 sm:pl-14">
          <Header />
          <main className="p-4 sm:px-6 sm:py-0">
            <h1 className="text-xl font-bold mb-3">Dashboard</h1>
            <div className="grid flex-1 items-start gap-4    md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <Analysis />
                </div>
                <ActivityChart />
                <OrderTable />
              </div>
              <div className="flex flex-col space-y-3">
                <NetProfit />
                <RecentSales />
                <CustomerFeedback />
              </div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
