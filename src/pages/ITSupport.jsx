import React, { useState, useEffect } from "react";
import WindowsBar from "../components/layout/WindowsBar";
import Form from "./itsupport/Form";
import JobPage from "./itsupport/JobPage";

export default function Itsuport() {
  const [showForm, setShowForm] = useState(false);

  // 🔒 lock background scroll
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <>
      <div className="relative min-h-screen bg-gray-100">
        <JobPage onApply={() => setShowForm(true)} />

        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end items-stretch pr-[5vw] py-[5vh]">
            <Form onClose={() => setShowForm(false)} />
          </div>
        )}
      </div>

      <WindowsBar />
    </>
  );
}