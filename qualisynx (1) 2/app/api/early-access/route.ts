import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    const webhookUrl =
      "https://script.google.com/macros/s/AKfycbwZzI8KU57oofxayKL3Z0aQNPsZGFnKW3a3NjproZD9O640_vc5kOkg6t8sacuDLs7M7Q/exec"

    const urlWithParams = `${webhookUrl}?email=${encodeURIComponent(email)}`

    console.log("[v0] Sending email to Google Sheets:", email)

    const response = await fetch(urlWithParams, {
      method: "GET",
      redirect: "follow",
    })

    console.log("[v0] Google Sheets response status:", response.status)

    if (!response.ok) {
      console.error("[v0] Failed to send to Google Sheets")
      return NextResponse.json({ error: "Failed to submit email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing signup:", error)
    return NextResponse.json({ error: "Failed to process signup" }, { status: 500 })
  }
}
