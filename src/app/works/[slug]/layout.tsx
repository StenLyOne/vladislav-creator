import React from "react";
import VisitTracker from "../../../components/VisitTracker";

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>
        <VisitTracker />
        {children}
    </>
}
