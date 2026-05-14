"use client"

import { QrReader } from "react-qr-reader"

export default function Scanner() {
  return (
    <QrReader
      onResult={(result) => {
        if (result) {
          console.log(result.getText())
        }
      }}
    />
  )
}