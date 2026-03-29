"use client"
import { useState } from "react"
import { Modal, ModalContent, ModalBody, Image } from "@heroui/react"
import { ArrowDownToLine, Eye, File, FileText } from "lucide-react"
import clsx from "clsx"

import Typography from "@/components/typography"

type PDFDocument = {
  id: string
  url: string
  title: string
  size?: string
  date?: string
  description?: string
}

type SubordinateUnitModalProps = {
  isOpen: boolean
  unitName: string
  unitLogo: string
  unitShort: string
  documents: PDFDocument[]
  onClose: () => void
}

export default function SubordinateUnitModal({
  isOpen,
  unitName,
  unitShort,
  unitLogo,
  documents,
  onClose,
}: SubordinateUnitModalProps) {
  const [selectedDoc, setSelectedDoc] = useState<PDFDocument | null>(documents?.[0] ?? null)

  return (
    <Modal isOpen={isOpen} size="5xl" scrollBehavior="inside" classNames={{ body: "p-0" }} onClose={onClose}>
      <ModalContent>
        <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <Image
              src={unitLogo}
              alt={unitName}
              className="max-h-12 max-w-12 object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <Typography variant="sub2" className="leading-[1.55] line-clamp-1">
              {unitName}
            </Typography>
            <Typography variant="sub3" className="text-gray-400 mt-1.5">
              ({unitShort})
            </Typography>
          </div>
        </div>

        <ModalBody>
          <div className="flex h-[75vh] min-h-0">
            {/* ── Left: Listing PDF ── */}
            <aside className="w-72 shrink-0 border-r border-gray-100 overflow-y-auto">
              {Boolean(documents.length) ? (
                <ul className="divide-y divide-gray-50">
                  {documents.map((doc) => {
                    const isActive = selectedDoc?.id === doc.id

                    return (
                      <li key={doc.id}>
                        <button
                          onClick={() => setSelectedDoc(doc)}
                          className={clsx(`w-full text-left px-4 py-3 transition-all duration-150 flex items-start gap-3 group cursor-pointer`,{
                            "bg-primary/7 border-l-2 border-primary": isActive,
                            "hover:bg-gray-50 border-l-2 border-transparent": !isActive
                          })}
                        >
                          <FileText strokeWidth={1.5} className="h-8 w-8 object-contain" />

                          <div className="flex-1 min-w-0">
                            <Typography
                              variant="body5"
                              className={clsx('leading-[1.55] line-clamp-2 transition-colors', {
                                "text-primary": isActive,
                                "text-gray-700": !isActive
                              })}
                            >
                              {doc.title}
                            </Typography>

                            {(doc.date || doc.size) && (
                              <Typography variant="body7" className="text-gray-400 mt-0.5">
                                {[doc.date, doc.size].filter(Boolean).join(" · ")}
                              </Typography>
                            )}
                          </div>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <File strokeWidth={1.5} className="w-12 h-12 text-gray-400" />
                  <Typography variant="sub3" className="text-gray-400">
                    គ្មានឯកសារ PDF
                  </Typography>
                </div>
              )}
            </aside>

            {/* ── Right: PDF preview ── */}
            <div className="flex-1 flex flex-col min-w-0 bg-gray-50">
              {selectedDoc ? (
                <>
                  {/* Preview toolbar */}
                  <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-100 shrink-0">
                    <div className="flex-1 min-w-0 pr-4">
                      <Typography variant="sub2" className="line-clamp-1 leading-[1.55]">
                        {selectedDoc.title}
                      </Typography>

                      {selectedDoc.description && (
                        <Typography variant="body6" className="text-gray-400 mt-0.5 line-clamp-1">
                          {selectedDoc.description}
                        </Typography>
                      )}
                    </div>

                    <a
                      download
                      href={selectedDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors shrink-0"
                    >
                      <ArrowDownToLine className="text-gray-500 w-3.5 h-3.5" />
                      <Typography variant="sub3" className="text-gray-500">
                        ទាញយក
                      </Typography>
                    </a>
                  </div>

                  {/* PDF Previewer */}
                  <div className="flex-1 overflow-hidden">
                    <iframe
                      key={selectedDoc.id}
                      title={selectedDoc.title}
                      className="w-full h-full border-0"
                      src={`${selectedDoc.url}#toolbar=0&navpanes=0&scrollbar=1`}
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-300">
                  <Eye strokeWidth={1.5} className="h-16 w-16" />
                  <Typography variant="sub3" className="text-gray-400">
                    សូមជ្រើសរើសឯកសារ
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
