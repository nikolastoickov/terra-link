"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "nikolastoickov/15min";
const CAL_NAMESPACE = "15min";

export default function BookingCalendar() {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#1a2a3a" },
          body: { background: "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm shadow-navy/[0.04]">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", minHeight: "630px" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
