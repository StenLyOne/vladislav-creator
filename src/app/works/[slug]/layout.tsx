import React from "react";
import VisitTracker from "../../../components/VisitTracker";
import WorkFooter from "../../../components/WorkFooter/WorkFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VisitTracker />
      {children}
      <WorkFooter />
    </>
  );
}
