import { use } from "echarts/core";
import { BarChart, LineChart, PieChart, MapChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  AriaComponent,
  GeoComponent,
  VisualMapComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
use([
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  GridComponent,
  TooltipComponent,
  AriaComponent,
  GeoComponent,
  VisualMapComponent,
  SVGRenderer,
]);
