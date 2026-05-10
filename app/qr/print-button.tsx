"use client";

type PrintButtonProps = {
  qrSvg: string;
};

export function PrintButton({ qrSvg }: PrintButtonProps) {
  function printQrCode() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.position = "fixed";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";

    document.body.appendChild(iframe);

    const printWindow = iframe.contentWindow;
    const printDocument = printWindow?.document;

    if (!printWindow || !printDocument) {
      iframe.remove();
      return;
    }

    printDocument.open();
    printDocument.write(`<!doctype html>
<html>
  <head>
    <title>Untap QR Code</title>
    <style>
      @page { margin: 0; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        background: #fffaf3;
      }
      svg {
        width: 72vmin;
        max-width: 420px;
        height: auto;
      }
    </style>
  </head>
  <body>${qrSvg}</body>
</html>`);
    printDocument.close();

    printWindow.focus();
    printWindow.print();
    window.setTimeout(() => iframe.remove(), 1000);
  }

  return (
    <button
      type="button"
      onClick={printQrCode}
      className="mt-8 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90 print:hidden"
    >
      Print QR Code
    </button>
  );
}
