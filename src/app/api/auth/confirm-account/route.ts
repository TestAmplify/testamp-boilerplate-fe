import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { otp, email } = await request.json();

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: otp, email }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ message: "Login successful!", data });
    } else {
      const errorData = await response.json();

      console.log(errorData);
      return NextResponse.json(
        { message: "Invalid otp!", error: errorData },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}
