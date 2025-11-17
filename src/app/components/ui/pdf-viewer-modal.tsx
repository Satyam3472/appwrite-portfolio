"use client";

import React from "react";
import { Download } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import { motion } from "motion/react";

interface PdfViewerModalProps {
  pdfUrl: string;
  fileName?: string;
  triggerText?: string;
  triggerClassName?: string;
}

export function PdfViewerModal({
  pdfUrl,
  fileName = "resume.pdf",
  triggerText = "View Resume",
  triggerClassName,
}: PdfViewerModalProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal>
      <ModalTrigger
        className={`relative overflow-hidden flex justify-center group/modal-btn px-4 py-2 md:px-6 md:py-3 rounded-lg transition-colors text-sm md:text-base text-gray-700 dark:text-gray-300 ${triggerClassName || "bg-black dark:bg-white dark:text-black text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
      >
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          {triggerText}
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
          📄
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="p-0">
          <div className="h-full w-full">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full min-h-[600px] border-0 rounded-lg"
              title="Resume PDF Viewer"
            />
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button
            onClick={handleDownload}
            className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black dark:border-white flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
