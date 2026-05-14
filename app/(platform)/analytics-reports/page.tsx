"use client";

import { Download, FileDown, Table2 } from "lucide-react";
import { AnalyticsRadarChart, DiseaseTrendChart } from "@/components/charts";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reportRows } from "@/lib/data";

export default function AnalyticsReportsPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Reporting suite"
        title="Analytics and reports"
        description="Generate patient reports, AI prediction summaries, trust analytics, outbreak intelligence, and hospital performance comparisons."
      />

      <div className="mb-6 flex flex-wrap gap-3">
        <Button><Download size={18} /> Download PDF</Button>
        <Button variant="outline"><FileDown size={18} /> Export CSV</Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Comparative Analytics Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalyticsRadarChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <DiseaseTrendChart />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Table2 size={18} /> Report Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="text-muted-foreground">
                <tr className="border-b">
                  <th className="py-3">Report</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Quality Score</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reportRows.map((row) => (
                  <tr key={row.name} className="border-b border-cyan-300/10">
                    <td className="py-4 font-semibold">{row.name}</td>
                    <td>{row.owner}</td>
                    <td>{row.status}</td>
                    <td>{row.score}%</td>
                    <td><Button variant="ghost" size="sm">Open</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
